// ==UserScript==
// @name         AOS Toolkit TEST - Read-only Lab
// @namespace    https://test.alloutofspace.com/aos-toolkit-test
// @version      0.1.0
// @description  Test server source comparison and read-only diagnostics (CZ)
// @author       AOS Toolkit
// @homepageURL  https://github.com/XPODAK/AOoS-Toolkit-Updates
// @updateURL    https://raw.githubusercontent.com/XPODAK/AOoS-Toolkit-Updates/main/test/AOS-Toolkit-Test.meta.js
// @downloadURL  https://raw.githubusercontent.com/XPODAK/AOoS-Toolkit-Updates/main/test/AOS-Toolkit-Test.user.js
// @match        https://test.alloutofspace.com/*
// @exclude      https://test.alloutofspace.com/api/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(() => {
// Static public source monitoring; downloaded text is never imported/evaluated.
function sourcePath(value,parent='/src/main.js'){
  if(typeof value!=='string'||!value||(!value.startsWith('/')&&!value.startsWith('./')&&!value.startsWith('../')))return null;
  try{const url=new URL(value,'https://alloutofspace.com'+parent);if(url.origin!=='https://alloutofspace.com'||!/^\/src\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+\.js$/.test(url.pathname)||url.pathname.split('/').some(p=>p==='.'||p==='..'))return null;return url.pathname}catch{return null}
}
function sourceText(text){return text.replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n')}
function sourceImports(text,parent){
  // Deliberately bounded lexical discovery, not an execution or a full JS parser.
  const found=new Set(),pattern=/(?:\b(?:import|export)\s+(?:[^;\"']{0,2000}?\bfrom\s*)?["']([^"'\n]+)["']|\bimport\s*\(\s*["']([^"'\n]+)["']\s*\))/g;
  for(const match of text.matchAll(pattern)){const p=sourcePath(match[1]||match[2],parent);if(p)found.add(p)}return [...found];
}
async function readPublicGameSource(path,{fetchImpl=fetch,maxBytes=1048576}={}){
  if(sourcePath(path)!==path)throw Error('Nepovolená cesta zdroje.');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{
    const r=await fetchImpl(path,{method:'GET',credentials:'omit',cache:'no-store',redirect:'error',signal:controller.signal});
    if(!r.ok||r.redirected)throw Error('Zdroj není přímo dostupný (HTTP '+r.status+').');
    const type=(r.headers.get('content-type')||'').split(';')[0].trim().toLowerCase();if(!['text/javascript','application/javascript','text/ecmascript','application/ecmascript','text/plain'].includes(type))throw Error('Odpověď není textový JavaScript.');
    if(Number(r.headers.get('content-length'))>maxBytes)throw Error('Soubor překračuje limit 1 MiB.');
    let text;
    if(r.body?.getReader){const reader=r.body.getReader(),chunks=[];let size=0;try{for(;;){const part=await reader.read();if(part.done)break;size+=part.value.byteLength;if(size>maxBytes){await reader.cancel();throw Error('Soubor překračuje limit 1 MiB.')}chunks.push(part.value)}const joined=new Uint8Array(size);let at=0;for(const c of chunks){joined.set(c,at);at+=c.length}text=new TextDecoder('utf-8',{fatal:true}).decode(joined)}finally{reader.releaseLock()}}
    else{text=await r.text();if(new TextEncoder().encode(text).byteLength>maxBytes)throw Error('Soubor překračuje limit 1 MiB.')}
    if(/^\s*(?:<!doctype\s+html|<html\b)/i.test(text))throw Error('Server vrátil HTML místo JS.');return text;
  }finally{clearTimeout(timer)}
}
function makeSourceZip(snapshot){
  if(!snapshot||!Array.isArray(snapshot.files))throw Error('Chybí snímek zdrojů.');
  const encode=s=>new TextEncoder().encode(s),crc32=bytes=>{let c=0xffffffff;for(const b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return (c^0xffffffff)>>>0};
  const entries=[],seen=new Set();for(const file of snapshot.files){if(sourcePath(file.path)!==file.path||seen.has(file.path)||typeof file.text!=='string')throw Error('Neplatný soubor snímku.');seen.add(file.path);entries.push({name:'references/game-source'+file.path,data:encode(file.text)})}
  const manifest={...snapshot,files:snapshot.files.map(({text,...meta})=>meta),normalization:'strip UTF-8 BOM, CRLF/CR to LF before SHA-256',warning:'Public source text only; partial snapshots retain explicit failures. Do not auto-accept as a compatibility baseline.'};
  entries.push({name:'source-snapshot.json',data:encode(JSON.stringify(manifest,null,2))});if(entries.length>257)throw Error('Překročen počet souborů ZIP.');
  let offset=0,total=0;const local=[],central=[];
  for(const entry of entries){const name=encode(entry.name),data=entry.data,crc=crc32(data),header=new Uint8Array(30+name.length),h=new DataView(header.buffer);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x800,true);h.setUint16(12,33,true);h.setUint32(14,crc,true);h.setUint32(18,data.length,true);h.setUint32(22,data.length,true);h.setUint16(26,name.length,true);header.set(name,30);
    const dir=new Uint8Array(46+name.length),d=new DataView(dir.buffer);d.setUint32(0,0x02014b50,true);d.setUint16(4,20,true);d.setUint16(6,20,true);d.setUint16(8,0x800,true);d.setUint16(14,33,true);d.setUint32(16,crc,true);d.setUint32(20,data.length,true);d.setUint32(24,data.length,true);d.setUint16(28,name.length,true);d.setUint32(42,offset,true);dir.set(name,46);local.push(header,data);central.push(dir);offset+=header.length+data.length;total+=data.length;if(total>22020096)throw Error('ZIP překračuje povolenou velikost.');
  }
  const centralSize=central.reduce((n,c)=>n+c.length,0),end=new Uint8Array(22),v=new DataView(end.buffer);v.setUint32(0,0x06054b50,true);v.setUint16(8,entries.length,true);v.setUint16(10,entries.length,true);v.setUint32(12,centralSize,true);v.setUint32(16,offset,true);
  const zip=new Uint8Array(offset+centralSize+22);let at=0;for(const part of [...local,...central,end]){zip.set(part,at);at+=part.length}return zip;
}
function createSourceUpdater({manifest,fetchSource,digest,loadPreferences=()=>null,savePreferences=()=>{},ask=()=>false,download=()=>{},isSafeToPrompt=()=>true,onChange=()=>{},now=()=>Date.now(),delay=ms=>new Promise(r=>setTimeout(r,ms))}){
  let prefs;try{prefs=loadPreferences()}catch{}
  prefs={autoEnabled:typeof prefs?.autoEnabled==='boolean'?prefs.autoEnabled:true,lastCheck:Number.isSafeInteger(prefs?.lastCheck)&&prefs.lastCheck>=0?prefs.lastCheck:0,prompted:typeof prefs?.prompted==='string'&&/^[a-f0-9]{64}$/.test(prefs.prompted)?prefs.prompted:''};
  const state={busy:false,error:'',progress:0,total:0,snapshot:null,autoEnabled:prefs.autoEnabled,pendingPrompt:false};let serial=0,prompting=false;
  const emit=()=>onChange(),save=()=>{try{savePreferences({...prefs})}catch{}};
  function setAuto(on){prefs.autoEnabled=state.autoEnabled=on===true;save();emit()}
  function cancel(){serial++;state.busy=false;state.snapshot=null;state.pendingPrompt=false;state.error='Kontrola zdrojů zrušena.';emit()}
  function downloadNow(){const s=state.snapshot;if(state.busy||!s?.files.length)return false;state.pendingPrompt=false;prefs.prompted=s.fingerprint;save();try{download(s);return true}catch(e){state.error='Stažení se nepodařilo: '+String(e.message||e);return false}finally{emit()}}
  function offer(){
    const s=state.snapshot;if(prompting||state.busy||!state.pendingPrompt||!s||!isSafeToPrompt())return false;
    state.pendingPrompt=false;prefs.prompted=s.fingerprint;save();prompting=true;
    try{const yes=ask(`AOS Toolkit: herní JS se liší od referencí této verze Toolkitu.\nZměněno ${s.changed.length}, nových závislostí ${s.added.length}, chyb ${s.failures.length}.\n${s.complete?'Snímek dostupných známých zdrojů je kompletní.':'Snímek je částečný; neúplnost bude uvedená v balíčku.'}\n\nStáhnout ZIP se zdrojovými JS a kontrolním manifestem?`);if(yes)return downloadNow();return false}
    catch(e){state.error='Stažení se nepodařilo: '+String(e.message||e);return false}finally{prompting=false;emit()}
  }
  async function check({automatic=false}={}){
    if(state.busy)return null;try{const fresh=loadPreferences();if(Number.isSafeInteger(fresh?.lastCheck)&&fresh.lastCheck>prefs.lastCheck)prefs.lastCheck=fresh.lastCheck;if(typeof fresh?.autoEnabled==='boolean')state.autoEnabled=prefs.autoEnabled=fresh.autoEnabled;if(typeof fresh?.prompted==='string'&&/^[a-f0-9]{64}$/.test(fresh.prompted))prefs.prompted=fresh.prompted}catch{}
    if(automatic&&(!prefs.autoEnabled||prefs.lastCheck>0&&now()-prefs.lastCheck>=0&&now()-prefs.lastCheck<86400000))return null;
    const ticket=++serial;state.busy=true;state.error='';state.snapshot=null;state.pendingPrompt=false;state.progress=0;state.total=0;prefs.lastCheck=now();save();emit();const current=()=>ticket===serial;
    try{
      const paths=Object.keys(manifest?.files||{}).sort();if(!paths.length||paths.length>256||paths.some(p=>sourcePath(p)!==p||!/^[a-f0-9]{64}$/.test(manifest.files[p])))throw Error('Neplatný manifest referencí.');
      state.total=paths.length;emit();
      const queue=[...paths],seen=new Set(queue),files=[],failures=[],optionalFailures=[],changed=[],added=[];let totalBytes=0;
      for(let i=0;i<queue.length;i++){
        if(!current())return null;state.total=queue.length;
        if(i>=256){failures.push({path:queue[i],reason:'Limit 256 zdrojů.'});continue}
        if(totalBytes>=20971520){for(const path of queue.slice(i))failures.push({path,reason:'Limit 20 MiB; zdroj nebyl načten.'});break}
        try{
          const text=await fetchSource(queue[i],Math.min(1048576,20971520-totalBytes));if(!current())return null;
          const bytes=new TextEncoder().encode(text).length;if(bytes>1048576||totalBytes+bytes>20971520)throw Error('Překročen rozpočet velikosti zdrojů.');totalBytes+=bytes;
          const hash=await digest(sourceText(text));if(!current())return null;if(!/^[a-f0-9]{64}$/.test(hash))throw Error('Neplatný SHA-256.');
          files.push({path:queue[i],sha256:hash,bytes,text});if(!manifest.files[queue[i]])added.push(queue[i]);else if(manifest.files[queue[i]]!==hash)changed.push(queue[i]);
          for(const next of sourceImports(text,queue[i]))if(!seen.has(next)){if(queue.length>=256){if(!failures.some(f=>f.path==='(imports)'))failures.push({path:'(imports)',reason:'Limit 256 zdrojů; další závislosti nebyly prověřené.'});break}seen.add(next);queue.push(next)}
        }catch(e){if(!current())return null;(manifest.optionalUnavailable?.includes(queue[i])?optionalFailures:failures).push({path:queue[i],reason:String(e.message||e)})}
        state.progress++;state.total=queue.length;emit();if(i+1<queue.length){await delay(100);if(!current())return null}
      }
      const fingerprint=await digest(JSON.stringify(files.filter(f=>changed.includes(f.path)||added.includes(f.path)).map(f=>[f.path,f.sha256]).sort(([a],[b])=>a.localeCompare(b))));if(!current())return null;
      state.snapshot={format:1,at:new Date(now()).toISOString(),algorithm:'SHA-256',complete:failures.length===0,known:paths.length,attempted:Math.min(256,queue.length),discovered:queue.length,bytes:totalBytes,changed,added,failures,optionalFailures,fingerprint,files};
      state.pendingPrompt=(changed.length>0||added.length>0)&&fingerprint!==prefs.prompted;
      if(failures.length)state.error='Některé zdroje nejsou dostupné. Chyba nebo chybějící soubor nepotvrzuje novou verzi.';return state.snapshot;
    }catch(e){if(current())state.error=String(e.message||e);return null}
    finally{if(current()){state.busy=false;emit();offer()}}
  }
  return {state,check,cancel,setAuto,offer,downloadNow};
}



const TEST_ORIGIN='https://test.alloutofspace.com';
// The game also uses a literal JS path with only its cache query interpolated.
// Recognize precisely that form without evaluating a downloaded expression.
function labSourceImports(text,parent){
 const found=new Set(sourceImports(text,parent));
 const pattern=/\bimport\s*\(\s*`([^`$\r\n]+\.js)\$\{new URL\(import\.meta\.url\)\.search\}`\s*\)/g;
 for(const m of text.matchAll(pattern)){const p=sourcePath(m[1],parent);if(p)found.add(p)}return [...found];
}
function createLabSources({manifest,fetchSource,digest,onChange=()=>{},now=()=>Date.now(),delay=ms=>new Promise(r=>setTimeout(r,ms))}){
 const state={busy:false,progress:0,total:0,error:'',snapshot:null};let serial=0;
 function cancel(){serial++;state.busy=false;state.snapshot=null;state.error='Sběr zrušen.';onChange()}
 async function run(){
  if(state.busy)return null;const ticket=++serial,current=()=>ticket===serial;
  Object.assign(state,{busy:true,progress:0,total:0,error:'',snapshot:null});onChange();
  try{
   const queue=Object.keys(manifest?.files||{}).sort();if(!queue.length||queue.length>256||queue.some(p=>sourcePath(p)!==p||!/^[a-f0-9]{64}$/.test(manifest.files[p])))throw Error('Neplatný manifest.');
   const seen=new Set(queue),files=[],failures=[],changed=[],added=[];let bytes=0;
   for(let i=0;i<queue.length;i++){
    if(!current())return null;state.total=queue.length;
    if(i>=256||bytes>=20971520){failures.push({path:queue[i],reason:'Rozpočet souborů nebo velikosti.'});continue}
    try{
     const text=await fetchSource(queue[i],Math.min(1048576,20971520-bytes));if(!current())return null;
     const size=new TextEncoder().encode(text).length;if(size>1048576||bytes+size>20971520)throw Error('Limit velikosti.');bytes+=size;
     const sha256=await digest(sourceText(text));if(!current())return null;if(!/^[a-f0-9]{64}$/.test(sha256))throw Error('Neplatný hash.');
     files.push({path:queue[i],sha256,bytes:size,text});if(!manifest.files[queue[i]])added.push(queue[i]);else if(manifest.files[queue[i]]!==sha256)changed.push(queue[i]);
     for(const next of labSourceImports(text,queue[i]))if(!seen.has(next)){if(queue.length>=256){if(!failures.some(f=>f.path==='(imports)'))failures.push({path:'(imports)',reason:'Limit 256 souborů; některé importy neověřeny.'});break}seen.add(next);queue.push(next)}
    }catch(e){if(!current())return null;failures.push({path:queue[i],reason:String(e.message||e)})}
    state.progress++;onChange();if(i+1<queue.length){await delay(100);if(!current())return null}
   }
   const snapshot={format:1,origin:TEST_ORIGIN,baseline:'production-toolkit-1.3.0',at:new Date(now()).toISOString(),algorithm:'SHA-256',complete:failures.length===0,scope:'Known /src JS and literal imports, including the native cache-query template form. Arbitrary dynamic paths and server-only code are not covered.',known:Object.keys(manifest.files).length,attempted:state.progress,discovered:queue.length,bytes,files,changed,added,failures,optionalFailures:[]};
   if(!current())return null;state.snapshot=snapshot;if(failures.length)state.error='Částečný snímek; nedostupné soubory zůstávají neověřené.';return snapshot;
  }catch(e){if(current())state.error=String(e.message||e);return null}
  finally{if(current()){state.busy=false;onChange()}}
 }
 return {state,run,cancel};
}
// Only reviewed read endpoints. No arbitrary path input and no write method.
const LAB_ENDPOINTS=['/api/config','/api/stations','/api/research','/api/units','/api/combat/ships','/api/combat/fleets','/api/combat/battles','/api/combat/construction','/api/combat/enemies'];
async function labReadApi(path,{origin=globalThis.location?.origin,fetchImpl=fetch,signal}={}){
 if(origin!==TEST_ORIGIN||!LAB_ENDPOINTS.includes(path))throw Error('Nepovolený testovací endpoint.');
 const controller=new AbortController(),abort=()=>controller.abort();if(signal?.aborted)controller.abort();else signal?.addEventListener('abort',abort,{once:true});
 const timer=setTimeout(abort,15000);
 try{
  const response=await fetchImpl(path,{method:'GET',credentials:path==='/api/config'?'omit':'same-origin',redirect:'error',cache:'no-store',signal:controller.signal});
  if(response.redirected)throw Error('Přesměrování není povoleno.');
  if(!response.ok)return {status:response.status,kind:response.status===401?'login':response.status===403?'forbidden':'http'};
  if(!(response.headers.get('content-type')||'').toLowerCase().startsWith('application/json'))throw Error('Odpověď není JSON.');
  const max=2097152;if(Number(response.headers.get('content-length'))>max)throw Error('JSON překračuje 2 MiB.');
  let text;if(response.body?.getReader){const reader=response.body.getReader(),chunks=[];let size=0;try{for(;;){const p=await reader.read();if(p.done)break;size+=p.value.byteLength;if(size>max){await reader.cancel();throw Error('JSON překračuje 2 MiB.')}chunks.push(p.value)}const b=new Uint8Array(size);let at=0;for(const p of chunks){b.set(p,at);at+=p.length}text=new TextDecoder('utf-8',{fatal:true}).decode(b)}finally{reader.releaseLock()}}
  else {text=await response.text();if(new TextEncoder().encode(text).length>max)throw Error('JSON překračuje 2 MiB.')}
  const body=JSON.parse(text);if(!body||typeof body!=='object'||body.error||body.ok===false||body.success===false)throw Error('Neplatná nebo chybová odpověď.');
  return {status:response.status,kind:'ok',summary:labApiSummary(path,body)};
 }finally{clearTimeout(timer);signal?.removeEventListener('abort',abort)}
}
function labApiSummary(path,body){
 const type=v=>v===null?'null':Array.isArray(v)?'array':typeof v;
 const shape=v=>({type:type(v),...(Array.isArray(v)?{count:v.length}:v&&typeof v==='object'?{fields:Object.keys(v).length}:{})});
 if(path==='/api/config')return {features:Object.fromEntries(['test','combat','corps','habitats'].map(k=>[k,typeof body[k]==='boolean'?body[k]:null]))};
 // No names, IDs, coordinates, inventory quantities, messages or raw replies.
 const summary={root:shape(body),collections:{}};
 for(const key of ['stations','units','ships','fleets','scouted','done','steps','labs','queue','battles','jobs','enemies','contacts'])if(Object.hasOwn(body,key))summary.collections[key]=shape(body[key]);
 return summary;
}
function createLabDiagnostics({read=labReadApi,onChange=()=>{},now=()=>Date.now(),delay=ms=>new Promise(r=>setTimeout(r,ms))}={}){
 const state={busy:false,results:[],at:null,cancelled:false};let serial=0,controller=null;
 function cancel(){serial++;controller?.abort();state.busy=false;state.cancelled=true;onChange()}
 async function run(){if(state.busy)return null;const ticket=++serial;controller=new AbortController();const signal=controller.signal;Object.assign(state,{busy:true,results:[],at:new Date(now()).toISOString(),cancelled:false});onChange();
  let combat=null;try{for(const path of LAB_ENDPOINTS){if(ticket!==serial)return null;let result;if(path.startsWith('/api/combat/')&&combat!==true)result={kind:'skipped',status:null};else try{result=await read(path,{signal});if(path==='/api/config')combat=result?.summary?.features?.combat}catch{result={kind:'unavailable',status:null}}if(ticket!==serial)return null;state.results.push({path,...result});onChange();if(path!==LAB_ENDPOINTS.at(-1))await delay(150)}return {origin:TEST_ORIGIN,at:state.at,complete:state.results.every(r=>r.kind==='ok'),results:state.results}}
  finally{if(ticket===serial){state.busy=false;onChange()}}
 }
 return {state,run,cancel};
}


const PRODUCTION_MANIFEST = {"format":1,"algorithm":"SHA-256","optionalUnavailable":["/src/combat/shipdesigns.js","/src/combat/stations.js","/src/combat/supplies.js"],"files":{"/src/alert-rules.js":"4489f3142ef9ffbd7a9d341f528d42e8148b17cefd179a95f315907de25e74e7","/src/auth.js":"346acc8cffdc104020a54039e0b6bda261836a613d5db4bc550676b6dd038df1","/src/background.js":"ddf31dde66be7e6d602a77c00c851c5d0fbcfeed4330f7dc610d476cc8d6b8a2","/src/bay.js":"c95edbe92ad5ede6839d9e4a1e07d2ffd97c33146a84bad5bda4912d3a321369","/src/baysim.js":"f25fd6ca36dabf4ac35fcc2d12a322d47a527ece3d94de0a84bd24c1b3cd1400","/src/buildings.js":"6d83ea54ff3935ddfca221d300dfe5e5e176e02d0694bf11ce8f7c5679d8cb56","/src/communal-rules.js":"f96e46d19af0042ed91d666a966d7b86026a2956e785d1bd466c2413c26f13f5","/src/community-rules.js":"15c42344bd69e4e0554d4a89f557637d578ac2118dfd9ddfda196b05cb93b6d6","/src/construct.js":"4228f04835c60995c2c79cd7080808c638e8a7ea85c74b0ee993321681128ff5","/src/contract-rules.js":"42684cd21407bb9b59478d13a96e19f9065fb5b1890013751d44ff0a6c09b2f0","/src/corp-roles.js":"9ccf5daddb0274166cd379acf67405614ea5af45a170c9acf38ce5e4e3366dff","/src/deposits.js":"6cbadc300bdb643c4634b6bdd696e3a9627da62ffc823d25d4933d2ab6a379e2","/src/devalert-messages.js":"8c7ddffadb70f41ac8995b769280ac2a4c88d6bf30f47ac16348efac8c127e99","/src/devalert-rules.js":"437973b45bfa878ec9e49a94d3d6053e331aa42312a1d13ac76b592c50570c39","/src/emoji.js":"78bafb70db3108b3fb2a57e03543dfd835becfa3a8a15b34d9a9fa08d9d6a1a9","/src/features.js":"91d7692265660ab7b14ce843d2618b0bfb409d11d67a88031dd22c8328c175ef","/src/feedback-rules.js":"e47a128286dd95f8ac42ddb18e580d274a5da96a6ce8929d3ac995057c09defa","/src/forecast.js":"fd6242ae79490e4d6e4429269cefb8fa997b8129798cf0736f1108b496f1a199","/src/format.js":"7c316e30c3243d1baf8f624198e7c8953a2468492dc575c5e96436490452a276","/src/gate.js":"0ecf4457c2253039afb62a643df5ad9d14b1b14629ebb94c13f82d29ff16f1ab","/src/globalboard-rules.js":"69a72163b1f563f7c1d3f45bb57f3799fac06d09d3ab0081a3408333ce9b3bc8","/src/grants.js":"abb201208688eeb7b0282609852c87e9be73fe7cdea6873a3039ddd8bdef2455","/src/habitats.js":"59e93b62769b8b4850bc329f3b45dc8989961b1f871ba57006fb2b79db99f4be","/src/help.js":"6eccca8f19271b3b867799b07bca804cf22b0a9729d423af7b983102942ca8a8","/src/icons.js":"9f5af7ae7ec9651d85d5df1ad0bedfba6daa1eb8df5e7a427ca756c4290cd44d","/src/idle.js":"751d59599d62ba98d5dccf31c62aac7d0af18620c41526fe49a9c0c8e053934b","/src/inventorystate.js":"499bd641dc71c18ffe45751be5b361d4d2518e266dbec7f37aadf7057bae8947","/src/items.js":"75585579e8b916b539ded5a2b0da816e23891d25b5673d7f12d9644e14e0f13a","/src/itemwiki.js":"18d7114fcdc3156b07bac7740a208a9c12a10459831d3a7dd3c0dd79d9161a32","/src/kits.js":"ac2b886ca6939ff5d84f5a59d2bddda9db12fdd6178676fc3b59913b2f48d8e3","/src/leaderboard-rules.js":"60d31ef18176c46399eac91ac15c90695db3baece20e3f69a074de9d2743d055","/src/live.js":"566314cf7bd77f49bc8f2a1f21b9b255884b1c44804ce5089e21338106e1d16a","/src/looks.js":"f8d2dd35df770680b8305cf279a3a32a303e477755aa3d879bef6b7777fd6bf9","/src/main.js":"27f38f4f1eef06e9db52cc31e3898a227ceb2e53bc102fac7559de2bef21650a","/src/market-rules.js":"03170bf3c0cec3776de0acd55f6c043d2835a6d0dbbaf5fe1503db1955367510","/src/marks.js":"6b285603ce3b33e641c458bf8f132c3a56e64034be4e46f8bfd0814f5be3b25d","/src/mechanics.js":"18a753090433a2fd50d8ff960d45bed6db54b660fd3da92736e82e7e2b3c9965","/src/mining.js":"34016131bed736af5e68721aa0cfd7fdf5fc84c206c1ab0e45c7a5d543b5d829","/src/net.js":"1d0b45560c2fe324b039fa50a17068250d9a2833ee2b0d0aee0ee54be28256a5","/src/patchnotes.js":"3c5a9d93c08b7ada9008477f07ce59e239908da95644bcca74578229d0aeb37c","/src/planner.js":"a50098863a371fb3cd9696573be6852f058b208189b214929889dce1b828d2b2","/src/prefs-schema.js":"7ab57ded5c070702c895c5effd21a5d4e9c8e99d9753d7cb102f4b8e412f7db9","/src/prefs.js":"c3306650890237a15f264094f035b95f8b1e3f6bccf111b11b44f8ad43ff76fb","/src/production.js":"03f50b648a95e26f6241b69cc5bf622e4620bd2d239181c04e754f5322da186b","/src/research.js":"2710fb3b1435aebf73825dbc470da041760e9c46ef2acd71018f5a2a71484294","/src/researchstate.js":"143e63c58a844b534236cafd34f98fef7597f20ebc40fb527415887f5e8c04c3","/src/reset-rules.js":"b35ffe3f0f47d54e6ba50d0bde8de84e76f354ea3e30d3bd1e836f0682527a24","/src/resources.js":"ac92ae81945b816c0276985e51b12b45d10af9099ebc439dcedb7c2208e17367","/src/rows.js":"92658da936fc3adb70ccb12816d6e256746b06dcf252fafff3d9086e689d75a7","/src/search.js":"0c6105bf9af5a033e48c3c86b3323ecfb224fc16ecf15da9831764f95a790b33","/src/shipdesigns.js":"1418ea0f1507cd7a156897259c8306b90162b57943236d4fcc9ef8884ff90571","/src/ships.js":"02d47a253950494a75c3f38b76ca29da13ddfb6af201ac3f157997bb2a08f952","/src/sidebar.js":"5a19daa4bb44e5aeeca025852d7bc034a22f5eb282a0a691b6fe9f5938fa9bf7","/src/slash-commands.js":"04d6a67cd926ef39703ab44da4189da89a82f7b750813799e6a2261de575d892","/src/sounds.js":"7f61a82167ab86125d4b20a9e56c28c59c5aa5f6f987a248b7610bb4eadd57c9","/src/stockflow.js":"1e01e23f85234dddf00f68ff3b4489d820d102febfa08fd1f2b924d9fa07f733","/src/structures.js":"5add41a0b6afc5ae4af8dc5eded57d735c4a5cf6ce08a2cd129b19ca68d217e1","/src/systemname-rules.js":"9ca7f2a48fe7f7794159536317400fd60702726e746d45d3768abc1e4ecfef90","/src/tutorial.js":"fa2f250f3d8279fe776e4a0e9908d2f784f5a053425fdcb738cf3c15c7fdb997","/src/ui/achievements.js":"9b6824c7921946fad9ab4e5bd2d545da692efe73dfb9d3fa9994d3094e84fbe5","/src/ui/alertsview.js":"1ff0556e381b7167d8ba00e35a89f66bca39e64a78411d80891579d9f8d2fd62","/src/ui/announcements.js":"7a051db972bbb948b2708f660615c228381d22c1d771a065e6f87c7316dc3d9c","/src/ui/assets.js":"fd1c9003b0aab3e20f1d8d72242f7be7d7a47b8b0fe1ad87b612935f4f934f40","/src/ui/baydraw.js":"123f92fd8b13cf4102ab019855545ad18b468c7b1299f236880ac9425a189ec3","/src/ui/baymodels.js":"be7e68e6b253ef23c77e8aed150c9b08883683c8462c9f09fc338601295e4ffc","/src/ui/bayview.js":"58ceaa480df3ce676a695c77a5899bec3be3f1a23d6b46b5f18c85e46f2bdbca","/src/ui/buildicons.js":"a3e1f0b37e6a6d63c8f325e2a3389ad59ca9fa0eb98191e3f90c07609a7b6081","/src/ui/buildingmenu.js":"7cad4dfb7341b1220bb5126d5e15f5961b84dd36ba9b668bd6ce98c93dfe0d35","/src/ui/comms.js":"44dc11954025db39a4e3e0eb026a758760d6dc74da087ddc6ed6e52f1d44362a","/src/ui/communal.js":"a011df41ad372d9587bd7eba496678129f306bba2661da97243e69832a4e0a7e","/src/ui/constructbay.js":"7332948a4f9f5dcfabed40f91d0368d476802444b5018f81b72ab930a2772027","/src/ui/contextmenu.js":"de50a9620190bfb3ed141ba97decafb43c78f84f2ffdcfb1a54003a63ee3e171","/src/ui/contracts.js":"95b0afc3428c74ffe8fe1e2840a9ca1258753feda02f6ed31b773d0725297cbf","/src/ui/corpchat.js":"61f59e0f770c9bff7b9541313390b04c9e1c770721f799633f7c27adca624b72","/src/ui/corpnames.js":"e8ba0086a6548d279989466991788511e75bbad274ed5ea428cb0301fa14f3cc","/src/ui/corporations.js":"3aa10ced36e573f13b21f80695bab00ccfc12850db85b00d6a6b263abdc86ca3","/src/ui/devaccess.js":"052d153fbe6e4e38cf84e559f0f06da396cb0e107e22300620977be6576a6385","/src/ui/devalert.js":"008570e16976991e0831a2535cd09a2a02a121cbc5ad435558ab040ac3a1c69a","/src/ui/devcommands.js":"aa6a7cca1e712f2a40ccefc09ccb8ab165c5d10c6bc8d2b3d585c291f0b3bf24","/src/ui/devcontracts.js":"1b43fa53cddb75bea98557c4f0990a71a5dc35b7619d18bf92a3b1ec7ec06e53","/src/ui/devnotes.js":"bd749edbdf088f4523fab0a8b4d449aa32674aa3dc9fd6d4833a49753022cfad","/src/ui/devpanel.js":"595fc4841a16791af2f3c21e986c94cb5360597fdcfeaf3a36393a95b3e68bb0","/src/ui/devplayerchart.js":"1b17d9dc8318add1c9ad9c8c23fc2624092935925ce25f68638ab04f9715e513","/src/ui/devplayers.js":"f3121866f60972ba12bfcd381d9827bfadaf35421fdc6efc8bd2f892b6da3f0c","/src/ui/devreviews.js":"30910af187d69f57df6ceee625af7dd301d4cd5315bf4279396116d59e282237","/src/ui/devserver.js":"4049ad2fc1d70642ca7bd6c65c8f150a4aaa2a6e776dc101ac9c5fc25b92c6f5","/src/ui/devstations.js":"d757f6748eb3b1646695e71161750b0d61e14911117691dfc3f2097510547833","/src/ui/devstats.js":"e74bd8d22f838d93faed9fba3d6c91011b67bd579f8b61382474996b0614eb43","/src/ui/discords.js":"28daef9679105703f84f5372ee11854bc3cfdec0f3d513d66370930c314e9678","/src/ui/dmchat.js":"f530d089a5ebf85a0bfea9091d987c2c6f3b39c0091ab5a60757e08a960cefde","/src/ui/emoji.js":"f949e14ed9802259a64ad9380ae510826df7b2d8e7705babed48d1f612db1c60","/src/ui/factory.js":"2eb9dc5b034b3af03449557bd8aafc405fbe1043f3731477054dce7318035476","/src/ui/favorites.js":"4d3a7fcb906d4f50716cbf14def2dfce6cd31fa9392dac83dc4e197960dd4ea9","/src/ui/feedback.js":"fd3b7fcb5b9ca45ddad6289efb72bbf0b4af38f739707dbc0b764b9c2fbc93d1","/src/ui/fieldbaker.js":"9c43d958097f7fa62f080dbfaedc2981f309ac32b0898109f0e5be34ef2a0876","/src/ui/fieldworker.js":"e09a3db8cadb065814ce0600a12e475b323ba0c4a9850acdca9c4c0c604b5a75","/src/ui/friends.js":"e28219e6bda5fce7d3d834e434f62d547801cc88a39dd1f0fb4a4c2e965395e4","/src/ui/galaxyfield.js":"9b0ea41869f80533455edd01aac79cf15d856a8ca23268b8a536adcbf6359d6f","/src/ui/giftform.js":"6db7b01576504ce403ffb821c8b93e8a0de604b8265c2c64082e347208f2385a","/src/ui/globalboard.js":"775d41118107bb10dbef674bb40bd1a843ec9a22db1c44bc84be48d2f12bf047","/src/ui/habitats.js":"7560f3e93d8b8b073273895debc944da69357aa10ec9fa235dae47e9bfeca0b3","/src/ui/handlepicker.js":"126084a84fbce74c46859b61c581380999ecb7dcb1257b574af8566c4b2a9ff1","/src/ui/help.js":"4d7ad7d19dfbd36b4c331b36f4048d748c6b1f3463a106b5943d2efe20fed306","/src/ui/chatimages.js":"634a94f9ccdf56822c82fe3a0fde77b6543053f90a1c583c27f67bbc226c6fe3","/src/ui/chatlog.js":"d8cad27a0c4436d4fa58573e8915111f4d6afb335a80ce1a9c44cb2fc771ea0b","/src/ui/infotip.js":"b60d328ba4a3773b413192fd427bcb2c019eaa3f7e7d3a083c8a292b608f8ffd","/src/ui/inventory.js":"79b7aad90698bb303eca97ae4c9bbfc3deab6553b12dc3a5c7b626268b134262","/src/ui/itemicons.js":"cc0fb67a79911da6ec3d5c9710f04aeb6b851919aa2a10d0203024fd2a4ed66c","/src/ui/itemmenu.js":"704e88ed91765a8a8a66e85567a69dcaffc9851bca1d2a7cca9546c053c85c33","/src/ui/itemwiki.js":"e85fe65788bb817c212246f5a37e3b86cf785b65c0a03e0fd7062acbc19aabd4","/src/ui/leaderboard.js":"4bec1dbee808de17e86201fc12bbd0265ab0c197930a4290f283c9a4860a4416","/src/ui/logistics.js":"8c1f153608a351d40c9c9c11ccae48fbabdfab7441ef2fd07a6f799da8527352","/src/ui/look.js":"9510f5d28308477afaae11e3452be51f15a1573f6e60a29f0cb041ebecc151c9","/src/ui/mapnames.js":"d8a7755a2809053bd8d31c778f2315358adae2f80d9014520fd691de28bdfa14","/src/ui/maptoggles.js":"59cd0711ef78a590ef79b34fe90f71cfa26ff6c8a291317a8a5c346b53b9c24f","/src/ui/mapui.js":"4891c8c9fe9ef7dae5b9b292308b0258e59a257be3de3597ad799dbaf02c7024","/src/ui/market.js":"aa037ce8cfe3f020f373a8c6663d8d4ac61b6d1d0a33c551765c1285fe017d9d","/src/ui/neocom.js":"5a1f275b0d99a4ce501637a9f0608c58431c11a18d7adf6d3cccff03de1aa217","/src/ui/opsmap.js":"acb2d2b1c2ed76146afd9bc97c6e12e25c825dd84adb8f996f265b30537ec9a0","/src/ui/pagesnap.js":"6881105d39b7217c3d150e70118ad3f627dbb0a9387b4033b7f71dd47ce2e1ca","/src/ui/patchnotes.js":"165c9d42b30b93faa6ebd7814411cfdf070edc0c8dc5333433b5386ef5658a7d","/src/ui/pctinput.js":"b4ecc852c9ce8d1e1d209abe9bf0c13a09bca6f05539246f7cd5fa9763041e88","/src/ui/pilotmenu.js":"1b2a7a0bd74dbf00b5082519ee68ce96af708d681d45712d880ffb65893a8965","/src/ui/places.js":"6c035481a556ab5733959f3c2cbfa94d74e9c84cb19e9db7e6bbe3b2a1f2d7ce","/src/ui/planner.js":"e25625459cf7516404c7ffa88d7eea6c2f7512bbe13cb4b3b74d53e2316228b4","/src/ui/pollcard.js":"ced812ca7a900f4894c307805976e13374aa8062883ded79f6875cb0691375ba","/src/ui/polls.js":"468cbe87a6703e568008a663d4d64d8c5ecb93c8a91963c2906ad5433f9bb776","/src/ui/pricechart.js":"a6466ace75cde4ad949ef8f56770fc99a9f1409a9c1cb4f6d16c2d95b7dbe8f5","/src/ui/production.js":"70207e948f6c7ff18c319d6d813f60bca7cebba0705344cd12122fb67448f224","/src/ui/research.js":"11be11977cfb6a28e0db51c26720e714668b70ece510b450e92175872f4f6348","/src/ui/resolve.js":"f459c165fa466d39c9ddc024d503e2a2cfd3f6550dcac9b3737eefbd218a73da","/src/ui/reviews.js":"d6123b0ddd482a1b3d96aa9af96a7c20d0f29286f3ce50c272e1d5e15669b247","/src/ui/screenshot.js":"10c7b1d219f13d4295438995acc0572ec7469c792b254a87965580e0b14ad447","/src/ui/search.js":"f3432e06b7b3fad199c411e31b0f5faaa5782133c4d2aa9aadbde287baa28313","/src/ui/searchsources.js":"971ae7a4fd6cb6f3ceb11f24a5dfd4b895e4206926d1a1a5ba5c9cd48edc7e0d","/src/ui/settings.js":"bf9fd26ffcc930beac65221b3d1c4db222ab95a4743286103a28498bc43b5b24","/src/ui/shipbay.js":"4606af1c1f34e7e72cec1ca3489f6e3d38da7f4178fdee4671b36431809012b6","/src/ui/sidebarstyle.js":"4d9e955e25cb91a82eec21795ebe95f292130fb38c0205a293a819eda92b4730","/src/ui/slash.js":"fcd60b456aa9f5b727a34a2fec4d669a4131587aae2205a0703c67f7eb6285e5","/src/ui/splitsave.js":"e0e772136a6765bea8d855cab1455d40c291c7ea684ff1605ebe308c65d3ad46","/src/ui/starmap.js":"3b22f129751054081be34b4093af146e266ef55a073521dbbd3efc821913596b","/src/ui/stationart.js":"6f5ef763683ffe714da176e8ca690ce780e6afc3a93fa330949a73cbcbe80974","/src/ui/stationview.js":"c2acee2e55c300ab3ac18cdcf180f82f36a6a180587596c9214a8c69f7cec46e","/src/ui/structurename.js":"6cedaccf0f589b39ff869a0e94be42c43ca219e3e12f0997b98d3e27e8bb3c86","/src/ui/superclusters.js":"aa8e336ef6fdb55d0c26007324b6035079929b004ce0f8455ff5a22b5e3c65d4","/src/ui/support.js":"088f64030c9d9d96542373e6f6c422fef4f036209235a9eb3c53aaee38fd05d8","/src/ui/sysart.js":"df31a0b9879f13cb13659b02677559509cec3ad7d145ad8480a82ba113a023da","/src/ui/sysartworker.js":"23f751afd1e4a9aba3bcfa8083730c1ed25dd0dab2b1b84de9eea9e7bb231d0d","/src/ui/sysglyphs.js":"dc9edadaa23168790d613cfef0f7b9d4d656eaea1d3712d34341122fe3b0eecb","/src/ui/syssprites.js":"91a34863273f757b3931070d93f34cca756ef1c49cdb657572b38a9396b45471","/src/ui/systemview.js":"29284c7804e4faff22d9d2d113ddedb49c5f931ce743f1503a7813851f454330","/src/ui/tutorial.js":"e39f1f106a0e59b72920a48573e748d108387d716e13f538c7227ef5f3338711","/src/ui/updater.js":"68ace84ad1e0f97fea71d987b30b6b1eedc38d353f30ede560d17ef58b466888","/src/ui/wallet.js":"85c53915ee132b381ec017d588291e11d62df3450e418f315d27bbb438ffbd00","/src/ui/whatsnew.js":"61e64899ceae9c8b9053eb0451a4df83f846c6802adb1e1e1aba74f27ecfc6b4","/src/ui/windows.js":"5b8eac2f431e23f4d43a159c527584895e739fc7ce287a5731d9dffb192f3e08","/src/ui/writingboxes.js":"b3751e6fcc792cd58ad427153e878b80287d1fb508bb5b718ff22150cdb0b695","/src/units.js":"b18e334d2fe447cb35333fcf1f4566ceee9a705f9ebda3fe1e615bb7c1b3e30a","/src/unitstate.js":"34f6446afbacb58c99595611f49f3600a956c39f5d48b076b56211470c9f3440","/src/wallet-style.js":"546e86818616cbe88cf8ea699cb0693cbce679f65ca6bc0866d185958012bc02","/src/world/mapgen.js":"8e667944c3d4d864755803be12e87ff735b381d0c9b46518c3c10d891c056a03","/src/world/rng.js":"fc5da23849d2dd0bacf85fd3aa95eb20fc7aef36668fc655d7cfc2484f8edf52","/src/world/systemgen.js":"b1de938f61487c1e98566c7fd92f0d9705a951fdfa09383a7ab5b49e2229e467"}};
(() => {
 'use strict';
 if(location.origin!==TEST_ORIGIN||window.top!==window||window.__aosTestLabRunning)return;
 window.__aosTestLabRunning=true;
 const host=document.createElement('div');host.id='aos-test-lab';document.documentElement.append(host);const root=host.attachShadow({mode:'open'});
 root.innerHTML=`<style>
 :host{all:initial;font:13px system-ui;color:#d5eef2;color-scheme:dark}*{box-sizing:border-box}button{font:inherit;background:#174d5b;color:#e0f7fa;border:1px solid #397f8f;border-radius:5px;padding:7px 10px;cursor:pointer}button:hover{background:#216777}button:focus-visible{outline:2px solid #75dfec;outline-offset:2px}button:disabled{cursor:default;background:#203b49;color:#b8d8df;border-color:#486b79}#launch{position:fixed;right:22px;bottom:85px;z-index:2147483646;font-weight:700}#panel{position:fixed;z-index:2147483647;right:22px;top:65px;width:min(650px,94vw);height:min(740px,85vh);min-width:min(330px,94vw);min-height:180px;resize:both;overflow:auto;background:#102733;border:1px solid #397f8f;border-radius:9px;box-shadow:0 9px 32px #0009}#panel[hidden]{display:none}header{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px;background:#173c49;position:sticky;top:0;z-index:1}header span{display:flex;gap:5px}header button{width:30px;height:30px;padding:0;display:grid;place-items:center}main{padding:13px}section{border-top:1px solid #315765;padding:12px 0}h2{font-size:15px;margin:0 0 8px}p{line-height:1.5;margin:8px 0}small{color:#a1c8d1}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#0b1e27;padding:10px;border-radius:4px;font:12px ui-monospace,monospace}.actions{display:flex;flex-wrap:wrap;gap:6px}.status{color:#9ce2e9}#panel.minimized{height:auto!important;min-height:0;resize:none}#panel.minimized main{display:none}
 </style><button id="launch">AOS TEST</button><article id="panel" hidden aria-label="AOS Toolkit TEST"><header><b>AOS Toolkit TEST · 0.1.0</b><span><button id="minimize" aria-label="Minimalizovat">−</button><button id="close" aria-label="Zavřít">×</button></span></header><main>
 <p><b>Testovací laboratoř · pouze čtení</b><br><small>test.alloutofspace.com · samostatný kanál · žádné automatické akce</small></p>
 <section><h2>Veřejné zdroje a rozdíly</h2><p>Porovnání s ${Object.keys(PRODUCTION_MANIFEST.files).length} referencemi produkčního Toolkitu 1.3.0. Dohledá doslovné JS importy včetně combat vstupu s cache query. Zdrojový text se nespouští ani nepřijímá jako nová pravidla.</p><div class="actions"><button id="sources">Načíst testovací JS</button><button id="stop-sources" disabled>Zrušit sběr</button><button id="zip" disabled>Stáhnout JS ZIP</button></div><p id="source-status" class="status" role="status">Sběr zatím nebyl spuštěn.</p><pre id="source-details" hidden></pre></section>
 <section><h2>Konfigurace a diagnostika</h2><p>Ručně přečte konfiguraci, tři stávající přehledy účtu a při potvrzeném zapnutí combatu pět combat přehledů (lodě, flotily, bitvy, stavba, nepřátelé). Výsledek obsahuje příznaky funkcí, HTTP stav, typy a počty záznamů. Jména, ID, zásoby ani jiné hodnoty účtu se neukládají. Pro přehledy účtu se přihlas běžným způsobem do hry.</p><div class="actions"><button id="diagnostics">Přečíst diagnostiku</button><button id="stop-diagnostics" disabled>Zrušit čtení</button><button id="report" disabled>Stáhnout diagnostický JSON</button></div><p id="diagnostic-status" class="status" role="status">Žádné požadavky zatím neproběhly.</p><pre id="diagnostic-details" hidden></pre></section>
 <p><small>Limity zdrojů: 256 souborů, 1 MiB na JS, 20 MiB celkem. Neznámé dynamické cesty ani serverový kód nejsou pokryté. ZIP obsahuje veřejné JS; diagnostický JSON obsahuje pouze souhrn. Nic se neodesílá na GitHub.</small></p>
 </main></article>`;
 const el=id=>root.getElementById(id),panel=el('panel');let report=null,expandedHeight='',reportGeneration=0;
 const digest=async text=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))].map(b=>b.toString(16).padStart(2,'0')).join('');
 function download(name,blob){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),6000)}
 const sources=createLabSources({manifest:PRODUCTION_MANIFEST,fetchSource:(path,maxBytes)=>{if(location.origin!==TEST_ORIGIN)throw Error('Nesprávný server.');return readPublicGameSource(path,{maxBytes})},digest,onChange:refresh});
 const diagnostics=createLabDiagnostics({onChange:refresh});
 function refresh(){
  const s=sources.state,d=diagnostics.state,snap=s.snapshot,busy=s.busy||d.busy;
  el('sources').disabled=busy;el('diagnostics').disabled=busy;el('stop-sources').disabled=!s.busy;el('stop-diagnostics').disabled=!d.busy;
  el('zip').disabled=s.busy||!snap?.files.length;el('report').disabled=busy||!report;
  el('source-status').textContent=s.busy?`Načítám ${s.progress}/${s.total}…`:s.error||(snap?`${snap.complete?'Známé zdroje načteny':'Částečný snímek'} · ${snap.files.length} JS · ${snap.changed.length} změněných · ${snap.added.length} nových. ${snap.at}`:'Sběr zatím nebyl spuštěn.');
  if(!s.busy){el('source-details').hidden=!snap;el('source-details').textContent=snap?['Proti produkční referenci Toolkitu 1.3.0','Změněné:',...snap.changed,'Nové:',...snap.added,'Neověřené:',...snap.failures.map(f=>f.path+' · '+f.reason)].join('\n'):''}
  el('diagnostic-status').textContent=d.busy?`Čtení ${d.results.length}/${LAB_ENDPOINTS.length}…`:d.cancelled?'Zrušeno; dříve načtené řádky jsou jen částečné.':d.at?`Podklady ${d.at} · ${d.results.filter(r=>r.kind==='ok').length}/${LAB_ENDPOINTS.length} dostupných. 401 znamená potřebu přihlášení; 403 omezený přístup; skipped znamená nepotvrzené zapnutí combatu.`:'Žádné požadavky zatím neproběhly.';
  el('diagnostic-details').hidden=!d.results.length;el('diagnostic-details').textContent=d.results.length?JSON.stringify(d.results,null,2):'';
 }
 el('launch').addEventListener('click',()=>{panel.hidden=!panel.hidden});
 el('close').addEventListener('click',()=>{sources.cancel();diagnostics.cancel();reportGeneration++;report=null;panel.hidden=true;refresh()});
 el('minimize').addEventListener('click',()=>{const min=panel.classList.contains('minimized');if(!min)expandedHeight=panel.style.height||panel.getBoundingClientRect().height+'px';panel.classList.toggle('minimized',!min);if(min)panel.style.height=expandedHeight;el('minimize').textContent=min?'−':'□';el('minimize').setAttribute('aria-label',min?'Minimalizovat':'Obnovit')});
 el('sources').addEventListener('click',()=>{if(!diagnostics.state.busy)void sources.run()});
 el('stop-sources').addEventListener('click',()=>sources.cancel());
 el('zip').addEventListener('click',()=>{const snap=sources.state.snapshot;if(sources.state.busy||!snap?.files.length)return;download('aos-test-sources-'+snap.at.replace(/[:.]/g,'-')+'.zip',new Blob([makeSourceZip(snap)],{type:'application/zip'}))});
 el('diagnostics').addEventListener('click',async()=>{if(sources.state.busy||diagnostics.state.busy)return;const ticket=++reportGeneration;report=null;const next=await diagnostics.run();if(ticket===reportGeneration){report=next;refresh()}});
 el('stop-diagnostics').addEventListener('click',()=>{diagnostics.cancel();reportGeneration++;report=null;refresh()});
 el('report').addEventListener('click',()=>{if(!report||sources.state.busy||diagnostics.state.busy)return;download('aos-test-diagnostics-'+report.at.replace(/[:.]/g,'-')+'.json',new Blob([JSON.stringify({toolkit:'AOS Toolkit TEST',version:'0.1.0',...report},null,2)],{type:'application/json'}))});
})();

})();
