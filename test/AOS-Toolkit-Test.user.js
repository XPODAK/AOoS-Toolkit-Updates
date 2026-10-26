// ==UserScript==
// @name         AOS Toolkit TEST - Read-only Lab
// @namespace    https://test.alloutofspace.com/aos-toolkit-test
// @version      0.2.0
// @description  Full production toolkit port for the test server (CZ)
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
  'use strict';
  if (location.origin !== 'https://test.alloutofspace.com' || window.top !== window || window.__aosToolkitTestRunning) return;
  window.__aosToolkitTestRunning = true;
  // GAME is embedded at build time. Does not fetch or send player data elsewhere.
  const GAME = {"profile":"test","version":"test-2026-10-26","items":{"iron-ore":{"n":"Iron Ore","c":"raw","t":1,"s":100},"copper-ore":{"n":"Copper Ore","c":"raw","t":1,"s":100},"carbon":{"n":"Carbon Rock","c":"raw","t":1,"s":100},"silicon":{"n":"Silicon Ore","c":"raw","t":1,"s":100},"aluminum-ore":{"n":"Aluminum Ore","c":"raw","t":1,"s":100},"hydrogen-ice":{"n":"Hydrogen Ice","c":"raw","t":1,"s":100},"oxygen-ice":{"n":"Oxygen Ice","c":"raw","t":1,"s":100},"nickel-ore":{"n":"Nickel Ore","c":"raw","t":2,"s":50},"titanium-ore":{"n":"Titanium Ore","c":"raw","t":2,"s":50},"magnesium-ore":{"n":"Magnesium Ore","c":"raw","t":2,"s":50},"chromium-ore":{"n":"Chromium Ore","c":"raw","t":2,"s":50},"tin-ore":{"n":"Tin Ore","c":"raw","t":2,"s":50},"zinc-ore":{"n":"Zinc Ore","c":"raw","t":2,"s":50},"lead-ore":{"n":"Lead Ore","c":"raw","t":2,"s":50},"sulfur":{"n":"Sulfur Deposit","c":"raw","t":2,"s":50},"nitrogen-ice":{"n":"Nitrogen Ice","c":"raw","t":2,"s":50},"phosphorus-ore":{"n":"Phosphorus Ore","c":"raw","t":2,"s":50},"cobalt-ore":{"n":"Cobalt Ore","c":"raw","t":3,"s":20},"lithium-ore":{"n":"Lithium Ore","c":"raw","t":3,"s":20},"silver-ore":{"n":"Silver Ore","c":"raw","t":3,"s":20},"gold":{"n":"Gold Ore","c":"raw","t":3,"s":20},"tungsten-ore":{"n":"Tungsten Ore","c":"raw","t":3,"s":20},"boron-ore":{"n":"Boron Ore","c":"raw","t":3,"s":20},"neodymium-ore":{"n":"Neodymium Ore","c":"raw","t":3,"s":20},"helium-gas":{"n":"Helium Gas","c":"raw","t":3,"s":20},"xenon-gas":{"n":"Xenon Gas","c":"raw","t":3,"s":20},"platinum":{"n":"Platinum Ore","c":"raw","t":4,"s":10},"palladium-ore":{"n":"Palladium Ore","c":"raw","t":4,"s":10},"iridium-ore":{"n":"Iridium Ore","c":"raw","t":4,"s":10},"uranium-ore":{"n":"Uranium Ore","c":"raw","t":4,"s":10},"thorium-ore":{"n":"Thorium Ore","c":"raw","t":4,"s":10},"helium-3":{"n":"Helium-3","c":"raw","t":4,"s":10},"iron-ingot":{"n":"Iron Ingot","c":"refined","t":1,"s":100},"copper-ingot":{"n":"Copper Ingot","c":"refined","t":1,"s":100},"nickel-ingot":{"n":"Nickel Ingot","c":"refined","t":2,"s":50},"tin-ingot":{"n":"Tin Ingot","c":"refined","t":2,"s":50},"zinc-ingot":{"n":"Zinc Ingot","c":"refined","t":2,"s":50},"lead-ingot":{"n":"Lead Ingot","c":"refined","t":2,"s":50},"cobalt-ingot":{"n":"Cobalt Ingot","c":"refined","t":3,"s":20},"silver-ingot":{"n":"Silver Ingot","c":"refined","t":3,"s":20},"gold-ingot":{"n":"Gold Ingot","c":"refined","t":3,"s":20},"refined-carbon":{"n":"Refined Carbon","c":"refined","t":1,"s":100},"glass":{"n":"Glass","c":"refined","t":1,"s":100},"solder":{"n":"Solder","c":"refined","t":2,"s":50},"bronze":{"n":"Bronze","c":"refined","t":2,"s":50},"brass":{"n":"Brass","c":"refined","t":2,"s":50},"lead-shielding":{"n":"Lead Shielding","c":"refined","t":2,"s":50},"steel":{"n":"Steel","c":"refined","t":1,"s":100},"graphite":{"n":"Graphite","c":"refined","t":1,"s":100},"pure-silicon":{"n":"Pure Silicon","c":"refined","t":1,"s":100},"borosilicate-glass":{"n":"Borosilicate Glass","c":"refined","t":3,"s":20},"aluminum-ingot":{"n":"Aluminum Ingot","c":"refined","t":1,"s":100},"magnesium-ingot":{"n":"Magnesium Ingot","c":"refined","t":2,"s":50},"magnesium-alloy":{"n":"Magnesium Alloy","c":"refined","t":2,"s":50},"titanium-ingot":{"n":"Titanium Ingot","c":"refined","t":2,"s":50},"chromium-ingot":{"n":"Chromium Ingot","c":"refined","t":2,"s":50},"lithium-metal":{"n":"Lithium Metal","c":"refined","t":3,"s":20},"neodymium-metal":{"n":"Neodymium Metal","c":"refined","t":3,"s":20},"tungsten-powder":{"n":"Tungsten Powder","c":"refined","t":3,"s":20},"stainless-steel":{"n":"Stainless Steel","c":"refined","t":2,"s":50},"superalloy":{"n":"Superalloy","c":"refined","t":3,"s":20},"titanium-alloy":{"n":"Titanium Alloy","c":"refined","t":2,"s":50},"tungsten-carbide":{"n":"Tungsten Carbide","c":"refined","t":3,"s":20},"engine-nozzle":{"n":"Engine Nozzle","c":"parts","t":3,"s":10},"neodymium-magnet":{"n":"Neodymium Magnet","c":"parts","t":3,"s":10},"platinum-ingot":{"n":"Platinum Ingot","c":"refined","t":4,"s":10},"palladium-ingot":{"n":"Palladium Ingot","c":"refined","t":4,"s":10},"iridium-ingot":{"n":"Iridium Ingot","c":"refined","t":4,"s":10},"iridium-crucible":{"n":"Iridium Crucible","c":"parts","t":4,"s":5},"iron-plate":{"n":"Iron Plate","c":"refined","t":1,"s":100},"copper-wire":{"n":"Copper Wire","c":"refined","t":1,"s":100},"sulfur-powder":{"n":"Sulfur Powder","c":"refined","t":2,"s":50},"phosphorus-powder":{"n":"Phosphorus Powder","c":"refined","t":2,"s":50},"copper-sheet":{"n":"Copper Sheet","c":"refined","t":1,"s":100},"copper-tubing":{"n":"Copper Tubing","c":"refined","t":1,"s":100},"aluminum-sheet":{"n":"Aluminum Sheet","c":"refined","t":1,"s":100},"aluminum-frame":{"n":"Aluminum Frame","c":"refined","t":1,"s":100},"titanium-plate":{"n":"Titanium Plate","c":"refined","t":2,"s":50},"gold-foil":{"n":"Gold Foil","c":"refined","t":3,"s":20},"diamond":{"n":"Diamond","c":"refined","t":1,"s":100},"hydrogen-filter":{"n":"Hydrogen Filter","c":"parts","t":4,"s":5},"water":{"n":"Water","c":"refined","t":1,"s":100},"polymer":{"n":"Polymer","c":"refined","t":1,"s":100},"sulfuric-acid":{"n":"Sulfuric Acid","c":"refined","t":2,"s":50},"rubber":{"n":"Rubber","c":"refined","t":2,"s":50},"silver-paste":{"n":"Silver Paste","c":"refined","t":3,"s":20},"nickel-plating":{"n":"Nickel Plating","c":"refined","t":2,"s":50},"chrome-plating":{"n":"Chrome Plating","c":"refined","t":2,"s":50},"galvanized-steel":{"n":"Galvanized Steel","c":"refined","t":2,"s":50},"gold-contacts":{"n":"Gold Contacts","c":"parts","t":3,"s":10},"mirror":{"n":"Mirror","c":"parts","t":3,"s":10},"ammonia":{"n":"Ammonia","c":"refined","t":2,"s":50},"fertilizer":{"n":"Fertilizer","c":"goods","t":2,"s":20},"mining-charge":{"n":"Mining Charge","c":"goods","t":2,"s":20},"boron-powder":{"n":"Boron Powder","c":"refined","t":3,"s":20},"battery-cathode":{"n":"Battery Cathode","c":"parts","t":3,"s":10},"catalyst-mesh":{"n":"Catalyst Mesh","c":"parts","t":4,"s":5},"uranium-oxide":{"n":"Uranium Oxide","c":"refined","t":4,"s":10},"thorium-oxide":{"n":"Thorium Oxide","c":"refined","t":4,"s":10},"liquid-hydrogen":{"n":"Liquid Hydrogen","c":"refined","t":1,"s":100},"liquid-oxygen":{"n":"Liquid Oxygen","c":"refined","t":1,"s":100},"liquid-nitrogen":{"n":"Liquid Nitrogen","c":"refined","t":2,"s":50},"hydrogen-gas":{"n":"Hydrogen Gas","c":"refined","t":1,"s":100},"oxygen-gas":{"n":"Oxygen Gas","c":"refined","t":1,"s":100},"nitrogen-gas":{"n":"Nitrogen Gas","c":"refined","t":2,"s":50},"breathable-air":{"n":"Breathable Air","c":"refined","t":2,"s":50},"rocket-fuel":{"n":"Rocket Fuel","c":"refined","t":1,"s":100},"helium-tank":{"n":"Helium Tank","c":"parts","t":3,"s":10},"xenon-tank":{"n":"Xenon Tank","c":"parts","t":3,"s":10},"liquid-helium":{"n":"Liquid Helium","c":"refined","t":3,"s":20},"hydrogen-storage-cell":{"n":"Hydrogen Storage Cell","c":"parts","t":4,"s":5},"silicon-wafer":{"n":"Silicon Wafer","c":"parts","t":1,"s":50},"deuterium":{"n":"Deuterium","c":"refined","t":1,"s":100},"enriched-uranium":{"n":"Enriched Uranium","c":"refined","t":4,"s":10},"uranium-233":{"n":"Uranium-233","c":"refined","t":4,"s":10},"fusion-fuel-pellet":{"n":"Fusion Fuel Pellet","c":"refined","t":4,"s":10},"flare":{"n":"Flare","c":"goods","t":2,"s":20},"igniter":{"n":"Igniter","c":"parts","t":2,"s":20},"lead-acid-battery":{"n":"Lead-Acid Battery","c":"parts","t":2,"s":20},"lithium-battery":{"n":"Lithium Battery","c":"parts","t":3,"s":10},"electric-motor":{"n":"Electric Motor","c":"parts","t":3,"s":10},"xenon-lamp":{"n":"Xenon Lamp","c":"goods","t":3,"s":10},"fuel-cell":{"n":"Fuel Cell","c":"parts","t":4,"s":5},"ion-thruster":{"n":"Ion Thruster","c":"parts","t":3,"s":10},"neutron-detector":{"n":"Neutron Detector","c":"parts","t":4,"s":5},"control-rod":{"n":"Control Rod","c":"parts","t":3,"s":10},"fission-fuel-rod":{"n":"Fission Fuel Rod","c":"parts","t":4,"s":5},"thorium-fuel-rod":{"n":"Thorium Fuel Rod","c":"parts","t":4,"s":5},"kinetic-rounds":{"n":"Kinetic Rounds","c":"goods","t":1,"s":50},"fur-2":{"n":"Tier 2 Furnace","c":"buildings","t":2,"s":5},"fur-3":{"n":"Tier 3 Furnace","c":"buildings","t":3,"s":2},"prs-2":{"n":"Tier 2 Press","c":"buildings","t":2,"s":5},"prs-3":{"n":"Tier 3 Press","c":"buildings","t":3,"s":2},"chem-2":{"n":"Tier 2 Chemical Plant","c":"buildings","t":2,"s":5},"chem-3":{"n":"Tier 3 Chemical Plant","c":"buildings","t":3,"s":2},"cryo-2":{"n":"Tier 2 Cryo Plant","c":"buildings","t":2,"s":5},"cryo-3":{"n":"Tier 3 Cryo Plant","c":"buildings","t":3,"s":2},"ref-2":{"n":"Tier 2 Refinery","c":"buildings","t":2,"s":5},"ref-3":{"n":"Tier 3 Refinery","c":"buildings","t":3,"s":2},"asm-2":{"n":"Tier 2 Assembler","c":"buildings","t":2,"s":5},"asm-3":{"n":"Tier 3 Assembler","c":"buildings","t":3,"s":2},"assembler-2":{"n":"Tier 2 Assembly Bay","c":"buildings","t":2,"s":5},"assembler-3":{"n":"Tier 3 Assembly Bay","c":"buildings","t":3,"s":2},"miner-2":{"n":"Tier 2 Miner","c":"buildings","t":2,"s":5},"miner-3":{"n":"Tier 3 Miner","c":"buildings","t":3,"s":2},"fur-1":{"n":"Tier 1 Furnace","c":"buildings","t":1,"s":10},"prs-1":{"n":"Tier 1 Press","c":"buildings","t":1,"s":10},"chem-1":{"n":"Tier 1 Chemical Plant","c":"buildings","t":1,"s":10},"cryo-1":{"n":"Tier 1 Cryo Plant","c":"buildings","t":1,"s":10},"ref-1":{"n":"Tier 1 Refinery","c":"buildings","t":1,"s":10},"asm-1":{"n":"Tier 1 Assembler","c":"buildings","t":1,"s":10},"miner-1":{"n":"Tier 1 Miner","c":"buildings","t":1,"s":10},"station-1":{"n":"Tier 1 Space Station","c":"buildings","t":1,"s":10},"outpost-1":{"n":"Tier 1 Mining Outpost","c":"buildings","t":1,"s":10},"scout-1":{"n":"Tier 1 Surveyor","c":"ships","t":1,"s":1},"recon-1":{"n":"Tier 1 Scout","c":"ships","t":1,"s":1},"corvette-1":{"n":"Tier 1 Corvette","c":"ships","t":1,"s":1},"builder-1":{"n":"Tier 1 Construction Ship","c":"ships","t":1,"s":1}},"recipes":{"iron-ingot":{"o":"iron-ingot","m":1,"i":{"iron-ore":2}},"copper-ingot":{"o":"copper-ingot","m":1,"i":{"copper-ore":2}},"nickel-ingot":{"o":"nickel-ingot","m":1,"i":{"nickel-ore":2}},"tin-ingot":{"o":"tin-ingot","m":1,"i":{"tin-ore":2}},"zinc-ingot":{"o":"zinc-ingot","m":1,"i":{"zinc-ore":2}},"lead-ingot":{"o":"lead-ingot","m":1,"i":{"lead-ore":2}},"cobalt-ingot":{"o":"cobalt-ingot","m":1,"i":{"cobalt-ore":2}},"silver-ingot":{"o":"silver-ingot","m":1,"i":{"silver-ore":2}},"gold-ingot":{"o":"gold-ingot","m":1,"i":{"gold":2}},"refined-carbon":{"o":"refined-carbon","m":1,"i":{"carbon":2}},"glass":{"o":"glass","m":1,"i":{"silicon":2}},"solder":{"o":"solder","m":1,"i":{"tin-ingot":2,"copper-ingot":1}},"bronze":{"o":"bronze","m":1,"i":{"copper-ingot":3,"tin-ingot":1}},"brass":{"o":"brass","m":1,"i":{"copper-ingot":2,"zinc-ingot":1}},"lead-shielding":{"o":"lead-shielding","m":1,"i":{"lead-ingot":4}},"steel":{"o":"steel","m":1,"i":{"iron-ingot":2,"refined-carbon":1}},"graphite":{"o":"graphite","m":1,"i":{"refined-carbon":3}},"pure-silicon":{"o":"pure-silicon","m":1,"i":{"silicon":2,"refined-carbon":1}},"borosilicate-glass":{"o":"borosilicate-glass","m":1,"i":{"silicon":2,"boron-powder":1}},"aluminum-ingot":{"o":"aluminum-ingot","m":1,"i":{"aluminum-ore":2}},"magnesium-ingot":{"o":"magnesium-ingot","m":1,"i":{"magnesium-ore":2}},"magnesium-alloy":{"o":"magnesium-alloy","m":1,"i":{"magnesium-ingot":2,"aluminum-ingot":1}},"titanium-ingot":{"o":"titanium-ingot","m":1,"i":{"titanium-ore":2,"magnesium-ingot":1}},"chromium-ingot":{"o":"chromium-ingot","m":1,"i":{"chromium-ore":2,"refined-carbon":1}},"lithium-metal":{"o":"lithium-metal","m":1,"i":{"lithium-ore":2}},"neodymium-metal":{"o":"neodymium-metal","m":1,"i":{"neodymium-ore":2}},"tungsten-powder":{"o":"tungsten-powder","m":1,"i":{"tungsten-ore":2,"hydrogen-gas":2}},"stainless-steel":{"o":"stainless-steel","m":1,"i":{"steel":3,"chromium-ingot":1,"nickel-ingot":1}},"superalloy":{"o":"superalloy","m":1,"i":{"nickel-ingot":3,"cobalt-ingot":1,"chromium-ingot":1}},"titanium-alloy":{"o":"titanium-alloy","m":1,"i":{"titanium-ingot":3,"aluminum-ingot":1}},"tungsten-carbide":{"o":"tungsten-carbide","m":1,"i":{"tungsten-powder":1,"refined-carbon":1}},"engine-nozzle":{"o":"engine-nozzle","m":1,"i":{"tungsten-powder":4}},"neodymium-magnet":{"o":"neodymium-magnet","m":1,"i":{"iron-ingot":2,"neodymium-metal":1,"boron-powder":1}},"platinum-ingot":{"o":"platinum-ingot","m":1,"i":{"platinum":2}},"palladium-ingot":{"o":"palladium-ingot","m":1,"i":{"palladium-ore":2}},"iridium-ingot":{"o":"iridium-ingot","m":1,"i":{"iridium-ore":2}},"iridium-crucible":{"o":"iridium-crucible","m":1,"i":{"iridium-ingot":3}},"iron-plate":{"o":"iron-plate","m":1,"i":{"iron-ingot":2}},"copper-wire":{"o":"copper-wire","m":1,"i":{"copper-ingot":1}},"sulfur-powder":{"o":"sulfur-powder","m":1,"i":{"sulfur":1}},"phosphorus-powder":{"o":"phosphorus-powder","m":1,"i":{"phosphorus-ore":1}},"copper-sheet":{"o":"copper-sheet","m":1,"i":{"copper-ingot":2}},"copper-tubing":{"o":"copper-tubing","m":1,"i":{"copper-ingot":3}},"aluminum-sheet":{"o":"aluminum-sheet","m":1,"i":{"aluminum-ingot":2}},"aluminum-frame":{"o":"aluminum-frame","m":1,"i":{"aluminum-ingot":3}},"titanium-plate":{"o":"titanium-plate","m":1,"i":{"titanium-ingot":2}},"gold-foil":{"o":"gold-foil","m":1,"i":{"gold-ingot":1}},"diamond":{"o":"diamond","m":1,"i":{"graphite":5}},"hydrogen-filter":{"o":"hydrogen-filter","m":1,"i":{"palladium-ingot":2}},"water":{"o":"water","m":1,"i":{"hydrogen-gas":2,"oxygen-gas":1}},"polymer":{"o":"polymer","m":1,"i":{"refined-carbon":1,"hydrogen-gas":2}},"sulfuric-acid":{"o":"sulfuric-acid","m":1,"i":{"sulfur-powder":1,"oxygen-gas":2,"water":1}},"rubber":{"o":"rubber","m":1,"i":{"polymer":2,"sulfur-powder":1}},"silver-paste":{"o":"silver-paste","m":1,"i":{"silver-ingot":1,"polymer":1}},"nickel-plating":{"o":"nickel-plating","m":1,"i":{"steel":1,"nickel-ingot":1,"sulfuric-acid":1}},"chrome-plating":{"o":"chrome-plating","m":1,"i":{"steel":1,"chromium-ingot":1,"sulfuric-acid":1}},"galvanized-steel":{"o":"galvanized-steel","m":1,"i":{"steel":2,"zinc-ingot":1}},"gold-contacts":{"o":"gold-contacts","m":1,"i":{"copper-sheet":1,"gold-ingot":1}},"mirror":{"o":"mirror","m":1,"i":{"glass":1,"silver-ingot":1}},"ammonia":{"o":"ammonia","m":1,"i":{"nitrogen-gas":1,"hydrogen-gas":3}},"fertilizer":{"o":"fertilizer","m":1,"i":{"ammonia":2,"phosphorus-powder":1}},"mining-charge":{"o":"mining-charge","m":1,"i":{"ammonia":2,"sulfur-powder":1,"refined-carbon":1}},"boron-powder":{"o":"boron-powder","m":1,"i":{"boron-ore":2,"sulfuric-acid":1}},"battery-cathode":{"o":"battery-cathode","m":1,"i":{"lithium-metal":1,"cobalt-ingot":1,"oxygen-gas":2}},"catalyst-mesh":{"o":"catalyst-mesh","m":1,"i":{"stainless-steel":1,"platinum-ingot":1}},"uranium-oxide":{"o":"uranium-oxide","m":1,"i":{"uranium-ore":3,"sulfuric-acid":1}},"thorium-oxide":{"o":"thorium-oxide","m":1,"i":{"thorium-ore":3,"sulfuric-acid":1}},"liquid-hydrogen":{"o":"liquid-hydrogen","m":1,"i":{"hydrogen-ice":1}},"liquid-oxygen":{"o":"liquid-oxygen","m":1,"i":{"oxygen-ice":1}},"liquid-nitrogen":{"o":"liquid-nitrogen","m":1,"i":{"nitrogen-ice":1}},"hydrogen-gas":{"o":"hydrogen-gas","m":1,"i":{"liquid-hydrogen":1}},"oxygen-gas":{"o":"oxygen-gas","m":1,"i":{"liquid-oxygen":1}},"nitrogen-gas":{"o":"nitrogen-gas","m":1,"i":{"liquid-nitrogen":1}},"breathable-air":{"o":"breathable-air","m":1,"i":{"oxygen-gas":1,"nitrogen-gas":4}},"rocket-fuel":{"o":"rocket-fuel","m":1,"i":{"liquid-hydrogen":2,"liquid-oxygen":1}},"helium-tank":{"o":"helium-tank","m":1,"i":{"steel":1,"helium-gas":5}},"xenon-tank":{"o":"xenon-tank","m":1,"i":{"titanium-plate":1,"xenon-gas":5}},"liquid-helium":{"o":"liquid-helium","m":1,"i":{"helium-gas":3}},"hydrogen-storage-cell":{"o":"hydrogen-storage-cell","m":1,"i":{"palladium-ingot":1,"hydrogen-gas":4}},"silicon-wafer":{"o":"silicon-wafer","m":1,"i":{"pure-silicon":2}},"deuterium":{"o":"deuterium","m":1,"i":{"hydrogen-gas":10}},"enriched-uranium":{"o":"enriched-uranium","m":1,"i":{"uranium-oxide":5}},"uranium-233":{"o":"uranium-233","m":1,"i":{"thorium-fuel-rod":1}},"fusion-fuel-pellet":{"o":"fusion-fuel-pellet","m":1,"i":{"helium-3":1,"deuterium":1}},"flare":{"o":"flare","m":1,"i":{"magnesium-ingot":1,"iron-plate":1}},"igniter":{"o":"igniter","m":1,"i":{"copper-wire":1,"phosphorus-powder":1}},"lead-acid-battery":{"o":"lead-acid-battery","m":1,"i":{"lead-ingot":2,"sulfuric-acid":1,"polymer":1}},"lithium-battery":{"o":"lithium-battery","m":1,"i":{"battery-cathode":1,"graphite":1,"copper-sheet":1,"aluminum-sheet":1}},"electric-motor":{"o":"electric-motor","m":1,"i":{"neodymium-magnet":2,"copper-wire":4,"steel":2,"iron-plate":1}},"xenon-lamp":{"o":"xenon-lamp","m":1,"i":{"glass":1,"xenon-gas":1,"tungsten-powder":1,"copper-wire":1}},"fuel-cell":{"o":"fuel-cell","m":1,"i":{"catalyst-mesh":1,"polymer":2,"hydrogen-gas":2,"graphite":1}},"ion-thruster":{"o":"ion-thruster","m":1,"i":{"xenon-tank":1,"graphite":2,"copper-wire":4}},"neutron-detector":{"o":"neutron-detector","m":1,"i":{"helium-3":1,"steel":1,"copper-wire":2}},"control-rod":{"o":"control-rod","m":1,"i":{"boron-powder":2,"steel":1}},"fission-fuel-rod":{"o":"fission-fuel-rod","m":1,"i":{"enriched-uranium":2,"steel":1}},"thorium-fuel-rod":{"o":"thorium-fuel-rod","m":1,"i":{"thorium-oxide":2,"enriched-uranium":1,"steel":1}},"kinetic-rounds":{"o":"kinetic-rounds","m":4,"i":{"iron-plate":2,"refined-carbon":1,"copper-wire":1}},"fur-2":{"o":"fur-2","m":1,"i":{"fur-1":1,"iron-plate":40,"copper-ingot":30,"refined-carbon":30,"glass":20,"copper-wire":20}},"fur-3":{"o":"fur-3","m":1,"i":{"fur-2":1,"titanium-plate":120,"galvanized-steel":100,"chrome-plating":80,"bronze":80,"lead-shielding":60,"nickel-plating":40,"solder":40}},"prs-2":{"o":"prs-2","m":1,"i":{"prs-1":1,"iron-plate":50,"iron-ingot":30,"copper-wire":25,"refined-carbon":15,"polymer":10}},"prs-3":{"o":"prs-3","m":1,"i":{"prs-2":1,"titanium-plate":140,"galvanized-steel":100,"magnesium-alloy":80,"brass":60,"rubber":50,"solder":40,"lead-acid-battery":20}},"chem-2":{"o":"chem-2","m":1,"i":{"chem-1":1,"iron-plate":35,"glass":30,"polymer":20,"copper-wire":20,"water":15,"oxygen-gas":10}},"chem-3":{"o":"chem-3","m":1,"i":{"chem-2":1,"chrome-plating":100,"nickel-plating":80,"rubber":80,"galvanized-steel":60,"sulfuric-acid":60,"brass":50,"lead-acid-battery":20}},"cryo-2":{"o":"cryo-2","m":1,"i":{"cryo-1":1,"iron-plate":35,"copper-ingot":25,"glass":20,"polymer":15,"liquid-hydrogen":15,"liquid-oxygen":10}},"cryo-3":{"o":"cryo-3","m":1,"i":{"cryo-2":1,"titanium-plate":100,"magnesium-alloy":80,"nickel-plating":80,"rubber":60,"liquid-nitrogen":60,"breathable-air":40,"lead-acid-battery":20}},"ref-2":{"o":"ref-2","m":1,"i":{"ref-1":1,"iron-plate":40,"glass":25,"copper-wire":25,"refined-carbon":20,"polymer":15,"hydrogen-gas":10}},"ref-3":{"o":"ref-3","m":1,"i":{"ref-2":1,"lead-shielding":120,"chrome-plating":80,"titanium-plate":80,"nickel-plating":60,"sulfuric-acid":50,"rubber":50,"lead-acid-battery":30}},"asm-2":{"o":"asm-2","m":1,"i":{"asm-1":1,"iron-plate":50,"copper-wire":40,"iron-ingot":20,"glass":15,"polymer":15}},"asm-3":{"o":"asm-3","m":1,"i":{"asm-2":1,"titanium-plate":120,"galvanized-steel":80,"magnesium-alloy":60,"solder":60,"brass":50,"rubber":50,"igniter":30,"lead-acid-battery":30}},"assembler-2":{"o":"assembler-2","m":1,"i":{"iron-plate":150,"copper-wire":100,"glass":80,"iron-ingot":80,"polymer":60,"refined-carbon":40}},"assembler-3":{"o":"assembler-3","m":1,"i":{"assembler-2":1,"titanium-plate":400,"galvanized-steel":300,"magnesium-alloy":200,"chrome-plating":200,"bronze":150,"rubber":150,"solder":100,"lead-acid-battery":80}},"miner-2":{"o":"miner-2","m":1,"i":{"miner-1":1,"iron-plate":40,"copper-wire":25,"iron-ingot":20,"refined-carbon":15,"polymer":10}},"miner-3":{"o":"miner-3","m":1,"i":{"miner-2":1,"titanium-plate":100,"galvanized-steel":80,"chrome-plating":60,"mining-charge":60,"bronze":40,"rubber":40,"lead-acid-battery":20}},"fur-1":{"o":"fur-1","m":1,"i":{"silicon":10,"iron-ore":5}},"prs-1":{"o":"prs-1","m":1,"i":{"iron-ingot":15,"copper-ingot":5}},"chem-1":{"o":"chem-1","m":1,"i":{"iron-plate":15,"glass":10,"copper-wire":5}},"cryo-1":{"o":"cryo-1","m":1,"i":{"iron-plate":15,"copper-ingot":10,"glass":5}},"ref-1":{"o":"ref-1","m":1,"i":{"iron-plate":15,"glass":10,"copper-wire":10,"refined-carbon":5}},"asm-1":{"o":"asm-1","m":1,"i":{"iron-plate":15,"copper-wire":10}},"miner-1":{"o":"miner-1","m":1,"i":{"iron-ore":10,"copper-ore":5}},"station-1":{"o":"station-1","m":1,"i":{"iron-plate":30,"copper-wire":15,"glass":10}},"outpost-1":{"o":"outpost-1","m":1,"i":{"iron-plate":15,"copper-wire":8,"glass":5}}},"buildings":{"miner-1":{"n":"Miner","k":"miner","s":null},"miner-2":{"n":"Miner","k":"miner","s":null},"miner-3":{"n":"Miner","k":"miner","s":null},"station-1":{"n":"Space Station","k":"station","s":20},"assembler-1":{"n":"Assembly Bay","k":"assembler","s":null},"assembler-2":{"n":"Assembly Bay","k":"assembler","s":null},"assembler-3":{"n":"Assembly Bay","k":"assembler","s":null},"lab-1":{"n":"Science Lab","k":"lab","s":null},"construct-1":{"n":"Building Crafter","k":"construct","s":null},"shipyard-1":{"n":"Ship Bay","k":"shipyard","s":null},"ops-1":{"n":"Operations Room","k":"ops","s":null},"contracts-1":{"n":"Contracts Office","k":"contracts","s":null},"outpost-1":{"n":"Mining Outpost","k":"station","s":10}},"research":{"assembly-bay":{"i":{"iron-ore":1,"copper-ore":1}},"assembler":{"i":{"iron-ingot":1,"copper-ingot":1}},"floor-20":{"i":{"iron-plate":2,"iron-ingot":2}},"floor-75":{"i":{"titanium-plate":4,"galvanized-steel":4,"magnesium-alloy":2,"rubber":2}},"floor-250":{"i":{"superalloy":5,"tungsten-carbide":5,"neodymium-magnet":4,"borosilicate-glass":5,"lithium-battery":3,"gold-contacts":3}},"station-slots":{"i":{"iron-plate":2,"copper-wire":2,"glass":1}},"ship-bay":{"i":{"iron-plate":2,"copper-wire":1,"glass":1}},"tier-2-buildings":{"i":{"iron-plate":4,"copper-wire":4,"glass":2}},"tier-3-buildings":{"i":{"titanium-plate":3,"galvanized-steel":3,"magnesium-alloy":2,"rubber":2}},"auto-requests":{"i":{"iron-plate":4,"copper-wire":4,"glass":2}}},"constructs":{"miner-1":{"i":{"iron-ore":10,"copper-ore":5}},"miner-2":{"i":{"miner-1":1,"iron-plate":40,"copper-wire":25,"iron-ingot":20,"refined-carbon":15,"polymer":10}},"miner-3":{"i":{"miner-2":1,"titanium-plate":100,"galvanized-steel":80,"chrome-plating":60,"mining-charge":60,"bronze":40,"rubber":40,"lead-acid-battery":20}},"station-1":{"i":{"iron-plate":30,"copper-wire":15,"glass":10}},"outpost-1":{"i":{"iron-plate":15,"copper-wire":8,"glass":5}},"assembler-2":{"i":{"iron-plate":150,"copper-wire":100,"glass":80,"iron-ingot":80,"polymer":60,"refined-carbon":40}},"assembler-3":{"i":{"assembler-2":1,"titanium-plate":400,"galvanized-steel":300,"magnesium-alloy":200,"chrome-plating":200,"bronze":150,"rubber":150,"solder":100,"lead-acid-battery":80}},"fur-1":{"i":{"silicon":10,"iron-ore":5}},"fur-2":{"i":{"fur-1":1,"iron-plate":40,"copper-ingot":30,"refined-carbon":30,"glass":20,"copper-wire":20}},"fur-3":{"i":{"fur-2":1,"titanium-plate":120,"galvanized-steel":100,"chrome-plating":80,"bronze":80,"lead-shielding":60,"nickel-plating":40,"solder":40}},"prs-1":{"i":{"iron-ingot":15,"copper-ingot":5}},"prs-2":{"i":{"prs-1":1,"iron-plate":50,"iron-ingot":30,"copper-wire":25,"refined-carbon":15,"polymer":10}},"prs-3":{"i":{"prs-2":1,"titanium-plate":140,"galvanized-steel":100,"magnesium-alloy":80,"brass":60,"rubber":50,"solder":40,"lead-acid-battery":20}},"chem-1":{"i":{"iron-plate":15,"glass":10,"copper-wire":5}},"chem-2":{"i":{"chem-1":1,"iron-plate":35,"glass":30,"polymer":20,"copper-wire":20,"water":15,"oxygen-gas":10}},"chem-3":{"i":{"chem-2":1,"chrome-plating":100,"nickel-plating":80,"rubber":80,"galvanized-steel":60,"sulfuric-acid":60,"brass":50,"lead-acid-battery":20}},"cryo-1":{"i":{"iron-plate":15,"copper-ingot":10,"glass":5}},"cryo-2":{"i":{"cryo-1":1,"iron-plate":35,"copper-ingot":25,"glass":20,"polymer":15,"liquid-hydrogen":15,"liquid-oxygen":10}},"cryo-3":{"i":{"cryo-2":1,"titanium-plate":100,"magnesium-alloy":80,"nickel-plating":80,"rubber":60,"liquid-nitrogen":60,"breathable-air":40,"lead-acid-battery":20}},"ref-1":{"i":{"iron-plate":15,"glass":10,"copper-wire":10,"refined-carbon":5}},"ref-2":{"i":{"ref-1":1,"iron-plate":40,"glass":25,"copper-wire":25,"refined-carbon":20,"polymer":15,"hydrogen-gas":10}},"ref-3":{"i":{"ref-2":1,"lead-shielding":120,"chrome-plating":80,"titanium-plate":80,"nickel-plating":60,"sulfuric-acid":50,"rubber":50,"lead-acid-battery":30}},"asm-1":{"i":{"iron-plate":15,"copper-wire":10}},"asm-2":{"i":{"asm-1":1,"iron-plate":50,"copper-wire":40,"iron-ingot":20,"glass":15,"polymer":15}},"asm-3":{"i":{"asm-2":1,"titanium-plate":120,"galvanized-steel":80,"magnesium-alloy":60,"solder":60,"brass":50,"rubber":50,"igniter":30,"lead-acid-battery":30}}}};
// Client-only tools. Imports, rendering and game access are injected for offline tests.
function createDebugTools({catalog,api,getGame,loadWorld,doc,onChange=()=>{},
  timers={set:(fn,ms)=>setInterval(fn,ms),clear:id=>clearInterval(id)}}){
  const state={input:'',busy:false,error:'',snapshot:null,letter:'',xray:false,notice:'Pouze klientské zobrazení a kamera.'};
  let system=null,serial=0,overlay=null,timer=null,previousCamera=null;
  const emit=()=>onChange();
  const finite=value=>typeof value==='number'&&Number.isFinite(value);
  function validateCamera(v){
    if(!v||!finite(v.x)||!finite(v.y)||!finite(v.scale)||v.scale<=0)throw Error('Neplatné souřadnice kamery');
    return {x:v.x,y:v.y,scale:v.scale};
  }
  function gameCamera(allowStation=false){
    const game=getGame();
    if(!game?.starmap||typeof game.starmap.goTo!=='function'||typeof game.starmap.view!=='function'||typeof game.setMapOpen!=='function')throw Error('Rozhraní kamery není dostupné; otevři mapu ve hře.');
    if(game.stationView?.isOpen&&!allowStation)throw Error('Nejprve opusť vnitřek stanice a otevři mapu.');
    if(game.starmap.flying)throw Error('Počkej na dokončení aktuálního letu kamery.');
    return game;
  }
  function rememberCamera(game){if(!previousCamera)previousCamera=validateCamera(game.starmap.view())}
  async function inspect(id){
    if(state.busy)return null;
    const text=String(id??'').trim();state.input=text;state.error='';state.busy=true;state.snapshot=null;system=null;
    setXray(false);const ticket=++serial;emit();
    try{
      if(!/^-?\d{1,10}\.-?\d{1,10}\.\d{1,3}$/.test(text))throw Error('Zadej přesné ID systému ve tvaru sx.sy.cell.');
      const meta=await api('/api/map/meta');
      if(!['number','string'].includes(typeof meta.seed)||String(meta.seed).trim()===''||!Number.isSafeInteger(Number(meta.seed)))throw Error('Chybí platný aktuální seed');
      const seed=Number(meta.seed),{map,world,deposits}=await loadWorld();
      const found=map.systemById(seed,text);if(!found||!finite(found.x)||!finite(found.y))throw Error('Systém podle aktuálního seedu neexistuje.');
      const generated=world.generateSystem(seed,found);
      if(!Array.isArray(generated?.bodies))throw Error('Neznámý formát generátoru systému');
      const planets=generated.bodies.filter(b=>b?.letter).map(b=>{
        if(!Array.isArray(b.deposits)||b.deposits.some(id=>typeof id!=='string'||catalog.items[id]?.c!=='raw'))throw Error('Generátor obsahuje neznámé ložisko.');
        const richness=world.richnessOf(b);if(!finite(richness))throw Error('Neplatná bohatost planety');
        const resources=b.deposits.map(id=>{
          const initialUnits=deposits.depositSize(id,richness);if(!finite(initialUnits)||initialUnits<0)throw Error('Neplatná velikost ložiska');
          return {id,name:catalog.items[id].n,tier:catalog.items[id].t,initialUnits};
        });
        const number=k=>finite(b[k])?b[k]:null;
        return {letter:b.letter,name:b.name,kind:b.kind,richness,orbitAU:number('a'),radiusEarth:number('radius'),
          periodYears:number('period'),temperatureK:number('temperature'),moons:number('moons'),habitable:b.habitable===true,rings:b.rings===true,resources};
      });
      if(ticket!==serial)return null;
      system=found;state.snapshot={format:1,source:'deterministic-generation',liveStateVerified:false,seed,
        system:{id:found.id,name:found.name,x:found.x,y:found.y,sx:found.sx,sy:found.sy,cell:found.cell,tier:found.tier},planets};
      state.letter=planets[0]?.letter||'';state.notice='Generovaná data načtena. Vyčerpání a vlastnictví nejsou ověřené.';
      return state.snapshot;
    }catch(e){state.error=String(e.message||e);return null}
    finally{if(ticket===serial){state.busy=false;emit()}}
  }
  function currentSystemId(){const game=getGame();return game?.sysview?.current?.id||game?.starmap?.selected?.id||''}
  function cameraToSystem(){
    if(!system)throw Error('Nejprve načti systém v inspektoru.');
    cameraToKnownSystem(system);
  }
  function cameraToKnownSystem(targetSystem,{leaveStation=false}={}){
    if(!targetSystem||typeof targetSystem.id!=='string'||!finite(targetSystem.x)||!finite(targetSystem.y))throw Error('Neplatný systém kamery');
    const game=gameCamera(leaveStation);
    if(typeof game.sysview?.frameOf!=='function'||typeof game.sysview?.focusOn!=='function'||typeof game.starmap.select!=='function')throw Error('Rozhraní zobrazení systému není dostupné.');
    if(game.stationView?.isOpen&&leaveStation){
      if(typeof doc.dispatchEvent!=='function'||typeof CustomEvent!=='function')throw Error('Není dostupný herní přechod ze stanice na mapu');
      rememberCamera(game);doc.dispatchEvent(new CustomEvent('spacefactory:goto',{detail:{system:targetSystem.id}}));
      state.notice='Herní odkaz otevřel systém a mapu.';emit();return;
    }
    const target=validateCamera(game.sysview.frameOf(targetSystem));rememberCamera(game);
    game.setMapOpen(true);game.starmap.select(targetSystem);game.sysview.focusOn(targetSystem);game.starmap.goTo(target.x,target.y,target.scale);
    state.notice='Kamera přesunuta na systém; herní objekty se nepřesouvají.';emit();
  }
  function screenPlanet(game,planet){
    const points=game?.sysview?.onScreen;
    if(!Array.isArray(points))return null;
    const matches=points.filter(p=>p.name===planet.name&&finite(p.x)&&finite(p.y));
    return matches.length===1?matches[0]:null;
  }
  function cameraToPlanet(letter){
    const planet=state.snapshot?.planets.find(p=>p.letter===letter);if(!planet)throw Error('Vyber existující planetu.');
    const game=gameCamera();
    if(game.sysview?.current?.id!==state.snapshot.system.id)throw Error('Nejprve přesuň kameru na načtený systém.');
    const point=screenPlanet(game,planet);
    if(!point||typeof game.starmap.worldOf!=='function'||typeof game.sysview.selectPlanet!=='function')throw Error('Planeta není jednoznačně vykreslená. Zobraz celý systém; přejmenované planety nemusí být rozpoznány.');
    const world=game.starmap.worldOf(point.x,point.y),target=validateCamera({...world,scale:game.starmap.view().scale});rememberCamera(game);
    game.setMapOpen(true);game.sysview.selectPlanet(letter);game.starmap.goTo(target.x,target.y,target.scale);
    state.notice='Kamera vystředěna na planetu.';emit();
  }
  function returnCamera(){
    if(!previousCamera)throw Error('Není uložená předchozí poloha kamery.');
    const game=gameCamera(),target=validateCamera(previousCamera);game.setMapOpen(true);
    game.starmap.goTo(target.x,target.y,target.scale);previousCamera=null;state.notice='Předchozí poloha kamery obnovena.';emit();
  }
  function label(text,style={}){
    const el=doc.createElement('div');el.textContent=text;
    Object.assign(el.style,{position:'fixed',background:'#091b28ed',color:'#d1fbff',border:'1px solid #47bbc7',borderRadius:'5px',padding:'4px 7px',font:'11px/1.35 system-ui',maxWidth:'250px',whiteSpace:'pre-line',pointerEvents:'none'},style);
    return el;
  }
  function paintXray(){
    if(!overlay||!state.xray)return;
    overlay.replaceChildren();if(doc.hidden)return;
    const game=getGame(),snapshot=state.snapshot;
    // Hide stale labels on system changes and when a station covers the map.
    if(!snapshot||game?.sysview?.current?.id!==snapshot.system.id||game?.stationView?.isOpen)return;
    const canvas=doc.getElementById('sysview-canvas');if(!canvas||(canvas.checkVisibility&&!canvas.checkVisibility()))return;
    const rect=canvas.getBoundingClientRect();if(!(rect.width>0&&rect.height>0))return;
    overlay.appendChild(label('Resource X-Ray · generovaná ložiska\nAktuální vyčerpání ani vlastnictví nejsou ověřené.',{left:'12px',top:'80px'}));
    for(const planet of snapshot.planets){
      const p=screenPlanet(game,planet);if(!p||p.x<0||p.y<0||p.x>rect.width||p.y>rect.height)continue;
      const x=rect.left+p.x,y=rect.top+p.y;
      const tiers=new Map();
      for(const r of planet.resources){if(!tiers.has(r.tier))tiers.set(r.tier,[]);tiers.get(r.tier).push(r.name)}
      const lines=[planet.letter,...[...tiers].sort(([a],[b])=>a-b).flatMap(([tier,names])=>['T'+tier,...names])];
      const badge=label(lines.join('\n'),{left:(x+numRadius(p.r)+6)+'px',top:y+'px'});overlay.appendChild(badge);
      const measured=badge.getBoundingClientRect?.(),width=measured?.width||200,height=measured?.height||lines.length*15+10;
      badge.style.left=Math.max(rect.left,Math.min(rect.right-width,x+numRadius(p.r)+6))+'px';
      badge.style.top=Math.max(rect.top,Math.min(rect.bottom-height,y))+'px';
    }
  }
  function numRadius(r){return finite(r)?Math.max(0,r):0}
  function setXray(enabled){
    if(!enabled){if(timer!==null)timers.clear(timer);timer=null;overlay?.remove();overlay=null;state.xray=false;emit();return}
    if(!state.snapshot)throw Error('Nejprve načti systém v inspektoru.');
    if(state.xray)return;
    overlay=doc.createElement('div');overlay.setAttribute('data-aos-xray','');
    Object.assign(overlay.style,{position:'fixed',inset:'0',pointerEvents:'none',zIndex:'2147483644'});
    doc.body.appendChild(overlay);state.xray=true;
    const tick=()=>{try{paintXray()}catch(e){setXray(false);state.error='X-Ray zastaven: '+String(e.message||e);emit()}};
    tick();if(state.xray)timer=timers.set(tick,150);emit();
  }
  function dispose(){serial++;state.busy=false;setXray(false);state.snapshot=null;system=null;previousCamera=null}
  return {state,inspect,currentSystemId,cameraToSystem,cameraToKnownSystem,cameraToPlanet,returnCamera,setXray,paintXray,dispose,
    get canReturn(){return previousCamera!==null}};
}
// Read-only progression planning. Rules and snapshots are supplied explicitly.
const ADVISOR_GOALS={progress:'Postup výzkumem',production:'Soběstačná výroba',expansion:'Příprava expanze',profit:'Ekonomika výroby'};
function planMaterials(requirements,stock,recipes,catalog,{externalStock=[]}={}){
  const pool=new Map(),surplus=new Map(),used=new Map(),raw=new Map(),crafts=new Map(),blocked=[];
  const positive=n=>Number.isFinite(n)&&n>=0;
  for(const row of stock||[]){
    if(!row||typeof row.resource!=='string'||!positive(row.units))throw Error('Neplatný stav zásob');
    pool.set(row.resource,(pool.get(row.resource)||0)+row.units);
  }
  const external=externalStock.map(row=>{
    if(typeof row.station!=='string'||typeof row.resource!=='string'||!Number.isSafeInteger(row.units)||row.units<0)throw Error('Neplatný mezistaniční zdroj');
    return {...row,left:row.units};
  }),externalTransfers=[],shortages=new Map();
  const externalKeys=new Set();for(const row of external){const key=JSON.stringify([row.station,row.resource]);if(externalKeys.has(key))throw Error('Duplicitní mezistaniční zdroj');externalKeys.add(key)}
  const byOutput=new Map();for(const r of recipes||[]){if(byOutput.has(r.output))throw Error('Nejednoznačný recept pro '+r.output);byOutput.set(r.output,r)}
  function need(id,amount,path=[]){
    if(!positive(amount)||!Number.isSafeInteger(amount))throw Error('Materiálový požadavek musí být nezáporné celé číslo');
    if(!catalog.items[id])throw Error('Neznámá položka '+id);
    const held=Math.min(amount,pool.get(id)||0);pool.set(id,(pool.get(id)||0)-held);if(held)used.set(id,(used.get(id)||0)+held);
    const extra=Math.min(amount-held,surplus.get(id)||0);surplus.set(id,(surplus.get(id)||0)-extra);
    let missing=amount-held-extra;if(!missing)return;
    shortages.set(id,(shortages.get(id)||0)+missing);
    for(const donor of external){
      if(donor.resource!==id||donor.left<=0)continue;const take=Math.min(missing,donor.left);donor.left-=take;missing-=take;
      if(take){const old=externalTransfers.find(t=>t.station===donor.station&&t.resource===id);if(old)old.amount+=take;else externalTransfers.push({station:donor.station,name:donor.name||donor.station,resource:id,amount:take})}
      if(!missing)break;
    }
    if(!missing)return;
    if(path.includes(id))throw Error('Cyklus výrobních receptů: '+[...path,id].join(' → '));
    if(catalog.items[id].c==='raw'){raw.set(id,(raw.get(id)||0)+missing);return}
    const recipe=byOutput.get(id);
    if(!recipe){blocked.push({resource:id,amount:missing,reason:'Chybí výrobní recept; nutný jiný zdroj.'});return}
    if(!positive(recipe.makes)||recipe.makes<=0||!Number.isSafeInteger(recipe.makes)||!recipe.inputs||typeof recipe.inputs!=='object'||Array.isArray(recipe.inputs))throw Error('Neplatný výrobní recept '+id);
    const batches=Math.ceil(missing/recipe.makes);if(!Number.isSafeInteger(batches*recipe.makes))throw Error('Výrobní plán je příliš velký');
    for(const [input,n] of Object.entries(recipe.inputs).sort(([a],[b])=>a.localeCompare(b)))need(input,batches*n,[...path,id]);
    const made=batches*recipe.makes;surplus.set(id,(surplus.get(id)||0)+made-missing);
    const previous=crafts.get(id);crafts.set(id,{resource:id,amount:(previous?.amount||0)+made,batches:(previous?.batches||0)+batches,
      machine:recipe.machine,level:recipe.level||1,research:recipe.research||null,building:!!recipe.building});
  }
  for(const [id,n] of Object.entries(requirements).sort(([a],[b])=>a.localeCompare(b)))need(id,n);
  return {requirements:{...requirements},usedStock:Object.fromEntries(used),rawMissing:Object.fromEntries(raw),crafts:[...crafts.values()],blocked,externalTransfers,shortages:Object.fromEntries(shortages)};
}
function validateResearch(r){
  const record=v=>v&&typeof v==='object'&&!Array.isArray(v);
  if(!record(r)||!record(r.steps)||!record(r.done)||!record(r.stations))throw Error('Neznámý formát stavu výzkumu; doporučení nelze bezpečně sestavit.');
  for(const local of Object.values(r.stations))if(!record(local)||!record(local.steps)||!record(local.done))throw Error('Neznámý formát lokálního výzkumu');
}
function buildProgressPlan({view,research,rules,catalog,goal='progress',projectId='',itemId='iron-ingot',quantity=10,flows=[],systemResources=[],depositsVerified=false,market=null,account=null,at}){
  if(!ADVISOR_GOALS[goal])throw Error('Neznámý cíl poradce');
  if(!view?.station?.id||!Array.isArray(view.stock)||!Array.isArray(view.machines))throw Error('Neznámý formát stanice');
  if(!Number.isSafeInteger(quantity)||quantity<1||quantity>1000000)throw Error('Množství musí být celé číslo od 1 do 1 000 000');
  validateResearch(research);
  if(rules.buildingById(view.station.building)?.outpost===true)throw Error('Outpost nemá výrobu ani laboratoř; pro tento plán vyber osobní nebo oprávněnou korporátní stanici.');
  const here=rules.researchAt(research,String(view.station.id)),projects=rules.PROJECTS;
  if(!Array.isArray(projects)||!Array.isArray(rules.RECIPES))throw Error('Chybí herní pravidla');
  const name=id=>catalog.items[id]?.n||id,nfmt=n=>Number(n).toLocaleString('cs-CZ',{maximumFractionDigits:2});
  const warnings=[account?'Cíl a výzkumné návaznosti platí pro vybranou stanici. Přebytek jiné stanice je pouze podmíněný kandidát dodávky.':'Zásoby a výrobní toky platí pro vybranou stanici. Plán není součet zásob celého účtu.','Pořadí je vysvětlitelná heuristika, nikoliv důkaz optimálního postupu.'];
  const priority=goal==='expansion'?['assembly-bay','station-slots','ship-bay','assembler','tier-2-buildings','floor-20','floor-75','tier-3-buildings','auto-requests','floor-250']:
    ['assembly-bay','assembler','floor-20','station-slots','ship-bay','tier-2-buildings','floor-75','tier-3-buildings','floor-250','auto-requests'];
  const choices=projects.map(p=>({id:p.id,name:p.name,scope:p.scope||'local',bought:rules.isBought(p),done:rules.isDone(here,p.id),available:rules.isOpen(here,p),
    missingPrerequisites:(p.requires||[]).filter(id=>!rules.isDone(here,id))}));
  let selected=null,target=null,requirements={},desiredProject=null;
  if(goal==='progress'||goal==='expansion'){
    desiredProject=projectId?projects.find(p=>p.id===projectId):null;
    if(projectId&&!desiredProject)throw Error('Neznámý cílový výzkum');
    const active=(research.labs||[]).filter(l=>l.state==='working'&&(l.working||l.research));
    function frontier(p,seen=[]){
      if(seen.includes(p.id))throw Error('Cyklus návazností výzkumu');
      if(rules.isDone(here,p.id))return [];
      const missing=(p.requires||[]).filter(id=>!rules.isDone(here,id));
      if(!missing.length)return [p];
      return missing.flatMap(id=>{const next=projects.find(p=>p.id===id);if(!next)throw Error('Neznámá návaznost výzkumu '+id);return frontier(next,[...seen,p.id])});
    }
    if(desiredProject&&rules.isDone(here,desiredProject.id))warnings.push('Zvolený cílový výzkum je v tomto kontextu již dokončený.');
    const candidates=desiredProject?frontier(desiredProject):projects.filter(p=>!rules.isDone(here,p.id)&&rules.isOpen(here,p)&&(!p.slots||projects.some(q=>!rules.isDone(here,q.id)&&(q.requires||[]).includes(p.id))));
    selected=[...candidates].sort((a,b)=>{
      const score=p=>(priority.length-(priority.indexOf(p.id)<0?priority.length:priority.indexOf(p.id)))*10+
        ((research.queue||[]).includes(p.id)?15:0)+(active.some(l=>(l.working??l.research)===p.id&&(rules.isGlobal(p)||String(l.station)===String(view.station.id)))?30:0);
      return score(b)-score(a)||a.id.localeCompare(b.id);
    })[0]||null;
    if(selected){
      if(selected.slots)warnings.push('Test: tento projekt nepřidává bay stanice; může být nutný jako návaznost dalšího výzkumu. Kapacitu určuje bayLevel.');
      if(!rules.isOpen(here,selected))throw Error('Nesplněné návaznosti výzkumu');
      const bought=rules.isBought(selected),remaining=bought?null:Math.max(0,selected.steps-rules.stepsDone(here,selected.id));
      if(!bought&&(!Number.isSafeInteger(remaining)||remaining<0))throw Error('Neplatný postup výzkumu');
      requirements=bought?{}:Object.fromEntries(Object.entries(selected.inputs||{}).map(([id,n])=>[id,n*remaining]));
      target={kind:'research',id:selected.id,name:selected.name,scope:rules.isGlobal(selected)?'global':'local',bought,credits:bought?selected.credits:null,remainingSteps:remaining,
        desired:desiredProject?.id||selected.id,prerequisiteFor:desiredProject&&desiredProject.id!==selected.id?desiredProject.name:null};
      if(rules.isGlobal(selected))warnings.push('Materiálový rozpočet zahrnuje všechny zbývající kroky globálního výzkumu pro zvolený cíl. Jiné laboratoře mohou část mezitím uhradit; místní návaznosti zůstávají oddělené.');
    }
  }else{
    if(!catalog.items[itemId]||!rules.RECIPES.some(r=>r.output===itemId))throw Error('Vyber vyráběný produkt');
    target={kind:'production',id:itemId,name:name(itemId),quantity};requirements={[itemId]:quantity};
  }
  const localMaterialPlan=planMaterials(requirements,view.stock,rules.RECIPES,catalog);
  const donors=(account?.stations||[]).filter(s=>String(s.id)!==String(view.station.id));
  const externalStock=donors.flatMap(s=>s.stock.filter(r=>r.exportSurplus.units>0).map(r=>({station:s.id,name:s.name,resource:r.resource,units:r.exportSurplus.units})));
  const materialPlan=account?planMaterials(requirements,view.stock,rules.RECIPES,catalog,{externalStock}):localMaterialPlan;
  if(account){
    warnings.push('Mezistaniční zásoby se načítaly postupně. Žádný přesun nebyl proveden; import cíle, priority, aktuální rezervy a skutečné dodání je nutné ověřit.');
    if(!account.inventoryComplete)warnings.push('Účet je načtený jen částečně. Nepokryté požadavky neprokazují nedostatek v celém účtu; nejprve ověř chybějící stanice.');
  }
  const recommendations=[];
  const add=(id,type,score,title,reason,action,evidence=[])=>recommendations.push({id,type,score,title,reason,action,evidence});
  for(const transfer of materialPlan.externalTransfers){
    add('transfer:'+transfer.station+':'+transfer.resource,'transfer',145,`Využij vlastní přebytek ${name(transfer.resource)}`,
      `Ve stanici ${transfer.name} je pro plán vyčleněný kandidát ${nfmt(transfer.amount)} ks nad exportní rezervou.`,
      'Ověř import z vlastních stanic, kapacitu cílového skladu a skutečné dodání. Jde o návrh, nikoliv uskutečněný přesun; rezervy ani pravidla se nemění.',
      [`Zdrojová stanice: ${transfer.station}.`]);
  }
  for(const [resource,needed] of Object.entries(materialPlan.shortages)){
    const allocated=materialPlan.externalTransfers.filter(t=>t.resource===resource).reduce((n,t)=>n+t.amount,0),left=needed-allocated;
    if(left<=0)continue;
    const holdings=donors.map(s=>({station:s,name:s.name,row:s.stock.find(r=>r.resource===resource)})).filter(s=>s.row?.units>0);
    const known=holdings.reduce((n,s)=>n+s.row.units,0)-allocated;
    if(known>0)add('holding:'+resource,'own-stock',135,`Prověř vlastní zásobu ${name(resource)}`,
      `Jinde v účtu je ještě nejméně ${nfmt(known)} ks; pro tuto větev plánu zbývá ${nfmt(left)} ks.`,
      'Zásoba není zahrnutá jako volný přebytek. Ověř rezervy, spotřebu zdroje a nastavení logistiky před další těžbou nebo výrobou.',
      holdings.map(s=>`${s.name}: ${nfmt(s.row.units)} ks; ${s.row.exportSurplus.reason}.`));
  }
  if(account&&!account.inventoryComplete)add('account-incomplete','data',150,'Doplň chybějící stanice účtu',
    `Načteno ${account.loaded} z ${account.total} prověřovaných detailů.`,
    'Obnov společný přehled. Nenalezené zásoby nejsou nulové a z neúplného snímku nelze potvrdit celkový nedostatek.');
  const flowMap=new Map(flows.map(f=>[f.resource,f]));
  const rawRows=Object.entries(materialPlan.rawMissing).map(([id,amount])=>{
    const f=flowMap.get(id),net=Number(f?.made||0)-Number(f?.used||0);
    return {id,amount,net,stacks:amount/(catalog.items[id]?.s||1),inSystem:depositsVerified?systemResources.includes(id):null};
  }).sort((a,b)=>(b.net<=0)-(a.net<=0)||b.stacks-a.stacks||a.id.localeCompare(b.id));
  for(const r of rawRows.slice(0,2)){
    const source=r.inSystem===false?'V generovaných ložiscích systému není. Ověř vlastní další stanice nebo hledej vhodný systém.':r.inSystem===true?'Surovina je v generovaných ložiscích systému. Ověř živé vyčerpání, vlastnictví a vhodný tier mineru.':'Generátor systému není ověřený; zdroj suroviny nelze potvrdit.';
    add('raw:'+r.id,r.inSystem===false?'source':'mining',100+(r.net<=0?10:0),`${r.net>0?'Doplň zásobu':'Zajisti přísun'} ${name(r.id)}`,
      `Pro materiálový rozpočet chybí ${nfmt(r.amount)} ks (${nfmt(r.stacks)} stacků).`,source,
      [`Čistý nominální tok ve stanici: ${nfmt(r.net)} ks/min.`,r.net>0?`Při neměnném toku orientačně ${nfmt(r.amount/r.net)} min; není to předpověď skutečné dodávky.`:'Současná bilance sama deficit nepokrývá.']);
  }
  const lockedCrafts=materialPlan.crafts.filter(c=>(c.research&&!rules.isDone(here,c.research))||(c.machine==='assembler'&&!c.building&&!rules.isDone(here,'assembler')));
  for(const c of lockedCrafts.slice(0,1))add('lock:'+c.resource,'unlock',125,`Ověř odemčení výroby ${name(c.resource)}`,
    'Materiálový řetězec obsahuje recept, jehož výzkum v této stanici není dokončený.',`Nejprve dokonči ${projects.find(p=>p.id===(c.research||'assembler'))?.name||c.research||'Assemblers'}, nebo ověř jiný zdroj hotového výrobku.`);
  if(materialPlan.crafts.length){
    const c=materialPlan.crafts.find(c=>!lockedCrafts.includes(c));
    if(c)add('craft:'+c.resource,'production',75,`Připrav výrobu ${name(c.resource)}`,
      `Řetězec vyžaduje vyrobit ${nfmt(c.amount)} ks v ${nfmt(c.batches)} dávkách.`,
      `Ověř linku typu ${c.building?'Building Crafter':c.machine||'dle receptu'} a její tier ${c.level}. ${rawRows.length?'Nejdříve doplň chybějící suroviny.':'Materiálový rozpočet pokrývají zásoby; kapacitu linky ověř ve hře.'}`,
      [`Zjištěná výroba této položky je ${nfmt(flowMap.get(c.resource)?.made||0)} ks/min. Požadovaná linka nemusí být postavená.`]);
  }
  if(target?.kind==='production'&&!materialPlan.externalTransfers.length&&!Object.keys(materialPlan.rawMissing).length&&!materialPlan.crafts.length&&!materialPlan.blocked.length){
    add('stock-ready','inventory',100,'Výrobní cíl už pokrývají zásoby',`${name(target.id)}: požadavek ${nfmt(target.quantity)} ks je v této stanici skladem.`,
      'Není nutné vyrábět další kusy jen pro tento cíl. Ověř, zda je nespotřebovává jiná aktivní výroba.');
  }
  if(target?.kind==='research'){
    if(target.bought)add('research:'+target.id,'research',90,`Zvaž odemčení ${target.name}`,
      `Projekt se kupuje za ${nfmt(target.credits)} CR; nespotřebovává laboratorní materiály.`,
      'Zkontroluj rozpočet a přínos ve výzkumném okně. Zůstatek účtu poradce nečetl; dostupnost nákupu nepotvrzuje.',
      [target.prerequisiteFor?`Nejbližší předpoklad cíle ${target.prerequisiteFor}.`:'Pořadí vychází ze zvoleného cíle a výzkumných návazností.']);
    else{
      const localLabs=view.machines.filter(m=>rules.buildingById(m.building)?.kind==='lab'&&m.on);
      const assigned=(research.labs||[]).filter(l=>l.state==='working'&&(l.working??l.research)===target.id&&(target.scope==='global'||String(l.station)===String(view.station.id)));
      if(!localLabs.length&&!assigned.length)add('lab','research',120,'Zkontroluj Science Lab',
        'V detailu stanice není aktivní laboratoř a stav výzkumu nehlásí přispívající laboratoř.',
        'Zapni existující laboratoř, případně ve hře ověř volný slot a podmínky její stavby.');
      add('research:'+target.id,'research',rawRows.length?60:105,`${assigned.length?'Podpoř probíhající':'Připrav'} výzkum ${target.name}`,
        `Zbývá ${nfmt(target.remainingSteps)} kroků; rozsah ${target.scope==='global'?'celý účet':'tato stanice'}.`,
        target.remainingSteps===0?'Postup dosáhl počtu kroků, ale server projekt ještě neoznačil jako hotový. Ověř dokončení ve hře.':
        `${rawRows.length||materialPlan.crafts.length?'Po zajištění materiálů ':''}ve výzkumném okně zkontroluj přiřazení laboratoří a frontu. Poradce frontu nemění.`,
        [target.prerequisiteFor?`Nejbližší předpoklad cíle ${target.prerequisiteFor}.`:`Přispívající laboratoře podle odpovědi: ${assigned.length}.`]);
    }
  }
  for(const b of materialPlan.blocked)add('external:'+b.resource,'source',115,`Zajisti ${name(b.resource)} z jiného zdroje`,
    `Chybí ${nfmt(b.amount)} ks. ${b.reason}`,'Ověř dodávku z vlastní stanice nebo dostupnost hotové položky ve hře.');
  const bottleneck=[...flows].filter(f=>Number.isFinite(f.made)&&Number.isFinite(f.used)&&f.used>f.made).sort((a,b)=>(b.used-b.made)-(a.used-a.made))[0];
  if(bottleneck)add('bottleneck:'+bottleneck.resource,'bottleneck',goal==='production'?95:50,`Prověř bilanci ${name(bottleneck.resource)}`,
    `Nominální spotřeba ${nfmt(bottleneck.used)} převyšuje výrobu ${nfmt(bottleneck.made)} ks/min.`,
    'Porovnej skutečné dodávky a vstupy strojů. Výpočet nezahrnuje všechny mezistaniční a tržní dodávky; sám neprokazuje zastavení výroby.');
  if(goal==='expansion')add('expansion','expansion',70,'Připrav kritéria další základny',
    rawRows.some(r=>r.inSystem===false)?'Materiálový plán potřebuje suroviny, které tento systém podle generátoru neobsahuje.':'Nový outpost má doplňovat chybějící suroviny; další osobní stanice není na testu povolená.',
    'Hledej zdroje pro outpost. Ověř NPC, obsazení, vyčerpání, Construction Ship a kit v zásobě zdrojové stanice. Poradce zatím nevybírá galaxii ani nepotvrzuje volné planety.');
  let economics=null;
  if(goal==='profit'){
    const recipe=rules.RECIPES.find(r=>r.output===itemId),prices=market?.resources;
    const price=id=>typeof prices?.[id]?.cheapest==='number'&&Number.isFinite(prices[id].cheapest)&&prices[id].cheapest>=0?prices[id].cheapest:null;
    const output=price(itemId),inputs=Object.entries(recipe.inputs).map(([id,n])=>({id,amount:n,price:price(id)}));
    if(output!==null&&inputs.every(i=>i.price!==null)){
      const inputCost=inputs.reduce((n,i)=>n+i.amount*i.price,0),difference=output*recipe.makes-inputCost;
      economics={outputAskCents:output,inputAskCents:inputCost,quoteDifferenceCents:difference,perBatch:recipe.makes};
      add('economics','economics',130,'Ověř cenový rozdíl před výrobou',
        `Nabídková hodnota dávky: ${nfmt(output*recipe.makes/100)} CR; přímé vstupy: ${nfmt(inputCost/100)} CR; rozdíl: ${nfmt(difference/100)} CR.`,
        'Jde o nejnižší prodejní nabídky, nikoliv potvrzené výkupní ceny nebo realizovatelný zisk. Ověř poptávku, objem a poplatky. Poradce nenakupuje ani neprodává.');
    }else warnings.push('Tržní ceny nejsou úplné. Ziskovost ani cenový rozdíl nelze potvrdit.');
  }
  const ranked=recommendations.sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id)).slice(0,3).map((r,i)=>({...r,rank:i+1}));
  return {format:1,at,station:{id:String(view.station.id),system:view.station.system,name:view.station.systemName||String(view.station.id)},goal,target,choices,
    recommendations:ranked,materialPlan,localMaterialPlan,economics,warnings,
    account:account?{at:account.at,inventoryComplete:account.inventoryComplete,loaded:account.loaded,total:account.total,
      failures:account.failures,localRawMissing:localMaterialPlan.rawMissing,remainingRawMissing:materialPlan.rawMissing}:null,method:'heuristic',depositsVerified};
}
function createProgressAdvisor({catalog,api,loadRules,productionFlows,loadAccount=null,onChange=()=>{},now=()=>new Date().toISOString()}){
  const state={goal:'progress',projectId:'',itemId:'iron-ingot',quantity:10,includeAccount:!!loadAccount,busy:false,error:'',snapshot:null};let serial=0;
  function invalidate(notify=true){serial++;state.snapshot=null;state.error='';state.busy=false;if(notify)onChange()}
  async function refresh(stationId,context={}){
    if(state.busy)return null;
    state.error='';state.snapshot=null;state.busy=true;const ticket=++serial;onChange();
    try{
      if(!stationId)throw Error('Nejprve vyber vlastní stanici.');
      const [view,research,rules]=await Promise.all([api('/api/stations/view?id='+encodeURIComponent(stationId)),api('/api/research'),loadRules()]);
      if(ticket!==serial)return null;
      if(view?.station?.mine===false)throw Error('Vybraná stanice již není vlastní.');
      if(String(view?.station?.id)!==String(stationId))throw Error('Server vrátil jinou stanici');
      let account=null;
      if(state.includeAccount&&loadAccount){
        account=await loadAccount({reuseView:view,research});if(ticket!==serial)return null;
        if(!account||account.cancelled)throw Error('Načtení účtu bylo zrušeno nebo selhalo.');
        if(!account.stations.some(s=>s.id===String(stationId)))throw Error('Vybraná stanice není v aktuálním přehledu vlastních stanic.');
      }
      let market=null,marketError='';
      if(state.goal==='profit')try{market=await api('/api/market/summary')}catch{marketError='Tržní přehled se nepodařilo načíst.'}
      if(ticket!==serial)return null;
      const snapshot=buildProgressPlan({view,research,rules,catalog,goal:state.goal,projectId:state.projectId,itemId:state.itemId,quantity:Number(state.quantity),
        flows:productionFlows(view),systemResources:context.resources||[],depositsVerified:context.verified===true&&view.station.system===context.system,market,account,at:now()});
      if(marketError)snapshot.warnings.push(marketError);state.snapshot=snapshot;return snapshot;
    }catch(e){if(ticket===serial)state.error=String(e.message||e);return null}
    finally{if(ticket===serial){state.busy=false;onChange()}}
  }
  return {state,refresh,invalidate};
}
// GET-only account snapshot; stock and flows retain their source station.
function accountStationId(value){
  if(!['string','number'].includes(typeof value)||(typeof value==='number'&&!Number.isSafeInteger(value))||String(value).trim()==='')throw Error('Neplatné ID stanice');
  return String(value);
}
function stationExportSurplus(view,resource,units){
  const rules=(view.exports||[]).filter(r=>r.resource===resource);
  if(rules.length!==1)return {units:0,reason:rules.length?'Nejednoznačné exporty':'Chybí export do stanic'};
  const rule=rules[0],destinations=[rule.to].flat().filter(Boolean),group=(view.groups||[]).find(g=>g.id===rule.group);
  if(view.exportsOn!==true||rule.state==='off'||group?.on===false||!destinations.includes('stations'))return {units:0,reason:'Export do stanic není aktivní'};
  if(destinations.length!==1)return {units:0,reason:'Více exportních cílů; přebytek není rezervovaný jen stanicím'};
  const has=(o,k)=>o&&Object.prototype.hasOwnProperty.call(o,k);
  const scoped=has(rule.reserves,'stations')||has(rule.keeps,'stations');
  const reserve=has(rule.reserves,'stations')?rule.reserves.stations:has(rule,'reserve')?rule.reserve:has(rule.keeps,'stations')?rule.keeps.stations:rule.keep;
  if(typeof reserve!=='number'||!Number.isFinite(reserve)||reserve<0||rule.excess===true&&!scoped)return {units:0,reason:'Exportní rezerva není jednoznačně známá'};
  return {units:Math.max(0,Math.floor(units-reserve)),reserve,reason:'Přebytek nad rezervou exportu do stanic'};
}
function normalizeAccountStation(view,expected,productionFlows,at){
  if(!view?.station||accountStationId(view.station.id)!==expected||!Array.isArray(view.stock)||!Array.isArray(view.machines)||!Array.isArray(view.requests)||!Array.isArray(view.exports))throw Error('Neplatný detail stanice');
  if(view.station.mine===false)return null;
  const seen=new Set(),stock=view.stock.map(s=>{
    if(!s||typeof s.resource!=='string'||!s.resource||seen.has(s.resource)||!Number.isSafeInteger(s.units)||s.units<0)throw Error('Neplatné nebo duplicitní zásoby');
    seen.add(s.resource);return {resource:s.resource,units:s.units,exportSurplus:stationExportSurplus(view,s.resource,s.units)};
  });
  const flowSeen=new Set();
  const flows=productionFlows(view).map(f=>{
    if(typeof f.resource!=='string'||flowSeen.has(f.resource)||![f.made,f.used].every(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0))throw Error('Neplatný výrobní tok');
    flowSeen.add(f.resource);return {resource:f.resource,made:f.made,used:f.used};
  });
  return {id:expected,name:view.station.systemName||view.station.name||expected,system:view.station.system,at,stock,flows,
    activeMachines:view.machines.filter(m=>m.on).length,machines:view.machines.length,
    bottlenecks:flows.filter(f=>f.used>f.made).map(f=>f.resource)};
}
function aggregateAccountStations(stations){
  const rows=new Map(),seen=new Set();
  for(const station of stations){
    if(seen.has(station.id))throw Error('Duplicitní stanice ve společném přehledu');seen.add(station.id);
    const stock=new Map(station.stock.map(s=>[s.resource,s])),flows=new Map(station.flows.map(f=>[f.resource,f]));
    for(const resource of new Set([...stock.keys(),...flows.keys()])){
      const s=stock.get(resource),f=flows.get(resource),source={station:station.id,name:station.name,system:station.system,units:s?.units||0,
        exportable:s?.exportSurplus.units||0,reserveReason:s?.exportSurplus.reason||'Bez zásoby',made:f?.made||0,used:f?.used||0};
      if(!rows.has(resource))rows.set(resource,{resource,units:0,exportable:0,made:0,used:0,sources:[]});
      const row=rows.get(resource);for(const k of ['units','exportable','made','used']){row[k]+=source[k];if(!Number.isFinite(row[k])||(k==='units'&&!Number.isSafeInteger(row[k])))throw Error('Překročen rozsah součtu zásob')}
      row.sources.push(source);
    }
  }
  return [...rows.values()].sort((a,b)=>a.resource.localeCompare(b.resource)).map(r=>({...r,net:r.made-r.used}));
}
function summarizeAccountResearch(research,rules,stations){
  const record=v=>v&&typeof v==='object'&&!Array.isArray(v);
  if(!record(research?.done)||!record(research?.steps)||!record(research?.stations))throw Error('Neznámý formát výzkumu');
  for(const local of Object.values(research.stations))if(!record(local?.done)||!record(local?.steps))throw Error('Neplatný lokální výzkum');
  const project=(p,here)=>({id:p.id,name:p.name,done:rules.isDone(here,p.id),steps:rules.isBought(p)?null:rules.stepsDone(here,p.id),total:rules.isBought(p)?null:p.steps,bought:rules.isBought(p)});
  const global=rules.researchAt(research),globalProjects=rules.PROJECTS.filter(rules.isGlobal).map(p=>project(p,global));
  const local=stations.map(s=>{const here=rules.researchAt(research,s.id);return {station:s.id,name:s.name,projects:rules.PROJECTS.filter(p=>!rules.isGlobal(p)).map(p=>project(p,here))}});
  return {global:globalProjects,local};
}
function createAccountOverview({api,productionFlows,loadResearchRules,onChange=()=>{},now=()=>new Date().toISOString(),delay=ms=>new Promise(r=>setTimeout(r,ms))}){
  const state={busy:false,progress:0,total:0,error:'',snapshot:null,query:''};let serial=0,working=null;
  const emit=()=>onChange();
  function snapshot(cancelled=false){
    const inventoryComplete=!cancelled&&working.progress===working.total&&!working.failures.length;
    return {format:1,startedAt:working.startedAt,at:now(),inventoryComplete,complete:inventoryComplete&&working.research!==null,cancelled,
      listed:working.listed,total:working.total,loaded:working.stations.length,excluded:working.excluded,
      failures:working.failures.map(f=>({...f})),stations:[...working.stations],resources:aggregateAccountStations(working.stations),research:working.research,
      warnings:['Snímek se načítá postupně a není atomický. Výrobní toky jsou nominální; zásoby se mohou mezitím změnit.',
        'Přebytek nad exportní rezervou je kandidát pro dodávku, nikoliv potvrzený převod. Importní pravidla cíle a skutečné dodávky je nutné ověřit.']};
  }
  function invalidate(){serial++;state.busy=false;state.snapshot=null;state.error='';working=null;emit()}
  function cancel(){if(!state.busy)return;serial++;state.snapshot=snapshot(true);state.busy=false;state.error='Načítání zrušeno; zobrazené součty zahrnují jen načtené stanice.';working=null;emit()}
  async function refresh({reuseView=null,research=null}={}){
    if(state.busy)throw Error('Přehled účtu se již načítá');
    const ticket=++serial;state.busy=true;state.error='';state.snapshot=null;state.progress=0;state.total=0;
    working={startedAt:now(),stations:[],failures:[],research:null,listed:0,excluded:0,progress:0,total:0};emit();
    const current=()=>ticket===serial;
    try{
      const listing=await api('/api/stations');if(!current())return null;
      if(!Array.isArray(listing.stations))throw Error('Odpověď neobsahuje seznam stanic');
      const unique=new Map();for(const row of listing.stations){const id=accountStationId(row?.id);const old=unique.get(id);unique.set(id,{...row,id,mine:row.mine===false||old?.mine===false?false:row.mine})}
      working.listed=unique.size;const eligible=[...unique.values()].filter(s=>s.mine!==false);working.excluded=unique.size-eligible.length;
      working.total=eligible.length;state.total=eligible.length;emit();
      for(const [index,entry] of eligible.entries()){
        if(!current())return null;
        try{
          const view=reuseView&&String(reuseView.station?.id)===entry.id?reuseView:await api('/api/stations/view?id='+encodeURIComponent(entry.id));
          if(!current())return null;
          const station=normalizeAccountStation(view,entry.id,productionFlows,now());
          if(station)working.stations.push(station);else working.excluded++;
        }catch(e){if(!current())return null;working.failures.push({station:entry.id,name:entry.systemName||entry.name||entry.id,message:'Detail stanice se nepodařilo načíst nebo ověřit.'})}
        working.progress++;state.progress=working.progress;emit();
        if(index+1<eligible.length){await delay(150);if(!current())return null}
      }
      try{
        const r=research||await api('/api/research');if(!current())return null;
        const rules=await loadResearchRules();if(!current())return null;
        const known=eligible.filter(s=>!working.stations.some(x=>x.id===s.id)?working.failures.some(x=>x.station===s.id):true).map(s=>({id:s.id,name:s.systemName||s.name||s.id}));
        working.research=summarizeAccountResearch(r,rules,known);
      }catch{if(!current())return null;working.research=null}
      if(!current())return null;
      state.snapshot=snapshot();if(!state.snapshot.complete)state.error='Přehled je neúplný. Chybějící data nejsou nulové zásoby.';
      return state.snapshot;
    }catch(e){if(current()){state.snapshot=null;state.error=String(e.message||e)}return null}
    finally{if(current()){state.busy=false;working=null;emit()}}
  }
  return {state,refresh,invalidate,cancel};
}
// Editable logistics drafts. Only the verified game rule endpoint is used by the host.
function logisticsPayload(p, {catalog, view, stationId, deposits=[], priority=50}) {
  if(!['request','export'].includes(p.kind))throw Error('Neplatný druh pravidla');
  const size=catalog.items[p.resource]?.s, holds=catalog.buildings[view?.station?.building]?.s;
  if(!Number.isSafeInteger(size)||size<=0||!Number.isFinite(holds)||holds<=0)throw Error('Neznámá kapacita nebo položka');
  const limit=Math.min(1000000,Math.round(size*holds));
  if(!Number.isSafeInteger(p.target)||p.target<=0||p.target>limit)throw Error('Množství musí být celé číslo od 1 do '+limit+' ks');
  const group=p.existing?.group??p.group??view.groups?.find(g=>g.kind===p.kind)?.id;
  if(!view.groups?.some(g=>String(g.id)===String(group)&&g.kind===p.kind))throw Error('Chybí platná skupina '+p.kind+'; vytvoř ji ve hře');
  if(p.existing && p.existing.id==null)throw Error('Existující pravidlo nemá ID');
  const basic={station:stationId,kind:p.kind,id:p.existing?.id,resource:p.resource,group};
  // Preserve the client's optional line flag when updating an existing rule.
  if(typeof p.existing?.line==='boolean')basic.line=p.existing.line;
  if(p.kind==='export')return {...basic,keep:p.target,keeps:{stations:p.target},to:['stations'],excess:false};
  const from=p.source;
  if(!Array.isArray(from)||!from.length||new Set(from).size!==from.length||from.some(x=>!['miners','stations'].includes(x)))throw Error('Vyber zdroj: mineři a/nebo stanice');
  if(from.includes('miners')&&!deposits.includes(p.resource))throw Error('Mineři jsou povoleni pouze pro ložiska ověřená v systému');
  const rank=p.priority??p.existing?.priority??priority;
  if(!Number.isInteger(rank)||rank<0||rank>100)throw Error('Priorita musí být celé číslo 0–100');
  return {...basic,amount:p.target,from:[...from],...(from.includes('stations')?{priority:rank}:{})};
}
// Shared validation for server-visible system structures; unknown never proves empty.
function summarizeSystemStructures(list,systemId,lookup){
  if(!Array.isArray(list))throw Error('Neznámý seznam staveb');
  const seen=new Set();let stationBays=0,upgradeGrade=0,stations=0,miners=0,unknown=0,ownStations=0,foreignStations=0,unknownOwnerStations=0,stationTier=0,minerTier=0,stationTierUnknown=false,minerTierUnknown=false;
  for(const s of list){
    if(!s||typeof s.id!=='string'||seen.has(s.id)||typeof s.building!=='string'||(s.system!==undefined&&s.system!==systemId))throw Error('Neplatná nebo duplicitní stavba');
    seen.add(s.id);const spec=lookup(s.building);if(!spec){unknown++;continue}
    const kind=spec.kind??spec.k,tier=spec.tier??spec.t;
    if(!kind){unknown++;continue}
    if(kind==='station'){
      if(Array.isArray(spec.bays)){const level=s.bayLevel??0;if(!Number.isInteger(level)||level<0||level>=spec.bays.length){stationTierUnknown=true;stationBays=null}else{if(stationBays!==null)stationBays=Math.max(stationBays,spec.bays[level]);upgradeGrade=Math.max(upgradeGrade,level+1)}}
      stations++;if(s.mine===true)ownStations++;else if(s.mine===false)foreignStations++;else unknownOwnerStations++;
      if(Number.isInteger(tier)&&tier>0)stationTier=Math.max(stationTier,tier);else stationTierUnknown=true;
    }
    if(kind==='miner'){miners++;if(Number.isInteger(tier)&&tier>0)minerTier=Math.max(minerTier,tier);else minerTierUnknown=true}
  }
  return {stationBays,upgradeGrade:stationTierUnknown||minerTierUnknown||unknown?null:Math.max(upgradeGrade,stationTier,minerTier),stations,miners,unknown,ownStations,foreignStations,unknownOwnerStations,stationTier:stationTierUnknown||unknown?null:stationTier,minerTier:minerTierUnknown||unknown?null:minerTier,upgradeTier:stationTierUnknown||minerTierUnknown||unknown?null:Math.max(stationTier,minerTier)};
}
function compareExploredRows(a,b,key='name',direction='asc'){
  const name=()=>String(a.name).localeCompare(String(b.name))||a.id.localeCompare(b.id);
  if(key==='name')return (direction==='desc'?-1:1)*name();
  const field={stations:'stations',miners:'miners',upgrade:'upgradeTier'}[key];if(!field)return name();
  const value=row=>{const n=key==='upgrade'?(row.upgradeGrade??row.upgradeTier):row[field];return row.error||row.unknown||!Number.isFinite(n)?null:n};
  const av=value(a),bv=value(b);if(av===null||bv===null)return av===bv?name():av===null?1:-1;
  return (av-bv)*(direction==='desc'?-1:1)||name();
}
// Server-confirmed scouting list; structures are read in bounded GET batches.
function createExploredSystems({api,catalog,loadMap,buildingSpec=id=>catalog.buildings[id],systemLabel=(id,system)=>system.name,onChange=()=>{},delay=ms=>new Promise(resolve=>setTimeout(resolve,ms)),now=()=>new Date().toISOString()}){
  const state={busy:false,error:'',rows:[],total:0,progress:0,at:null,complete:false,query:'',filter:'all',sort:'name',direction:'asc',page:0,notice:'Načti serverový seznam prozkoumaných systémů.'};
  let serial=0,revision=0;
  const emit=()=>onChange();
  function invalidate(){serial++;state.busy=false;state.rows=[];state.total=state.progress=0;state.at=null;state.complete=false;state.error='';state.query='';state.filter='all';state.page=0;state.notice='Seznam zneplatněn; načti jej znovu.';emit()}
  function cancel(){if(!state.busy)return;serial++;state.busy=false;state.complete=false;state.notice='Načítání zrušeno. Neověřené stavby nejsou nulové.';emit()}
  function stale(){revision++;if(!state.rows.length&&!state.busy)return;state.complete=false;state.notice='Hra ohlásila změnu. Obnov seznam pro aktuální stav.';emit()}
  async function refresh(){
    if(state.busy)return;
    const ticket=++serial,startedRevision=revision;Object.assign(state,{busy:true,error:'',rows:[],total:0,progress:0,complete:false,at:null,page:0,notice:'Načítám průzkum…'});emit();
    try{
      const units=await api('/api/units');if(ticket!==serial)return;
      if(!Array.isArray(units.scouted)||units.scouted.some(id=>typeof id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(id)))throw Error('Neznámý formát seznamu scouted; systémy nelze ověřit');
      const ids=[...new Set(units.scouted)];state.total=ids.length;emit();
      if(!ids.length){state.complete=true;state.at=now();state.notice='Server nevrátil žádné prozkoumané systémy.';return}
      const meta=await api('/api/map/meta');if(ticket!==serial)return;
      if(!['number','string'].includes(typeof meta.seed)||String(meta.seed).trim()===''||!Number.isSafeInteger(Number(meta.seed)))throw Error('Chybí platný seed mapy');
      const map=await loadMap();if(ticket!==serial)return;
      for(let i=0;i<ids.length;i++){
        const id=ids[i];let system=null,name=id,error='';
        try{system=map.systemById(Number(meta.seed),id);if(!system||system.id!==id||!Number.isFinite(system.x)||!Number.isFinite(system.y))throw Error('Systém nelze přeložit podle aktuálního seedu');name=systemLabel(id,system)||system.name||id}catch(e){error=String(e.message||e)}
        state.rows.push({id,name,system,stations:null,miners:null,unknown:0,checkedAt:null,error});
        if(i%100===99){emit();await delay(0);if(ticket!==serial)return}
      }
      state.rows.sort((a,b)=>a.name.localeCompare(b.name));const rowsById=new Map(state.rows.map(row=>[row.id,row]));emit();
      for(let i=0;i<ids.length;i+=20){
        if(ticket!==serial)return;
        const part=ids.slice(i,i+20),rows=part.map(id=>rowsById.get(id));
        try{
          const body=await api('/api/structures?systems='+encodeURIComponent(part.join(',')));if(ticket!==serial)return;
          const systems=body.systems;
          if(!systems||typeof systems!=='object'||Array.isArray(systems))throw Error('Neznámý formát staveb systémů');
          // Game systemview.askStructures: omitted keys in a successful batch mean no buildings.
          for(const row of rows){
            try{
              const list=Object.prototype.hasOwnProperty.call(systems,row.id)?systems[row.id]:[];
              Object.assign(row,summarizeSystemStructures(list,row.id,buildingSpec),{checkedAt:now()});
            }catch(e){row.error=String(e.message||e)}
          }
        }catch(e){if(ticket!==serial)return;for(const row of rows)row.error=String(e.message||e)}
        state.progress+=part.length;emit();
        if(i+20<ids.length){await delay(150);if(ticket!==serial)return}
      }
      state.at=now();state.complete=state.rows.every(row=>!row.error&&!row.unknown&&row.checkedAt);
      state.notice=state.complete?'Všechny systémy načteny.':'Neúplný přehled: chyby nebo neznámé typy staveb zůstávají označené.';
      if(revision!==startedRevision){state.complete=false;state.notice='Během načítání hra ohlásila změnu. Obnov přehled.'}
    }catch(e){if(ticket===serial){state.error=String(e.message||e);state.notice='Načítání selhalo; chybějící údaje nejsou nulové.'}}
    finally{if(ticket===serial){state.busy=false;emit()}}
  }
  function filtered(){const query=state.query.trim().toLocaleLowerCase('cs-CZ');return state.rows.filter(row=>(row.name+' '+row.id).toLocaleLowerCase('cs-CZ').includes(query)&&(state.filter==='all'||state.filter==='stations'&&row.stations>0||state.filter==='miners'&&row.miners>0||state.filter==='empty'&&row.stations===0&&row.miners===0&&!row.unknown&&!row.error))}
  function page(){const rows=filtered().sort((a,b)=>compareExploredRows(a,b,state.sort,state.direction)),pages=Math.max(1,Math.ceil(rows.length/100));state.page=Math.max(0,Math.min(state.page,pages-1));return {rows:rows.slice(state.page*100,state.page*100+100),total:rows.length,pages,index:state.page}}
  return {state,refresh,cancel,invalidate,stale,page};
}
// Pointer dragging stays outside render() so a drag keeps its pointer capture.
function clampFloatingPosition(position,viewport,width=57,height=57){
  if(!position||!Number.isFinite(position.left)||!Number.isFinite(position.top))return null;
  return {left:Math.max(0,Math.min(Math.max(0,viewport.width-width),position.left)),top:Math.max(0,Math.min(Math.max(0,viewport.height-height),position.top))};
}
function makeMovableButton(button,{getPosition,setPosition,viewport,save}){
  let moving=null,suppressClick=false;
  function place(position){const p=clampFloatingPosition(position,viewport());if(!p)return;Object.assign(button.style,{left:p.left+'px',top:p.top+'px',right:'auto',bottom:'auto'});setPosition(p)}
  function restore(){place(getPosition())}
  function stop(e){
    if(!moving||e.pointerId!==moving.id)return;
    if(moving.dragged){suppressClick=true;save()}
    const id=moving.id;moving=null;if(button.hasPointerCapture?.(id))button.releasePointerCapture?.(id);
  }
  button.addEventListener('pointerdown',e=>{
    if(e.button!==0||moving)return;const rect=button.getBoundingClientRect();
    suppressClick=false;moving={id:e.pointerId,x:e.clientX,y:e.clientY,left:rect.left,top:rect.top,dragged:false};button.setPointerCapture?.(e.pointerId);
  });
  button.addEventListener('pointermove',e=>{
    if(!moving||e.pointerId!==moving.id)return;
    const dx=e.clientX-moving.x,dy=e.clientY-moving.y;if(!moving.dragged&&Math.hypot(dx,dy)<5)return;
    moving.dragged=true;e.preventDefault();place({left:moving.left+dx,top:moving.top+dy});
  });
  button.addEventListener('pointerup',stop);button.addEventListener('pointercancel',stop);button.addEventListener('lostpointercapture',stop);
  button.addEventListener('click',e=>{if(suppressClick&&e.detail!==0){suppressClick=false;e.preventDefault();e.stopImmediatePropagation()}else suppressClick=false},true);
  restore();
  return {restore,reset(){setPosition(null);Object.assign(button.style,{left:'auto',top:'auto',right:'18px',bottom:'22px'});save()}};
}
// Bounded nearby suggestions. Every displayed candidate passes a fresh server structure check.
function createExpansionAdvisor({api,catalog,loadRules,summarizeStructures,evaluateSite=null,coverageFor=null,systemLabel=(id,s)=>s.name,onChange=()=>{},delay=ms=>new Promise(resolve=>setTimeout(resolve,ms)),now=()=>new Date().toISOString()}){
  const state={busy:false,preparing:false,goalMode:'general',minerId:'miner-1',context:null,availableMiners:[],sites:0,totalSites:0,siteLimited:false,prefilterDone:0,prefilterTotal:0,prefilterLimited:false,error:'',notice:'Vyber výchozí systém a spusť hledání.',rows:[],origin:null,radius:500,wanted:'',at:null,phase:'idle',progress:0,total:0,nearby:0,limited:false,excluded:{mined:0,occupied:0,unknown:0,unsuitable:0,placement:0,depleted:0}};let serial=0;
  const emit=()=>onChange();
  function invalidate(){serial++;Object.assign(state,{busy:false,preparing:false,context:null,rows:[],origin:null,at:null,error:'',phase:'idle',notice:'Podklady se změnily; spusť nové hledání.'});emit()}
  function cancel(){if(!state.busy)return;serial++;state.busy=false;state.rows=[];state.at=null;state.phase='canceled';state.notice='Hledání zrušeno; návrhy nebyly dokončené.';emit()}
  function deposits(world,seed,system){
    const generated=world.generateSystem(seed,system);if(!Array.isArray(generated?.bodies))throw Error('Neznámý generátor planet');
    const ids=new Set();let richness=0,n=0;
    for(const body of generated.bodies.filter(b=>b?.letter)){
      if(!Array.isArray(body.deposits))throw Error('Neznámá ložiska planety');
      for(const id of body.deposits){if(catalog.items[id]?.c!=='raw')throw Error('Neznámá surovina');ids.add(id)}
      const value=world.richnessOf(body);if(!Number.isFinite(value)||value<0)throw Error('Neplatná bohatost');richness+=value;n++;
    }
    return {resources:[...ids].sort(),richness:n?richness/n:0};
  }
  async function search({originId,radius=state.radius,wanted=state.wanted,context=null}={}){
    if(state.busy)return;
    const ticket=++serial;Object.assign(state,{busy:true,preparing:false,context:null,sites:0,totalSites:0,siteLimited:false,prefilterDone:0,prefilterTotal:0,prefilterLimited:false,error:'',rows:[],origin:null,at:null,phase:'loading',notice:'Načítám čerstvé podklady…',progress:0,total:0,nearby:0,limited:false,excluded:{mined:0,occupied:0,unknown:0,unsuitable:0,placement:0,depleted:0}});emit();
    try{
      radius=Number(radius);if(!Number.isInteger(radius)||radius<50||radius>1000)throw Error('Poloměr musí být celé číslo 50–1000 ly');
      if(!/^-?\d{1,10}\.-?\d{1,10}\.\d{1,3}$/.test(String(originId??'')))throw Error('Nejprve načti stanici nebo otevři systém na mapě');
      if(wanted&&catalog.items[wanted]?.c!=='raw')throw Error('Vyber známou těženou surovinu');state.radius=radius;state.wanted=wanted;
      if(context){
        context=JSON.parse(JSON.stringify(context));
        if(context.station?.system!==originId||!Array.isArray(context.needs)||context.needs.some(n=>catalog.items[n.resource]?.c!=='raw'||!Number.isFinite(n.amount)||n.amount<=0||!Number.isFinite(n.stacks)||n.stacks<=0)||typeof evaluateSite!=='function'||typeof coverageFor!=='function')throw Error('Neplatný cíl expanze nebo jiná stanice');
        wanted='';state.context=context;if(!context.needs.length){state.at=now();state.phase='done';state.notice=context.blocked?.length?'Z chybějících receptů nelze odvodit potřebnou novou těžbu; nejprve doplň výrobní podklady.':'Materiálový plán nevyžaduje další těžené vstupy. Nejprve využij stávající zásoby, výrobu a navržené dodávky.';return}
      }
      const units=await api('/api/units');if(ticket!==serial)return;
      if(!Array.isArray(units.scouted)||units.scouted.some(id=>typeof id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(id)))throw Error('Neznámý seznam průzkumu');
      const scouted=new Set(units.scouted),meta=await api('/api/map/meta');if(ticket!==serial)return;
      if(!['number','string'].includes(typeof meta.seed)||String(meta.seed).trim()===''||!Number.isSafeInteger(Number(meta.seed)))throw Error('Chybí platný seed');const seed=Number(meta.seed);
      const rules=await loadRules(),{map,world}=rules;if(ticket!==serial)return;
      if(Array.isArray(rules.BUILDINGS))state.availableMiners=rules.BUILDINGS.filter(spec=>spec.kind==='miner').map(spec=>({id:spec.id,name:spec.name||spec.id}));
      if(context&&rules.buildingById?.(context.minerId)?.kind!=='miner')throw Error('Vybraný model mineru není v aktuálních pravidlech');
      const origin=map.systemById(seed,originId);if(!origin||origin.id!==originId||!Number.isFinite(origin.x)||!Number.isFinite(origin.y))throw Error('Výchozí systém nelze ověřit');
      const generatedCache=new Map(),searchWorld={richnessOf:world.richnessOf,generateSystem:(value,s)=>{if(!generatedCache.has(s.id))generatedCache.set(s.id,world.generateSystem(value,s));return generatedCache.get(s.id)}};
      state.origin={id:origin.id,name:systemLabel(origin.id,origin),x:origin.x,y:origin.y};
      const baseline=deposits(searchWorld,seed,origin),range=map.sectorRange(origin.x-radius,origin.y-radius,origin.x+radius,origin.y+radius);
      if(!range||![range.sx0,range.sx1,range.sy0,range.sy1].every(Number.isInteger)||range.sx1<range.sx0||range.sy1<range.sy0||(range.sx1-range.sx0+1)*(range.sy1-range.sy0+1)>225)throw Error('Rozsah hledání překročil limit 225 sektorů');
      state.phase='map';state.notice='Hledám okolní systémy…';emit();const nearby=new Map();let sectors=0;
      for(let sy=range.sy0;sy<=range.sy1;sy++)for(let sx=range.sx0;sx<=range.sx1;sx++){
        const systems=map.sectorSystems(seed,sx,sy);if(!Array.isArray(systems)||systems.length>64)throw Error('Neznámý formát sektoru');
        for(const system of systems){
          if(!system||typeof system.id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(system.id)||!Number.isFinite(system.x)||!Number.isFinite(system.y))throw Error('Neplatná data systému');
          const distance=Math.hypot(system.x-origin.x,system.y-origin.y);
          if(system.id!==originId&&distance<=radius)nearby.set(system.id,{id:system.id,name:systemLabel(system.id,system)||system.name,system,distance,scouted:scouted.has(system.id)});
        }
        if(++sectors%4===0){await delay(0);if(ticket!==serial)return}
      }
      state.nearby=nearby.size;let ordered=[...nearby.values()].sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id));
      if(context){
        const preliminary=ordered.slice(0,4000),useful=[];state.prefilterTotal=preliminary.length;state.prefilterLimited=ordered.length>4000;state.phase='prefilter';state.notice='Porovnávám suroviny v okolí s materiálovým cílem…';emit();
        for(const candidate of preliminary){
          if(ticket!==serial)return;
          try{const info=deposits(searchWorld,seed,candidate.system),coverage=coverageFor(context,info.resources);if(coverage>0)useful.push({...candidate,goalCoverage:coverage});else state.excluded.unsuitable++}catch{state.excluded.unknown++}
          state.prefilterDone++;if(state.prefilterDone%5===0){emit();await delay(0);if(ticket!==serial)return}
        }
        ordered=useful.sort((a,b)=>b.goalCoverage-a.goalCoverage||a.distance-b.distance||a.id.localeCompare(b.id));
      }
      const chosen=[...ordered.filter(r=>!r.scouted).slice(0,90),...ordered.filter(r=>r.scouted).slice(0,30)],chosenIds=new Set(chosen.map(r=>r.id));
      const candidates=[...chosen,...ordered.filter(r=>!chosenIds.has(r.id))].slice(0,120);state.total=candidates.length;state.limited=ordered.length>120||state.prefilterLimited;
      state.phase='structures';state.notice='Ověřuji, že kandidáti nemají minery…';emit();const checked=[];
      for(let i=0;i<candidates.length;i+=20){
        if(ticket!==serial)return;const part=candidates.slice(i,i+20);
        try{
          const body=await api('/api/structures?systems='+encodeURIComponent(part.map(r=>r.id).join(',')));if(ticket!==serial)return;
          if(!body.systems||typeof body.systems!=='object'||Array.isArray(body.systems))throw Error('Neznámý formát staveb');
          for(const candidate of part){
            try{
              const list=Object.prototype.hasOwnProperty.call(body.systems,candidate.id)?body.systems[candidate.id]:[],built=summarizeStructures(list,candidate.id);
              if(built.miners>0){state.excluded.mined++;continue}
              if(built.unknown||built.miners!==0){state.excluded.unknown++;continue}
              if(built.foreignStations>0||built.unknownOwnerStations>0){state.excluded.occupied++;continue}
              checked.push({...candidate,built,checkedAt:now()});
            }catch{state.excluded.unknown++}
          }
        }catch{if(ticket!==serial)return;state.excluded.unknown+=part.length}
        state.progress+=part.length;emit();if(i+20<candidates.length){await delay(150);if(ticket!==serial)return}
      }
      state.phase='resources';state.notice='Porovnávám generovaná ložiska…';emit();const results=[];
      for(let i=0;i<checked.length;i++){
        const candidate=checked[i];
        try{
          const info=deposits(searchWorld,seed,candidate.system);if(!info.resources.length||wanted&&!info.resources.includes(wanted)){state.excluded.unsuitable++;}else{
          const extra=info.resources.filter(id=>!baseline.resources.includes(id));
          const score=extra.length*30+info.resources.length*5+Math.min(10,info.richness)*2;
          results.push({...candidate,...info,newResources:extra,score});}
        }catch{state.excluded.unknown++}
        if(i%5===4){await delay(0);if(ticket!==serial)return}
      }
      if(ticket!==serial)return;
      if(context){
        const shortlist=results.filter(row=>coverageFor(context,row.resources)>0).sort((a,b)=>coverageFor(context,b.resources)-coverageFor(context,a.resources)||Number(a.scouted)-Number(b.scouted)||a.distance-b.distance).slice(0,24);
        state.siteLimited=results.filter(row=>coverageFor(context,row.resources)>0).length>24;state.totalSites=shortlist.length;state.phase='sites';state.notice='Ověřuji zůstatky a klientské místo pro novou základnu…';emit();
        const verified=[];
        for(const row of shortlist){
          if(ticket!==serial)return;
          try{
            const live=await api('/api/structures?system='+encodeURIComponent(row.id));if(ticket!==serial)return;
            const site=evaluateSite({catalog,rules,system:row.system,generated:searchWorld.generateSystem(seed,row.system),live,context,scouted:row.scouted,distance:row.distance,radius});
            if(site.eligible)verified.push({...row,site,score:site.score,checkedAt:now()});else state.excluded[site.reasonCode in state.excluded?site.reasonCode:'unknown']++;
          }catch{if(ticket!==serial)return;state.excluded.unknown++}
          state.sites++;emit();await delay(150);if(ticket!==serial)return;
        }
        state.rows=verified.sort((a,b)=>b.site.coverage-a.site.coverage||b.score-a.score||Number(a.scouted)-Number(b.scouted)||a.distance-b.distance||a.id.localeCompare(b.id));state.at=now();state.phase='done';state.notice=state.rows.length?'Podmíněné návrhy podle materiálového cíle jsou připravené.':'Nebyla ověřena vhodná lokalita pro vybraný cíl a model mineru.';return;
      }
      state.rows=results.sort((a,b)=>Number(a.scouted)-Number(b.scouted)||b.score-a.score||a.distance-b.distance||a.id.localeCompare(b.id));state.at=now();state.phase='done';state.notice=state.rows.length?'Návrhy ověřeny bez serverem vrácených minerů. Ložiska jsou generovaná; nejde o potvrzení zbývajících zásob, možnosti stavby ani bezpečí před NPC.':'V prověřeném výběru nebyl vhodný systém bez minerů.';
    }catch(e){if(ticket===serial){state.error=String(e.message||e);state.rows=[];state.phase='error'}}
    finally{if(ticket===serial){state.busy=false;emit()}}
  }
  return {state,search,cancel,invalidate};
}
// Generated resource search with explicit coverage budgets and optional live eligibility checks.
function scannerResourcesMatch(planets,requested,mode='all',scope='system'){
  const fits=ids=>mode==='all'?requested.every(id=>ids.has(id)):requested.some(id=>ids.has(id));
  if(scope==='planet')return planets.filter(p=>fits(new Set(p.resources))).map(p=>p.letter);
  const union=new Set(planets.flatMap(p=>p.resources));return fits(union)?planets.filter(p=>p.resources.some(id=>requested.includes(id))).map(p=>p.letter):[];
}
function createGalaxyScanner({api,catalog,loadRules,summarizeStructures,systemLabel=(id,s)=>s.name,onChange=()=>{},delay=ms=>new Promise(resolve=>setTimeout(resolve,ms)),now=()=>new Date().toISOString()}){
  const defaults={resources:[],mode:'all',scope:'system',radius:1000,sectorLimit:512,systemLimit:2000,resultLimit:200,exploration:'new',onlyIdle:true};
  const state={config:{...defaults,resources:[]},busy:false,error:'',notice:'Vyber suroviny a spusť scanner.',rows:[],origin:null,at:null,phase:'idle',complete:false,canceled:false,sectors:0,totalSectors:0,visited:0,generated:0,matches:0,failed:0,excluded:0,verificationFailed:0,limits:{},page:0};let serial=0;
  const emit=()=>onChange();let paintedAt=0;
  const progressEmit=()=>{const time=Date.now();if(time-paintedAt>=100){paintedAt=time;emit()}};
  function invalidate(notify=true){serial++;Object.assign(state,{busy:false,error:'',rows:[],origin:null,at:null,complete:false,canceled:false,phase:'idle',page:0,notice:'Podklady nebo volby se změnily; spusť nové hledání.'});if(notify)emit()}
  function cancel(){if(!state.busy)return;serial++;Object.assign(state,{busy:false,complete:false,canceled:true,phase:'canceled',at:now(),notice:'Zrušeno. Zobrazené řádky jsou pouze dokončená dílčí část hledání.'});emit()}
  function page(){const pages=Math.max(1,Math.ceil(state.rows.length/50));state.page=Math.max(0,Math.min(state.page,pages-1));return {rows:state.rows.slice(state.page*50,state.page*50+50),index:state.page,pages,total:state.rows.length}}
  async function search({center,...options}={}){
    if(state.busy)return;
    const ticket=++serial;Object.assign(state,{busy:true,error:'',notice:'Načítám podklady scanneru…',rows:[],origin:null,at:null,phase:'loading',complete:false,canceled:false,sectors:0,totalSectors:0,visited:0,generated:0,matches:0,failed:0,excluded:0,verificationFailed:0,limits:{},page:0});emit();
    try{
      if(ticket!==serial)return;
      const opts={...state.config,...options,resources:[...(options.resources??state.config.resources)]};
      for(const [key,min,max] of [['radius',50,5000],['sectorLimit',1,4096],['systemLimit',1,20000],['resultLimit',1,2000]]){opts[key]=Number(opts[key]);if(!Number.isInteger(opts[key])||opts[key]<min||opts[key]>max)throw Error('Neplatný limit '+key+' ('+min+'–'+max+')')}
      opts.resources=[...new Set(opts.resources)];if(!opts.resources.length||opts.resources.some(id=>catalog.items[id]?.c!=='raw'))throw Error('Vyber alespoň jednu známou těženou surovinu');
      if(!['all','any'].includes(opts.mode)||!['system','planet'].includes(opts.scope)||!['all','new','known'].includes(opts.exploration)||typeof opts.onlyIdle!=='boolean')throw Error('Neplatné volby scanneru');
      if(!center||center.systemId!==undefined&&!/^-?\d{1,10}\.-?\d{1,10}\.\d{1,3}$/.test(center.systemId)||center.systemId===undefined&&(!Number.isFinite(center.x)||!Number.isFinite(center.y)))throw Error('Zadej platný systém nebo souřadnice středu');
      state.config={...opts,resources:[...opts.resources]};
      const units=await api('/api/units');if(ticket!==serial)return;
      if(!Array.isArray(units.scouted)||units.scouted.some(id=>typeof id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(id)))throw Error('Neznámý seznam průzkumu');const scouted=new Set(units.scouted);
      const meta=await api('/api/map/meta');if(ticket!==serial)return;
      if(!['number','string'].includes(typeof meta.seed)||String(meta.seed).trim()===''||!Number.isSafeInteger(Number(meta.seed)))throw Error('Chybí platný seed');const seed=Number(meta.seed);
      const {map,world,deposits}=await loadRules();if(ticket!==serial)return;
      let origin=center.systemId!==undefined?map.systemById(seed,center.systemId):{x:center.x,y:center.y};
      if(!origin||!Number.isFinite(origin.x)||!Number.isFinite(origin.y)||(center.systemId!==undefined&&origin.id!==center.systemId))throw Error('Střed hledání nelze přeložit');
      if(Number.isFinite(map.WORLD_EDGE)&&(Math.abs(origin.x)>map.WORLD_EDGE||Math.abs(origin.y)>map.WORLD_EDGE))throw Error('Souřadnice jsou mimo mapu');
      state.origin={id:origin.id??null,x:origin.x,y:origin.y,name:origin.id?systemLabel(origin.id,origin):'Vlastní souřadnice'};
      const range=map.sectorRange(origin.x-opts.radius,origin.y-opts.radius,origin.x+opts.radius,origin.y+opts.radius),size=map.SECTOR;
      if(!Number.isFinite(size)||size<=0||!range||![range.sx0,range.sx1,range.sy0,range.sy1].every(Number.isInteger)||range.sx1<range.sx0||range.sy1<range.sy0||(range.sx1-range.sx0+1)*(range.sy1-range.sy0+1)>8192)throw Error('Neplatný nebo příliš velký rozsah sektorů');
      const sectors=[];
      for(let sy=range.sy0;sy<=range.sy1;sy++)for(let sx=range.sx0;sx<=range.sx1;sx++){
        const dx=Math.max(sx*size-origin.x,0,origin.x-(sx+1)*size),dy=Math.max(sy*size-origin.y,0,origin.y-(sy+1)*size);
        const d=Math.hypot(dx,dy);if(d<=opts.radius)sectors.push({sx,sy,d});
      }
      sectors.sort((a,b)=>a.d-b.d||a.sy-b.sy||a.sx-b.sx);state.totalSectors=sectors.length;state.phase='scan';state.notice='Prohledávám generovaná ložiska…';emit();
      const seen=new Set(),pending=[];let stopped=false;
      function append(row){if(state.rows.length>=opts.resultLimit){state.limits.results=true;stopped=true;return}state.rows.push(row);if(state.rows.length>=opts.resultLimit){state.limits.results=true;stopped=true}}
      async function flush(){
        if(!pending.length||ticket!==serial)return;const part=pending.splice(0,20);state.phase='verify';emit();if(ticket!==serial)return;
        try{
          const body=await api('/api/structures?systems='+encodeURIComponent(part.map(r=>r.id).join(',')));if(ticket!==serial)return;
          if(!body.systems||typeof body.systems!=='object'||Array.isArray(body.systems))throw Error('Neplatné stavby');
          for(const row of part){
            try{
              const list=Object.prototype.hasOwnProperty.call(body.systems,row.id)?body.systems[row.id]:[],built=summarizeStructures(list,row.id);
              if(built.unknown||built.miners!==0||built.foreignStations>0||built.unknownOwnerStations>0){state.excluded++;continue}
              append({...row,built,checkedAt:now(),verification:'idle'});if(stopped)break;
            }catch{state.verificationFailed++}
          }
        }catch{if(ticket!==serial)return;state.verificationFailed+=part.length}
        state.phase='scan';emit();if(!stopped){await delay(150)}
      }
      outer:for(const sector of sectors){
        if(ticket!==serial)return;if(state.sectors>=opts.sectorLimit){state.limits.sectors=true;break}
        state.sectors++;const systems=map.sectorSystems(seed,sector.sx,sector.sy);
        if(!Array.isArray(systems)||systems.length>64)throw Error('Neznámý formát sektoru');
        for(const system of systems){
          if(ticket!==serial)return;
          if(!system||typeof system.id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(system.id)||!Number.isFinite(system.x)||!Number.isFinite(system.y))throw Error('Neplatná data systému');
          const distance=Math.hypot(system.x-origin.x,system.y-origin.y);if(seen.has(system.id)||distance>opts.radius)continue;seen.add(system.id);
          if(state.visited>=opts.systemLimit){state.limits.systems=true;break outer}state.visited++;
          const known=scouted.has(system.id);if(opts.exploration==='new'&&known||opts.exploration==='known'&&!known)continue;
          state.generated++;
          try{
            const generated=world.generateSystem(seed,system);if(!Array.isArray(generated?.bodies))throw Error('Neznámé planety');const letters=new Set(),planets=[];
            for(const p of generated.bodies.filter(p=>p?.letter)){
              if(typeof p.letter!=='string'||letters.has(p.letter)||!Array.isArray(p.deposits)||p.deposits.some(id=>catalog.items[id]?.c!=='raw'))throw Error('Neznámá ložiska');letters.add(p.letter);
              const richness=world.richnessOf(p);if(!Number.isFinite(richness)||richness<0)throw Error('Neznámá bohatost');const initialUnits={};
              for(const id of p.deposits){const n=deposits.depositSize(id,richness);if(!Number.isFinite(n)||n<0)throw Error('Neznámá velikost ložiska');initialUnits[id]=n}
              planets.push({letter:p.letter,resources:[...new Set(p.deposits)],richness,initialUnits});
            }
            const matchingPlanets=scannerResourcesMatch(planets,opts.resources,opts.mode,opts.scope);
            if(matchingPlanets.length){state.matches++;const row={id:system.id,name:systemLabel(system.id,system)||system.name,system,distance,scouted:known,resources:[...new Set(planets.flatMap(p=>p.resources))],planets,matchingPlanets,verification:'generated-only',built:null,checkedAt:null};
              if(opts.onlyIdle){pending.push(row);if(pending.length>=20){await flush();if(ticket!==serial)return}}else append(row);
            }
          }catch{state.failed++}
          if(stopped)break outer;if(state.generated%5===0){progressEmit();await delay(0);if(ticket!==serial)return}
        }
        progressEmit();await delay(0);if(ticket!==serial)return;
      }
      if(!stopped)await flush();if(ticket!==serial)return;
      state.rows.sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id));state.at=now();state.complete=!Object.keys(state.limits).length&&!state.failed&&!state.verificationFailed;state.phase='done';state.notice=state.complete?'Hledání v celém zadaném rozsahu dokončeno.':'Dílčí výsledek: dosažený limit nebo neověřené systémy. Podrobnosti jsou níže.';
    }catch(e){if(ticket===serial){state.error=String(e.message||e);state.complete=false;state.phase='error'}}
    finally{if(ticket===serial){state.busy=false;emit()}}
  }
  return {state,search,cancel,invalidate,page};
}
// Read-only mining simulation using the game's own mining/deposit/building functions.
function buildMiningPlan({catalog,rules,system,generated,live=null,scouted=null,config={},at}){
  const c={target:'',mode:'even',share:100,minHours:0,specId:'',...config};
  for(const key of ['share','minHours'])if(c[key]===null||typeof c[key]==='boolean'||String(c[key]).trim()==='')throw Error('Vyplň podíl a minimální životnost');
  c.share=Number(c.share);c.minHours=Number(c.minHours);
  if(typeof c.target!=='string'||typeof c.specId!=='string'||scouted!==null&&typeof scouted!=='boolean')throw Error('Neplatný cíl nebo průzkum');
  if(c.target&&catalog.items[c.target]?.c!=='raw'||!['even','focus'].includes(c.mode)||!Number.isInteger(c.share)||c.share<0||c.share>100||!Number.isFinite(c.minHours)||c.minHours<0||c.minHours>87600||c.mode==='focus'&&!c.target)throw Error('Neplatné volby rozdělení nebo životnosti');
  for(const key of ['minerRates','mineable','canMine','evenSplit','splitOf','rebalance','splitProblem','drainOf','soonestEmpty','usedUp','depositSize','richnessOf','buildingById'])if(typeof rules[key]!=='function')throw Error('Chybí herní pravidlo '+key);
  if(!Array.isArray(rules.BUILDINGS)||!Array.isArray(generated?.bodies))throw Error('Neznámý formát generátoru nebo minerů');
  const specs=rules.BUILDINGS.filter(s=>s.kind==='miner');if(!specs.length||new Set(specs.map(s=>s.id)).size!==specs.length)throw Error('Chybí jednoznačné modely minerů');
  for(const spec of specs)if(typeof spec.id!=='string'||!Number.isInteger(spec.tier)||spec.tier<1||!Number.isFinite(spec.speed??1)||(spec.speed??1)<0||!Number.isFinite(rules.drainOf(spec))||rules.drainOf(spec)<=0)throw Error('Neznámé vlastnosti mineru');
  if(c.specId&&!specs.some(s=>s.id===c.specId))throw Error('Vybraný miner není v aktuálních pravidlech');
  const planets=generated.bodies.filter(b=>b?.letter).map(body=>{
    if(typeof body.letter!=='string'||!Array.isArray(body.deposits)||new Set(body.deposits).size!==body.deposits.length||body.deposits.some(id=>catalog.items[id]?.c!=='raw'))throw Error('Neznámé generované ložisko');
    const richness=rules.richnessOf(body);if(!Number.isFinite(richness)||richness<0)throw Error('Neplatná bohatost');
    const initial=Object.fromEntries(body.deposits.map(id=>{const n=rules.depositSize(id,richness);if(!Number.isFinite(n)||n<0)throw Error('Neplatná velikost ložiska');return [id,n]}));
    return {letter:body.letter,name:body.name||body.letter,resources:[...body.deposits],richness,initial};
  });
  if(new Set(planets.map(p=>p.letter)).size!==planets.length)throw Error('Duplicitní planeta');
  const byLetter=new Map(planets.map(p=>[p.letter,p])),warnings=[];let structures=[],structuresVerified=false,depletionVerified=false;
  if(live){
    try{
      if(live.system!==undefined&&String(live.system?.id??live.system)!==system.id)throw Error('Odpověď patří jinému systému');
      if(!Array.isArray(live.structures))throw Error('Chybí seznam staveb');const seen=new Set();
      for(const s of live.structures){
        if(!s||typeof s.id!=='string'||seen.has(s.id)||typeof s.building!=='string'||s.system!==undefined&&s.system!==system.id)throw Error('Neplatná stavba');seen.add(s.id);
        const spec=rules.buildingById(s.building);if(!spec)throw Error('Neznámý typ stavby');if(spec.kind==='miner'&&!byLetter.has(s.planet))throw Error('Miner nemá jednoznačnou planetu');
      }
      structures=live.structures;structuresVerified=true;
    }catch(e){warnings.push('Stavby neověřeny: '+e.message)}
    if(structuresVerified){
      try{
        if(!live.depletion||typeof live.depletion!=='object'||Array.isArray(live.depletion))throw Error('Chybí platná mapa depletion');
        for(const [letter,entries] of Object.entries(live.depletion)){
          const planet=byLetter.get(letter);if(!planet||!entries||typeof entries!=='object'||Array.isArray(entries))throw Error('Neznámá planeta vyčerpání');
          for(const [id,value] of Object.entries(entries))if(!planet.resources.includes(id)||typeof value!=='number'||!Number.isFinite(value)||value<0||value>planet.initial[id]+1e-6)throw Error('Neplatný zůstatek ložiska');
        }
        depletionVerified=true;
      }catch(e){warnings.push('Zůstatky neověřeny: '+e.message)}
    }
  }else warnings.push('Serverové stavby a zůstatky nebyly načtené.');
  if(scouted===null)warnings.push('Průzkum systému není ověřený.');
  const rows=[];
  for(const planet of planets){
    const miners=structures.filter(s=>s.planet===planet.letter&&rules.buildingById(s.building)?.kind==='miner');
    const remaining=Object.fromEntries(planet.resources.map(id=>[id,depletionVerified?(Object.prototype.hasOwnProperty.call(live.depletion[planet.letter]??{},id)?live.depletion[planet.letter][id]:planet.initial[id]):null]));
    const current=[];
    for(const m of miners){
      const entry={id:m.id,building:m.building,mine:m.mine===true,known:false,rates:null,split:null,error:''};
      try{
        if(m.mine!==true)throw Error('Cizí nebo neověřené rozdělení výkonu');
        const spec=rules.buildingById(m.building);if(!Array.isArray(m.deposits)||new Set(m.deposits).size!==m.deposits.length||m.deposits.some(id=>!planet.resources.includes(id)||!rules.canMine(spec,id)||depletionVerified&&rules.usedUp(remaining[id])))throw Error('Neověřené aktivní suroviny mineru');
        entry.split=rules.splitOf(m.deposits,m.split);entry.rates=rules.minerRates(spec,m.deposits,m.split,planet.richness);
        if(Object.values(entry.rates).some(rate=>!Number.isFinite(rate)||rate<0))throw Error('Neplatný aktuální výkon');entry.known=true;
      }catch(e){entry.error=e.message;entry.rates=null;entry.split=null}
      current.push(entry);
    }
    const occupancy=!structuresVerified?'unknown':!miners.length?'free':miners.length!==1?'multiple':miners[0].mine===true?'own':miners[0].mine===false?'foreign':'unknown';
    const currentKnown=structuresVerified&&(miners.length===0||current.every(m=>m.known));
    const currentRate=currentKnown?current.reduce((sum,m)=>sum+(c.target?(m.rates[c.target]||0):Object.values(m.rates).reduce((a,b)=>a+b,0)),0):null;
    Object.assign(planet,{remaining,occupancy,current,currentRate});
    for(const spec of specs.filter(spec=>!c.specId||spec.id===c.specId)){
      const active=rules.mineable(spec,planet.resources).filter(id=>!depletionVerified||!rules.usedUp(remaining[id]));
      if(c.mode==='focus'&&active.length===1&&active[0]===c.target&&c.share!==100)warnings.push('Planeta '+planet.letter+' / '+spec.id+': jediná aktivní surovina má podle hry vždy 100 % výkonu.');
      let split=rules.evenSplit(active);if(c.mode==='focus'&&active.includes(c.target))split=rules.rebalance(split,active,c.target,c.share);
      if(active.length&&rules.splitProblem(active,split))throw Error('Herní pravidla odmítla navržený split');
      const rates=rules.minerRates(spec,active,split,planet.richness);if(Object.values(rates).some(rate=>!Number.isFinite(rate)||rate<0))throw Error('Neplatný vypočtený výkon');
      const resources=planet.resources.map(id=>{
        const mineable=rules.canMine(spec,id),left=remaining[id],rate=rates[id]||0,share=split[id]||0;
        const minimumSeconds=depletionVerified&&rate>0?rules.soonestEmpty(spec,id,left,planet.richness,share):null;
        if(minimumSeconds!==null&&(!Number.isFinite(minimumSeconds)||minimumSeconds<0))throw Error('Neplatná životnost ložiska');
        return {id,mineable,exhausted:depletionVerified?rules.usedUp(left):null,initialUnits:planet.initial[id],remaining:left,share,rate,drainPerMinute:rate*rules.drainOf(spec),maximumOutput:!mineable?0:depletionVerified?(rules.usedUp(left)?0:left/rules.drainOf(spec)):null,minimumSeconds};
      });
      const positive=resources.filter(r=>r.rate>0),times=positive.map(r=>r.minimumSeconds),minimumHours=positive.length&&times.every(n=>n!==null)?Math.min(...times)/3600:null;
      const rate=c.target?(rates[c.target]||0):Object.values(rates).reduce((a,b)=>a+b,0);
      let reason=occupancy==='free'?(scouted===true?'Bez mineru podle serveru; podmíněný návrh stavby':'Nejprve ověř/průzkumej systém'):occupancy==='own'?'Vlastní miner; hypotetická změna rozdělení nebo upgrade':occupancy==='foreign'?'Cizí miner — nenavrhuje se zásah':occupancy==='multiple'?'Více minerů na planetě — ověř stav ručně':'Neověřené stavby — nelze doporučit obsazení';
      const oldSpec=miners.length===1?rules.buildingById(miners[0].building):null,downgrade=occupancy==='own'&&spec.tier<oldSpec.tier;
      const durationPass=c.minHours===0||minimumHours!==null&&minimumHours>=c.minHours;
      const eligible=['free','own'].includes(occupancy)&&!downgrade&&rate>0&&durationPass;
      if(downgrade)reason='Nižší tier než současný miner — není doporučený upgrade';
      if(currentRate!==null&&rate<currentRate)reason+='; výkon cíle je nižší než při současném rozdělení';
      rows.push({planet:planet.letter,building:spec.id,name:spec.name||spec.id,tier:spec.tier,richness:planet.richness,split,rates,resources,rate,minimumHours,currentRate,gain:currentRate===null?null:rate-currentRate,occupancy,eligible,durationPass,reason,drain:rules.drainOf(spec)});
    }
  }
  rows.sort((a,b)=>Number(b.eligible)-Number(a.eligible)||b.rate-a.rate||a.drain-b.drain||a.planet.localeCompare(b.planet)||a.building.localeCompare(b.building));
  warnings.push('Výkony jsou nominální při nepřetržitém odběru. Neodebraná produkce ložiska nevyčerpává.');
  warnings.push('Modely minerů nejsou potvrzené jako odemčené, dostupné v inventáři nebo proveditelné k umístění.');
  if(!depletionVerified)warnings.push('Generované počáteční zásoby nejsou aktuální zůstatky; životnost z nich není odvozena.');
  return {at,system:{id:system.id,name:system.name,x:system.x,y:system.y},config:c,scouted,structuresVerified,depletionVerified,specs:specs.map(s=>({id:s.id,name:s.name||s.id,tier:s.tier,speed:s.speed??1,drain:rules.drainOf(s)})),planets,rows,best:rows.find(r=>r.eligible)||null,warnings};
}
function createMiningOptimizer({api,catalog,loadRules,systemLabel=(id,s)=>s.name,onChange=()=>{},now=()=>new Date().toISOString()}){
  const state={input:'',busy:false,error:'',notice:'Načti systém pro porovnání těžby.',config:{target:'',mode:'even',share:100,minHours:0,specId:''},snapshot:null};let serial=0,base=null;
  const emit=()=>onChange();
  function invalidate(notify=true){serial++;base=null;state.busy=false;state.snapshot=null;state.error='';state.notice='Data se změnila; načti systém znovu.';if(notify)emit()}
  function cancel(){if(!state.busy)return;invalidate(false);state.notice='Načítání zrušeno.';emit()}
  function recalculate(notify=true){
    state.snapshot=null;state.error='';
    try{if(base){state.snapshot=buildMiningPlan({...base,config:state.config});state.notice='Porovnání přepočítané z načteného snímku.'}}
    catch(e){state.error=String(e.message||e)}if(notify)emit();
  }
  async function refresh(id=state.input){
    if(state.busy)return;const text=String(id??'').trim();state.input=text;state.busy=true;state.error='';state.snapshot=null;base=null;const ticket=++serial;state.notice='Načítám pravidla a serverový stav…';emit();
    try{
      if(!/^-?\d{1,10}\.-?\d{1,10}\.\d{1,3}$/.test(text))throw Error('Zadej přesné ID systému sx.sy.cell');
      const meta=await api('/api/map/meta');if(ticket!==serial)return;
      if(!['number','string'].includes(typeof meta.seed)||String(meta.seed).trim()===''||!Number.isSafeInteger(Number(meta.seed)))throw Error('Chybí platný seed');
      const rules=await loadRules();if(ticket!==serial)return;const system=rules.map.systemById(Number(meta.seed),text);if(!system||system.id!==text||!Number.isFinite(system.x)||!Number.isFinite(system.y))throw Error('Systém nelze ověřit');
      const generated=rules.world.generateSystem(Number(meta.seed),system);let live=null,scouted=null;const evidenceWarnings=[];
      try{const body=await api('/api/units');if(ticket!==serial)return;if(!Array.isArray(body.scouted)||body.scouted.some(id=>typeof id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(id)))throw Error('Neznámý seznam průzkumu');scouted=body.scouted.includes(text)}catch{evidenceWarnings.push('Průzkum se nepodařilo potvrdit.')}
      if(ticket!==serial)return;
      try{live=await api('/api/structures?system='+encodeURIComponent(text));if(ticket!==serial)return}catch{evidenceWarnings.push('Serverové stavby a zůstatky nejsou dostupné.')}
      if(ticket!==serial)return;
      base={catalog,rules,system:{...system,name:systemLabel(system.id,system)||system.name},generated,live,scouted,at:now()};
      state.snapshot=buildMiningPlan({...base,config:state.config});state.snapshot.warnings.push(...evidenceWarnings);state.notice='Systém načten. Jde o simulaci; žádná nastavení se neodesílají.';
    }catch(e){if(ticket===serial){state.error=String(e.message||e);state.snapshot=null;base=null}}
    finally{if(ticket===serial){state.busy=false;emit()}}
  }
  return {state,refresh,recalculate,invalidate,cancel};
}
// Goal-linked expansion evidence. Quantities are a one-time material budget, not throughput demand.
function buildExpansionContext(plan,catalog,minerId='miner-1'){
  if(!plan?.station||typeof plan.station.id!=='string'||!plan.station.id||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(plan.station.system)||!plan.target||!['production','research'].includes(plan.target.kind)||!plan.materialPlan)throw Error('Nejprve vyhodnoť platný výrobní nebo výzkumný cíl pro vlastní stanici');
  const raw=plan.materialPlan.rawMissing;if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error('Chybí ověřený materiálový rozpočet');
  const needs=Object.entries(raw).map(([resource,amount])=>{const item=catalog.items[resource];if(item?.c!=='raw'||!Number.isSafeInteger(amount)||amount<0||!Number.isSafeInteger(item.s)||item.s<=0)throw Error('Neplatná surovinová potřeba');return {resource,amount,stacks:amount/item.s}}).filter(n=>n.amount>0);
  if(plan.account&&typeof plan.account.inventoryComplete!=='boolean')throw Error('Neověřená úplnost účtu');
  if(typeof minerId!=='string'||!minerId)throw Error('Vyber plánovaný model mineru');
  const transfers=(plan.materialPlan.externalTransfers||[]).map(t=>{if(typeof t.resource!=='string'||!catalog.items[t.resource]||!Number.isSafeInteger(t.amount)||t.amount<0)throw Error('Neplatný kandidát vlastní dodávky');return {station:String(t.station),name:String(t.name||t.station),resource:t.resource,amount:t.amount}});
  const choices=plan.choices||[],manufacturingLocks=(plan.materialPlan.crafts||[]).filter(c=>c.research&&!choices.some(p=>p.id===c.research&&p.done===true)||c.machine==='assembler'&&!c.building&&!choices.some(p=>p.id==='assembler'&&p.done===true)).map(c=>({resource:c.resource,research:c.research||'assembler'}));
  return {kind:'goal',at:plan.at,station:{id:plan.station.id,system:plan.station.system,name:plan.station.name},target:{kind:plan.target.kind,id:plan.target.id,name:plan.target.name},needs,minerId,
    provisional:!!plan.account&&!plan.account.inventoryComplete,scope:plan.account?'account':'station',account:plan.account?{at:plan.account.at,inventoryComplete:plan.account.inventoryComplete,loaded:plan.account.loaded,total:plan.account.total}:null,
    transfers,manufacturingLocks,crafts:(plan.materialPlan.crafts||[]).map(c=>({resource:c.resource,amount:c.amount,machine:c.machine})),blocked:(plan.materialPlan.blocked||[]).map(b=>({resource:b.resource,amount:b.amount,reason:b.reason}))};
}
function expansionNeedCoverage(context,resources){
  const held=new Set(resources),total=context.needs.reduce((sum,n)=>sum+n.stacks,0);return total?context.needs.reduce((sum,n)=>sum+(held.has(n.resource)?n.stacks:0),0)/total:0;
}
function evaluateExpansionSite({catalog,rules,system,generated,live,context,scouted,distance,radius,buildMiningPlan}){
  const no=(reasonCode,reason,evidence={})=>({eligible:false,reasonCode,reason,...evidence});
  const spec=rules.buildingById(context.minerId);if(!spec||spec.kind!=='miner')return no('unknown','Model mineru není v aktuálních pravidlech');
  const mining=buildMiningPlan({catalog,rules,system,generated,live,scouted,config:{specId:spec.id},at:null});
  if(!mining.structuresVerified||!mining.depletionVerified)return no('unknown','Stavby nebo zůstatky nelze ověřit');
  if(mining.planets.some(p=>p.current.length))return no('mined','V systému už je miner');
  const stations=live.structures.filter(s=>rules.buildingById(s.building)?.kind==='station');
  if(stations.some(s=>s.mine!==true))return no('occupied','Cizí nebo neověřená stanice');
  for(const key of ['placementProblem','zoneStep','orbitRange','orbitA','stationCapProblem'])if(typeof rules[key]!=='function')return no('unknown','Chybí klientská pravidla umístění');
  if(generated.bodies.some(body=>body?.letter&&(!Number.isFinite(body.a)||body.a<=0||!Number.isFinite(body.radius)||body.radius<=0)))return no('unknown','Neověřitelná geometrie planet');
  let stationPlacement;
  if(stations.length)stationPlacement={status:'existing-own',sample:null};
  else{
    const why=(generated.planets??0)>0?null:'Systém nemá planety pro outpost';if(why!==null)return no(typeof why==='string'?'placement':'unknown',typeof why==='string'?why:'Neověřitelná kapacita stanice');
    const stationSpec=rules.buildingById('outpost-1');if(stationSpec?.kind!=='station')return no('unknown','Neověřený model outpostu');
    const range=rules.orbitRange(generated);if(!Array.isArray(range)||range.length!==2||range.some(n=>!Number.isFinite(n)||n<=0))return no('unknown','Neověřitelný rozsah orbit');
    let sample=null;
    for(let i=0;i<=65&&!sample;i++)for(const angle of [0,Math.PI/2,Math.PI,Math.PI*1.5]){const at={a:rules.orbitA(range,-0.05+i*0.02),angle};if(Number.isFinite(at.a)&&rules.placementProblem(generated,stationSpec,at,live.structures)===null){sample=at;break}}
    if(!sample)return no('placement','V omezeném vzorku nebylo nalezené klientsky přípustné místo pro outpost');
    stationPlacement={status:'client-sample',sample,building:'outpost-1'};
  }
  const supply=new Map(context.needs.map(n=>[n.resource,{resource:n.resource,needed:n.amount,capacity:0,rate:0,planets:[]}])),placements=[];
  let hasMineable=false,hasRemaining=false;
  for(const planet of mining.planets){
    const row=mining.rows.find(r=>r.planet===planet.letter);if(!row)continue;
    if(row.resources.some(r=>context.needs.some(n=>n.resource===r.id)&&r.mineable))hasMineable=true;
    if(row.resources.some(r=>context.needs.some(n=>n.resource===r.id)&&r.mineable&&!r.exhausted))hasRemaining=true;
    if(!row.resources.some(resource=>supply.has(resource.id)&&resource.rate>0))continue;
    const gone=()=>planet.resources.filter(id=>rules.usedUp(planet.remaining[id]));
    const step=rules.zoneStep(generated,spec,planet.letter,live.structures,s=>s.mine===true,gone);if(step.do!=='build')continue;
    const at={planet:planet.letter,angle:0};if(rules.placementProblem(generated,spec,at,live.structures)!==null)continue;
    placements.push({planet:planet.letter,status:'client-sample',sample:at});
    for(const resource of row.resources){const item=supply.get(resource.id);if(!item||resource.rate<=0||resource.maximumOutput===null)continue;item.capacity+=resource.maximumOutput;item.rate+=resource.rate;item.planets.push(planet.letter);if(!Number.isFinite(item.capacity)||!Number.isFinite(item.rate))throw Error('Neplatný součet těžebního potenciálu')}
  }
  const material=[...supply.values()].map(item=>({...item,covered:Math.min(item.needed,item.capacity),fraction:Math.min(1,item.capacity/item.needed)}));
  const total=context.needs.reduce((sum,n)=>sum+n.stacks,0),coverage=total?material.reduce((sum,item)=>sum+context.needs.find(n=>n.resource===item.resource).stacks*item.fraction,0)/total:0;
  if(coverage<=0)return no(!hasMineable?'unsuitable':!hasRemaining?'depleted':'placement',!hasMineable?'Vybraný miner potřebné suroviny nezvládá':!hasRemaining?'Potřebná dostupná ložiska jsou vyčerpaná':'Potřebné planety nemají ověřené klientské místo pro miner');
  const full=material.every(item=>item.fraction>=1&&item.rate>0),productionMinutes=full?Math.max(...material.map(item=>item.needed/item.rate)):null;
  const nearestStationDistance=distance,score=coverage*100+Math.max(0,1-distance/radius)*10+(stations.length?5:0)+(!scouted?2:0);
  return {eligible:true,coverage,score,full,productionMinutes,material,stationPlacement,minerPlacements:placements,nearestStationDistance,model:{id:spec.id,name:spec.name,tier:spec.tier},scouted,
    caveat:'Test: nový outpost a miner potřebují Construction Ship a kit v zásobě zdrojové stanice. NPC, zázemí a riziko nájezdů nejsou potvrzené. Klientské umístění je pouze vzorek. Serverové podmínky, odemčení, rozpočet, dosah lodí a doprava nejsou potvrzené.'};
}
// Continuous-rate planning. No stock is converted into an infinite supply.
function buildFactoryPlan({catalog,rules,targetId,rate,tier=1,floorId='assembler-1',evidence=null,at=null}){
  const finite=(n,positive=false)=>typeof n==='number'&&Number.isFinite(n)&&(positive?n>0:n>=0)&&n<=1e15;
  if(!finite(rate,true)||rate<0.001||rate>1000000)throw Error('Cíl musí být číslo od 0,001 do 1 000 000 ks/min.');
  if(!Number.isInteger(tier)||tier<1||tier>3)throw Error('Neplatný plánovaný tier.');
  if(!catalog?.items?.[targetId]||catalog.items[targetId].c==='raw')throw Error('Vyber vyráběný produkt.');
  const floor=rules.buildingById(floorId);
  if(!floor?.floor||!finite(floor.speed,true))throw Error('Neznámá rychlost výrobní haly.');
  if(!Array.isArray(rules.RECIPES)||!Array.isArray(rules.BAY_MACHINES))throw Error('Chybí výrobní pravidla.');
  const recipes=new Map();for(const r of rules.RECIPES){if(recipes.has(r.output))throw Error('Nejednoznačný recept '+r.output);recipes.set(r.output,r)}
  const nodes=new Map(),order=[],visiting=new Set(),profiles=new Map();
  const checked=n=>{if(!finite(n))throw Error('Plán překročil číselný rozsah.');return n};
  function profile(r){
    if(!Number.isSafeInteger(r.makes)||!finite(r.makes,true)||!finite(r.seconds,true)||!r.inputs||Array.isArray(r.inputs)||typeof r.inputs!=='object')throw Error('Neplatný recept '+r.output);
    if(r.building){
      const spec=rules.BUILDINGS.find(s=>s.construct),build=rules.constructById(r.output);
      if(!spec||!finite(spec.speed,true)||!finite(build?.seconds,true))throw Error('Chybí pravidla Building Crafteru.');
      return {id:spec.id,name:spec.name,kind:'construct',tier:spec.tier,speed:spec.speed,productivity:0,seconds:build.seconds/spec.speed,outputPerCraft:r.makes,capacity:60*spec.speed/build.seconds*r.makes,floor:null};
    }
    const spec=rules.BAY_MACHINES.filter(s=>rules.canMake(s,r)&&s.tier>=Math.max(tier,r.level||1)).sort((a,b)=>a.tier-b.tier)[0];
    if(!spec||!finite(spec.speed,true))throw Error('Chybí vhodný model stroje pro '+r.output);
    const bonus=rules.productivityOf(spec)/100,ticks=rules.craftTicks(r,spec.speed*floor.speed);
    if(!finite(bonus)||!Number.isSafeInteger(ticks)||ticks<1||!finite(rules.TICK_MS,true))throw Error('Neplatná pravidla výkonu.');
    const seconds=ticks*rules.TICK_MS/1000,capacity=60/seconds*r.makes*(1+bonus);
    if(!finite(capacity,true))throw Error('Neplatná kapacita stroje.');
    return {id:spec.id,name:spec.name,kind:spec.kind,tier:spec.tier,speed:spec.speed,productivity:bonus,seconds,outputPerCraft:r.makes*(1+bonus),capacity,floor:floor.id,tiles:finite(spec.w,true)&&finite(spec.d,true)?spec.w*spec.d:null};
  }
  function visit(id){
    if(visiting.has(id))throw Error('Cyklus výrobních receptů: '+id);
    if(nodes.has(id))return;
    if(nodes.size>=250)throw Error('Výrobní řetězec překročil limit 250 položek.');
    const item=catalog.items[id];if(!item)throw Error('Neznámá položka '+id);
    nodes.set(id,{id,name:item.n||id,required:0,raw:item.c==='raw',parents:[],inputs:[]});visiting.add(id);
    if(item.c!=='raw'){
      const r=recipes.get(id);if(!r)throw Error('Chybí recept pro '+id);
      profiles.set(id,profile(r));
      for(const [input,n] of Object.entries(r.inputs)){if(!Number.isSafeInteger(n)||!finite(n,true))throw Error('Neplatný vstup receptu '+id);visit(input)}
    }
    visiting.delete(id);order.push(id);
  }
  visit(targetId);nodes.get(targetId).required=rate;
  // Reverse postorder: every consumer contributes before a shared input expands.
  for(const id of [...order].reverse()){
    const row=nodes.get(id);if(row.raw)continue;
    const r=recipes.get(id),p=profiles.get(id),crafts=checked(row.required/p.outputPerCraft);
    row.profile=p;row.craftsPerMinute=crafts;row.exactMachines=checked(row.required/p.capacity);
    row.machines=Math.ceil(row.exactMachines);if(row.machines<1)row.machines=1;
    row.utilization=row.exactMachines/row.machines;
    row.locks=[];
    for(const lock of new Set([r.research,!r.building?floor.research:null,r.machine==='assembler'&&!r.building?'assembler':null].filter(Boolean))){
      const done=evidence?.research?rules.isDone(rules.researchAt(evidence.research,evidence.station.id),lock):null;
      if(done!==true)row.locks.push({id:lock,status:done===false?'locked':'unknown'});
    }
    for(const [input,n] of Object.entries(r.inputs)){
      const needed=checked(crafts*n),next=nodes.get(input);next.required=checked(next.required+needed);next.parents.push({id,rate:needed});row.inputs.push({id:input,rate:needed});
    }
  }
  const capacityComplete=evidence?.capacityComplete===true;
  const rows=order.map(id=>{
    const row=nodes.get(id),entries=(evidence?.capacities||[]).filter(x=>x.resource===id),known=entries.reduce((n,e)=>checked(n+e.rate),0),count=entries.reduce((n,e)=>n+e.count,0);
    row.current={knownCapacity:known,count,complete:capacityComplete,sources:entries};
    if(evidence){const flow=evidence.flows?.find(f=>f.resource===id);row.boundary={made:flow?.made??0,used:flow?.used??0};}
    if(!row.raw)row.capacityGap=capacityComplete?Math.max(0,row.required-known):null;
    return row;
  });
  const bottlenecks=rows.filter(r=>!r.raw&&(r.current.knownCapacity+1e-9<r.required||r.locks.length)).map(r=>({id:r.id,kind:r.locks.length?'research':capacityComplete?'capacity':'unverified',required:r.required,known:r.current.knownCapacity,gap:r.capacityGap}));
  const modelTotals=new Map();for(const r of rows.filter(r=>!r.raw)){
    const p=r.profile,old=modelTotals.get(p.id)||{id:p.id,name:p.name,tier:p.tier,count:0,tiles:0,tilesKnown:true};old.count=checked(old.count+r.machines);if(p.tiles===null||p.tiles===undefined)old.tilesKnown=false;else old.tiles=checked(old.tiles+p.tiles*r.machines);modelTotals.set(p.id,old);
  }
  return {format:1,at,target:{id:targetId,name:catalog.items[targetId].n,rate},tier,floor:{id:floor.id,name:floor.name,speed:floor.speed},rows,models:[...modelTotals.values()],bottlenecks,
    station:evidence?.station||null,evidence:evidence?{at:evidence.at,capacityComplete,loaded:evidence.loaded,total:evidence.total,failures:evidence.failures}:null,
    warnings:['Ustálený teoretický výkon při nepřetržitých vstupech a volném výstupu. Produktivita je dlouhodobý průměr; krátké dávky se liší.',
      'Každému receptu jsou vyhrazené stroje. Celé počty se zaokrouhlují až po sloučení společných mezivýrobků; nevyužitá kapacita nezvyšuje plánovanou spotřebu.',
      'Sklad je jednorázová zásoba, proto nesnižuje trvalý požadavek ks/min. Dodávky, pásy, dosah, výzkum modelů a skutečné využití nejsou zaručené.',
      'Kapacity stávajících strojů předpokládají přísun a odvod; současně mohou obsluhovat jiné cíle. Toky hal jsou poslední naměřené hraniční toky, nikoliv vnitřní kapacita.',
      'Building Crafter hodnotí jen právě běžící zakázku do stanice. Její limit nebo dodávání do inventáře může tento tok ukončit.',
      'Kapacity současných modelů jsou pouze srovnání výstupu. Jejich produktivita se může lišit od plánovaných strojů; shoda kapacit nepotvrzuje shodu spotřeby.',
      'Plocha počítá pouze těla strojů; není to ověřený layout ani počet hal. Pásy, vstupy, výstupy a mezery nejsou zahrnuté.']};
}
function factoryCapacityEvidence(view,floors,rules,catalog,productionFlows,at){
  if(!view?.station||typeof view.station.id!=='string'||!view.station.id||view.station.mine===false||!Array.isArray(view.machines))throw Error('Neplatný detail vlastní stanice.');
  const capacities=[],failures=[];let loaded=0;
  const nonnegative=n=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
  const add=(resource,rate,source)=>{if(!catalog.items[resource]||!nonnegative(rate))throw Error('Neplatná kapacita.');capacities.push({resource,rate,count:1,...source})};
  const bays=view.machines.filter(m=>m.bay||rules.buildingById(m.building)?.floor);
  for(const machine of view.machines){
    if(typeof machine.on!=='boolean'){failures.push({slot:machine.slot,reason:'Neznámý stav stroje.'});continue}
    if(machine.on!==true)continue;
    if(machine.bay||rules.buildingById(machine.building)?.floor)continue;
    if(machine.recipe&&!machine.orders&&!machine.working&&!machine.research){
      const r=rules.RECIPES.find(r=>r.id===machine.recipe);
      if(!r||!nonnegative(machine.perMinute)){failures.push({slot:machine.slot,reason:'Neznámá kapacita slotového stroje.'});continue}
      add(r.output,machine.perMinute,{slot:machine.slot,model:machine.building,kind:'slot'});
    }else if(Array.isArray(machine.orders)&&machine.craft&&!machine.craft.done&&machine.craft.to==='station'){
      if(!nonnegative(machine.perMinute)||!catalog.items[machine.craft.item]){failures.push({slot:machine.slot,reason:'Neznámá kapacita Building Crafteru.'});continue}
      add(machine.craft.item,machine.perMinute,{slot:machine.slot,model:machine.building,kind:'current-order'});
    }
  }
  const slots=new Set();for(const m of bays){if(!Number.isSafeInteger(m.slot)||m.slot<0||slots.has(m.slot))throw Error('Neplatné nebo duplicitní sloty hal.');slots.add(m.slot)}
  for(const machine of bays){
    if(machine.on!==true){if(machine.on!==false)failures.push({slot:machine.slot,reason:'Neznámý stav haly.'});continue}
    const entry=floors.find(x=>x.slot===machine.slot);
    if(!entry?.body){failures.push({slot:machine.slot,reason:entry?.error||'Detail haly nebyl načten.'});continue}
    try{
      const body=entry.body,spec=rules.buildingById(machine.building);
      if(body.machine?.building!==machine.building||body.station?.id&&String(body.station.id)!==view.station.id||!Array.isArray(body.bay?.machines)||!spec?.floor||!nonnegative(spec.speed)||spec.speed===0||body.bay.machines.length>5000)throw Error('Neplatný detail haly.');
      if(body.machine.on!==true||body.machine.slot!==undefined&&body.machine.slot!==machine.slot)throw Error('Stav nebo slot haly se během načítání změnil.');
      const prepared=[],ids=new Set();
      for(const m of body.bay.machines){
        if(typeof m.id!=='string'||ids.has(m.id))throw Error('Neplatné ID stroje v hale.');ids.add(m.id);
        if(m.off!==undefined&&![true,false,0,1].includes(m.off))throw Error('Neznámý stav stroje v hale.');
        if(m.off===true||m.off===1||!m.recipe)continue;
        const r=rules.RECIPES.find(r=>r.id===m.recipe),model=rules.bayMachineById(m.k);
        if(!model||!r||!rules.canMake(model,r)||!(model.speed>0)||!(r.makes>0))throw Error('Neznámý model nebo recept stroje.');
        const seconds=rules.craftTicks(r,model.speed*spec.speed)*rules.TICK_MS/1000,rate=60/seconds*r.makes*(1+rules.productivityOf(model)/100);
        prepared.push({resource:r.output,rate,count:1,slot:machine.slot,model:model.id,kind:'floor'});
      }
      for(const row of prepared){if(!catalog.items[row.resource]||!nonnegative(row.rate))throw Error('Neplatný výkon stroje.')}
      capacities.push(...prepared);loaded++;
    }catch(e){failures.push({slot:machine.slot,reason:String(e.message||e)})}
  }
  const flows=productionFlows(view);for(const f of flows)if(!nonnegative(f.made)||!nonnegative(f.used))throw Error('Neplatný tok stanice.');
  return {station:{id:view.station.id,name:view.station.systemName||view.station.name||view.station.id,system:view.station.system},at,capacities,flows,
    capacityComplete:failures.length===0,failures,loaded,total:bays.filter(m=>m.on===true).length};
}
function createFactoryPlanner({catalog,api,loadRules,productionFlows,onChange=()=>{},now=()=>new Date().toISOString(),delay=ms=>new Promise(r=>setTimeout(r,ms))}){
  const state={busy:false,error:'',snapshot:null,evidence:null,itemId:'iron-ingot',rate:'10',tier:1,floorId:'assembler-1',progress:0,total:0,rules:null};let serial=0;
  const emit=()=>onChange();
  function invalidate(notify=true){serial++;state.busy=false;state.snapshot=null;state.evidence=null;state.error='';if(notify)emit()}
  function cancel(){serial++;state.busy=false;state.snapshot=null;state.evidence=null;state.error='Načítání zrušeno.';emit()}
  function edit(key,value){if(state.busy||!['itemId','rate','tier','floorId'].includes(key))return;state[key]=value;state.snapshot=null;state.error=''}
  function calculate(){
    state.snapshot=null;state.error='';
    try{if(!state.rules)throw Error('Nejprve načti pravidla a vybranou stanici.');state.snapshot=buildFactoryPlan({catalog,rules:state.rules,targetId:state.itemId,rate:String(state.rate).trim()===''?NaN:Number(state.rate),tier:Number(state.tier),floorId:state.floorId,evidence:state.evidence,at:now()});return state.snapshot}
    catch(e){state.error=String(e.message||e);return null}finally{emit()}
  }
  async function refresh(stationId){
    if(state.busy)return null;
    const ticket=++serial;state.busy=true;state.snapshot=null;state.evidence=null;state.error='';state.progress=0;state.total=0;emit();const current=()=>serial===ticket;
    try{
      if(typeof stationId!=='string'||!stationId.trim())throw Error('Vyber vlastní stanici.');
      const rules=await loadRules();if(!current())return null;
      const view=await api('/api/stations/view?id='+encodeURIComponent(stationId));if(!current())return null;
      if(String(view?.station?.id)!==stationId||view.station.mine===false||!Array.isArray(view.machines))throw Error('Server nepotvrdil vybranou vlastní stanici.');
      if(rules.buildingById(view.station.building)?.outpost===true)throw Error('Outpost nemá výrobní sloty; vyber výrobní stanici.');
      const research=await api('/api/research');if(!current())return null;
      const record=v=>v&&typeof v==='object'&&!Array.isArray(v);
      if(!record(research?.done)||!record(research.steps)||!record(research.stations)||Object.values(research.stations).some(s=>!record(s.done)||!record(s.steps)))throw Error('Neznámý stav výzkumu.');
      const bays=view.machines.filter(m=>m.on===true&&(m.bay||rules.buildingById(m.building)?.floor));
      const floors=[];state.total=bays.length;emit();const slots=new Set();
      for(const [index,m] of bays.entries()){
        if(!Number.isSafeInteger(m.slot)||m.slot<0||slots.has(m.slot))throw Error('Neplatné sloty hal.');slots.add(m.slot);
        if(index>=40){floors.push({slot:m.slot,error:'Limit 40 detailů hal; kapacita není kompletní.'});continue}
        try{const body=await api('/api/bay?station='+encodeURIComponent(stationId)+'&slot='+m.slot);if(!current())return null;floors.push({slot:m.slot,body})}
        catch(e){if(!current())return null;floors.push({slot:m.slot,error:'Detail haly nelze načíst.'})}
        state.progress++;emit();if(index+1<Math.min(bays.length,40)){await delay(150);if(!current())return null}
      }
      const evidence=factoryCapacityEvidence(view,floors,rules,catalog,productionFlows,now());evidence.research=research;
      if(!current())return null;state.rules=rules;state.evidence=evidence;
      return calculate();
    }catch(e){if(current())state.error=String(e.message||e);return null}
    finally{if(current()){state.busy=false;emit()}}
  }
  return {state,refresh,calculate,edit,invalidate,cancel};
}
// Read-only depth quotes and a finite, base-recipe material basket.
function marketFeeBps(text){
  const s=String(text??'').trim().replace(',','.');if(!s)return null;
  if(!/^(?:\d{1,2}|100)(?:\.\d{1,2})?$/.test(s))throw Error('Poplatek musí být procento od 0 do 100 s nejvýše dvěma desetinnými místy.');
  const [whole,part='']=s.split('.'),bps=Number(whole)*100+Number(part.padEnd(2,'0'));if(bps>10000)throw Error('Poplatek překračuje 100 %.');return bps;
}
function normalizeMarketBook(body,id,rules,at){
  if(body?.item!==id||body.unchanged||!Array.isArray(body.asks)||!Array.isArray(body.bids))throw Error('Chybí úplný formát knihy položky '+id);
  const now=Date.parse(at);if(!Number.isFinite(now))throw Error('Neplatný čas snímku trhu.');
  let own=0,expired=0;
  const normalize=(list,side)=>{
    if(list.length>10000)throw Error('Kniha překračuje limit 10 000 objednávek.');const seen=new Set(),out=[];
    for(const o of list){
      if(!o||typeof o.id!=='string'||!o.id||seen.has(o.id)||typeof o.mine!=='boolean')throw Error('Neznámé vlastnictví nebo ID objednávky.');seen.add(o.id);
      if(o.mine){own++;continue}
      if(rules.unitsProblem(o.units)||rules.priceProblem(o.price))throw Error('Neplatná cena nebo objem objednávky.');
      if(o.minVolume!==undefined&&o.minVolume!==null&&(!Number.isSafeInteger(o.minVolume)||o.minVolume<1||o.minVolume>rules.LIMITS.units))throw Error('Neplatný minimální odběr.');
      if(o.expires!==null&&o.expires!==undefined){const expiry=Date.parse(o.expires);if(!Number.isFinite(expiry))throw Error('Neplatná expirace objednávky.');if(expiry<=now){expired++;continue}}
      out.push({id:o.id,units:o.units,price:o.price,minVolume:o.minVolume??1,...(typeof o.at==='string'?{at:o.at}:typeof o.issued==='string'?{issued:o.issued}:{})});
    }
    return rules.sortBook(out,side);
  };
  const asks=normalize(body.asks,'sell'),bids=normalize(body.bids,'buy');
  return {item:id,at,asks,bids,own,expired,limited:body.truncated===true||body.more===true};
}
function marketDepthQuote(book,quantity,side,rules,bps=null,limit=null){
  if(!Number.isSafeInteger(quantity)||quantity<1)throw Error('Množství musí být kladné celé číslo.');
  if(!['buy','sell'].includes(side))throw Error('Neznámá strana trhu.');
  if(limit!==null&&rules.priceProblem(limit))throw Error('Neplatný cenový limit.');
  if(bps!==null&&(!Number.isInteger(bps)||bps<0||bps>10000))throw Error('Neplatný scénář poplatku.');
  if(!book)return {known:false,quantity,side,reason:'Kniha není ověřená.'};
  const q=rules.walk(side==='buy'?book.asks:book.bids,quantity,limit,side);
  if(!Number.isSafeInteger(q.cents)||!Number.isSafeInteger(q.units)||q.cents<0||q.units<0||q.units>quantity)throw Error('Cena překročila přesný číselný rozsah.');
  const fee=bps===null?null:Number((BigInt(q.cents)*BigInt(bps)+9999n)/10000n);
  const total=fee===null?null:side==='buy'?q.cents+fee:q.cents-fee;
  if(total!==null&&!Number.isSafeInteger(total))throw Error('Cena s poplatkem překročila přesný rozsah.');
  return {known:true,quantity,side,filled:q.units,missing:quantity-q.units,full:q.units===quantity&&!book.limited,limited:book.limited,
    gross:q.cents,average:q.average,best:q.best,worst:q.worst,fee,total,feeBps:bps,fills:q.fills,at:book.at,singleOrderLimit:quantity>rules.LIMITS.units};
}
function buildMarketPlan({catalog,rules,materialPlan,books,targetId,quantity,buyFee='',sellFee='',accountId='',stationId='',me=null,at}){
  if(!catalog.items[targetId]||!Number.isSafeInteger(quantity)||quantity<1||quantity>1000000)throw Error('Vyber položku a celé množství od 1 do 1 000 000.');
  const buyBps=marketFeeBps(buyFee),sellBps=marketFeeBps(sellFee);
  const quote=(id,n,side,bps)=>{try{return marketDepthQuote(books[id],n,side,rules,bps)}catch(e){return {known:false,quantity:n,side,reason:String(e.message||e)}}};
  const buy=quote(targetId,quantity,'buy',buyBps),sell=quote(targetId,quantity,'sell',sellBps);
  const materials=Object.entries(materialPlan?.rawMissing||{}).map(([id,n])=>({id,name:catalog.items[id]?.n||id,quantity:n,buy:quote(id,n,'buy',buyBps)}));
  let materialGross=0,materialWithFees=0;
  const sum=(a,b)=>{const n=a+b;if(!Number.isSafeInteger(n))throw Error('Součet cen překročil přesný rozsah.');return n};
  for(const row of materials){if(row.buy.known)materialGross=sum(materialGross,row.buy.gross);if(row.buy.total!==null&&row.buy.total!==undefined)materialWithFees=sum(materialWithFees,row.buy.total)}
  const manufactureKnown=!!materialPlan&&!materialPlan.blocked.length&&materials.every(m=>m.buy.known&&m.buy.full);
  const manufacture={applicable:!!materialPlan,full:manufactureKnown,materials,crafts:materialPlan?.crafts||[],blocked:materialPlan?.blocked||[],
    knownGross:materialGross,gross:manufactureKnown?materialGross:null,total:manufactureKnown&&buyBps!==null?materialWithFees:null};
  const delta=buy.known&&buy.full&&manufactureKnown?buy.gross-materialGross:null;
  const margin=sell.known&&sell.full&&manufactureKnown?sell.gross-materialGross:null;
  const netMargin=sell.known&&sell.full&&sell.total!==null&&manufacture.total!==null?sell.total-manufacture.total:null;
  let station=null,room=null,held=null,balance=null,account=null;
  if(Array.isArray(me?.stations)){
    const matches=me.stations.filter(s=>String(s.id)===stationId);if(matches.length===1&&matches[0].mine!==false){station=matches[0];const n=station.stock?.[targetId];
      // Native market/me stock is sparse; absent keys mean no held units only inside a valid object.
      if(station.stock&&typeof station.stock==='object'&&!Array.isArray(station.stock)&&(n===undefined||Number.isSafeInteger(n)&&n>=0))held=n??0;
      const spec=rules.buildingById(station.building);if(spec&&held!==null){const most=rules.holdLimit(spec,targetId);if(Number.isSafeInteger(most)&&most>=0)room=Math.max(0,most-held)}
    }
  }
  if(accountId&&Array.isArray(me?.payFrom)){const matches=me.payFrom.filter(a=>a.id===accountId);if(matches.length===1&&Number.isSafeInteger(matches[0].balance)&&matches[0].balance>=0){account=matches[0];balance=account.balance}}
  return {format:1,at,target:{id:targetId,name:catalog.items[targetId].n,quantity},buy,sell,manufacture,
    comparison:{buyMinusMaterialsGross:delta,saleMinusMaterialsGross:margin,scenarioNetMargin:netMargin},
    fees:{source:'unverified-user-scenario',buyBps,sellBps,rounding:'ceil per quoted item total; server policy unverified'},
    eligibility:{station:station?{id:stationId,name:station.label||station.system||stationId}:null,held,room,account:account?{id:account.id,name:account.name}:null,balance,
      buyRoomFits:room===null||!buy.known||buy.filled===0?null:room>=buy.filled,sellStockFits:held===null||!sell.known||sell.filled===0?null:held>=sell.filled,
      buyBudgetFits:balance===null||!buy.known||buy.filled===0||buy.total===null?null:balance>=buy.total},
    warnings:['Ocenění načtené knihy není rezervace ani záruka obchodu. Data se čtou postupně; ceny, zůstatky a objemy se mohou změnit.',
      'Nákup používá asks, prodej bids; vlastní a expirované objednávky jsou vyloučené. Minimální odběr platí podle nativního walk.',
      'Bez doloženého rozhraní poplatků nejsou poplatky známé. Volitelná procenta jsou uživatelský scénář, nikoliv ověřená sazba hry.',
      'Výroba je konečná dávka základních receptů bez bonusů produktivity, času, strojů, výzkumu, energie a dopravy. Sklad není oceněný jako bezplatný vstup.',
      'Nákupní koš obsahuje všechny raw vstupy; nevybírá automaticky levnější nákup mezivýrobků. Přebytek dávky se neoceňuje jako výnos.',
      'Marže jsou rozdíl ocenění před dalšími výrobními náklady. Prodej výrobku z budoucí výroby není prodej současné zásoby.',
      'Kontroly místa, zásob a vybraného platebního účtu platí jen pro cílovou položku a oceněný objem. Neověřují prostor ani rozpočet celého výrobního koše.']};
}
function createMarketAssistant({catalog,api,loadRules,planMaterials,onChange=()=>{},now=()=>new Date().toISOString(),delay=ms=>new Promise(r=>setTimeout(r,ms))}){
  const state={busy:false,error:'',snapshot:null,evidence:null,rules:null,itemId:'iron-ingot',quantity:'100',buyFee:'',sellFee:'',accountId:'',progress:0,total:0};let serial=0;
  const emit=()=>onChange();
  function invalidate(notify=true){serial++;state.busy=false;state.error='';state.snapshot=null;state.evidence=null;if(notify)emit()}
  function cancel(){invalidate(false);state.error='Načítání trhu zrušeno.';emit()}
  function edit(key,value){if(state.busy||!['itemId','quantity','buyFee','sellFee','accountId'].includes(key))return;if(key==='itemId'||key==='quantity')state.evidence=null;state[key]=value;state.snapshot=null;state.error=''}
  function target(){const n=String(state.quantity).trim()===''?NaN:Number(state.quantity);if(!catalog.items[state.itemId]||!Number.isSafeInteger(n)||n<1||n>1000000)throw Error('Množství musí být celé číslo od 1 do 1 000 000.');return n}
  function calculate(){
    state.snapshot=null;state.error='';
    try{const n=target(),e=state.evidence;if(!e||!state.rules||e.itemId!==state.itemId||e.quantity!==n)throw Error('Změněný cíl vyžaduje nové načtení knih.');
      state.snapshot=buildMarketPlan({catalog,rules:state.rules,materialPlan:e.materialPlan,books:e.books,targetId:e.itemId,quantity:n,buyFee:state.buyFee,sellFee:state.sellFee,stationId:e.stationId,accountId:state.accountId,me:e.me,at:e.at});state.snapshot.failures=e.failures;state.snapshot.coverage={loaded:Object.keys(e.books).length,total:e.total};return state.snapshot;
    }catch(e){state.error=String(e.message||e);return null}finally{emit()}
  }
  async function refresh(stationId){
    if(state.busy)return null;const ticket=++serial;state.busy=true;state.error='';state.snapshot=null;state.evidence=null;state.progress=0;state.total=0;emit();const current=()=>ticket===serial;
    try{
      const quantity=target();marketFeeBps(state.buyFee);marketFeeBps(state.sellFee);
      if(typeof stationId!=='string'||!stationId)throw Error('Vyber vlastní stanici.');
      const rules=await loadRules();if(!current())return null;
      const itemId=state.itemId,materialPlan=catalog.items[itemId].c==='raw'?null:planMaterials({[itemId]:quantity},[],rules.RECIPES,catalog);
      const ids=[...new Set([itemId,...Object.keys(materialPlan?.rawMissing||{})])],books={},failures=[];state.total=ids.length;emit();
      let me=null;try{me=await api('/api/market/me');if(!current())return null;if(!Array.isArray(me?.stations)||!Array.isArray(me?.payFrom))throw Error('Neplatný formát účtů trhu.')}
      catch(e){if(!current())return null;me=null;failures.push({id:'market/me',reason:'Platební účet, zásobu a místo nelze ověřit.'})}
      for(const [index,id] of ids.entries()){
        if(!current())return null;
        if(index>=32){failures.push({id,reason:'Limit 32 knih; cena není ověřená.'});continue}
        try{const body=await api('/api/market/item?id='+encodeURIComponent(id));if(!current())return null;books[id]=normalizeMarketBook(body,id,rules,now())}
        catch(e){if(!current())return null;failures.push({id,reason:String(e.message||e)})}
        state.progress++;emit();if(index+1<Math.min(ids.length,32)){await delay(150);if(!current())return null}
      }
      if(!current())return null;state.rules=rules;state.evidence={stationId,itemId,quantity,materialPlan,books,me,failures,total:ids.length,at:now()};return calculate();
    }catch(e){if(current())state.error=String(e.message||e);return null}
    finally{if(current()){state.busy=false;emit()}}
  }
  return {state,refresh,calculate,edit,invalidate,cancel};
}
// Unified advisory workflow, explicit evidence states and safe preference migration.
const TOOLKIT_DEFAULTS={importStacks:5,exportStacks:10,priority:50,includeCraftedExports:true,enableWrites:false};
function migrateToolkitStorage(raw,{source='current',legacyPosition=null}={}){
  const record=x=>x&&typeof x==='object'&&!Array.isArray(x),warnings=[];let value=raw,canSave=true;
  try{if(typeof raw==='string')value=JSON.parse(raw)}catch{value=null;canSave=source==='legacy';warnings.push('Uložený JSON je neplatný; originál nebyl přepsán.')}
  if(value!==null&&value!==undefined&&!record(value)){value=null;canSave=source==='legacy';warnings.push('Neplatný formát nastavení.')}
  if(record(value)&&value.schemaVersion!==undefined&&value.schemaVersion!==1){canSave=false;warnings.push('Neznámá verze nastavení; ukládání je vypnuté a originál zůstává zachovaný.');value=null}
  const data={schemaVersion:1,toolkitVersion:'0.2.0',settings:{...TOOLKIT_DEFAULTS},exploredMinimized:false};
  if(record(value?.settings)){
    for(const [k,min,max] of [['importStacks',1,10000],['exportStacks',1,10000],['priority',0,100]])if(Number.isSafeInteger(value.settings[k])&&value.settings[k]>=min&&value.settings[k]<=max)data.settings[k]=value.settings[k];
    if(typeof value.settings.includeCraftedExports==='boolean')data.settings.includeCraftedExports=value.settings.includeCraftedExports;
  }
  const position=v=>record(v)&&['left','top'].every(k=>typeof v[k]==='number'&&Number.isFinite(v[k])&&Math.abs(v[k])<=1e7)?{left:v.left,top:v.top}:null;
  const size=v=>record(v)&&['width','height'].every(k=>typeof v[k]==='number'&&Number.isFinite(v[k])&&v[k]>0&&v[k]<=100000)?{width:v.width,height:v.height}:null;
  for(const key of ['position','fabPosition','exploredPosition']){const p=position(value?.[key]??(key==='position'?legacyPosition:null));if(p)data[key]=p}
  for(const key of ['windowSize','exploredSize']){const p=size(value?.[key]);if(p)data[key]=p}
  if(typeof value?.exploredMinimized==='boolean')data.exploredMinimized=value.exploredMinimized;
  return {data,canSave,warnings,migrated:source==='legacy'};
}
function projectToolkitInterfaces(rules){
  const take=(v,keys)=>Object.fromEntries(keys.map(k=>[k,v[k]??null]));
  const rows=(list,keys)=>list.map(v=>take(v,keys)).sort((a,b)=>a.id.localeCompare(b.id));
  return {recipes:rows(rules.RECIPES,['id','machine','level','seconds','makes','building','research']),buildings:rows(rules.BUILDINGS,['id','kind','tier','speed','stacks','slots','floor','research','mines','drain','bays','outpost']),
    machines:rows(rules.BAY_MACHINES,['id','kind','tier','speed','productivity','w','d']),projects:rows(rules.PROJECTS,['id','scope','steps','seconds','credits','requires']),tickMs:rules.TICK_MS,marketLimits:rules.LIMITS};
}
function auditToolkitInterfaces(catalog,rules,at,baseline=null){
  const issues=[],seen=new Set(),pairs=o=>JSON.stringify(Object.entries(o||{}).sort(([a],[b])=>a.localeCompare(b)));
  for(const key of ['RECIPES','PROJECTS','BUILDINGS','ITEMS'])if(!Array.isArray(rules?.[key]))issues.push('Chybí export '+key);
  for(const key of ['stackSize','researchAt','isDone','buildingById'])if(typeof rules?.[key]!=='function')issues.push('Chybí funkce '+key);
  if(issues.length)return {ok:false,at,issues,scope:'catalog-and-exports'};
  for(const r of rules.RECIPES){
    const old=catalog.recipes[r.id];if(seen.has(r.id))issues.push('Duplicitní recept '+r.id);seen.add(r.id);
    if(!old||old.o!==r.output||old.m!==r.makes||pairs(old.i)!==pairs(r.inputs))issues.push('Změněný recept '+r.id);
  }
  for(const id of Object.keys(catalog.recipes))if(!seen.has(id))issues.push('Chybí recept '+id);
  const items=new Set(rules.ITEMS.map(i=>i.id));for(const [id,item] of Object.entries(catalog.items))if(!items.has(id)||rules.stackSize(id)!==item.s)issues.push('Změněný stack/položka '+id);
  for(const id of items)if(!catalog.items[id])issues.push('Nová položka '+id);
  for(const [id,b] of Object.entries(catalog.buildings)){const live=rules.buildingById(id);if(!live||live.kind!==b.k||(b.s!==null&&b.s!==undefined&&live.stacks!==b.s))issues.push('Změněná budova '+id)}
  if(baseline){try{const live=projectToolkitInterfaces(rules);for(const key of Object.keys(baseline))if(JSON.stringify(baseline[key])!==JSON.stringify(live[key]))issues.push('Změněná pravidla '+key)}catch{issues.push('Chybí exporty pro kontrolu mechanik.')}}
  const projects=new Map(rules.PROJECTS.map(p=>[p.id,p]));for(const [id,p] of Object.entries(catalog.research))if(!projects.has(id)||pairs(p.i)!==pairs(projects.get(id).inputs))issues.push('Změněné vstupy výzkumu '+id);
  return {ok:issues.length===0,at,issues,scope:'recipe inputs/output/makes, item stacks, known buildings/stacks, research inputs and required exports',
    counts:{recipes:rules.RECIPES.length,items:rules.ITEMS.length,projects:rules.PROJECTS.length},warning:'Nejde o kontrolu všech serverových endpointů ani důkaz kompatibility všech mechanik.'};
}
function buildJourneyPlan({catalog,config,progress,factory=null,market=null,expansion=null,failures=[],previous=null,at,stale=false}){
  if(!progress?.station||progress.station.id!==config.stationId||!progress.materialPlan||!Array.isArray(progress.choices))throw Error('Neověřený podklad vybrané stanice.');
  const name=id=>catalog.items[id]?.n||id,material=progress.materialPlan,steps=[];
  const add=(id,phase,status,title,detail,action,extra={})=>steps.push({id,phase,status,title,detail,action,...extra});
  const researchId=config.projectId||progress.target?.desired||progress.target?.id;
  const goal=config.goal==='research'?{kind:'research',id:researchId,name:progress.choices.find(p=>p.id===researchId)?.name||researchId}:
    {kind:'production',id:config.itemId,name:name(config.itemId),quantity:config.quantity};
  if(!goal.id)throw Error('Nepodařilo se určit konkrétní cíl.');
  if(goal.kind==='production'&&(progress.target?.id!==goal.id||progress.target?.quantity!==config.quantity))throw Error('Materiálový podklad patří jinému cíli.');
  const held=goal.kind==='production'?material.usedStock?.[goal.id]||0:null;
  const complete=goal.kind==='research'?progress.choices.some(p=>p.id===goal.id&&p.done===true):held>=goal.quantity;
  add('goal:'+goal.id,'then',complete?'done':'pending',goal.name,goal.kind==='production'?`V cílové stanici ověřeno ${held}/${goal.quantity} ks. Jde o aktuální zásobu, nikoliv celoživotně vyrobené množství.`:'Dokončení se řídí stavem výzkumu v kontextu této stanice.','advisor');
  if(progress.account&&!progress.account.inventoryComplete)add('account','now','unknown','Doplň chybějící stanice',`Načteno ${progress.account.loaded}/${progress.account.total}; chybějící zásoby nejsou nula.`,'account');
  for(const [id,n] of Object.entries(material.rawMissing||{}))if(n>0)add('raw:'+id,'now',progress.account&&!progress.account.inventoryComplete?'unknown':'pending','Zajisti '+name(id),`Zbytkový materiálový požadavek ${n} ks po skladu a podmíněných dodávkách. Nejde o trvalý tok.`,'mining',{resource:id});
  for(const t of (material.externalTransfers||[]).slice(0,30))add('transfer:'+t.station+':'+t.resource,'now','review','Prověř vlastní dodávku '+name(t.resource),`${t.amount} ks ze stanice ${t.name||t.station}. Přebytek je pouze kandidát, nikoliv uskutečněný přesun.`,'account',{resource:t.resource});
  for(const b of material.blocked||[])add('blocked:'+b.resource,'now','blocked','Najdi jiný zdroj '+name(b.resource),b.reason,'market',{resource:b.resource,amount:b.amount});
  const researchIds=new Set((material.crafts||[]).map(c=>c.research).filter(Boolean));
  if((material.crafts||[]).some(c=>!c.building))researchIds.add('assembly-bay');
  if((material.crafts||[]).some(c=>c.machine==='assembler'&&!c.building))researchIds.add('assembler');
  if(goal.kind==='research')researchIds.add(goal.id);
  if(progress.target?.kind==='research')researchIds.add(progress.target.id);
  for(const old of previous?.steps||[])if(old.id.startsWith('research:')&&(!complete||progress.choices.some(p=>p.id===old.id.slice(9)&&p.done===true)))researchIds.add(old.id.slice(9));
  const visit=id=>{const p=progress.choices.find(x=>x.id===id);for(const dep of p?.missingPrerequisites||[])if(!researchIds.has(dep)){researchIds.add(dep);visit(dep)}};for(const id of [...researchIds])visit(id);
  for(const id of researchIds){const p=progress.choices.find(x=>x.id===id);add('research:'+id,'then',p?.done===true?'done':!p?'unknown':p.available?'pending':'blocked',p?.name||id,p?.done?'Výzkum je v čerstvém snímku dokončený.':`Ověř výzkumné vstupy a návaznosti${p?.missingPrerequisites?.length?': '+p.missingPrerequisites.join(', '):''}.`,'advisor')}
  for(const c of material.crafts||[])add('craft:'+c.resource,'then',c.research&&!progress.choices.some(p=>p.id===c.research&&p.done)?'blocked':'pending','Vyrob '+name(c.resource),`${c.amount} ks, ${c.batches} základních dávek; skutečný výkon a odvod je nutné ověřit.`,'factory',{resource:c.resource});
  const missing=goal.kind==='production'?Math.max(0,goal.quantity-held):null;
  if(config.withFactory&&!complete&&goal.kind==='production'){
    const valid=factory?.station?.id===config.stationId&&factory.target?.id===goal.id&&factory.target.rate===config.rate;
    add('capacity','then',!valid?'unknown':!factory.evidence?.capacityComplete?'unknown':factory.bottlenecks.length?'blocked':'review','Ověř výrobní kapacitu',valid?`${config.rate} ks/min pro plánované modely. ${factory.bottlenecks.length} podmíněných úzkých míst. Shoda nominálních kapacit nepotvrzuje dodávky.`:'Kapacity pro stejnou stanici, produkt a výkon nebyly ověřené.','factory');
  }
  if(config.withMarket&&!complete&&goal.kind==='production'){
    const s=market?.snapshot,valid=market?.stationId===config.stationId&&s?.target?.id===goal.id&&s.target.quantity===missing;
    add('economics','now',valid&&s.buy.known&&s.buy.full?'review':'unknown','Porovnej nákup a výrobu',valid?`Ocenění chybějících ${missing} ks. ${s.manufacture.full?'Raw koš je oceněný.':'Raw koš nemá úplné ocenění.'} Nejde o nákup ani potvrzený čistý zisk.`:'Tržní data pro stejný chybějící počet nebyla ověřena.','market');
  }
  const needs=Object.values(material.rawMissing||{}).some(n=>n>0);
  let candidates=[];
  if(!complete&&needs){
    const expected=Object.entries(material.rawMissing||{}).filter(([,n])=>n>0).sort(([a],[b])=>a.localeCompare(b));
    const actual=Array.isArray(expansion?.context?.needs)?expansion.context.needs.map(n=>[n.resource,n.amount]).sort(([a],[b])=>a.localeCompare(b)):null;
    const valid=expansion?.context?.station?.id===config.stationId&&expansion.context.at===progress.at&&expansion.context.target.id===progress.target?.id&&JSON.stringify(expected)===JSON.stringify(actual);
    if(valid)candidates=(expansion.rows||[]).filter(r=>r.site?.eligible===true&&Number.isFinite(r.site.coverage)&&r.site.coverage>0&&r.site.coverage<=1&&r.system?.id===r.id&&Number.isFinite(r.system.x)&&Number.isFinite(r.system.y)&&Number.isFinite(r.distance)&&r.distance>=0).slice(0,5).map(r=>({id:r.id,name:r.name||r.id,coverage:r.site.coverage,distance:r.distance,system:r.system}));
    add('base','base',candidates.length?'review':config.withExpansion?'unknown':'pending','Další základna',candidates.length?'Ověřené podmíněné lokality pokrývají část materiálového cíle. Ověření není provedená stavba.':config.withExpansion?'V omezeném výběru nebyla ověřena vhodná lokalita. To neprokazuje, že žádná neexistuje.':'Hledání spusť jen pro konkrétní zbývající potřeby; dosud nebylo provedeno.','expansion');
  }else add('base','base','review','Další základna nyní není odůvodněná',complete?'Aktuální cíl je ve snímku splněný.':'Po skladu a kandidátech dodávek nejsou odvozené raw potřeby. To nepotvrzuje úplnou soběstačnost.','expansion');
  const old=new Map((previous?.steps||[]).map(s=>[s.id,s]));
  for(const step of steps){step.newlyCompleted=step.status==='done'&&old.has(step.id)&&old.get(step.id).status!=='done';step.regressed=step.status!=='done'&&old.get(step.id)?.status==='done'}
  const ids=new Set(steps.map(s=>s.id)),archived=(previous?.steps||[]).filter(s=>!ids.has(s.id)&&s.status!=='replanned').slice(0,20).map(s=>({...s,status:'replanned',newlyCompleted:false,regressed:false,detail:'Krok nahradil nový přepočet. Z jeho zmizení nevyplývá dokončení.'}));
  return {format:1,at,station:progress.station,goal,complete,stale,steps:[...steps,...archived],candidates,failures,
    sources:{progress:progress.at,account:progress.account?.at||null,factory:factory?.at||null,market:market?.snapshot?.at||null,expansion:expansion?.at||null},
    transferCoverage:{shown:Math.min(30,material.externalTransfers?.length||0),total:material.externalTransfers?.length||0},
    warnings:['Plán je poradní. Neprovádí výzkum, stavbu, těžbu, přesun ani obchod. Pořadí je vysvětlitelná heuristika, nikoliv důkaz optimálního postupu.',
      'Podklady se načítají postupně a nejsou atomické. Splnění znamená pozorovaný stav při načtení, ne trvalou záruku nebo historický počet vyrobených kusů.',
      'Materiálový počet kusů, plánovaný výkon ks/min a tržní ocenění zůstávají odlišné. Podmíněné dodávky, kapacity a ceny neznamenají provedenou akci.']};
}
function createJourneyAdvisor({catalog,baseline=null,loadRules,readProgress,readFactory,readMarket,readExpansion,cancelWork=()=>{},onChange=()=>{},now=()=>new Date().toISOString()}){
  const state={busy:false,stage:'idle',error:'',snapshot:null,compatibility:null,goal:'production',itemId:'iron-ingot',quantity:'10',projectId:'',rate:'10',includeAccount:true,withFactory:true,withMarket:false,withExpansion:false,stale:false};
  let serial=0,previous=null,key=null,pinned=null;const emit=()=>onChange();
  function invalidate(notify=true){const owned=state.busy?state.stage:null;serial++;state.busy=false;state.stage='idle';state.snapshot=null;state.error='';if(owned)cancelWork(owned);if(notify)emit()}
  function reset(){previous=null;key=null;pinned=null;state.compatibility=null;invalidate()}
  function cancel(){invalidate(false);state.error='Plánování zrušeno.';emit()}
  function markStale(notify=true){state.stale=true;if(state.snapshot)state.snapshot.stale=true;if(notify)emit()}
  function edit(k,v){if(state.busy||!['goal','itemId','quantity','projectId','rate','includeAccount','withFactory','withMarket','withExpansion'].includes(k))return;state[k]=v;state.snapshot=null;state.error=''}
  async function check(){if(state.busy)return;state.busy=true;state.stage='compatibility';state.snapshot=null;const ticket=++serial;emit();try{const rules=await loadRules();if(ticket!==serial)return;state.compatibility=auditToolkitInterfaces(catalog,rules,now(),baseline)}catch(e){if(ticket===serial)state.compatibility={ok:false,at:now(),issues:[String(e.message||e)]}}finally{if(ticket===serial){state.busy=false;state.stage='idle';emit()}}}
  async function refresh(stationId){
    if(state.busy)return null;const ticket=++serial;state.busy=true;state.stage='validation';state.error='';state.snapshot=null;state.stale=false;emit();const current=()=>ticket===serial;
    try{
      const quantity=Number(state.quantity),rate=Number(state.rate);
      if(typeof stationId!=='string'||!stationId||!['production','research'].includes(state.goal)||!Number.isSafeInteger(quantity)||quantity<1||quantity>1000000||!Number.isFinite(rate)||rate<0.001||rate>1000000||!catalog.items[state.itemId])throw Error('Vyber stanici a platný cíl, množství a výkon.');
      const config={stationId,goal:state.goal,itemId:state.itemId,quantity,projectId:state.projectId.trim(),rate,includeAccount:!!state.includeAccount,withFactory:!!state.withFactory,withMarket:!!state.withMarket,withExpansion:!!state.withExpansion};
      const nextKey=JSON.stringify([stationId,config.goal,config.goal==='production'?config.itemId:config.projectId,config.goal==='production'?quantity:null]);
      if(nextKey!==key){previous=null;pinned=null;key=nextKey}
      state.stage='compatibility';emit();const rules=await loadRules();if(!current())return null;state.compatibility=auditToolkitInterfaces(catalog,rules,now(),baseline);if(!state.compatibility.ok)throw Error('Herní rozhraní se liší od vložených dat. Plán nebyl sestaven; ověř diagnostiku kompatibility.');
      state.stage='progress';emit();const progress=await readProgress(stationId,{...config,projectId:pinned||config.projectId});if(!current())return null;if(!progress)throw Error('Čerstvý materiálový a výzkumný podklad se nepodařilo načíst.');
      if(config.goal==='research'){pinned=pinned||config.projectId||progress.target?.desired||progress.target?.id;config.projectId=pinned}
      const basic=buildJourneyPlan({catalog,config,progress,at:now(),stale:state.stale}),failures=[];let factory=null,market=null,expansion=null;
      const run=async(stage,fn)=>{state.stage=stage;emit();try{const value=await fn();if(!value)throw Error('Podklad nebyl ověřen.');return value}catch(e){if(current())failures.push({stage,reason:String(e.message||e)});return null}};
      if(!basic.complete){
        if(config.goal==='production'&&config.withFactory){factory=await run('factory',()=>readFactory(stationId,config));if(!current())return null}
        if(config.goal==='production'&&config.withMarket){const missing=Math.max(0,quantity-(progress.materialPlan.usedStock?.[config.itemId]||0));if(missing)market=await run('market',()=>readMarket(stationId,{...config,quantity:missing}));if(!current())return null}
        if(config.withExpansion&&Object.values(progress.materialPlan.rawMissing||{}).some(n=>n>0)){expansion=await run('expansion',()=>readExpansion(progress,config));if(!current())return null}
      }
      state.snapshot=buildJourneyPlan({catalog,config,progress,factory,market,expansion,failures,previous,at:now(),stale:state.stale});previous=state.snapshot;return state.snapshot;
    }catch(e){if(current()){state.error=String(e.message||e);if(state.stage==='compatibility')state.compatibility={ok:false,at:now(),issues:[state.error]}}return null}
    finally{if(current()){state.busy=false;state.stage='idle';emit()}}
  }
  return {state,refresh,check,edit,invalidate,reset,cancel,markStale};
}
// Account-wide product coverage. Independent siting alternatives, no gameplay writes.
function coverageConfig(value={}){
  const c={reserveStacks:value.reserveStacks??1,horizon:value.horizon??60,machineTier:value.machineTier??1,includeBuildings:value.includeBuildings===true};
  for(const key of ['reserveStacks','horizon','machineTier']){if(typeof c[key]==='boolean'||String(c[key]).trim()==='')throw Error('Vyplň rezervu, horizont a tier.');c[key]=Number(c[key])}
  if(!Number.isFinite(c.reserveStacks)||c.reserveStacks<0||c.reserveStacks>100||!Number.isFinite(c.horizon)||c.horizon<1||c.horizon>1440||!Number.isInteger(c.machineTier)||c.machineTier<1||c.machineTier>3)throw Error('Rezerva musí být 0–100 stacků, horizont 1–1440 min a stroje T1–T3.');
  return c;
}
function coverageStationEvidence({view,floors,rules,catalog,productionFlows,factoryCapacityEvidence,stationExportSurplus,research=null,position=null,at}){
  if(!view?.station||typeof view.station.id!=='string'||!view.station.id||view.station.mine===false||!Array.isArray(view.stock)||!Array.isArray(view.machines)||!Array.isArray(view.requests)||!Array.isArray(view.exports))throw Error('Neplatný detail vlastní stanice.');
  const stock=[],seen=new Set();for(const row of view.stock){if(!catalog.items[row.resource]||seen.has(row.resource)||!Number.isSafeInteger(row.units)||row.units<0)throw Error('Neplatné zásoby stanice.');seen.add(row.resource);stock.push({resource:row.resource,units:row.units,exportable:stationExportSurplus(view,row.resource,row.units).units})}
  const ev=factoryCapacityEvidence(view,floors,rules,catalog,productionFlows,at),flows=new Map(),failures=[...ev.failures];
  const put=(id,key,n)=>{if(!catalog.items[id]||typeof n!=='number'||!Number.isFinite(n)||n<0||n>1e15)throw Error('Neplatný nominální tok.');const row=flows.get(id)||{resource:id,made:0,used:0};row[key]+=n;if(row[key]>1e15)throw Error('Tok překročil číselný rozsah.');flows.set(id,row)};
  const isFloor=m=>m.bay||rules.buildingById(m.building)?.floor;
  // Station boundary flow is not internal production; do not add it to floor capacities.
  const slotView={...view,machines:view.machines.filter(m=>!isFloor(m))};
  for(const f of productionFlows(slotView)){put(f.resource,'made',f.made);put(f.resource,'used',f.used)}
  for(const m of slotView.machines){if(!m.on)continue;if((m.working||m.research)&&m.state!=='done'&&(!rules.PROJECTS.some(p=>p.id===(m.working??m.research))||typeof m.perMinute!=='number'||!Number.isFinite(m.perMinute)||m.perMinute<0))failures.push({slot:m.slot,reason:'Neznámá spotřeba laboratoře.'});
    if(m.order?.state==='waiting'&&(!(m.order.seconds>0)||!m.order.short||Object.values(m.order.short).some(n=>typeof n!=='number'||!Number.isFinite(n)||n<0)))failures.push({slot:m.slot,reason:'Neznámá spotřeba loděnice.'});}
  for(const cap of ev.capacities.filter(c=>c.kind==='floor')){
    const recipe=rules.RECIPES.find(r=>r.output===cap.resource),model=rules.bayMachineById(cap.model),crafts=cap.rate/(recipe.makes*(1+rules.productivityOf(model)/100));
    put(cap.resource,'made',cap.rate);for(const [id,n] of Object.entries(recipe.inputs))put(id,'used',crafts*n);
  }
  for(const m of view.machines)if(!rules.buildingById(m.building))failures.push({slot:m.slot,reason:'Neznámý model budovy.'});
  const slots=new Set();let slotsKnown=true;for(const m of view.machines){if(!Number.isSafeInteger(m.slot)||m.slot<0||slots.has(m.slot))slotsKnown=false;else slots.add(m.slot)}
  if(!slotsKnown)throw Error('Neplatné nebo duplicitní sloty strojů.');
  let freeSlots=null;try{if(research&&slotsKnown){const spec=rules.buildingById(view.station.building);if(spec){const total=rules.slotsOf(spec,rules.researchAt(research,view.station.id),view.station);if(Number.isSafeInteger(total)&&total>=0)freeSlots=Math.max(0,total-slots.size)}}}catch{}
  const bays=view.machines.filter(isFloor).map(m=>({slot:m.slot,building:m.building,on:m.on}));
  const constructors=view.machines.filter(m=>rules.buildingById(m.building)?.construct).map(m=>({slot:m.slot,building:m.building,on:m.on}));
  return {canProduce:rules.buildingById(view.station.building)?.outpost!==true,id:view.station.id,name:view.station.systemName||view.station.name||view.station.id,system:view.station.system,at,stock,flows:[...flows.values()],capacities:ev.capacities,
    productionComplete:ev.capacityComplete&&failures.length===0,failures,bays,constructors,freeSlots,position,loadedFloors:ev.loaded,totalFloors:ev.total};
}
function buildProductionCoverage({catalog,rules,stations,research=null,evidence,config={},buildFactoryPlan,at,recipes=null}){
  const c=coverageConfig(config),sum=(a,b)=>{const n=a+b;if(!Number.isFinite(n)||Math.abs(n)>1e15)throw Error('Překročen rozsah součtu.');return n};
  if(!Array.isArray(stations)||new Set(stations.map(s=>s.id)).size!==stations.length)throw Error('Duplicitní stanice v rozboru.');
  const products=(recipes||rules.RECIPES).filter(r=>c.includeBuildings||!r.building).sort((a,b)=>a.tier-b.tier||a.output.localeCompare(b.output));if(products.length>250)throw Error('Limit 250 produktů.');
  const inventoryComplete=evidence.inventoryComplete===true,productionComplete=inventoryComplete&&stations.every(s=>s.productionComplete),rows=[],cache=new Map();
  const flow=(s,id)=>s.flows.find(f=>f.resource===id)||{made:0,used:0},held=(s,id)=>s.stock.find(r=>r.resource===id)?.units||0;
  const distance=(a,b)=>a&&b&&[a.x,a.y,b.x,b.y].every(Number.isFinite)?Math.hypot(a.x-b.x,a.y-b.y):null;
  for(const r of products){
    const item=catalog.items[r.output];if(!item||!Number.isSafeInteger(item.s)||item.s<=0||!Number.isInteger(r.tier)||r.tier<1)throw Error('Neznámý produkt nebo tier.');
    const stock=stations.reduce((n,s)=>sum(n,held(s,r.output)),0),made=stations.reduce((n,s)=>sum(n,flow(s,r.output).made),0),used=stations.reduce((n,s)=>sum(n,flow(s,r.output).used),0);
    const reserve=Math.ceil(c.reserveStacks*item.s),missingStock=Math.max(0,reserve-stock),observedGap=Math.max(0,used-made),extraRate=Math.max(0,used+missingStock/c.horizon-made),consumers=stations.filter(s=>flow(s,r.output).used>0);
    const flags=[];if(!productionComplete)flags.push('unknown');else if(made===0)flags.push('missing');if(productionComplete&&observedGap>1e-8)flags.push('deficit');if(inventoryComplete&&stock<reserve)flags.push('low-stock');
    const candidates=[];
    if(extraRate>1e-9)for(const station of stations.filter(s=>s.canProduce!==false)){
      try{
        const floor=[...station.bays].sort((a,b)=>Number(b.on===true)-Number(a.on===true)||(rules.buildingById(b.building)?.speed||0)-(rules.buildingById(a.building)?.speed||0))[0],floorId=floor?.building||'assembler-1';
        const key=r.output+'|'+floorId;let target=cache.get(key);if(!target){const p=buildFactoryPlan({catalog,rules,targetId:r.output,rate:Math.max(0.001,extraRate),tier:c.machineTier,floorId});target=p.rows.find(row=>row.id===r.output);if(extraRate<0.001)target={...target,inputs:target.inputs.map(i=>({...i,rate:i.rate*extraRate/0.001})),machines:Math.ceil(extraRate/target.profile.capacity)};cache.set(key,target)}
        const requirements=target.inputs,inputs=[];let weight=0,localCoverage=0,startupCoverage=0,donorCoverage=0;
        for(const input of requirements){
          const f=flow(station,input.id),localNet=Math.max(0,f.made-f.used),need=input.rate,units=held(station,input.id),budget=need*c.horizon,w=need/catalog.items[input.id].s;
          const donors=stations.filter(s=>s.id!==station.id).map(s=>({station:s.id,name:s.name,units:s.stock.find(x=>x.resource===input.id)?.exportable||0,distance:distance(station.position,s.position)})).filter(d=>d.units>0).sort((a,b)=>(a.distance??Infinity)-(b.distance??Infinity)||b.units-a.units||a.station.localeCompare(b.station));
          const suggested=[];let left=Math.max(0,Math.ceil(Math.max(0,need-localNet)*c.horizon)-units);for(const d of donors.slice(0,3)){const take=Math.min(left,d.units);if(take>0){suggested.push({...d,units:take});left-=take}}
          weight+=w;localCoverage+=w*Math.min(1,localNet/need);startupCoverage+=w*Math.min(1,units/budget);donorCoverage+=w*Math.min(1,suggested.reduce((n,d)=>n+d.units,0)/budget);
          inputs.push({id:input.id,rate:need,localNet,continuousGap:Math.max(0,need-localNet),stock:units,startupMinutes:units/need,donors:suggested});
        }
        if(weight){localCoverage/=weight;startupCoverage/=weight;donorCoverage/=weight}
        let locks=null;try{if(research){const here=rules.researchAt(research,station.id);locks=[...new Set([r.research,r.machine==='assembler'&&!r.building?'assembler':null,!r.building&&!floor?'assembly-bay':null].filter(Boolean))].filter(id=>!rules.isDone(here,id))}}catch{}
        const infrastructure=r.building?station.constructors.some(m=>m.on===true):!!floor;
        const occupiedOff=r.building?station.constructors.some(m=>m.on===false):floor?.on===false;
        const needsSlot=!infrastructure&&!occupiedOff,spaceBlocked=needsSlot&&station.freeSlots===0;
        const meanDistance=consumers.length&&consumers.every(s=>distance(station.position,s.position)!==null)?consumers.reduce((n,s)=>n+distance(station.position,s.position)*flow(s,r.output).used,0)/used:null;
        const points={inputs:55*localCoverage,startup:10*startupCoverage,donors:5*donorCoverage,research:locks===null?0:locks.length?0:15,infrastructure:infrastructure?10:station.freeSlots>0?5:0,distance:meanDistance===null?0:5/(1+meanDistance/1000),affinity:flow(station,r.output).made>0?3:0};
        const status=spaceBlocked||locks?.length?'blocked':locks===null||!station.productionComplete||needsSlot&&station.freeSlots===null?'unknown':'conditional';
        const reasons=[];if(locks===null)reasons.push('Výzkum neověřen.');else if(locks.length)reasons.push('Nejdřív výzkum: '+locks.join(', ')+'.');
        if(spaceBlocked)reasons.push('Není potvrzený volný slot pro novou potřebnou budovu.');else if(needsSlot)reasons.push(station.freeSlots===null?'Volné sloty nejsou ověřené.':'Doplň budovu do volného slotu; cenu a odemčení modelu ověř.');
        if(occupiedOff)reasons.push('Potřebná budova je vypnutá; ověř možnost zapnutí.');
        if(!r.building&&floor)reasons.push('Hala existuje; místo pro dodatečné stroje a pásy není ověřené.');
        if(!station.productionComplete)reasons.push('Místní výrobní bilance není kompletně načtená; vypočtený volný tok nelze potvrdit.');
        reasons.push('Stávající nastavený výkon už je v součtu účtu; návrh požaduje dodatečné vyhrazené stroje.');
        if(inputs.some(i=>i.continuousGap>1e-9))reasons.push('Část trvalého přísunu je nutné nově zajistit; vlastní zásoba a kandidáti dodávek jsou jednorázové.');
        candidates.push({station:station.id,name:station.name,system:station.system,status,score:Object.values(points).reduce((a,b)=>a+b,0),points,extraRate,model:target.profile.id,machines:target.machines,capacityEach:target.profile.capacity,productivity:target.profile.productivity,
          inputs,localCoverage,startupCoverage,donorCoverage,meanConsumerDistance:meanDistance,freeSlots:station.freeSlots,locks,reasons});
      }catch(e){candidates.push({station:station.id,name:station.name,status:'unknown',score:-1,error:String(e.message||e),inputs:[],reasons:['Výrobní model nelze ověřit.']})}
    }
    const priority={conditional:0,unknown:1,blocked:2};candidates.sort((a,b)=>priority[a.status]-priority[b.status]||b.score-a.score||a.station.localeCompare(b.station));
    rows.push({id:r.output,name:item.n||r.output,tier:r.tier,building:!!r.building,stock,knownMade:made,knownUsed:used,reserve,missingStock,observedGap,extraRate,flags,
      production:!productionComplete?'unknown':made===0?'missing':'configured',lowStock:inventoryComplete?stock<reserve:null,deficit:productionComplete?observedGap:null,provisional:!productionComplete||!inventoryComplete,
      candidates:candidates.slice(0,3),alternativesAmong:stations.length,need:extraRate>1e-9,existing:stations.filter(s=>flow(s,r.output).made>0).map(s=>({station:s.id,name:s.name,rate:flow(s,r.output).made}))});
  }
  return {format:1,at,config:c,evidence:{...evidence,productionComplete},rows,stale:false,
    warnings:['Nastavené nominální kapacity a spotřeby nejsou skutečně dodané toky. Vnitřní výrobky hal se počítají z detailů strojů, nikoliv z hraničního in/out podruhé.',
      'Rozsah účtu zde znamená vlastní stanice. Osobní inventář se nezapočítává; výroba do inventáře nevytváří zásobu stanice.',
      'Rezerva je jeden volitelný cíl pro celý načtený účet, ne pro každou stanici. Horizont určuje doplňování zásoby; není předpověď skutečné doby dokončení.',
      'Každý produkt a každá z jeho tří lokalit je samostatná alternativa. Návrhy současně nerezervují stejné zdroje, přebytky ani místo.',
      'Jde o model doplnění vlastní výroby, ne důkaz skutečného nedostatku při externích tržních dodávkách. Import od minerů je nominální a nerezervuje sdílený výkon systému.',
      'Návrh je dodatečná výroba nad započtený nastavený výkon. Stávající stroje se nepovažují za nevyužitou další kapacitu.',
      'Hodnocení je vysvětlitelná heuristika, nikoliv globální optimum. Odemčení všech modelů, rozpočet, skutečný layout/pásy, odběr a přepravní dosah zůstávají neověřené.',
      'Dárci používají pouze známý přebytek s aktivním exportem do vlastních stanic. Kandidát dodávky nezaručuje import, průběžný přísun ani uskutečněný přesun.']};
}
function createProductionCoverage({catalog,baseline,api,loadRules,productionFlows,factoryCapacityEvidence,stationExportSurplus,buildFactoryPlan,auditToolkitInterfaces,onChange=()=>{},now=()=>new Date().toISOString(),delay=ms=>new Promise(r=>setTimeout(r,ms))}){
  const state={busy:false,phase:'idle',stale:false,error:'',snapshot:null,evidence:null,rules:null,compatibility:null,reserveStacks:'1',horizon:'60',machineTier:'1',includeBuildings:false,tier:'all',query:'',onlyNeeds:true,page:0,progress:0,total:0,bays:0};let serial=0;
  const emit=()=>onChange();
  function invalidate(notify=true){serial++;state.busy=false;state.phase='idle';state.stale=false;state.snapshot=null;state.evidence=null;state.error='';if(notify)emit()}
  function cancel(){invalidate(false);state.error='Rozbor výrobního pokrytí zrušen.';emit()}
  function markStale(notify=true){state.stale=true;if(state.snapshot)state.snapshot.stale=true;if(notify)emit()}
  function edit(k,v){if(state.busy||!['reserveStacks','horizon','machineTier','includeBuildings'].includes(k))return;state[k]=v;state.snapshot=null;state.error=''}
  async function calculate(ticket=serial){
    state.snapshot=null;state.error='';
    try{
      if(!state.evidence||!state.rules)throw Error('Nejprve načti vlastní stanice a haly.');const config=coverageConfig(state),e=state.evidence;
      state.phase='products';const products=state.rules.RECIPES.filter(r=>config.includeBuildings||!r.building).sort((a,b)=>a.tier-b.tier||a.output.localeCompare(b.output));state.progress=0;state.total=products.length;emit();
      let result=null,rows=[];for(let i=0;i<products.length;i+=3){if(ticket!==serial)return null;result=buildProductionCoverage({catalog,rules:state.rules,stations:e.stations,research:e.research,evidence:e.summary,config,buildFactoryPlan,at:now(),recipes:products.slice(i,i+3)});rows.push(...result.rows);state.progress=Math.min(i+3,products.length);emit();await delay(0)}
      if(ticket!==serial)return null;if(!result)throw Error('Chybí výrobní produkty.');result.rows=rows;result.stale=state.stale;state.snapshot=result;state.page=0;return result;
    }catch(e){if(ticket===serial)state.error=String(e.message||e);return null}
  }
  async function recalculate(){if(state.busy)return null;const ticket=++serial;state.busy=true;emit();try{return await calculate(ticket)}finally{if(ticket===serial){state.busy=false;state.phase='idle';emit()}}}
  async function refresh(){
    if(state.busy)return null;const ticket=++serial;state.busy=true;state.phase='rules';state.stale=false;state.error='';state.snapshot=null;state.evidence=null;state.progress=0;state.total=0;state.bays=0;emit();const current=()=>ticket===serial;
    try{
      coverageConfig(state);const rules=await loadRules();if(!current())return null;state.compatibility=auditToolkitInterfaces(catalog,rules,now(),baseline);if(!state.compatibility.ok)throw Error('Herní definice se změnily; rozbor se zastavil.');
      let first=true;const read=async path=>{if(!first){await delay(150);if(!current())throw Error('canceled')}first=false;return api(path)};
      const list=await read('/api/stations');if(!current())return null;if(!Array.isArray(list.stations))throw Error('Chybí vlastní seznam stanic.');
      const entries=new Map();for(const s of list.stations){if(!['string','number'].includes(typeof s?.id)||!String(s.id).trim()||typeof s.id==='number'&&!Number.isSafeInteger(s.id))throw Error('Neplatné ID stanice.');const id=String(s.id),old=entries.get(id);entries.set(id,{id,mine:s.mine===false||old?.mine===false?false:s.mine})}
      const eligible=[...entries.values()].filter(s=>s.mine!==false),failures=[],stations=[];let research=null,seed=null,foreign=entries.size-eligible.length;
      try{research=await read('/api/research');if(!current())return null;const record=x=>x&&typeof x==='object'&&!Array.isArray(x);if(!record(research?.done)||!record(research.steps)||!record(research.stations)||Object.values(research.stations).some(s=>!record(s?.done)||!record(s?.steps)))throw Error('Invalid research')}
      catch{if(!current())return null;research=null;failures.push({kind:'research',reason:'Výzkum nelze ověřit.'})}
      try{const meta=await read('/api/map/meta');if(!current())return null;if(!['string','number'].includes(typeof meta.seed)||String(meta.seed).trim()===''||!Number.isSafeInteger(Number(meta.seed)))throw Error('Invalid seed');seed=Number(meta.seed)}catch{if(!current())return null;failures.push({kind:'map',reason:'Vzdálenosti nelze ověřit.'})}
      state.phase='stations';state.total=eligible.length;emit();
      for(const [index,entry] of eligible.entries()){
        if(!current())return null;if(index>=40){failures.push({kind:'station',station:entry.id,reason:'Limit 40 stanic; zásoby ani kapacity nejsou kompletní.'});continue}
        try{
          const view=await read('/api/stations/view?id='+encodeURIComponent(entry.id));if(!current())return null;if(String(view?.station?.id)!==entry.id)throw Error('Server vrátil jinou stanici.');if(view.station.mine===false){foreign++;state.progress++;emit();continue}
          const floors=[];if(!Array.isArray(view.machines))throw Error('Neplatný seznam strojů.');const seenSlots=new Set();for(const m of view.machines.filter(m=>m.bay||rules.buildingById(m.building)?.floor)){if(seenSlots.has(m.slot))throw Error('Duplicitní slot haly.');seenSlots.add(m.slot)}
          for(const m of view.machines.filter(m=>m.on===true&&(m.bay||rules.buildingById(m.building)?.floor))){
            if(!Number.isSafeInteger(m.slot)||m.slot<0)throw Error('Neplatný slot haly.');
            if(state.bays>=80){floors.push({slot:m.slot,error:'Limit 80 detailů hal; kapacita není kompletní.'});continue}
            state.bays++;emit();try{const body=await read('/api/bay?station='+encodeURIComponent(entry.id)+'&slot='+m.slot);if(!current())return null;floors.push({slot:m.slot,body})}catch{if(!current())return null;floors.push({slot:m.slot,error:'Detail haly se nepodařilo načíst.'})}
          }
          let position=null;if(seed!==null)try{const sys=rules.map.systemById(seed,view.station.system);if(sys&&Number.isFinite(sys.x)&&Number.isFinite(sys.y))position={x:sys.x,y:sys.y}}catch{}
          stations.push(coverageStationEvidence({view,floors,rules,catalog,productionFlows,factoryCapacityEvidence,stationExportSurplus,research,position,at:now()}));
        }catch(e){if(!current())return null;failures.push({kind:'station',station:entry.id,reason:String(e.message||e)})}
        state.progress++;emit();
      }
      const ownTotal=eligible.length-(foreign-(entries.size-eligible.length)),inventoryComplete=stations.length===ownTotal&&!failures.some(f=>f.kind==='station');
      if(!current())return null;state.rules=rules;state.evidence={stations,research,summary:{at:now(),listed:entries.size,total:ownTotal,loaded:stations.length,excluded:foreign,baysRead:state.bays,baysLoaded:stations.reduce((n,s)=>n+s.loadedFloors,0),inventoryComplete,failures,productionFailures:stations.flatMap(s=>s.failures.map(f=>({station:s.id,...f})))}};
      return await calculate(ticket);
    }catch(e){if(current())state.error=String(e.message||e);return null}
    finally{if(current()){state.busy=false;state.phase='idle';emit()}}
  }
  return {state,refresh,recalculate,edit,invalidate,cancel,markStale};
}
// Static public source monitoring; downloaded text is never imported/evaluated.
function sourcePath(value,parent='/src/main.js'){
  if(typeof value!=='string'||!value||(!value.startsWith('/')&&!value.startsWith('./')&&!value.startsWith('../')))return null;
  try{const url=new URL(value,'https://alloutofspace.com'+parent);if(url.origin!=='https://alloutofspace.com'||!/^\/src\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_.-]+\.js$/.test(url.pathname)||url.pathname.split('/').some(p=>p==='.'||p==='..'))return null;return url.pathname}catch{return null}
}
function sourceText(text){return text.replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n')}
function sourceImports(text,parent){
  // Deliberately bounded lexical discovery, not an execution or a full JS parser.
  const found=new Set(),pattern=/(?:\b(?:import|export)\s+(?:[^;\"']{0,2000}?\bfrom\s*)?["']([^"'\n]+)["']|\bimport\s*\(\s*["']([^"'\n]+)["']\s*\))/g;
  for(const match of text.matchAll(pattern)){const p=sourcePath(match[1]||match[2],parent);if(p)found.add(p)}for(const m of text.matchAll(/\bimport\s*\(\s*`([^`$\r\n]+\.js)\$\{new URL\(import\.meta\.url\)\.search\}`\s*\)/g)){const p=sourcePath(m[1],parent);if(p)found.add(p)}return [...found];
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
  const SOURCE_MANIFEST = {"format":1,"algorithm":"SHA-256","optionalUnavailable":[],"files":{"/src/alert-rules.js":"a30269917a5c616b5031c302d1691a0d47b427a10d705b73f41027df51d28d0b","/src/auth.js":"346acc8cffdc104020a54039e0b6bda261836a613d5db4bc550676b6dd038df1","/src/background.js":"ddf31dde66be7e6d602a77c00c851c5d0fbcfeed4330f7dc610d476cc8d6b8a2","/src/bay.js":"c95edbe92ad5ede6839d9e4a1e07d2ffd97c33146a84bad5bda4912d3a321369","/src/baysim.js":"f25fd6ca36dabf4ac35fcc2d12a322d47a527ece3d94de0a84bd24c1b3cd1400","/src/buildings.js":"9af00ff0cc8958f143cb04294698337b1f5e3d55d41f7154572efd0e64c88a9f","/src/communal-rules.js":"f96e46d19af0042ed91d666a966d7b86026a2956e785d1bd466c2413c26f13f5","/src/community-rules.js":"15c42344bd69e4e0554d4a89f557637d578ac2118dfd9ddfda196b05cb93b6d6","/src/construct.js":"4228f04835c60995c2c79cd7080808c638e8a7ea85c74b0ee993321681128ff5","/src/contract-rules.js":"42684cd21407bb9b59478d13a96e19f9065fb5b1890013751d44ff0a6c09b2f0","/src/corp-roles.js":"81a18f4a502d74d9a6eb690875cb89d90177438cb9d0a010220c4dc81f0fab55","/src/deposits.js":"6cbadc300bdb643c4634b6bdd696e3a9627da62ffc823d25d4933d2ab6a379e2","/src/devalert-messages.js":"8c7ddffadb70f41ac8995b769280ac2a4c88d6bf30f47ac16348efac8c127e99","/src/devalert-rules.js":"437973b45bfa878ec9e49a94d3d6053e331aa42312a1d13ac76b592c50570c39","/src/emoji.js":"78bafb70db3108b3fb2a57e03543dfd835becfa3a8a15b34d9a9fa08d9d6a1a9","/src/features.js":"67ad9151f27ec9847408a8793a9c4ec37abe26206e33d004f6c9555a7cc3a274","/src/feedback-rules.js":"e47a128286dd95f8ac42ddb18e580d274a5da96a6ce8929d3ac995057c09defa","/src/forecast.js":"fd6242ae79490e4d6e4429269cefb8fa997b8129798cf0736f1108b496f1a199","/src/format.js":"7c316e30c3243d1baf8f624198e7c8953a2468492dc575c5e96436490452a276","/src/gate.js":"5d54befdc54694272357dfd5407a633b3912c774b89d03e29ae89f04d878c4ac","/src/globalboard-rules.js":"69a72163b1f563f7c1d3f45bb57f3799fac06d09d3ab0081a3408333ce9b3bc8","/src/grants.js":"abb201208688eeb7b0282609852c87e9be73fe7cdea6873a3039ddd8bdef2455","/src/habitats.js":"59e93b62769b8b4850bc329f3b45dc8989961b1f871ba57006fb2b79db99f4be","/src/help.js":"614f5e9c38e0e71d95fab787637eba1638206bfc2ca1feee1cdb8db5a25d16b9","/src/icons.js":"9f5af7ae7ec9651d85d5df1ad0bedfba6daa1eb8df5e7a427ca756c4290cd44d","/src/idle.js":"751d59599d62ba98d5dccf31c62aac7d0af18620c41526fe49a9c0c8e053934b","/src/inventorystate.js":"499bd641dc71c18ffe45751be5b361d4d2518e266dbec7f37aadf7057bae8947","/src/items.js":"75585579e8b916b539ded5a2b0da816e23891d25b5673d7f12d9644e14e0f13a","/src/itemwiki.js":"18d7114fcdc3156b07bac7740a208a9c12a10459831d3a7dd3c0dd79d9161a32","/src/kits.js":"ac2b886ca6939ff5d84f5a59d2bddda9db12fdd6178676fc3b59913b2f48d8e3","/src/leaderboard-rules.js":"60d31ef18176c46399eac91ac15c90695db3baece20e3f69a074de9d2743d055","/src/live.js":"566314cf7bd77f49bc8f2a1f21b9b255884b1c44804ce5089e21338106e1d16a","/src/looks.js":"f8d2dd35df770680b8305cf279a3a32a303e477755aa3d879bef6b7777fd6bf9","/src/main.js":"27f38f4f1eef06e9db52cc31e3898a227ceb2e53bc102fac7559de2bef21650a","/src/market-rules.js":"03170bf3c0cec3776de0acd55f6c043d2835a6d0dbbaf5fe1503db1955367510","/src/marks.js":"6b285603ce3b33e641c458bf8f132c3a56e64034be4e46f8bfd0814f5be3b25d","/src/mechanics.js":"211d3a35886d3858be24e6ed6d7a232097e56a3e1e47e9e84908d41afb7807c1","/src/mining.js":"34016131bed736af5e68721aa0cfd7fdf5fc84c206c1ab0e45c7a5d543b5d829","/src/net.js":"1d0b45560c2fe324b039fa50a17068250d9a2833ee2b0d0aee0ee54be28256a5","/src/patchnotes.js":"7a7d2e57ac9b26e16b1dcb7faa333f2dfabc23154668060e663deb30b0fe8caf","/src/planner.js":"a50098863a371fb3cd9696573be6852f058b208189b214929889dce1b828d2b2","/src/prefs-schema.js":"7ab57ded5c070702c895c5effd21a5d4e9c8e99d9753d7cb102f4b8e412f7db9","/src/prefs.js":"c3306650890237a15f264094f035b95f8b1e3f6bccf111b11b44f8ad43ff76fb","/src/production.js":"03f50b648a95e26f6241b69cc5bf622e4620bd2d239181c04e754f5322da186b","/src/research.js":"2710fb3b1435aebf73825dbc470da041760e9c46ef2acd71018f5a2a71484294","/src/researchstate.js":"143e63c58a844b534236cafd34f98fef7597f20ebc40fb527415887f5e8c04c3","/src/reset-rules.js":"b35ffe3f0f47d54e6ba50d0bde8de84e76f354ea3e30d3bd1e836f0682527a24","/src/resources.js":"ac92ae81945b816c0276985e51b12b45d10af9099ebc439dcedb7c2208e17367","/src/rows.js":"92658da936fc3adb70ccb12816d6e256746b06dcf252fafff3d9086e689d75a7","/src/search.js":"0c6105bf9af5a033e48c3c86b3323ecfb224fc16ecf15da9831764f95a790b33","/src/shipdesigns.js":"1418ea0f1507cd7a156897259c8306b90162b57943236d4fcc9ef8884ff90571","/src/ships.js":"02d47a253950494a75c3f38b76ca29da13ddfb6af201ac3f157997bb2a08f952","/src/sidebar.js":"5a19daa4bb44e5aeeca025852d7bc034a22f5eb282a0a691b6fe9f5938fa9bf7","/src/slash-commands.js":"04d6a67cd926ef39703ab44da4189da89a82f7b750813799e6a2261de575d892","/src/sounds.js":"7f61a82167ab86125d4b20a9e56c28c59c5aa5f6f987a248b7610bb4eadd57c9","/src/stockflow.js":"1e01e23f85234dddf00f68ff3b4489d820d102febfa08fd1f2b924d9fa07f733","/src/structures.js":"5add41a0b6afc5ae4af8dc5eded57d735c4a5cf6ce08a2cd129b19ca68d217e1","/src/systemname-rules.js":"9ca7f2a48fe7f7794159536317400fd60702726e746d45d3768abc1e4ecfef90","/src/tutorial.js":"5a8c8cf6806fb00e3dd0a19c9c469c67fb4ab7836a90945bf1430d566f518bdc","/src/ui/achievements.js":"9b6824c7921946fad9ab4e5bd2d545da692efe73dfb9d3fa9994d3094e84fbe5","/src/ui/alertsview.js":"21e3c470afda4333e2934e78e6827a38fb60704088abd904b4c976056af34222","/src/ui/announcements.js":"7a051db972bbb948b2708f660615c228381d22c1d771a065e6f87c7316dc3d9c","/src/ui/assets.js":"fd1c9003b0aab3e20f1d8d72242f7be7d7a47b8b0fe1ad87b612935f4f934f40","/src/ui/baydraw.js":"123f92fd8b13cf4102ab019855545ad18b468c7b1299f236880ac9425a189ec3","/src/ui/baymodels.js":"be7e68e6b253ef23c77e8aed150c9b08883683c8462c9f09fc338601295e4ffc","/src/ui/bayview.js":"58ceaa480df3ce676a695c77a5899bec3be3f1a23d6b46b5f18c85e46f2bdbca","/src/ui/buildicons.js":"a3e1f0b37e6a6d63c8f325e2a3389ad59ca9fa0eb98191e3f90c07609a7b6081","/src/ui/buildingmenu.js":"7cad4dfb7341b1220bb5126d5e15f5961b84dd36ba9b668bd6ce98c93dfe0d35","/src/ui/chatimages.js":"634a94f9ccdf56822c82fe3a0fde77b6543053f90a1c583c27f67bbc226c6fe3","/src/ui/chatlog.js":"d8cad27a0c4436d4fa58573e8915111f4d6afb335a80ce1a9c44cb2fc771ea0b","/src/ui/comms.js":"f089e5ad74a2b7b12c97a9b34fee338a79e81665cb5d9cf6d49947fcc3add512","/src/ui/communal.js":"a011df41ad372d9587bd7eba496678129f306bba2661da97243e69832a4e0a7e","/src/ui/constructbay.js":"d7ad2f06a918af72e6f5805f0670cc2770610ad2c6522c487e66d95b9f01df28","/src/ui/contextmenu.js":"de50a9620190bfb3ed141ba97decafb43c78f84f2ffdcfb1a54003a63ee3e171","/src/ui/contracts.js":"95b0afc3428c74ffe8fe1e2840a9ca1258753feda02f6ed31b773d0725297cbf","/src/ui/corpchat.js":"61f59e0f770c9bff7b9541313390b04c9e1c770721f799633f7c27adca624b72","/src/ui/corpnames.js":"e8ba0086a6548d279989466991788511e75bbad274ed5ea428cb0301fa14f3cc","/src/ui/corporations.js":"3aa10ced36e573f13b21f80695bab00ccfc12850db85b00d6a6b263abdc86ca3","/src/ui/devaccess.js":"052d153fbe6e4e38cf84e559f0f06da396cb0e107e22300620977be6576a6385","/src/ui/devalert.js":"008570e16976991e0831a2535cd09a2a02a121cbc5ad435558ab040ac3a1c69a","/src/ui/devcommands.js":"aa6a7cca1e712f2a40ccefc09ccb8ab165c5d10c6bc8d2b3d585c291f0b3bf24","/src/ui/devcontracts.js":"1b43fa53cddb75bea98557c4f0990a71a5dc35b7619d18bf92a3b1ec7ec06e53","/src/ui/devnotes.js":"bd749edbdf088f4523fab0a8b4d449aa32674aa3dc9fd6d4833a49753022cfad","/src/ui/devpanel.js":"595fc4841a16791af2f3c21e986c94cb5360597fdcfeaf3a36393a95b3e68bb0","/src/ui/devplayerchart.js":"1b17d9dc8318add1c9ad9c8c23fc2624092935925ce25f68638ab04f9715e513","/src/ui/devplayers.js":"f3121866f60972ba12bfcd381d9827bfadaf35421fdc6efc8bd2f892b6da3f0c","/src/ui/devreviews.js":"30910af187d69f57df6ceee625af7dd301d4cd5315bf4279396116d59e282237","/src/ui/devserver.js":"4049ad2fc1d70642ca7bd6c65c8f150a4aaa2a6e776dc101ac9c5fc25b92c6f5","/src/ui/devstations.js":"d757f6748eb3b1646695e71161750b0d61e14911117691dfc3f2097510547833","/src/ui/devstats.js":"e74bd8d22f838d93faed9fba3d6c91011b67bd579f8b61382474996b0614eb43","/src/ui/discords.js":"28daef9679105703f84f5372ee11854bc3cfdec0f3d513d66370930c314e9678","/src/ui/dmchat.js":"f530d089a5ebf85a0bfea9091d987c2c6f3b39c0091ab5a60757e08a960cefde","/src/ui/emoji.js":"f949e14ed9802259a64ad9380ae510826df7b2d8e7705babed48d1f612db1c60","/src/ui/factory.js":"2eb9dc5b034b3af03449557bd8aafc405fbe1043f3731477054dce7318035476","/src/ui/favorites.js":"4d3a7fcb906d4f50716cbf14def2dfce6cd31fa9392dac83dc4e197960dd4ea9","/src/ui/feedback.js":"fd3b7fcb5b9ca45ddad6289efb72bbf0b4af38f739707dbc0b764b9c2fbc93d1","/src/ui/fieldbaker.js":"9c43d958097f7fa62f080dbfaedc2981f309ac32b0898109f0e5be34ef2a0876","/src/ui/fieldworker.js":"e09a3db8cadb065814ce0600a12e475b323ba0c4a9850acdca9c4c0c604b5a75","/src/ui/friends.js":"e28219e6bda5fce7d3d834e434f62d547801cc88a39dd1f0fb4a4c2e965395e4","/src/ui/galaxyfield.js":"9b0ea41869f80533455edd01aac79cf15d856a8ca23268b8a536adcbf6359d6f","/src/ui/giftform.js":"6db7b01576504ce403ffb821c8b93e8a0de604b8265c2c64082e347208f2385a","/src/ui/globalboard.js":"775d41118107bb10dbef674bb40bd1a843ec9a22db1c44bc84be48d2f12bf047","/src/ui/habitats.js":"7560f3e93d8b8b073273895debc944da69357aa10ec9fa235dae47e9bfeca0b3","/src/ui/handlepicker.js":"e5447bcf87b4cd69e452b9e896b16a46181191b08a4d912c83b7c64f090b9a0d","/src/ui/help.js":"4d7ad7d19dfbd36b4c331b36f4048d748c6b1f3463a106b5943d2efe20fed306","/src/ui/infotip.js":"b60d328ba4a3773b413192fd427bcb2c019eaa3f7e7d3a083c8a292b608f8ffd","/src/ui/inventory.js":"79b7aad90698bb303eca97ae4c9bbfc3deab6553b12dc3a5c7b626268b134262","/src/ui/itemicons.js":"cc0fb67a79911da6ec3d5c9710f04aeb6b851919aa2a10d0203024fd2a4ed66c","/src/ui/itemmenu.js":"704e88ed91765a8a8a66e85567a69dcaffc9851bca1d2a7cca9546c053c85c33","/src/ui/itemwiki.js":"e85fe65788bb817c212246f5a37e3b86cf785b65c0a03e0fd7062acbc19aabd4","/src/ui/leaderboard.js":"4bec1dbee808de17e86201fc12bbd0265ab0c197930a4290f283c9a4860a4416","/src/ui/logistics.js":"8c1f153608a351d40c9c9c11ccae48fbabdfab7441ef2fd07a6f799da8527352","/src/ui/look.js":"9510f5d28308477afaae11e3452be51f15a1573f6e60a29f0cb041ebecc151c9","/src/ui/mapnames.js":"d8a7755a2809053bd8d31c778f2315358adae2f80d9014520fd691de28bdfa14","/src/ui/maptoggles.js":"59cd0711ef78a590ef79b34fe90f71cfa26ff6c8a291317a8a5c346b53b9c24f","/src/ui/mapui.js":"4891c8c9fe9ef7dae5b9b292308b0258e59a257be3de3597ad799dbaf02c7024","/src/ui/market.js":"aa037ce8cfe3f020f373a8c6663d8d4ac61b6d1d0a33c551765c1285fe017d9d","/src/ui/neocom.js":"5a1f275b0d99a4ce501637a9f0608c58431c11a18d7adf6d3cccff03de1aa217","/src/ui/opsmap.js":"acb2d2b1c2ed76146afd9bc97c6e12e25c825dd84adb8f996f265b30537ec9a0","/src/ui/pagesnap.js":"6881105d39b7217c3d150e70118ad3f627dbb0a9387b4033b7f71dd47ce2e1ca","/src/ui/patchnotes.js":"165c9d42b30b93faa6ebd7814411cfdf070edc0c8dc5333433b5386ef5658a7d","/src/ui/pctinput.js":"b4ecc852c9ce8d1e1d209abe9bf0c13a09bca6f05539246f7cd5fa9763041e88","/src/ui/pilotmenu.js":"1b2a7a0bd74dbf00b5082519ee68ce96af708d681d45712d880ffb65893a8965","/src/ui/places.js":"6c035481a556ab5733959f3c2cbfa94d74e9c84cb19e9db7e6bbe3b2a1f2d7ce","/src/ui/planner.js":"e25625459cf7516404c7ffa88d7eea6c2f7512bbe13cb4b3b74d53e2316228b4","/src/ui/pollcard.js":"ced812ca7a900f4894c307805976e13374aa8062883ded79f6875cb0691375ba","/src/ui/polls.js":"468cbe87a6703e568008a663d4d64d8c5ecb93c8a91963c2906ad5433f9bb776","/src/ui/pricechart.js":"a6466ace75cde4ad949ef8f56770fc99a9f1409a9c1cb4f6d16c2d95b7dbe8f5","/src/ui/production.js":"70207e948f6c7ff18c319d6d813f60bca7cebba0705344cd12122fb67448f224","/src/ui/research.js":"11be11977cfb6a28e0db51c26720e714668b70ece510b450e92175872f4f6348","/src/ui/resolve.js":"f459c165fa466d39c9ddc024d503e2a2cfd3f6550dcac9b3737eefbd218a73da","/src/ui/reviews.js":"d6123b0ddd482a1b3d96aa9af96a7c20d0f29286f3ce50c272e1d5e15669b247","/src/ui/screenshot.js":"10c7b1d219f13d4295438995acc0572ec7469c792b254a87965580e0b14ad447","/src/ui/search.js":"f3432e06b7b3fad199c411e31b0f5faaa5782133c4d2aa9aadbde287baa28313","/src/ui/searchsources.js":"971ae7a4fd6cb6f3ceb11f24a5dfd4b895e4206926d1a1a5ba5c9cd48edc7e0d","/src/ui/settings.js":"be199b44f0cd1be63b0d70432c614a5fedcf4a8b2e86de5913a504653a1b76b3","/src/ui/shipbay.js":"a0a90fcb06917726293883de0552f5ad47d577f391b51f1d5cad8032f54789d1","/src/ui/sidebarstyle.js":"4d9e955e25cb91a82eec21795ebe95f292130fb38c0205a293a819eda92b4730","/src/ui/slash.js":"fcd60b456aa9f5b727a34a2fec4d669a4131587aae2205a0703c67f7eb6285e5","/src/ui/splitsave.js":"e0e772136a6765bea8d855cab1455d40c291c7ea684ff1605ebe308c65d3ad46","/src/ui/starmap.js":"3b22f129751054081be34b4093af146e266ef55a073521dbbd3efc821913596b","/src/ui/stationart.js":"6f5ef763683ffe714da176e8ca690ce780e6afc3a93fa330949a73cbcbe80974","/src/ui/stationview.js":"a5faebca2b948a21e930a9e049b39c48cdd8c4b7532bbc4c61552533733f6d6a","/src/ui/structurename.js":"6cedaccf0f589b39ff869a0e94be42c43ca219e3e12f0997b98d3e27e8bb3c86","/src/ui/superclusters.js":"aa8e336ef6fdb55d0c26007324b6035079929b004ce0f8455ff5a22b5e3c65d4","/src/ui/support.js":"088f64030c9d9d96542373e6f6c422fef4f036209235a9eb3c53aaee38fd05d8","/src/ui/sysart.js":"df31a0b9879f13cb13659b02677559509cec3ad7d145ad8480a82ba113a023da","/src/ui/sysartworker.js":"23f751afd1e4a9aba3bcfa8083730c1ed25dd0dab2b1b84de9eea9e7bb231d0d","/src/ui/sysglyphs.js":"dc9edadaa23168790d613cfef0f7b9d4d656eaea1d3712d34341122fe3b0eecb","/src/ui/syssprites.js":"91a34863273f757b3931070d93f34cca756ef1c49cdb657572b38a9396b45471","/src/ui/systemview.js":"35fb89f7f41ca95d3b7b01a5bc030c6a8593c069cb98234dd2a34e2011213bfb","/src/ui/tutorial.js":"ef4a54c953b0ed5298a36f130dbe64075d2d57613ae664b39f3b6e24eade3b9f","/src/ui/updater.js":"68ace84ad1e0f97fea71d987b30b6b1eedc38d353f30ede560d17ef58b466888","/src/ui/wallet.js":"f992a68d99199913214eb8c704c8b22c7f869b4ec1cdbca9bc28af1cac78e8cc","/src/ui/whatsnew.js":"61e64899ceae9c8b9053eb0451a4df83f846c6802adb1e1e1aba74f27ecfc6b4","/src/ui/windows.js":"5b8eac2f431e23f4d43a159c527584895e739fc7ce287a5731d9dffb192f3e08","/src/ui/writingboxes.js":"b3751e6fcc792cd58ad427153e878b80287d1fb508bb5b718ff22150cdb0b695","/src/units.js":"f514a504b3253d1a2424ce001a1fad979e081804b779c9a374a7df3ef4ef955a","/src/unitstate.js":"064d43a5450c18d5f5c372d739be55c759250c39ee47c03059f78b156abd0d6a","/src/wallet-style.js":"546e86818616cbe88cf8ea699cb0693cbce679f65ca6bc0866d185958012bc02","/src/world/mapgen.js":"8e667944c3d4d864755803be12e87ff735b381d0c9b46518c3c10d891c056a03","/src/world/rng.js":"fc5da23849d2dd0bacf85fd3aa95eb20fc7aef36668fc655d7cfc2484f8edf52","/src/world/systemgen.js":"b1de938f61487c1e98566c7fd92f0d9705a951fdfa09383a7ab5b49e2229e467","/src/combat/stations.js":"af6df095e16be90e979b70c2178652456570bea087658b67613353475cec68b1","/src/combat/index.js":"6d7288cc03077468537c5706f57832c3c7d2545684b539368951cc9ecd2d8524","/src/combat/supplies.js":"0ce52a9be47decae74979ca8565516552f9f2316a7027896eed4555fea312b05","/src/combat/shipdesigns.js":"a1f8186c6f6cf1cc7207a45652139671466f413e9fc29e1ae12c84a752b69de3","/src/combat/shipmap.js":"89c6196c7466cc0791340406764d99581b815575e4bff48b44cf0d01bbfb2bc0","/src/combat/command.js":"0928d9b1b45a15620af359003ee195dda5cf305a3b2ce0eea55a897c94b3f5fd","/src/combat/battlemap.js":"f6101849b044242c75da1b1245c2e7fd082edf4fca27a28616b6f48c19df4437","/src/combat/hud.js":"c05167b8e542eb36b668afb840e4ff5a926d470106d449059622e2e5b07fc2d0","/src/combat/sysbattle.js":"729853c9adbd57d5a1bfb247b6c99c5d98b86bfbac6c782d944391e50aa94203","/src/combat/construct.js":"4cf6cae11990587853deb26f33fbf87960b5b5e3db1e20393c03e423bea9368e","/src/combat/enemymap.js":"b437616c5d6729f9a1b7a45e8743a97bb489bcad1bfcf882a174202535e7a03e","/src/combat/meter.js":"42072d25f01645b0200ef86eb51d066e478f1738a2aa8299e755fb1ce071bd5b","/src/combat/surveynote.js":"67abe44d3c8beae2c5e3be5e6566c1e1a3c4fd737e76079218e79af42dfe0b79","/src/combat/tutorial.js":"ad3506f9d53b45688ca840f550e19f601c471b1d0d4afc1d046e366d041ef870","/src/combat/canvas.js":"048736edc90063dbc86cab70519020187a26279d17bb9e1febcd1d6006458e26","/src/combat/rts.js":"be88ed18a8c876c659e0281dfac1e420643d6a85c608e62fe69de6d19c7afd5f","/src/combat/battlestate.js":"c355fc6e37be0377e9477abccaa87f38ac5a94381ab530b6dee85ca5bd6800e9","/src/combat/models.js":"3fb6d69e813f83ede7dd0b24a1b26cca585595b5781e89526f6c00949f853216","/src/combat/ships.js":"5fa221249b047f2ba6ce4af7121c912f7ebacd0ba78ee8dd9bcc44cbfc0f127d","/src/combat/shipstate.js":"bbbeaa48eb0382f2f6201cba5407c1e71e13ef4912eb0a3c5e0c69acb7dc2aeb","/src/combat/fleetstate.js":"3ecc46562c3f380386b6290fb5de994a7839514d52dd3efbac68ce1137555a1b","/src/combat/fleets.js":"ead7f6109089d633b6203f1ae0ed36919fa9c53a6b0f61d9b8bfc17d165bfcd0","/src/combat/battle.js":"f7846c90d6047915d1ec6a3b2a719bacdfafd8f4ea326582bd26c979032088c0","/src/combat/fx.js":"a9c00c20af140cd5d13719c5d7a50337403d3e0f351b7f28866a31ad9698b6c9","/src/combat/audio.js":"eaf92f0cf5839d95963af085cb588129ef47961a35cafa322926fee4033ebef2","/src/combat/flight.js":"58d8d6a3255af6204a52256fbf6fad8e85b2dd328decc993aab13ac3b29254b6","/src/combat/sysgeo.js":"5b00ade26a5beee597c3c649129c38f32b93ae0ccd6e32d10cbdeadb2ab2bc39","/src/combat/enemies.js":"83f2444cf9fb468fb3ef411d80f9a259710d1ce8a8218aae77239f40a0886469"}};
  const JOURNEY_BASELINE = {"recipes":[{"id":"aluminum-frame","machine":"press","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"aluminum-ingot","machine":"furnace","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"aluminum-sheet","machine":"press","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"ammonia","machine":"chemical","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"asm-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"asm-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"asm-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"assembler-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"assembler-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"battery-cathode","machine":"chemical","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"boron-powder","machine":"chemical","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"borosilicate-glass","machine":"furnace","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"brass","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"breathable-air","machine":"cryo","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"bronze","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"catalyst-mesh","machine":"chemical","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"cobalt-ingot","machine":"furnace","level":1,"seconds":24,"makes":1,"building":null,"research":null},{"id":"control-rod","machine":"assembler","level":3,"seconds":48,"makes":1,"building":null,"research":null},{"id":"copper-ingot","machine":"furnace","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"copper-sheet","machine":"press","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"copper-tubing","machine":"press","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"copper-wire","machine":"press","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"cryo-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"cryo-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"cryo-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"deuterium","machine":"refinery","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"diamond","machine":"press","level":3,"seconds":4,"makes":1,"building":null,"research":null},{"id":"electric-motor","machine":"assembler","level":2,"seconds":48,"makes":1,"building":null,"research":null},{"id":"engine-nozzle","machine":"furnace","level":3,"seconds":24,"makes":1,"building":null,"research":null},{"id":"enriched-uranium","machine":"refinery","level":2,"seconds":60,"makes":1,"building":null,"research":null},{"id":"fertilizer","machine":"chemical","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"fission-fuel-rod","machine":"assembler","level":3,"seconds":120,"makes":1,"building":null,"research":null},{"id":"flare","machine":"assembler","level":1,"seconds":20,"makes":1,"building":null,"research":null},{"id":"fuel-cell","machine":"assembler","level":2,"seconds":120,"makes":1,"building":null,"research":null},{"id":"fur-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"fur-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"fur-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"fusion-fuel-pellet","machine":"refinery","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"galvanized-steel","machine":"chemical","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"glass","machine":"furnace","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"gold-contacts","machine":"chemical","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"gold-foil","machine":"press","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"gold-ingot","machine":"furnace","level":1,"seconds":24,"makes":1,"building":null,"research":null},{"id":"graphite","machine":"furnace","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"helium-tank","machine":"cryo","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"hydrogen-filter","machine":"press","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"hydrogen-gas","machine":"cryo","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"hydrogen-storage-cell","machine":"cryo","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"chem-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"chem-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"chem-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"chrome-plating","machine":"chemical","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"chromium-ingot","machine":"furnace","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"igniter","machine":"assembler","level":1,"seconds":20,"makes":1,"building":null,"research":null},{"id":"ion-thruster","machine":"assembler","level":3,"seconds":48,"makes":1,"building":null,"research":null},{"id":"iridium-crucible","machine":"furnace","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"iridium-ingot","machine":"furnace","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"iron-ingot","machine":"furnace","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"iron-plate","machine":"press","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"kinetic-rounds","machine":"assembler","level":1,"seconds":8,"makes":4,"building":null,"research":null},{"id":"lead-acid-battery","machine":"assembler","level":1,"seconds":20,"makes":1,"building":null,"research":null},{"id":"lead-ingot","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"lead-shielding","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"liquid-helium","machine":"cryo","level":3,"seconds":24,"makes":1,"building":null,"research":null},{"id":"liquid-hydrogen","machine":"cryo","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"liquid-nitrogen","machine":"cryo","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"liquid-oxygen","machine":"cryo","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"lithium-battery","machine":"assembler","level":2,"seconds":48,"makes":1,"building":null,"research":null},{"id":"lithium-metal","machine":"furnace","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"magnesium-alloy","machine":"furnace","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"magnesium-ingot","machine":"furnace","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"miner-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"miner-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"miner-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"mining-charge","machine":"chemical","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"mirror","machine":"chemical","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"neodymium-magnet","machine":"furnace","level":3,"seconds":24,"makes":1,"building":null,"research":null},{"id":"neodymium-metal","machine":"furnace","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"neutron-detector","machine":"assembler","level":3,"seconds":120,"makes":1,"building":null,"research":null},{"id":"nickel-ingot","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"nickel-plating","machine":"chemical","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"nitrogen-gas","machine":"cryo","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"outpost-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"oxygen-gas","machine":"cryo","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"palladium-ingot","machine":"furnace","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"phosphorus-powder","machine":"press","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"platinum-ingot","machine":"furnace","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"polymer","machine":"chemical","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"prs-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"prs-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"prs-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"pure-silicon","machine":"furnace","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"ref-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"ref-2","machine":"assembler","level":1,"seconds":60,"makes":1,"building":true,"research":"tier-2-buildings"},{"id":"ref-3","machine":"assembler","level":2,"seconds":120,"makes":1,"building":true,"research":"tier-3-buildings"},{"id":"refined-carbon","machine":"furnace","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"rocket-fuel","machine":"cryo","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"rubber","machine":"chemical","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"silicon-wafer","machine":"refinery","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"silver-ingot","machine":"furnace","level":1,"seconds":24,"makes":1,"building":null,"research":null},{"id":"silver-paste","machine":"chemical","level":1,"seconds":24,"makes":1,"building":null,"research":null},{"id":"solder","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"stainless-steel","machine":"furnace","level":3,"seconds":10,"makes":1,"building":null,"research":null},{"id":"station-1","machine":"assembler","level":1,"seconds":30,"makes":1,"building":true,"research":null},{"id":"steel","machine":"furnace","level":2,"seconds":4,"makes":1,"building":null,"research":null},{"id":"sulfur-powder","machine":"press","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"sulfuric-acid","machine":"chemical","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"superalloy","machine":"furnace","level":3,"seconds":24,"makes":1,"building":null,"research":null},{"id":"thorium-fuel-rod","machine":"assembler","level":3,"seconds":120,"makes":1,"building":null,"research":null},{"id":"thorium-oxide","machine":"chemical","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"tin-ingot","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null},{"id":"titanium-alloy","machine":"furnace","level":3,"seconds":10,"makes":1,"building":null,"research":null},{"id":"titanium-ingot","machine":"furnace","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"titanium-plate","machine":"press","level":2,"seconds":10,"makes":1,"building":null,"research":null},{"id":"tungsten-carbide","machine":"furnace","level":3,"seconds":24,"makes":1,"building":null,"research":null},{"id":"tungsten-powder","machine":"furnace","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"uranium-233","machine":"refinery","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"uranium-oxide","machine":"chemical","level":3,"seconds":60,"makes":1,"building":null,"research":null},{"id":"water","machine":"chemical","level":1,"seconds":4,"makes":1,"building":null,"research":null},{"id":"xenon-lamp","machine":"assembler","level":2,"seconds":48,"makes":1,"building":null,"research":null},{"id":"xenon-tank","machine":"cryo","level":2,"seconds":24,"makes":1,"building":null,"research":null},{"id":"zinc-ingot","machine":"furnace","level":1,"seconds":10,"makes":1,"building":null,"research":null}],"buildings":[{"id":"assembler-1","kind":"assembler","tier":1,"speed":0.5,"stacks":null,"slots":null,"floor":true,"research":"assembly-bay","mines":null,"drain":null,"bays":null,"outpost":null},{"id":"assembler-2","kind":"assembler","tier":2,"speed":0.5,"stacks":null,"slots":null,"floor":true,"research":null,"mines":null,"drain":null,"bays":null,"outpost":null},{"id":"assembler-3","kind":"assembler","tier":3,"speed":0.5,"stacks":null,"slots":null,"floor":true,"research":null,"mines":null,"drain":null,"bays":null,"outpost":null},{"id":"construct-1","kind":"construct","tier":0,"speed":0.5,"stacks":null,"slots":null,"floor":null,"research":null,"mines":null,"drain":null,"bays":null,"outpost":null},{"id":"contracts-1","kind":"contracts","tier":0,"speed":null,"stacks":null,"slots":null,"floor":null,"research":null,"mines":null,"drain":null,"bays":null,"outpost":null},{"id":"lab-1","kind":"lab","tier":0,"speed":0.5,"stacks":null,"slots":null,"floor":null,"research":null,"mines":null,"drain":null,"bays":null,"outpost":null},{"id":"miner-1","kind":"miner","tier":1,"speed":0.5,"stacks":null,"slots":null,"floor":null,"research":null,"mines":1,"drain":1,"bays":null,"outpost":null},{"id":"miner-2","kind":"miner","tier":2,"speed":0.625,"stacks":null,"slots":null,"floor":null,"research":null,"mines":2,"drain":0.6,"bays":null,"outpost":null},{"id":"miner-3","kind":"miner","tier":3,"speed":0.75,"stacks":null,"slots":null,"floor":null,"research":null,"mines":3,"drain":0.4,"bays":null,"outpost":null},{"id":"ops-1","kind":"ops","tier":0,"speed":null,"stacks":null,"slots":null,"floor":null,"research":"ship-bay","mines":null,"drain":null,"bays":null,"outpost":null},{"id":"outpost-1","kind":"station","tier":1,"speed":null,"stacks":10,"slots":0,"floor":null,"research":null,"mines":null,"drain":null,"bays":null,"outpost":true},{"id":"shipyard-1","kind":"shipyard","tier":0,"speed":0.5,"stacks":null,"slots":null,"floor":null,"research":"ship-bay","mines":null,"drain":null,"bays":null,"outpost":null},{"id":"station-1","kind":"station","tier":1,"speed":null,"stacks":20,"slots":2,"floor":null,"research":null,"mines":null,"drain":null,"bays":[4,8,12,16],"outpost":null}],"machines":[{"id":"asm-1","kind":"assembler","tier":1,"speed":1,"productivity":null,"w":3,"d":4},{"id":"asm-2","kind":"assembler","tier":2,"speed":2,"productivity":null,"w":4,"d":5},{"id":"asm-3","kind":"assembler","tier":3,"speed":3,"productivity":0.5,"w":5,"d":5},{"id":"cryo-1","kind":"cryo","tier":1,"speed":1,"productivity":null,"w":3,"d":3},{"id":"cryo-2","kind":"cryo","tier":2,"speed":1.5,"productivity":0.25,"w":4,"d":4},{"id":"cryo-3","kind":"cryo","tier":3,"speed":3,"productivity":0.5,"w":5,"d":5},{"id":"fur-1","kind":"furnace","tier":1,"speed":1,"productivity":null,"w":3,"d":3},{"id":"fur-2","kind":"furnace","tier":2,"speed":1.5,"productivity":0.25,"w":4,"d":4},{"id":"fur-3","kind":"furnace","tier":3,"speed":3,"productivity":0.5,"w":5,"d":5},{"id":"chem-1","kind":"chemical","tier":1,"speed":1,"productivity":null,"w":3,"d":3},{"id":"chem-2","kind":"chemical","tier":2,"speed":2,"productivity":null,"w":4,"d":4},{"id":"chem-3","kind":"chemical","tier":3,"speed":3,"productivity":0.5,"w":5,"d":5},{"id":"prs-1","kind":"press","tier":1,"speed":1,"productivity":null,"w":3,"d":3},{"id":"prs-2","kind":"press","tier":2,"speed":2,"productivity":null,"w":4,"d":4},{"id":"prs-3","kind":"press","tier":3,"speed":3,"productivity":0.5,"w":5,"d":5},{"id":"ref-1","kind":"refinery","tier":1,"speed":1,"productivity":null,"w":3,"d":3},{"id":"ref-2","kind":"refinery","tier":2,"speed":1.5,"productivity":0.25,"w":4,"d":4},{"id":"ref-3","kind":"refinery","tier":3,"speed":3,"productivity":0.5,"w":5,"d":5}],"projects":[{"id":"assembler","scope":"global","steps":15,"seconds":3.75,"credits":null,"requires":["assembly-bay"]},{"id":"assembly-bay","scope":"global","steps":10,"seconds":2.5,"credits":null,"requires":[]},{"id":"auto-requests","scope":"global","steps":100,"seconds":7.5,"credits":null,"requires":[]},{"id":"floor-20","scope":"global","steps":25,"seconds":3.75,"credits":null,"requires":["assembly-bay"]},{"id":"floor-250","scope":"global","steps":100,"seconds":36,"credits":null,"requires":["floor-75"]},{"id":"floor-75","scope":"global","steps":50,"seconds":10,"credits":null,"requires":["floor-20"]},{"id":"ship-bay","scope":"global","steps":20,"seconds":7.5,"credits":null,"requires":["station-slots"]},{"id":"station-slots","scope":"local","steps":40,"seconds":7.5,"credits":null,"requires":["assembly-bay"]},{"id":"tier-2-buildings","scope":"global","steps":50,"seconds":7.5,"credits":null,"requires":[]},{"id":"tier-3-buildings","scope":"global","steps":100,"seconds":10,"credits":null,"requires":["tier-2-buildings"]}],"tickMs":250,"marketLimits":{"price":100000000,"units":10000000,"orders":100}};
// Profile-specific bootstrap and derived evidence. Never sends construction commands.
function createTestRuleLoader({readConfig,loadFeatures,importModule}){
 let pending=null;
 async function ensure(){if(!pending)pending=(async()=>{const config=await readConfig();if(config?.test!==true||config.combat!==true)throw Error('Testovací pravidla nejsou potvrzena; obnov testovací hru.');const features=await loadFeatures();if(typeof features.adoptFeatures!=='function')throw Error('Chybí inicializace testovacích pravidel.');features.adoptFeatures(config);return config})().catch(e=>{pending=null;throw e});return pending}
 async function load(path){if(!/^\/src\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.js$/.test(path))throw Error('Nepovolený modul.');await ensure();return importModule(path)}
 return {ensure,load,reset(){pending=null}};
}
function createTestConstructionEvidence({now=()=>Date.now()}={}){
 const doneSeen=new Map();
 function annotate(body,construction){
  if(!body||typeof body!=='object'||!construction||!Array.isArray(construction.jobs)||construction.jobs.length>1000)throw Error('Stavební úlohy nejsou ověřené; nelze potvrdit volné místo.');
  const pending=new Map();
  for(const j of construction.jobs){
   if(!j||typeof j.id!=='string'||!/^[-]?\d{1,10}\.[-]?\d{1,10}\.\d{1,3}$/.test(j.system)||!Array.isArray(j.builds)||!['waiting','flying','done'].includes(j.stage))throw Error('Neznámý formát stavební úlohy.');
   if(j.stage==='done'&&!doneSeen.has(j.id))doneSeen.set(j.id,now());
   if(j.stage==='done'&&now()-doneSeen.get(j.id)>=10000)continue;
   if(!pending.has(j.system))pending.set(j.system,[]);pending.get(j.system).push(j.id);
  }
  const ids=new Set(construction.jobs.map(j=>j.id));for(const id of doneSeen.keys())if(!ids.has(id))doneSeen.delete(id);if(doneSeen.size>1000)throw Error('Příliš mnoho přechodných stavebních úloh.');
  const add=(list,id)=>{if(!Array.isArray(list))throw Error('Neověřené stavby.');const jobs=pending.get(id);return jobs?.length?[...list,{id:'toolkit:pending:'+jobs.join(':'),system:id,building:'__toolkit_pending_construction__',toolkitDerived:true}]:list};
  // An explicit unknown evidence marker blocks idle recommendations; it is not a miner or a built station.
  if(body.systems&&typeof body.systems==='object'&&!Array.isArray(body.systems)){const systems={...body.systems};for(const id of new Set([...Object.keys(systems),...pending.keys()]))if(pending.has(id))systems[id]=add(systems[id]||[],id);return {...body,systems}}
  if(Array.isArray(body.structures)){const id=body.system?.id??body.system;if(typeof id!=='string')throw Error('Neověřený systém staveb.');return {...body,structures:add(body.structures,id)}};
  return body;
 }
 return {annotate,reset(){doneSeen.clear()}};
}
  const testRules=createTestRuleLoader({readConfig:()=>api('/api/config'),loadFeatures:()=>import('/src/features.js'),importModule:path=>import(path)});
  const testConstruction=createTestConstructionEvidence();
  const testImport=path=>testRules.load(path);
  const STORE = 'aos-toolkit.test.v1';
  const readStored=key=>{try{return localStorage.getItem(key)??null}catch{return null}};
  const old=(()=>{try{return JSON.parse(readStored('aos-toolkit.test.v0.1')||'null')}catch{return null}})();
  const currentPreferences=readStored(STORE);
  const storageMigration=migrateToolkitStorage(currentPreferences??readStored('aos-toolkit.test.v0.2'),{source:currentPreferences===null?'legacy':'current',legacyPosition:old?.position});
  const saved=storageMigration.data,SETTINGS={...TOOLKIT_DEFAULTS},settings={...saved.settings,enableWrites:false};
  // Legacy keys are preserved for rollback; financial/account snapshots are never migrated.
  if(currentPreferences===null&&storageMigration.canSave)try{localStorage.setItem(STORE,JSON.stringify(saved))}catch{}
  const state = {
    opened:false, tab:'summary', loaded:false, stations:[], stationId:'', view:null, meta:null,
    depositStatus:'unloaded', planets:[], depositNames:[], forecast:[], plan:[],
    error:'', notice:'Připraveno', processing:false, selected:new Set(), host:null, root:null, position:saved?.position, windowSize:saved?.windowSize||null,
    fabPosition:saved?.fabPosition||null, fabMover:null, exploredOpened:false, exploredTab:'list', exploredMinimized:!!saved?.exploredMinimized, scannerOriginMode:'station', scannerOriginId:'', scannerX:'', scannerY:'', exploredPosition:saved?.exploredPosition||null, exploredSize:saved?.exploredSize||null,
    audit:[], serverLog:[], querySerial:0, compact:false, writing:false
  };
  const debugTools=createDebugTools({catalog:GAME,api,getGame:()=>window.spacefactory,doc:document,onChange:()=>render(),
    loadWorld:async()=>{const [map,world,deposits]=await Promise.all([testImport('/src/world/mapgen.js'),testImport('/src/world/systemgen.js'),testImport('/src/deposits.js')]);return {map,world,deposits}}});
  const accountOverview=createAccountOverview({api,productionFlows,loadResearchRules:()=>testImport('/src/research.js'),onChange:()=>render()});
  const progressAdvisor=createProgressAdvisor({catalog:GAME,api,productionFlows,loadAccount:options=>accountOverview.refresh(options),onChange:()=>render(),
    loadRules:async()=>{const [research,production,buildings]=await Promise.all([testImport('/src/research.js'),testImport('/src/production.js'),testImport('/src/buildings.js')]);
      return {...research,RECIPES:production.RECIPES,buildingById:buildings.buildingById}}});
  let exploredLabel=null,exploredBuildingSpec=null;
  const lookupExploredBuilding=id=>exploredBuildingSpec?.(id)||GAME.buildings[id];
  const exploredSystems=createExploredSystems({api,catalog:GAME,buildingSpec:lookupExploredBuilding,loadMap:async()=>{const [map,places,buildings]=await Promise.all([testImport('/src/world/mapgen.js'),testImport('/src/ui/places.js'),testImport('/src/buildings.js')]);exploredLabel=places.systemText;exploredBuildingSpec=buildings.buildingById;return map},systemLabel:(id,system)=>exploredLabel?.(id,system.name)||system.name,onChange:()=>renderExplored()});
  const expansionAdvisor=createExpansionAdvisor({api,catalog:GAME,evaluateSite:data=>evaluateExpansionSite({...data,buildMiningPlan}),coverageFor:expansionNeedCoverage,summarizeStructures:(list,id)=>summarizeSystemStructures(list,id,lookupExploredBuilding),systemLabel:(id,system)=>exploredLabel?.(id,system.name)||system.name,onChange:()=>renderExplored(),
    loadRules:async()=>{const [map,world,places,buildings,mining,deposits]=await Promise.all([testImport('/src/world/mapgen.js'),testImport('/src/world/systemgen.js'),testImport('/src/ui/places.js'),testImport('/src/buildings.js'),testImport('/src/mining.js'),testImport('/src/deposits.js')]);exploredLabel=places.systemText;exploredBuildingSpec=buildings.buildingById;return {map,world,...buildings,...mining,...deposits,richnessOf:world.richnessOf}}});
  const galaxyScanner=createGalaxyScanner({api,catalog:GAME,summarizeStructures:(list,id)=>summarizeSystemStructures(list,id,lookupExploredBuilding),systemLabel:(id,system)=>exploredLabel?.(id,system.name)||system.name,onChange:()=>renderExplored(),
    loadRules:async()=>{const [map,world,deposits,places,buildings]=await Promise.all([testImport('/src/world/mapgen.js'),testImport('/src/world/systemgen.js'),testImport('/src/deposits.js'),testImport('/src/ui/places.js'),testImport('/src/buildings.js')]);exploredLabel=places.systemText;exploredBuildingSpec=buildings.buildingById;return {map,world,deposits}}});
  const miningOptimizer=createMiningOptimizer({api,catalog:GAME,systemLabel:(id,system)=>exploredLabel?.(id,system.name)||system.name,onChange:()=>renderExplored(),
    loadRules:async()=>{const [map,world,buildings,mining,deposits,places]=await Promise.all([testImport('/src/world/mapgen.js'),testImport('/src/world/systemgen.js'),testImport('/src/buildings.js'),testImport('/src/mining.js'),testImport('/src/deposits.js'),testImport('/src/ui/places.js')]);exploredLabel=places.systemText;return {map,world,...buildings,...mining,...deposits,richnessOf:world.richnessOf}}});
  const factoryPlanner=createFactoryPlanner({catalog:GAME,api,productionFlows,onChange:()=>render(),
    loadRules:async()=>{const [production,bay,sim,buildings,research,construct]=await Promise.all([testImport('/src/production.js'),testImport('/src/bay.js'),testImport('/src/baysim.js'),testImport('/src/buildings.js'),testImport('/src/research.js'),testImport('/src/construct.js')]);return {...production,...bay,...sim,...buildings,...research,...construct}}});
  const marketAssistant=createMarketAssistant({catalog:GAME,api,planMaterials,onChange:()=>render(),
    loadRules:async()=>{const [market,production,buildings]=await Promise.all([testImport('/src/market-rules.js'),testImport('/src/production.js'),testImport('/src/buildings.js')]);return {...market,RECIPES:production.RECIPES,buildingById:buildings.buildingById,holdLimit:buildings.holdLimit}}});
  const productionCoverage=createProductionCoverage({catalog:GAME,baseline:JOURNEY_BASELINE,api,productionFlows,factoryCapacityEvidence,stationExportSurplus,buildFactoryPlan,auditToolkitInterfaces,onChange:()=>render(),
    loadRules:async()=>{const [production,research,buildings,items,bay,sim,market,construct,map]=await Promise.all([testImport('/src/production.js'),testImport('/src/research.js'),testImport('/src/buildings.js'),testImport('/src/items.js'),testImport('/src/bay.js'),testImport('/src/baysim.js'),testImport('/src/market-rules.js'),testImport('/src/construct.js'),testImport('/src/world/mapgen.js')]);return {...production,...research,...buildings,...items,...bay,...sim,...construct,...market,map}}});
  const journeyAdvisor=createJourneyAdvisor({catalog:GAME,baseline:JOURNEY_BASELINE,onChange:()=>render(),
    loadRules:async()=>{const [production,research,buildings,items,bay,sim,market]=await Promise.all([testImport('/src/production.js'),testImport('/src/research.js'),testImport('/src/buildings.js'),testImport('/src/items.js'),testImport('/src/bay.js'),testImport('/src/baysim.js'),testImport('/src/market-rules.js')]);return {...production,...research,...buildings,...items,...bay,...sim,...market}},
    readProgress:async(id,c)=>{Object.assign(progressAdvisor.state,{goal:c.goal==='research'?'progress':'production',projectId:c.projectId,itemId:c.itemId,quantity:c.quantity,includeAccount:c.includeAccount});const p=await progressAdvisor.refresh(id,{system:state.view?.station?.system,resources:state.depositNames,verified:state.depositStatus==='ok'});if(!p)throw Error(progressAdvisor.state.error||'Chybí materiálový plán.');return p},
    readFactory:async(id,c)=>{factoryPlanner.edit('itemId',c.itemId);factoryPlanner.edit('rate',String(c.rate));const p=await factoryPlanner.refresh(id);if(!p)throw Error(factoryPlanner.state.error||'Kapacity nebyly načteny.');return p},
    readMarket:async(id,c)=>{marketAssistant.edit('itemId',c.itemId);marketAssistant.edit('quantity',String(c.quantity));const p=await marketAssistant.refresh(id);if(!p)throw Error(marketAssistant.state.error||'Trh nebyl načten.');return {stationId:id,snapshot:p}},
    readExpansion:async(p)=>{const context=buildExpansionContext(p,GAME,expansionAdvisor.state.minerId);expansionAdvisor.state.goalMode='goal';await expansionAdvisor.search({originId:context.station.system,context});if(expansionAdvisor.state.error)throw Error(expansionAdvisor.state.error);return {context:expansionAdvisor.state.context,at:expansionAdvisor.state.at,rows:expansionAdvisor.state.rows}},
    cancelWork:stage=>{if(stage==='progress'){progressAdvisor.invalidate();if(accountOverview.state.busy)accountOverview.cancel()}if(stage==='factory')factoryPlanner.cancel();if(stage==='market')marketAssistant.cancel();if(stage==='expansion')expansionAdvisor.cancel()}});
  const sourceUpdater=createSourceUpdater({manifest:SOURCE_MANIFEST,fetchSource:(path,maxBytes)=>readPublicGameSource(path,{maxBytes}),
    digest:async text=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))].map(b=>b.toString(16).padStart(2,'0')).join(''),
    loadPreferences:()=>{try{return JSON.parse(readStored('aos-toolkit.test.source-updates.v1')||'{"autoEnabled":false}')}catch{return null}},savePreferences:p=>localStorage.setItem('aos-toolkit.test.source-updates.v1',JSON.stringify(p)),
    ask:text=>confirm(text),download:snapshot=>downloadSourceSnapshot(snapshot),onChange:()=>refreshSourceUpdates(),
    isSafeToPrompt:()=>!document.hidden&&!state.processing&&!state.writing&&!journeyAdvisor.state.busy&&!productionCoverage.state.busy&&!accountOverview.state.busy&&!progressAdvisor.state.busy&&!factoryPlanner.state.busy&&!marketAssistant.state.busy&&!expansionAdvisor.state.busy&&!expansionAdvisor.state.preparing&&!miningOptimizer.state.busy&&!galaxyScanner.state.busy&&!exploredSystems.state.busy});
  let expansionPreparationSerial=0;
  function cancelExpansionWork(){
    expansionPreparationSerial++;const preparing=expansionAdvisor.state.preparing;expansionAdvisor.state.preparing=false;
    if(preparing){progressAdvisor.invalidate();if(accountOverview.state.busy)accountOverview.cancel()}
    expansionAdvisor.cancel();
  }
  function invalidateExpansionWork(){cancelExpansionWork();expansionAdvisor.invalidate()}
  async function searchGoalExpansion(){
    if(state.processing||state.writing||progressAdvisor.state.busy||accountOverview.state.busy||expansionAdvisor.state.busy||expansionAdvisor.state.preparing)return;
    if(!state.stationId){expansionAdvisor.state.error='Nejprve vyber vlastní stanici v Toolkitu.';renderExplored();return}
    const ticket=++expansionPreparationSerial;expansionAdvisor.state.preparing=true;expansionAdvisor.state.error='';expansionAdvisor.state.rows=[];expansionAdvisor.state.context=null;expansionAdvisor.state.at=null;expansionAdvisor.state.origin=null;state.exploredOpened=true;state.exploredMinimized=false;state.exploredTab='expansion';expansionAdvisor.state.goalMode='goal';renderExplored();
    try{
      const stationId=state.stationId,snapshot=await progressAdvisor.refresh(stationId,{system:state.view?.station?.system,resources:state.depositNames,verified:state.depositStatus==='ok'});
      if(ticket!==expansionPreparationSerial)return;
      if(!snapshot||stationId!==state.stationId||snapshot.station.id!==stationId)throw Error(progressAdvisor.state.error||'Materiálový cíl se nepodařilo ověřit');
      const context=buildExpansionContext(snapshot,GAME,expansionAdvisor.state.minerId);expansionAdvisor.state.preparing=false;
      await expansionAdvisor.search({originId:context.station.system,context});
    }catch(e){if(ticket===expansionPreparationSerial)expansionAdvisor.state.error=String(e.message||e)}
    finally{if(ticket===expansionPreparationSerial){expansionAdvisor.state.preparing=false;renderExplored()}}
  }
  const fmt = x => Number.isFinite(Number(x)) ? Number(x).toLocaleString('cs-CZ',{maximumFractionDigits:2}) : '–';
  const num = (x, alt=0) => Number.isFinite(Number(x)) ? Number(x) : alt;
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const item = id => GAME.items[id]?.n || id;
  const stack = id => GAME.items[id]?.s || null;
  const places = value => [value].flat().filter(Boolean);
  const maxStack = (view,id) => Math.round(num(GAME.buildings[view?.station?.building]?.s,20) * (stack(id)||0));
  const save=()=>{if(!storageMigration.canSave)return false;try{const clean=migrateToolkitStorage({schemaVersion:1,settings:{...settings,enableWrites:false},position:state.position,windowSize:state.windowSize,fabPosition:state.fabPosition,exploredPosition:state.exploredPosition,exploredSize:state.exploredSize,exploredMinimized:state.exploredMinimized});localStorage.setItem(STORE,JSON.stringify(clean.data));return true}catch{return false}};
  const makeId = (kind,resource) => `${kind}:${resource}`;
  const checked = id => state.selected.has(id);
  const defaultChange = (have,goal) => have===null?'create':have===goal?'same':have<goal?'increase':'decrease';
  const backup = () => ({version:'0.2.0',at:new Date().toISOString(),station:state.stationId,
    requestsOn:state.view?.requestsOn,exportsOn:state.view?.exportsOn,groups:state.view?.groups||[],requests:state.view?.requests||[],exports:state.view?.exports||[]});
  function download(json,name){const blob=new Blob([JSON.stringify(json,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),6000)}
  async function api(path,body=undefined){
    if(location.origin!=='https://test.alloutofspace.com')throw Error('Toolkit TEST smí číst a zapisovat pouze na testovacím serveru.');
    if(body!==undefined){if(path!=='/api/logistics/rule')throw Error('Testovací port povoluje pouze schválenou změnu logistického pravidla.');await testRules.ensure();if(!state.writing||!settings.enableWrites||String(body?.station)!==state.stationId)throw Error('Potvrzení nebo vybraná stanice se během ověřování změnily.')}
    if(!/^\/api\/[a-z0-9/_.?=&%:-]+$/i.test(path) || path.split('?')[0].split('/').some(part=>part==='.'||part==='..'))throw new Error('Neplatná cesta API');
    const c = new AbortController(), t = setTimeout(()=>c.abort(),15000);
    try {
      const response=await fetch(path,{method:body===undefined?'GET':'POST',credentials:'same-origin',cache:'no-store',redirect:'error',
        headers:body===undefined?{'Accept':'application/json'}:{'Accept':'application/json','Content-Type':'application/json'},
        ...(body===undefined?{}:{body:JSON.stringify(body)}),signal:c.signal});
      const json=await response.json().catch(()=>null);
      if(!response.ok)throw new Error(String(json?.error||`HTTP ${response.status} ${path}`));
      if(!json||typeof json!=='object'||Array.isArray(json))throw new Error('Server neposlal JSON objekt');
      if(json.error || json.success===false || json.ok===false)throw new Error('Server odmítl požadavek');
      if(body===undefined&&path.startsWith('/api/structures?')){
        const jobs=await api('/api/combat/construction');
        const result={...json};
        if(!result.systems&&Array.isArray(result.structures)&&!result.system){const id=new URL('https://test.alloutofspace.com'+path).searchParams.get('system');if(id)result.system=id}
        return testConstruction.annotate(result,jobs);
      }
      return json;
    } finally {clearTimeout(t)}
  }
  async function loadStations(){
    if(state.processing||accountOverview.state.busy||progressAdvisor.state.busy)return;
    accountOverview.invalidate();
    progressAdvisor.invalidate();
    const serial=++state.querySerial; state.processing=true;state.error='';state.notice='Načítám stanice…';render();
    try {
      const s=await api('/api/stations');if(serial!==state.querySerial)return;
      if(!Array.isArray(s.stations))throw Error('Odpověď neobsahuje stations[]');
      state.stations=s.stations;state.loaded=true;
      if(!state.stations.some(x=>String(x.id)===state.stationId))state.stationId=String(s.stations[0]?.id||'');
      if(state.stationId)await loadView(false);
      state.notice=state.stationId?'Stanice a pravidla načteny':'Žádné stanice';
    }catch(e){state.error=String(e.message||e)}finally{if(serial===state.querySerial){state.processing=false;render()}}
  }
  async function loadView(own=true){
    if(state.writing || (own && state.processing))return;
    journeyAdvisor.invalidate();
    marketAssistant.invalidate();
    factoryPlanner.invalidate();
    progressAdvisor.invalidate();
    const serial=own?++state.querySerial:state.querySerial;
    if(!state.stationId){state.view=null;state.plan=[];state.selected.clear();state.depositStatus='unloaded';return}
    if(own){state.error='';state.processing=true;state.notice='Načítám stanici…';render()}
    const id=state.stationId;
    try {
      const v=await api('/api/stations/view?id='+encodeURIComponent(id));
      if(serial!==state.querySerial||id!==state.stationId)return;
      validateView(v,id);
      state.view=v;state.plan=[];state.selected.clear();state.depositNames=[];state.planets=[];state.depositStatus='loading';
      state.forecast=productionFlows(v);
      await resolveDeposits(v,serial);
      createPlan();state.notice='Detail načten · '+new Date().toLocaleTimeString('cs-CZ');
    } catch(e){if(serial===state.querySerial){state.error=String(e.message||e);state.view=null}}
    finally{if(own&&serial===state.querySerial){state.processing=false;render()}}
  }
  // Cross-check against the same world modules used by the game, not only currently built miners.
  async function resolveDeposits(view,serial){
    try {
      state.meta=await api('/api/map/meta');
      const seed=worldSeed(state.meta.seed);
      const [map,world]=await Promise.all([testImport('/src/world/mapgen.js'),testImport('/src/world/systemgen.js')]);
      const s=map.systemById(seed,view.station?.system);
      if(!s)throw Error('Identifikátor systému nelze přeložit');
      const generated=world.generateSystem(seed,s);
      if(serial!==state.querySerial)return;
      state.planets=generatedPlanets(generated,world);
      state.depositNames=[...new Set(state.planets.flatMap(p=>p.deposits))].sort((a,b)=>item(a).localeCompare(item(b)));
      state.depositStatus='ok';
    }catch(e){
      if(serial!==state.querySerial)return;
      // Fail closed: never mistake existing miner list for *all* system deposits.
      state.depositStatus='error: '+String(e.message||e);state.depositNames=[];state.planets=[];
    }
  }
  function worldSeed(rawSeed){
    if(rawSeed===null || rawSeed===undefined || (typeof rawSeed==='string' && rawSeed.trim()==='') || typeof rawSeed==='boolean' || !['string','number'].includes(typeof rawSeed))throw Error('Chybí platný seed');
    const seed=Number(rawSeed);if(!Number.isSafeInteger(seed))throw Error('Chybí platný seed');
    return seed;
  }
  function generatedPlanets(generated,world){
    if(!Array.isArray(generated?.bodies))throw Error('Neznámý formát generovaných těles');
    return generated.bodies.filter(b=>b?.letter).map(b=>{
      if(!Array.isArray(b.deposits) || b.deposits.some(id=>typeof id!=='string'||!GAME.items[id]))throw Error('Neznámý formát nebo položka ložiska');
      const richness=world.richnessOf(b);
      if(!Number.isFinite(richness))throw Error('Neplatný těžební bonus');
      return {letter:b.letter,kind:b.kind,richness,deposits:b.deposits.filter(id=>GAME.items[id].c==='raw')};
    });
  }
  // Matches references/game-source/src/stockflow.js stationFlows, using the embedded catalog.
  function productionFlows(view){
    const rates=new Map(),mined=new Map();
    const put=(id,key,rate)=>{if(!rates.has(id))rates.set(id,{resource:id,made:0,used:0});rates.get(id)[key]+=Math.max(0,num(rate))};
    for(const r of view.requests||[]){
      if(r.from?.includes('miners')&&r.state!=='off'&&r.state!=='full'&&num(r.perMinute)>0)mined.set(r.resource,Math.max(mined.get(r.resource)||0,num(r.perMinute)));
    }
    for(const [id,rate] of mined)put(id,'made',rate);
    for(const m of view.machines||[]){
      if(!m.on)continue;
      const rate=num(m.perMinute);
      if(m.bay){
        for(const [id,n] of Object.entries(m.bay.flow?.in||{}))put(id,'used',n);
        for(const [id,n] of Object.entries(m.bay.flow?.out||{}))put(id,'made',n);
        for(const id of m.bay.makes||[])put(id,'made',0);
      }else if(m.working??m.research){
        const project=GAME.research[m.working??m.research];
        if(project&&m.state!=='done'&&rate>0)for(const [id,n] of Object.entries(project.i||{}))put(id,'used',n*rate);
      }else if(Array.isArray(m.orders)){
        const craft=m.craft,build=craft&&!craft.done&&rate>0?GAME.constructs[craft.item]:null;
        if(!build)continue;
        for(const [id,n] of Object.entries(build.i||{}))put(id,'used',n*rate);
        if(craft.to==='station')put(craft.item,'made',rate);
      }else if(m.order){
        if(m.order.state==='waiting'&&num(m.order.seconds)>0)for(const [id,n] of Object.entries(m.order.short||{}))put(id,'used',n*60/m.order.seconds);
      }else{
        const rec=GAME.recipes[m.recipe];
        if(rec&&rate>0){put(rec.o,'made',rate);for(const [id,n] of Object.entries(rec.i||{}))put(id,'used',rate*num(n)/Math.max(1,num(rec.m,1)))}
      }
    }
    return [...rates.values()].sort((a,b)=>item(a.resource).localeCompare(item(b.resource)));
  }
  function createPlan(){
    const v=state.view;if(!v)return;
    const deposits=state.depositNames,requestMap=new Map((v.requests||[]).map(r=>[r.resource,r]));
    const exportsMap=new Map((v.exports||[]).map(r=>[r.resource,r]));
    const raw=new Set(deposits);
    const produced=new Set(state.forecast.filter(x=>x.made>x.used+0.01).map(x=>x.resource));
    const exportIds=new Set([...raw,...(settings.includeCraftedExports?[...exportsMap.keys(),...produced]:[])]);
    const proposal=[];
    for(const id of deposits){
      const s=stack(id);if(!s)continue;
      const r=requestMap.get(id), target=5*s,from=['miners','stations'],actual=num(r?.amount,0), current=r?actual:null;
      const changed=current!==target || !r || JSON.stringify(r.from)!==JSON.stringify(from) || (r.from||[]).includes('market');
      proposal.push({id:makeId('request',id),kind:'request',resource:id,current,target,source:from,group:r?.group,
        existing:r,change:changed?defaultChange(current,target):'same',modified:changed,reason:'Generované ložisko systému; i bez aktivního mineru',risk:[]});
    }
    for(const id of exportIds){
      const s=stack(id);if(!s)continue;
      const e=exportsMap.get(id),current=e?num(e.keeps?.stations??e.keep):null,target=10*s;
      const changed=current!==target || !e || JSON.stringify(places(e.to))!==JSON.stringify(['stations']) || !!e.excess;
      const p={id:makeId('export',id),kind:'export',resource:id,current,target,source:['stations'],group:e?.group,
        existing:e,change:changed?defaultChange(current,target):'same',modified:changed,reason:raw.has(id)?'Surovina systému': 'Existující export / vlastní výroba',risk:[]};
      if(raw.has(id))p.risk.push('Importní cíl je 5 stacků, exportní rezerva 10. Samotný import od minerů nemusí export nikdy naplnit.');
      proposal.push(p);
    }
    // Preserve all other request types, including manufactured inputs: no implicit deletion.
    for(const p of proposal){p.priority=p.existing?.priority??settings.priority;updateDraft(p)}
    state.plan=proposal.sort((a,b)=>a.kind.localeCompare(b.kind)||item(a.resource).localeCompare(item(b.resource)));
    state.selected=new Set(state.plan.filter(p=>p.modified).map(p=>p.id));
    if(state.depositStatus!=='ok')state.selected.clear();
  }
  function selectedChanges(){return state.plan.filter(p=>p.modified&&checked(p.id))}
  function payload(p){return logisticsPayload(p,{catalog:GAME,view:state.view,stationId:state.stationId,deposits:state.depositNames,priority:settings.priority})}
  function updateDraft(p){
    try{
      const b=payload(p),r=p.existing,equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
      p.modified=!r||(p.kind==='request'?Number(r.amount)!==b.amount||!equal(r.from,b.from)||(b.priority!==undefined&&Number(r.priority??settings.priority)!==b.priority):
        Number(r.keeps?.stations??r.keep)!==b.keep||!equal(places(r.to),b.to)||!!r.excess);
      p.change=p.modified?(defaultChange(p.current,p.target)==='same'?'update':defaultChange(p.current,p.target)):'same';p.error='';
    }catch(e){p.modified=true;p.change='invalid';p.error=e.message}
  }
  function editDraft(id,field,value){
    if(state.processing||state.writing)return;
    const p=state.plan.find(p=>p.id===id);if(!p)return;
    if(field==='target'||field==='priority'){
      p[field+'Text']=value;p[field]=String(value).trim()===''?NaN:Number(value);
    }else if(field==='source')p.source=String(value).split(',');
    else if(field==='group'&&!p.existing)p.group=value;
    else return;
    p.edited=true;updateDraft(p);p.modified?state.selected.add(p.id):state.selected.delete(p.id);
  }
  function addDraft(kind,resource,reason='Ručně přidaný návrh'){
    if(state.processing||!state.view||!stack(resource)||!['request','export'].includes(kind))return null;
    const found=state.plan.find(p=>p.id===makeId(kind,resource));if(found)return found;
    const existing=(kind==='request'?state.view.requests:state.view.exports).find(r=>r.resource===resource);
    const p={id:makeId(kind,resource),kind,resource,existing,current:existing?Number(kind==='request'?existing.amount:existing.keeps?.stations??existing.keep):null,
      target:(kind==='request'?5:10)*stack(resource),source:kind==='request'&&state.depositNames.includes(resource)?['miners','stations']:['stations'],
      priority:existing?.priority??settings.priority,group:existing?.group,reason,risk:[]};
    updateDraft(p);state.plan.push(p);if(p.modified)state.selected.add(p.id);return p;
  }
  function proposalWarnings(){
    const result=[];
    for(const p of selectedChanges()){
      const group=p.existing?.group??p.group??state.view?.groups?.find(g=>g.kind===p.kind)?.id;
      if(state.view?.[p.kind==='request'?'requestsOn':'exportsOn']===false||state.view?.groups?.some(g=>String(g.id)===String(group)&&g.on===false))result.push(item(p.resource)+': pravidla nebo skupina jsou vypnuté; zápis je nezapne.');
    }
    for(const id of new Set(selectedChanges().map(p=>p.resource))){
      const requestDraft=state.plan.find(x=>x.kind==='request'&&x.resource===id&&x.modified&&checked(x.id));
      const exportDraft=state.plan.find(x=>x.kind==='export'&&x.resource===id&&x.modified&&checked(x.id));
      const request=state.view?.requests.find(x=>x.resource===id),exp=state.view?.exports.find(x=>x.resource===id);
      const target=requestDraft?.target??request?.amount,reserve=exportDraft?.target??exp?.keeps?.stations??exp?.keep;
      const cap=GAME.buildings[state.view?.station?.building]?.s*stack(id);if(Number.isFinite(reserve)&&Number.isFinite(cap)&&cap>0&&reserve>=cap)result.push(item(id)+': exportní rezerva dosahuje celé kapacity základny; nad touto rezervou nelze nic vyvézt. Uprav rezervu v návrhu.');
      if(Number.isFinite(target)&&Number.isFinite(reserve)&&target<reserve)result.push(item(id)+': importní cíl '+fmt(target)+' ks je menší než exportní rezerva '+fmt(reserve)+' ks. Export se nemusí spustit.');
    }
    return result;
  }
  function stageAdvisorRows(s){
    if(!s?.target||String(s.station.id)!==state.stationId||state.depositStatus!=='ok')throw Error('Plán nebo generátor nepatří k vybrané stanici');
    const m=s.materialPlan;
    const transfers=m.externalTransfers||[];
    const ids=new Set([...Object.keys(m.requirements||{}),...Object.keys(m.shortages||{}),...Object.keys(m.rawMissing||{}),...transfers.map(t=>t.resource)]);
    if(s.target.kind==='production'&&!transfers.some(t=>t.resource===s.target.id))ids.delete(s.target.id);
    for(const id of ids)if(stack(id)){
      const need=m.shortages?.[id]??m.requirements?.[id]??m.rawMissing?.[id]??transfers.filter(t=>t.resource===id).reduce((sum,t)=>sum+t.amount,0);
      const p=addDraft('request',id);if(p)p.reason='Materiál pro cíl Poradce: '+s.target.name+'; potřeba ve snímku '+fmt(need)+' ks. Výchozí průběžný cíl 5 stacků lze upravit; nejde o jednorázovou dodávku.';
    }
    if(s.target.kind==='production'&&stack(s.target.id))addDraft('export',s.target.id,'Výstup výrobního cíle Poradce');
  }
  async function advisorLogistics(){
    if(state.processing||state.writing||accountOverview.state.busy||progressAdvisor.state.busy)return;
    const snapshot=progressAdvisor.state.snapshot;
    if(!snapshot?.target||String(snapshot.station.id)!==state.stationId)return;
    if(state.plan.some(p=>p.edited)&&!confirm('Nahradit ručně upravený návrh novým návrhem pro cíl Poradce?'))return;
    const id=state.stationId;await loadView();
    try{
      if(id!==state.stationId||!state.view||state.depositStatus!=='ok')throw Error('Nepodařilo se ověřit stanici a generátor. Návrh nebyl převeden');
      stageAdvisorRows(snapshot);state.tab='proposals';settings.enableWrites=false;
      state.notice='Cíl převeden do návrhů. Uprav množství a zdroje, vyber pravidla a schval zápis.';
    }catch(e){state.error=e.message}
    render();
  }
  function validateView(v,id){
    if(!v?.station || String(v.station.id)!==String(id) || !Array.isArray(v.requests) || !Array.isArray(v.exports) || !Array.isArray(v.stock))throw Error('Neznámý formát nebo jiná stanice');
    for(const rules of [v.requests,v.exports]){
      const seen=new Set();
      for(const r of rules){
        if(!r || typeof r.resource!=='string' || seen.has(r.resource))throw Error('Neplatná nebo duplicitní logistická pravidla');
        seen.add(r.resource);
      }
    }
  }
  // Compare configuration only: live stock and machine rates can change between reads.
  function configSignature(v){
    const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
    // Station views mix saved rule settings with live have/ETA/reserve/network fields.
    // Only the client-confirmed persistent fields participate in the stale-preview check.
    const fields=['id','resource','group','amount','from','priority','maxPrice','payFrom','below','keep','keeps','to','price','excess','inventoryKeep','line','on'];
    const rules=rs=>rs.map(r=>Object.fromEntries(fields.filter(k=>k in r).map(k=>[k,r[k]]))).sort((a,b)=>String(a.id??a.resource).localeCompare(String(b.id??b.resource)));
    const groups=(v.groups||[]).map(g=>Object.fromEntries(['id','kind','name','look','on','holds'].filter(k=>k in g).map(k=>[k,g[k]]))).sort((a,b)=>String(a.id).localeCompare(String(b.id)));
    return JSON.stringify(canonical({station:v.station?.id,requestsOn:v.requestsOn,exportsOn:v.exportsOn,groups,requests:rules(v.requests),exports:rules(v.exports)}));
  }

  function verifyRule(v,body){
    const rules=body.kind==='request'?v.requests:v.exports;
    const r=rules.find(r=>r.resource===body.resource && String(r.group)===String(body.group) && (body.id===undefined || String(r.id)===String(body.id)));
    const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
    if(!r||('line' in body&&r.line!==body.line))return false;
    if(body.kind==='request')return Number(r.amount)===body.amount && equal(r.from,body.from) && (body.priority===undefined||Number(r.priority)===body.priority);
    return Number(r.keeps?.stations??r.keep)===body.keep && equal(places(r.to),body.to) && r.excess===false;
  }
  async function applySelected(){
    if(journeyAdvisor.state.busy||productionCoverage.state.busy){state.error='Nejprve dokonči nebo zruš aktivní poradenský rozbor.';render();return}
    if(!storageMigration.canSave||journeyAdvisor.state.compatibility?.ok===false||productionCoverage.state.compatibility?.ok===false){state.error='Zápis blokuje neznámý formát nastavení nebo zjištěná změna herního rozhraní. Ověř diagnostiku kompatibility.';render();return}
    if(state.processing || state.writing || accountOverview.state.busy || progressAdvisor.state.busy)return;
    const changes=selectedChanges();if(!changes.length)return;
    if(!settings.enableWrites){state.error='Nejdřív zapni možnost Zápis do hry.';render();return}
    if(state.depositStatus!=='ok'){state.error='Generátor systému není ověřen. Zápis je zablokovaný.';render();return}
    if(changes.length>120){state.error='Příliš mnoho změn v jedné dávce';render();return}
    let bodies;
    try{validateView(state.view,state.stationId);bodies=changes.map(payload)}catch(e){state.error=e.message;render();return}
    const stationId=state.stationId,signature=configSignature(state.view);
    const stationName=state.stations.find(x=>String(x.id)===stationId)?.systemName || 'vybraná stanice';
    const warning=proposalWarnings().length?'\n'+proposalWarnings().join('\n'):'';
    if(!confirm(`AOS Toolkit: ${changes.length} změn logistiky na ${stationName} (${stationId}).\n\nZáloha se stáhne jako JSON. Jde o SKUTEČNÉ změny na serveru.${warning}\n\nPokračovat?`))return;
    if(prompt('Pro potvrzení napiš přesně PROVEST:')!=='PROVEST'){state.notice='Zrušeno';render();return}
    state.processing=true;state.writing=true;productionCoverage.invalidate();journeyAdvisor.invalidate();marketAssistant.invalidate();factoryPlanner.invalidate();accountOverview.invalidate();progressAdvisor.invalidate();state.error='';state.serverLog=[];state.notice='Kontroluji aktuální konfiguraci…';render();
    try{
      const fresh=await api('/api/stations/view?id='+encodeURIComponent(stationId));validateView(fresh,stationId);
      if(configSignature(fresh)!==signature)throw Error('Konfigurace se od náhledu změnila. Obnov detail a zkontroluj nový návrh');
      state.view=fresh;
      download(backup(),'aos-toolkit-backup-'+new Date().toISOString().slice(0,10)+'.json');
      for(const [idx,body] of bodies.entries()){
        if(state.stationId!==stationId)throw Error('Změna stanice během operace');
        if(idx>0){
          const latest=await api('/api/stations/view?id='+encodeURIComponent(stationId));validateView(latest,stationId);
          if(configSignature(latest)!==configSignature(state.view))throw Error('Konfigurace se změnila během dávky');
        }
        const before=state.view;
        await api('/api/logistics/rule',body);
        const savedView=await api('/api/stations/view?id='+encodeURIComponent(stationId));validateView(savedView,stationId);
        if(!verifyRule(savedView,body))throw Error('Server nepotvrdil uložené hodnoty pravidla '+body.resource);
        const withoutRule=v=>({...v,[body.kind==='request'?'requests':'exports']:(body.kind==='request'?v.requests:v.exports).filter(r=>r.resource!==body.resource)});
        if(configSignature(withoutRule(before))!==configSignature(withoutRule(savedView)))throw Error('Změnila se i jiná pravidla nebo skupiny');
        state.view=savedView;
        state.serverLog.push({resource:body.resource,kind:body.kind,status:'verified'});
        state.notice=`Ověřeno ${idx+1}/${bodies.length}`;render();
        if(idx+1<bodies.length)await new Promise(r=>setTimeout(r,400));
      }
      state.notice=`Uloženo a ověřeno ${bodies.length} pravidel`;
    }catch(e){state.error=`Zápis zastaven: ${e.message}. Některé změny již mohly být uloženy; ověř stav ve hře.`}
    finally{
      state.writing=false;state.processing=false;settings.enableWrites=false;save();
      // Invalidate the preview after any attempt; another write requires a fresh read.
      state.plan=[];state.selected.clear();state.depositStatus='unloaded';render();
    }
  }
  function diagnostic(){
    const v=state.view||{};
    return {toolkit:'0.2.0',at:new Date().toISOString(),reference:GAME.version,
      compatibility:journeyAdvisor.state.compatibility,storage:{schema:1,canSave:storageMigration.canSave,warnings:storageMigration.warnings},
      connection:{stations:state.loaded,selected:!!state.view,planetGenerator:state.depositStatus},
      counts:{stations:state.stations.length,stock:v.stock?.length||0,requests:v.requests?.length||0,exports:v.exports?.length||0,
        machines:v.machines?.length||0,miners:v.miners?.length||0,planets:state.planets.length,deposits:state.depositNames.length},
      schema:{station:Object.keys(v.station||{}),view:Object.keys(v),group:Object.keys(v.groups?.[0]||{}),
        request:Object.keys(v.requests?.[0]||{}),export:Object.keys(v.exports?.[0]||{})},
      resourceSummary:{systemRaw:state.depositNames,requests:(v.requests||[]).map(r=>({resource:r.resource,amount:r.amount,from:r.from})),
        exports:(v.exports||[]).map(r=>({resource:r.resource,keep:r.keep,to:r.to})),
        proposals:state.plan.map(p=>({kind:p.kind,resource:p.resource,current:p.current,target:p.target,change:p.change}))},
      // Deliberately no full API response, account IDs, player names, session data or cookies.
    };
  }
  const wrap=(html)=>`<div class="sect">${html}</div>`;
  const card=(label,value)=>`<div class="metric"><strong>${esc(fmt(value))}</strong><small>${esc(label)}</small></div>`;
  function summary(){
    if(!state.view)return wrap('<p>Nejdřív klikni na Načíst / obnovit.</p>');
    const v=state.view;const before=(v.stock||[]).reduce((s,r)=>s+num(r.units),0);
    const issues=state.plan.filter(p=>p.modified).length;
    return `<div class="metrics">${card('Druhů zásob',v.stock?.length||0)}${card('Importů',v.requests?.length||0)}${card('Exportů',v.exports?.length||0)}${card('Návrhů změn',issues)}</div>
      ${wrap(`<b>Stanice</b><p>${esc(v.station?.systemName||v.station?.system||'Zvolená stanice')} · zásoby ${fmt(before)} ks · strojů ${fmt(v.machines?.length||0)} · minerálních toků ${fmt(v.miners?.length||0)}</p>`)}
      ${wrap(`<b>Pravidla profilu</b><p>Import 5 stacků ze zdrojů Mineři → Stanice. Export nad rezervu 10 stacků pouze ostatním stanicím. Trh a inventář jsou vypnuté v navrhovaných pravidlech.</p><p><strong>Upozornění:</strong> Rezerva exportu 10 stacků převyšuje import 5 stacků. U těžené suroviny nemusí vznikat přebytek k exportu, pokud ji nedodává jiný tok.</p>`)}
      ${wrap(`<b>Kontrola galaxie</b><p>${esc(state.depositStatus==='ok'?`Nalezeno ${state.depositNames.length} druhů ložisek na ${state.planets.length} planetách`:'Generátor: '+state.depositStatus)}</p>`)}`;
  }
  function resources(){
    if(!state.view)return wrap('<p>Nejdříve načti stanici.</p>');
    const req=new Map(state.view.requests.map(r=>[r.resource,r]));const exp=new Map(state.view.exports.map(r=>[r.resource,r]));
    const rows=[...new Set([...state.view.stock.map(s=>s.resource),...req.keys(),...exp.keys()])].sort((a,b)=>item(a).localeCompare(item(b)));
    return wrap(`<b>Zásoby a aktuální logistika</b><p>Zobrazení dat herního API; tabulka sama nic nemění.</p><div class="table"><table><thead><tr><th>Položka</th><th>Zásoba</th><th>Import / zdroje</th><th>Export / cíle</th></tr></thead><tbody>${rows.map(id=>{
      const stock=num(state.view.stock.find(s=>s.resource===id)?.units);const r=req.get(id),e=exp.get(id);
      return `<tr><td>${esc(item(id))}</td><td>${fmt(stock)}</td><td>${r?`${fmt(r.amount)} · ${esc(r.from?.join(' → '))}`:'—'}</td><td>${e?`${fmt(e.keep)} · ${esc(places(e.to).join(' → '))}`:'—'}</td></tr>`
    }).join('')}</tbody></table></div>`);
  }
  function galaxy(){
    if(!state.view)return wrap('<p>Vyber a načti stanici.</p>');
    if(state.depositStatus!=='ok')return wrap(`<b>Generátor surovin nebyl načten</b><p>${esc(state.depositStatus)}.</p><p>Návrhy se nesmějí tvořit pouze podle aktivních minerů – nezachytily by netěžená ložiska.</p>`);
    return `${wrap(`<b>Systémové suroviny (${state.depositNames.length})</b><p>Počítáno z herního seedu. Zahrnuje i planety bez mineru a případně již vyčerpaná ložiska; skutečný zbývající stav ukládá server.</p><p>${state.depositNames.map(id=>`${esc(item(id))} (T${GAME.items[id]?.t||'?'})`).join(' · ')}</p>`)}
      ${wrap(`<b>Planety</b><div class="table"><table><thead><tr><th>Planeta</th><th>Typ</th><th>Těžební bonus</th><th>Ložiska</th></tr></thead><tbody>${state.planets.map(p=>`<tr><td>${esc(p.letter)}</td><td>${esc(p.kind)}</td><td>${Math.round((p.richness-1)*100)>=0?'+':''}${Math.round((p.richness-1)*100)} %</td><td>${esc(p.deposits.map(item).join(', '))}</td></tr>`).join('')}</tbody></table></div>`)}`;
  }
  function production(){
    if(!state.view)return wrap('<p>Nejdříve načti stanici.</p>');
    const stocks=new Map(state.view.stock.map(s=>[s.resource,num(s.units)]));
    return wrap(`<b>Výrobní bilance</b><p>Orientační hodnoty/min pro aktuálně aktivní stroje, pokud API vrací jejich recepty či výrobní toky. Zpomalování kvůli chybějícím vstupům nemusí být plně zachyceno.</p><div class="table"><table><thead><tr><th>Položka</th><th>Příjem/min</th><th>Spotřeba/min</th><th>Čistý tok/min</th><th>Zásoba</th></tr></thead><tbody>${state.forecast.map(f=>`<tr><td>${esc(item(f.resource))}</td><td>${fmt(f.made)}</td><td>${fmt(f.used)}</td><td>${fmt(f.made-f.used)}</td><td>${fmt(stocks.get(f.resource)||0)}</td></tr>`).join('')}</tbody></table></div>`);
  }
  function proposals(){
    if(!state.view)return wrap('<p>Nejprve načti stanici.</p>');
    const changed=state.plan.filter(p=>p.modified).length;
    const disabled=state.processing||accountOverview.state.busy||progressAdvisor.state.busy||state.depositStatus!=='ok';
    return `${wrap(`<b>Upravit a schválit logistiku stanice</b><p>Import <strong>5 stacků</strong>, exportní rezerva <strong>10 stacků</strong>. Kapacita vybrané základny: ${esc(GAME.buildings[state.view?.station?.building]?.s??"neověřena")} stacků na položku. Každý item má vlastní velikost stacku. Jde o výchozí návrh; množství, zdroje a priority níže můžeš upravit. Přepočítání nahradí ruční úpravy.</p>
      <label class="tick"><input type="checkbox" id="crafted" ${settings.includeCraftedExports?'checked':''}> Navrhnout export i pro již exportované / vyráběné produkty</label>
      <button data-act="recalc">Přepočítat</button><button data-act="selectAll">Vybrat změny</button><button data-act="selectNone">Odznačit</button>
      <label>Přidat položku <select id="draft-item">${Object.keys(GAME.items).sort((a,b)=>item(a).localeCompare(item(b))).map(id=>`<option value="${esc(id)}">${esc(item(id))}</option>`).join('')}</select></label><button data-act="addRequest">Přidat request</button><button data-act="addExport">Přidat export</button>
      <p data-draft-count>${changed} změn; vybráno ${selectedChanges().length}. Ostatní importy vyráběných položek se automaticky nemažou.</p>`)}
      ${wrap(`<b>Importy</b>${state.plan.filter(p=>p.kind==='request').map(planRow).join('')||'<p>Žádná ložiska – ověř generátor.</p>'}`)}
      ${wrap(`<b>Exporty</b>${state.plan.filter(p=>p.kind==='export').map(planRow).join('')||'<p>Žádné položky.</p>'}`)}
      ${wrap(`<b>Uložit / testovat</b><p>Nejdřív zálohuj současná pravidla a ověř náhled. Serverové změny nejsou automaticky vratné. Zápisy jsou výchozí vypnuté.</p>
       <label class="tick"><input type="checkbox" id="enableWrites" ${settings.enableWrites?'checked':''}> Povolit skutečný zápis vybraných pravidel na server</label>
       <button data-act="exportPlan">Export návrhu</button><button data-act="backup">Stáhnout zálohu</button>
       <button class="dangerbtn" data-act="apply" ${disabled||!settings.enableWrites||!selectedChanges().length||selectedChanges().some(p=>p.error)?'disabled':''}>Použít vybraná pravidla (${selectedChanges().length})</button>
       <div data-draft-warnings>${proposalWarnings().map(w=>`<p class="warning">${esc(w)}</p>`).join('')}</div><p>Nezaškrtnuté řádky se neuloží. Jde o průběžné skladové cíle, které mohou průběžně dovážet nebo vyvážet. Vypnutá pravidla ani skupiny se tím nezapnou.</p>`)}`;
  }
  function draftStatus(p){return `<small data-draft-summary>${esc(p.change)} · ${p.current===null?'chybí':fmt(p.current)} → ${fmt(p.target)} ks (${fmt(p.target/stack(p.resource))} stacků)</small><small class="err" data-draft-error role="status">${esc(p.error||'')}</small>`}
  function planRow(p){
    const disabled=state.processing?'disabled':'',key=esc(p.id),groups=(state.view?.groups||[]).filter(g=>g.kind===p.kind);
    const from=(p.source||[]).join(','),choices=[['miners,stations','Mineři → stanice'],['stations,miners','Stanice → mineři'],['miners','Jen mineři'],['stations','Jen stanice']];
    return `<div class="plan ${p.modified?'':'same'}" data-draft-row="${key}"><label class="tick"><input aria-label="Vybrat ${esc(item(p.resource))}" type="checkbox" data-plan="${key}" ${checked(p.id)?'checked':''} ${!p.modified||state.processing?'disabled':''}></label><div class="info"><strong>${esc(item(p.resource))}</strong>${draftStatus(p)}
      <small>Současné směry: ${esc(places(p.kind==='request'?p.existing?.from:p.existing?.to).join(' → ')||'žádné')}</small>
      <div class="draft-fields"><label>${p.kind==='request'?'Cíl requestu':'Rezerva exportu'} (ks)<input data-edit="target" data-id="${key}" type="number" min="1" max="${esc(maxStack(state.view,p.resource))}" step="1" value="${esc(p.targetText??p.target)}" ${disabled}></label>
      ${p.kind==='request'?`<label>Zdroje v pořadí<select data-edit="source" data-id="${key}" ${disabled}>${choices.filter(([value])=>state.depositNames.includes(p.resource)||value==='stations').map(([value,label])=>`<option value="${value}" ${value===from?'selected':''}>${label}</option>`).join('')}</select></label><label>Priorita (0–100)<input data-edit="priority" data-id="${key}" type="number" min="0" max="100" step="1" value="${esc(p.priorityText??p.priority??settings.priority)}" ${disabled}></label>`:'<small>Export pouze do stanic.</small>'}
      <label>Skupina<select data-edit="group" data-id="${key}" ${p.existing||state.processing?'disabled':''}>${groups.map((g,i)=>`<option value="${esc(g.id)}" ${String(g.id)===String(p.group??groups[0]?.id)?'selected':''}>${esc(g.name||g.id)}</option>`).join('')}</select></label></div><small>${esc(p.reason)}</small></div></div>`;
  }
  function accountMenu(){
    const d=accountOverview.state,s=d.snapshot,disabled=d.busy||state.processing||progressAdvisor.state.busy;
    const query=d.query.toLocaleLowerCase('cs-CZ');
    return `${wrap(`<b>Účet · společný přehled stanic</b><p>Načte stanice ze seznamu tvých stanic, jejich zásoby, nominální výrobu a výzkum. Výslovně cizí stanice se vynechají. Přehled nic nemění a neodesílá převody.</p>
      <button data-account="refresh" ${disabled?'disabled':''}>Načíst všechny stanice</button><button data-account="cancel" ${d.busy?'':'disabled'}>Zrušit načítání</button><button data-account="export" ${s?'':'disabled'}>Export přehledu</button>
      <p role="status" class="${d.error?'err':''}">${esc(d.busy?`Prověřeno ${d.progress}/${d.total} detailů…`:d.error||s?(d.error||'Přehled načten.'):'Připraveno k načtení účtu.')}</p>`)}
      ${s?`${wrap(`<b>${s.complete?'Úplný':'Neúplný'} snímek účtu</b><p>Načtených stanic: ${s.loaded}; prověřovaných: ${s.total}; vynechaných: ${s.excluded}; chyb: ${s.failures.length}. Výzkum: ${s.research?'načtený':'neověřený'}.</p><p>${esc(s.startedAt)} → ${esc(s.at)}. Součty patří k postupně načtenému snímku, nikoliv jednomu okamžiku.</p>
      ${s.failures.map(f=>`<p class="err">${esc(f.name)} (${esc(f.station)}): ${esc(f.message)}</p>`).join('')}
      ${s.warnings.map(w=>`<p>${esc(w)}</p>`).join('')}<p>Export obsahuje soukromé údaje o stanicích; nesdílej jej veřejně.</p>`)}
      ${wrap(`<b>Stanice</b><div class="table"><table><thead><tr><th>Stanice / systém</th><th>Druhů zásob</th><th>Aktivní stroje</th><th>Nominální deficity</th><th></th></tr></thead><tbody>${s.stations.map(st=>`<tr><td>${esc(st.name)}<br>${esc(st.system)}<br>${esc(st.id)}</td><td>${st.stock.length}</td><td>${st.activeMachines}/${st.machines}</td><td>${esc(st.bottlenecks.map(item).join(', ')||'žádné zjištěné')}</td><td><button data-account-open="${esc(st.id)}" ${disabled?'disabled':''}>Detail stanice</button></td></tr>`).join('')}</tbody></table></div>`)}
      ${wrap(`<b>Součet zásob a výroby</b><label>Filtrovat surovinu / výrobek <input id="account-filter" value="${esc(d.query)}" ${d.busy?'disabled':''}></label>
      <div class="table"><table><thead><tr><th>Položka</th><th>Zásoba celkem</th><th>Nad exportními rezervami</th><th>Výroba/min</th><th>Spotřeba/min</th><th>Čistý tok/min</th><th>Kde je</th></tr></thead><tbody>${s.resources.map(r=>{
        const key=(item(r.resource)+' '+r.resource).toLocaleLowerCase('cs-CZ');
        return `<tr data-account-resource="${esc(key)}" ${key.includes(query)?'':'hidden'}><td>${esc(item(r.resource))}</td><td>${fmt(r.units)}</td><td>${fmt(r.exportable)}</td><td>${fmt(r.made)}</td><td>${fmt(r.used)}</td><td>${fmt(r.net)}</td><td><details><summary>${r.sources.length} stanic</summary>${r.sources.map(x=>`<p>${esc(x.name)}: ${fmt(x.units)} ks; nad rezervou ${fmt(x.exportable)} ks.<br>${esc(x.reserveReason)}</p>`).join('')}</details></td></tr>`;
      }).join('')}</tbody></table></div><p>${s.inventoryComplete?'Součet všech načtených vlastních stanic.':'Jde pouze o známý součet načtených stanic. Neúplný snímek neprokazuje celkový nedostatek.'} Mezistaniční dodávky nejsou druhá výroba a do toků se znovu nepřičítají.</p>`)}
      ${s.research?wrap(`<b>Výzkum účtu</b><p>Globální dokončeno ${s.research.global.filter(p=>p.done).length}/${s.research.global.length}; globální projekty se počítají jednou.</p>
      <div class="table"><table><thead><tr><th>Globální projekt</th><th>Stav</th></tr></thead><tbody>${s.research.global.map(p=>`<tr><td>${esc(p.name)}</td><td>${p.done?'hotovo':p.bought?'nákup za kredity':`${fmt(p.steps)}/${fmt(p.total)} kroků`}</td></tr>`).join('')}</tbody></table></div>
      <b>Lokální výzkum po stanicích</b>${s.research.local.map(st=>`<p>${esc(st.name)}: ${st.projects.map(p=>`${esc(p.name)} — ${p.done?'hotovo':`${fmt(p.steps)}/${fmt(p.total)}`}`).join(' · ')||'žádné lokální projekty'}</p>`).join('')}`):''}`:''}`;
  }
  async function accountAction(name){
    if(name==='cancel'){accountOverview.cancel();return}
    if(name==='export'){if(accountOverview.state.snapshot)download(accountOverview.state.snapshot,'aos-toolkit-account.json');return}
    if(name==='refresh'&&!state.processing&&!progressAdvisor.state.busy&&!accountOverview.state.busy){progressAdvisor.invalidate();await accountOverview.refresh()}
  }
  function advisorMenu(){
    const d=progressAdvisor.state,s=d.snapshot,disabled=d.busy||state.processing||accountOverview.state.busy;
    const options=Object.entries(ADVISOR_GOALS).map(([id,label])=>`<option value="${id}" ${d.goal===id?'selected':''}>${esc(label)}</option>`).join('');
    const products=Object.entries(GAME.recipes).sort(([a],[b])=>item(a).localeCompare(item(b))).map(([id])=>`<option value="${esc(id)}" ${id===d.itemId?'selected':''}>${esc(item(id))}</option>`).join('');
    return `${wrap(`<b>Poradce · další nejlepší krok</b><p>Vyber stanici a cíl. Poradce načte aktuální zásoby, nominální výrobní toky a stav výzkumu; nic neprovádí. Cíl a lokální výzkumné návaznosti platí pro vybranou stanici; můžeš zahrnout přebytky dalších vlastních stanic.</p>
      <label>Cíl <select id="advisor-goal" ${disabled?'disabled':''}>${options}</select></label>
      ${(d.goal==='production'||d.goal==='profit')?`<label>Výrobek <select id="advisor-item" ${disabled?'disabled':''}>${products}</select></label><label>Počet kusů <input id="advisor-quantity" type="number" min="1" max="1000000" step="1" value="${esc(d.quantity)}" ${disabled?'disabled':''}></label>`:
      `<label>Konkrétní výzkum (volitelně ID z herního seznamu) <input id="advisor-project" maxlength="80" value="${esc(d.projectId)}" placeholder="automatický výběr" ${disabled?'disabled':''}></label>`}
      <label class="tick"><input id="advisor-account" type="checkbox" ${d.includeAccount?'checked':''} ${disabled?'disabled':''}> Zahrnout vlastní další stanice (čerstvé načtení účtu)</label>
      <button data-advisor="refresh" ${disabled||!state.stationId?'disabled':''}>${d.busy?'Načítám…':'Vyhodnotit další kroky'}</button><button data-advisor="export" ${s?'':'disabled'}>Export plánu</button><button data-advisor="market">Porovnat nákup a výrobu</button><button data-advisor="factory">Plánovat výkon výroby</button><button data-advisor="expansion" ${disabled||!state.stationId?'disabled':''}>Najít systém pro cíl</button><button data-advisor="logistics" ${disabled||!s?.target?'disabled':''}>Navrhnout logistiku cíle</button>
      <p id="advisor-status" role="status" class="${d.error?'err':''}">${esc(d.error||(!state.stationId?'Nejprve načti seznam stanic a vyber stanici.':d.busy?'Načítám data vybrané stanice…':s?'Plán vyhodnocen z načteného snímku.':'Připraveno k vyhodnocení.'))}</p>`)}
      ${s?`<section id="advisor-results">${wrap(`<b>${esc(s.station.name)} · ${esc(ADVISOR_GOALS[s.goal])}</b><p>Stav k ${esc(s.at)}. Systém ${esc(s.station.system)}.</p>
        <p>${s.target?`Nejbližší cíl: <strong>${esc(s.target.name)}</strong>${s.target.kind==='research'?` · ${s.target.scope==='global'?'globální výzkum':'výzkum této stanice'}${s.target.prerequisiteFor?` · předpoklad pro ${esc(s.target.prerequisiteFor)}`:''}`:` · ${fmt(s.target.quantity)} kusů`}`:'Žádný další dostupný výzkum nebyl nalezen. Zvol výrobní cíl nebo zkontroluj dostupná data.'}</p>`)}
      ${s.account?wrap(`<b>Podklady z účtu</b><p>Načteno ${s.account.loaded}/${s.account.total} detailů; ${s.account.inventoryComplete?'úplné zásoby':'neúplné zásoby'} k ${esc(s.account.at)}. Cíl zůstává ve vybrané stanici.</p>`):''}
      ${s.recommendations.map(r=>wrap(`<b>${r.rank}. ${esc(r.title)}</b><p>${esc(r.reason)}</p><p><strong>Postup:</strong> ${esc(r.action)}</p>${r.evidence.map(e=>`<p>${esc(e)}</p>`).join('')}`)).join('')}
      ${wrap(`<b>Materiálový rozpočet cíle</b><p>Zásoby byly použity jen jednou; výrobní dávky jsou zaokrouhlené nahoru. Vlastní dodávky jsou podmíněné kandidáty nad exportními rezervami; zatím nebyly uskutečněné. Výrobní kapacita ani rozmístění strojů se tím nepotvrzují.</p>
      <div class="table"><table><thead><tr><th>Položka</th><th>Přímý požadavek</th><th>Použito ze zásob</th><th>Navržená vlastní dodávka</th><th>Nepokryto po dodávkách</th><th>Vyrobit</th></tr></thead><tbody>${[...new Set([...Object.keys(s.materialPlan.requirements),...Object.keys(s.materialPlan.usedStock),...Object.keys(s.materialPlan.rawMissing),...s.materialPlan.crafts.map(c=>c.resource),...s.materialPlan.externalTransfers.map(t=>t.resource)])].map(id=>`<tr><td>${esc(item(id))}</td><td>${fmt(s.materialPlan.requirements[id]||0)}</td><td>${fmt(s.materialPlan.usedStock[id]||0)}</td><td>${fmt(s.materialPlan.externalTransfers.filter(t=>t.resource===id).reduce((n,t)=>n+t.amount,0))}</td><td>${fmt(s.materialPlan.rawMissing[id]||0)}</td><td>${fmt(s.materialPlan.crafts.find(c=>c.resource===id)?.amount||0)}</td></tr>`).join('')}</tbody></table></div>`)}
      ${wrap(`<b>Stav výzkumů v kontextu této stanice</b><div class="table"><table><thead><tr><th>Výzkum</th><th>ID</th><th>Rozsah</th><th>Stav</th></tr></thead><tbody>${s.choices.map(p=>`<tr><td>${esc(p.name)}</td><td>${esc(p.id)}</td><td>${p.scope==='global'?'účet':'stanice'}</td><td>${esc(p.done?'hotovo':p.available?p.bought?'lze zvážit nákup; rozpočet neověřen':'návaznosti splněné':'chybí: '+p.missingPrerequisites.join(', '))}</td></tr>`).join('')}</tbody></table></div>`)}
      ${wrap(`<b>Podklady a omezení</b>${s.warnings.map(w=>`<p>${esc(w)}</p>`).join('')}<p>Stav může po načtení zastarat. Volné planety, výkupní ceny, zůstatek účtu a obsazení galaxie nejsou potvrzené.</p>`)}</section>`:''}`;
  }
  async function advisorAction(name){
    if(name==='market'){if(['production','profit'].includes(progressAdvisor.state.goal)){marketAssistant.edit('itemId',progressAdvisor.state.itemId);marketAssistant.edit('quantity',String(progressAdvisor.state.quantity))}state.tab='market';render();return}
    if(name==='factory'){if(['production','profit'].includes(progressAdvisor.state.goal))factoryPlanner.edit('itemId',progressAdvisor.state.itemId);state.tab='factory';render();return}
    if(name==='expansion'){await searchGoalExpansion();return}
    if(name==='logistics'){await advisorLogistics();return}
    if(name==='export'){if(progressAdvisor.state.snapshot)download(progressAdvisor.state.snapshot,'aos-toolkit-progression-plan.json');return}
    if(name==='refresh'&&!state.processing)await progressAdvisor.refresh(state.stationId,{system:state.view?.station?.system,resources:state.depositNames,verified:state.depositStatus==='ok'});
  }
  function factoryMenu(){
    const fnum=n=>Number(n).toLocaleString('cs-CZ',{maximumSignificantDigits:6});
    const d=factoryPlanner.state,s=d.snapshot,disabled=d.busy||state.processing||state.writing;
    const opts=Object.entries(GAME.recipes).sort(([a],[b])=>item(a).localeCompare(item(b))).map(([id])=>`<option value="${esc(id)}" ${d.itemId===id?'selected':''}>${esc(item(id))}</option>`).join('');
    const floors=(d.rules?.BUILDINGS||[]).filter(b=>b.floor),floorOptions=floors.length?floors:[{id:'assembler-1',name:'Assembly Bay T1 (ověří se při načtení)'}];
    return wrap(`<b>Factory Planner · trvalý výkon</b><p>Vyber výrobek a ks/min. Plán sloučí společné mezivýrobky a navrhne vyhrazené stroje. Načtení pouze čte vlastní stanici, výzkum a nejvýše 40 hal; nic nestaví.</p>
      <label>Výrobek <select id="factory-item" data-factory-value="itemId" ${disabled?'disabled':''}>${opts}</select></label>
      <label>Cíl ks/min <input id="factory-rate" data-factory-value="rate" type="number" min="0.001" max="1000000" step="any" value="${esc(d.rate)}" ${disabled?'disabled':''}></label>
      <label>Nejnižší tier strojů <select data-factory-value="tier" ${disabled?'disabled':''}>${[1,2,3].map(t=>`<option value="${t}" ${Number(d.tier)===t?'selected':''}>T${t}</option>`).join('')}</select></label>
      <label>Plánovaná hala <select data-factory-value="floorId" ${disabled?'disabled':''}>${floorOptions.map(f=>`<option value="${esc(f.id)}" ${d.floorId===f.id?'selected':''}>${esc(f.name)} · ${esc(f.id)}</option>`).join('')}</select></label>
      <button data-factory="refresh" ${disabled||!state.stationId?'disabled':''}>Načíst aktuální kapacity</button><button data-factory="calculate" ${disabled||!d.rules?'disabled':''}>Přepočítat snímek bez sítě</button><button data-factory="cancel" ${d.busy?'':'disabled'}>Zrušit</button><button data-factory="export" ${s&&!d.busy?'':'disabled'}>Export JSON</button>
      <p id="factory-status" data-busy="${d.busy}" role="status" class="${d.error?'err':''}">${esc(d.error||(d.busy?`Načítám haly ${d.progress}/${d.total}…`:s?'Plán vypočten.':!state.stationId?'Nejprve vyber vlastní stanici.':'Zvol cíl a načti kapacity.'))}</p>`)+
      (s?`<section id="factory-results">${wrap(`<b>${esc(s.target.name)} · ${fnum(s.target.rate)} ks/min</b><p>${esc(s.station?.name||'Teoretický plán')} · ${esc(s.at)}. Hala ${esc(s.floor.id)}: rychlost ${fnum(s.floor.speed)}×.</p>
      ${s.evidence?`<p>Kapacity: ${s.evidence.capacityComplete?'kompletní načtený seznam':'NEÚPLNÉ; nenalezené stroje nejsou nula'} · haly ${s.evidence.loaded}/${s.evidence.total} · ${esc(s.evidence.at)}. Snímek není atomický.</p>${s.evidence.failures.map(f=>`<p class="warning">Slot ${esc(f.slot)}: ${esc(f.reason)}</p>`).join('')}`:''}`)}
      ${wrap(`<b>Sloučený výrobní řetězec</b><div class="table"><table><thead><tr><th>Položka</th><th>Potřeba ks/min</th><th>Model / výkon jednoho</th><th>Strojů / využití</th><th>Načtená kapacita / mezera</th></tr></thead><tbody>${s.rows.map(r=>`<tr><td>${esc(r.name)}${r.parents.length?`<small>Pro: ${r.parents.map(p=>esc(item(p.id))+' '+fnum(p.rate)).join(', ')}</small>`:''}</td><td>${fnum(r.required)}</td><td>${r.raw?'Trvalý externí přísun':`${esc(r.profile.id)} · ${fnum(r.profile.capacity)} ks/min<small>Produktivita +${fnum(r.profile.productivity*100)} % · T${r.profile.tier}</small>`}</td><td>${r.raw?'—':`${fnum(r.machines)} · ${fnum(r.utilization*100)} %`}</td><td>${r.raw?'Ověř přísun a dodávky':`${r.current.complete?'':'≥ '}${fnum(r.current.knownCapacity)} ks/min · ${r.current.count} aktivních<small>Mezera: ${r.capacityGap===null?'neověřená':fnum(r.capacityGap)+' ks/min'}</small>`}${r.boundary?`<small>Tok stanice: +${fnum(r.boundary.made)} / −${fnum(r.boundary.used)} ks/min</small>`:''}</td></tr>`).join('')}</tbody></table></div>`)}
      ${wrap(`<b>Úzká místa a podmínky</b>${s.bottlenecks.length?s.bottlenecks.map(b=>`<p>${esc(item(b.id))}: ${b.kind==='research'?'chybí nebo není ověřený výzkum':b.kind==='capacity'?'načtená kapacita nestačí cíli':'kapacita není kompletně ověřená'}.</p>`).join(''):'<p>Načtené nominální kapacity pokrývají řetězec. To nepotvrzuje zapojení, vstupy ani skutečně dodaný výkon.</p>'}
      ${s.rows.filter(r=>!r.raw&&r.locks.length).map(r=>`<p>${esc(r.name)}: ${r.locks.map(l=>esc(l.id)+' ('+esc(l.status)+')').join(', ')}.</p>`).join('')}<p>Vstupní zdroje nejsou automaticky považované za dostupné: ${s.rows.filter(r=>r.raw).map(r=>esc(r.name)+' '+fnum(r.required)+' ks/min').join('; ')}.</p>`)}
      ${wrap(`<b>Součet plánovaných strojů</b>${s.models.map(m=>`<p>${esc(m.id)}: ${fnum(m.count)} kusů${m.tilesKnown?' · těla strojů '+fnum(m.tiles)+' polí':''}.</p>`).join('')}<p>Jde o celý cílový řetězec, nikoliv automatický seznam dostaveb.</p>`)}
      ${wrap(s.warnings.map(w=>`<p class="warning">${esc(w)}</p>`).join(''))}</section>`:'');
  }
  async function factoryAction(name){
    const d=factoryPlanner.state;
    if(name==='cancel'){factoryPlanner.cancel();return}
    if(d.busy||state.processing||state.writing)return;
    if(name==='export'){if(d.snapshot)download(d.snapshot,'aos-toolkit-factory-plan.json');return}
    if(name==='calculate'){factoryPlanner.calculate();return}
    if(name==='refresh'&&!progressAdvisor.state.busy&&!accountOverview.state.busy)await factoryPlanner.refresh(state.stationId);
  }
  function marketMenu(){
    const d=marketAssistant.state,s=d.snapshot,disabled=d.busy||state.processing||state.writing;
    const money=c=>c===null||c===undefined?'neověřeno':(c/100).toLocaleString('cs-CZ',{minimumFractionDigits:2,maximumFractionDigits:2})+' CR';
    const products=Object.entries(GAME.items).sort(([a],[b])=>item(a).localeCompare(item(b))).map(([id])=>`<option value="${esc(id)}" ${d.itemId===id?'selected':''}>${esc(item(id))}</option>`).join('');
    const accounts=d.evidence?.me?.payFrom||[];
    const quote=(q,side)=>!q.known?`<p class="warning">${esc(q.reason)}</p>`:`<p>${side==='buy'?'Nákup':'Prodej'}: <strong>${fmt(q.filled)} / ${fmt(q.quantity)} ks</strong> · ${q.full?'pokryto načtenou knihou':'neúplné pokrytí'}.</p><p>${side==='buy'?'Cena':'Výnos'} bez doložených poplatků: ${money(q.gross)}. Průměr ${money(q.average)} / ks. Rozsah ${money(q.best)} až ${money(q.worst)}.</p><p>Poplatek ve scénáři ${money(q.fee)} · ${side==='buy'?'cena včetně':'výnos po'} scénářovém poplatku ${money(q.total)}.</p>${q.missing?`<p class="warning">Chybí protistrana pro ${fmt(q.missing)} ks; zbytek není oceněný průměrnou cenou.</p>`:''}${q.limited?'<p class="warning">API označilo omezenou knihu; úplná cena není potvrzená.</p>':''}<details><summary>Plnění jednotlivých objednávek (${q.fills.length})</summary>${q.fills.slice(0,50).map(f=>`<p>${fmt(f.units)} ks × ${money(f.price)} · ${esc(f.id)}</p>`).join('')}${q.fills.length>50?'<p>UI zobrazuje prvních 50; export obsahuje všechna oceněná plnění.</p>':''}</details>`;
    const check=v=>v===null?'neověřeno':v?'ano':'ne';
    return wrap(`<b>Market Assistant · nákup nebo výroba</b><p>Ocenění konkrétního množství přes dostupné protistrany, nikoliv nejnižší cena × počet. Pouze GET čtení; žádný obchod se neodesílá.</p>
      <label>Položka <select data-market-value="itemId" ${disabled?'disabled':''}>${products}</select></label>
      <label>Počet kusů <input data-market-value="quantity" type="number" min="1" max="1000000" step="1" value="${esc(d.quantity)}" ${disabled?'disabled':''}></label>
      <label>Nákupní poplatek – scénář % <input data-market-value="buyFee" type="text" inputmode="decimal" maxlength="6" value="${esc(d.buyFee)}" placeholder="neznámý" ${disabled?'disabled':''}></label>
      <label>Prodejní poplatek – scénář % <input data-market-value="sellFee" type="text" inputmode="decimal" maxlength="6" value="${esc(d.sellFee)}" placeholder="neznámý" ${disabled?'disabled':''}></label>
      <label>Platební účet pro kontrolu nákupu <select data-market-value="accountId" ${disabled?'disabled':''}><option value="">Neověřovat účet</option>${accounts.map(a=>`<option value="${esc(a.id)}" ${a.id===d.accountId?'selected':''}>${esc(a.name||a.id)}</option>`).join('')}</select></label>
      <button data-market="refresh" ${disabled||!state.stationId?'disabled':''}>Načíst knihy a porovnat</button><button data-market="calculate" ${disabled||!d.evidence?'disabled':''}>Přepočítat scénář bez sítě</button><button data-market="cancel" ${d.busy?'':'disabled'}>Zrušit</button><button data-market="export" ${s&&!d.busy?'':'disabled'}>Export JSON</button>
      <p id="market-status" data-busy="${d.busy}" role="status" class="${d.error?'err':''}">${esc(d.error||(d.busy?`Načítám knihy ${d.progress}/${d.total}…`:s?'Oceněno z časově označeného snímku.':'Vyber vlastní stanici a načti trh.'))}</p>`)+
      (s?`<section id="market-results">${wrap(`<b>${esc(s.target.name)} · ${fmt(s.target.quantity)} ks</b><p>K ${esc(s.at)}. Knihy ${s.coverage.loaded}/${s.coverage.total}.</p>${s.failures.map(f=>`<p class="warning">${esc(f.id)}: ${esc(f.reason)}</p>`).join('')}`)}
      ${wrap('<b>Přímý nákup · asks</b>'+quote(s.buy,'buy'))}${wrap('<b>Prodej cílového množství · bids</b>'+quote(s.sell,'sell'))}
      ${s.manufacture.applicable?wrap(`<b>Nákup raw vstupů a vlastní výroba</b><p>${s.manufacture.full?'Všechny potřebné raw vstupy mají pokrytí v načtených knihách.':'Celý koš nemá ověřené pokrytí; částečný součet není cenou výroby.'}</p><p>Známá oceněná část koše: ${money(s.manufacture.knownGross)}. Úplná materiálová cena: ${money(s.manufacture.gross)}; se scénářem nákupních poplatků: ${money(s.manufacture.total)}.</p>
        <div class="table"><table><thead><tr><th>Vstup</th><th>Potřeba</th><th>Na prodej / chybí</th><th>Oceněná část bez poplatku</th></tr></thead><tbody>${s.manufacture.materials.map(m=>`<tr><td>${esc(m.name)}</td><td>${fmt(m.quantity)}</td><td>${m.buy.known?fmt(m.buy.filled)+' / '+fmt(m.buy.missing):'neověřeno'}</td><td>${m.buy.known?money(m.buy.gross):esc(m.buy.reason)}</td></tr>`).join('')}</tbody></table></div>
        ${s.manufacture.blocked.map(b=>`<p class="warning">${esc(item(b.resource))}: ${esc(b.reason)}</p>`).join('')}<details><summary>Vyrobit podle základních receptů</summary>${s.manufacture.crafts.map(c=>`<p>${esc(item(c.resource))}: ${fmt(c.amount)} ks, ${fmt(c.batches)} dávek.</p>`).join('')}</details>`):wrap('<p>Surovina nemá výrobní recept; porovnání výrobního koše se nepoužívá.</p>')}
      ${wrap(`<b>Srovnání ocenění</b><p>Přímý nákup minus raw materiály (před poplatky): ${money(s.comparison.buyMinusMaterialsGross)}. Kladné číslo znamená dražší nákup výrobku.</p><p>Prodej minus raw materiály (před dalšími náklady): ${money(s.comparison.saleMinusMaterialsGross)}. Rozdíl po obou uživatelských poplatcích: ${money(s.comparison.scenarioNetMargin)}.</p><p>Nejde o čistý zisk ani ověřenou arbitráž. Cena času, kapacity, dopravy a rezervace knih není zahrnutá.</p>`)}
      ${wrap(`<b>Podmínky pro oceněný objem cílové položky</b><p>Stanice: ${esc(s.eligibility.station?.name||'neověřená')}. Zásoba ${s.eligibility.held===null?'neověřeno':fmt(s.eligibility.held)}, místo ${s.eligibility.room===null?'neověřeno':fmt(s.eligibility.room)}.</p><p>Místo pro oceněný nákup: ${check(s.eligibility.buyRoomFits)}. Zásoba pro oceněný prodej: ${check(s.eligibility.sellStockFits)}. Vybraný platební účet pokrývá nákup se scénářem poplatku: ${check(s.eligibility.buyBudgetFits)}.</p><p>Ani splněné podmínky nepředstavují potvrzení obchodu serverem.</p>`)}
      ${wrap(s.warnings.map(w=>`<p class="warning">${esc(w)}</p>`).join(''))}</section>`:'');
  }
  async function marketAction(name){
    const d=marketAssistant.state;if(name==='cancel'){marketAssistant.cancel();return}
    if(d.busy||state.processing||state.writing)return;
    if(name==='export'){if(d.snapshot)download(d.snapshot,'aos-toolkit-market-plan.json');return}
    if(name==='calculate'){marketAssistant.calculate();return}
    if(name==='refresh'&&!factoryPlanner.state.busy&&!progressAdvisor.state.busy&&!accountOverview.state.busy)await marketAssistant.refresh(state.stationId);
  }
  const journeyStage=id=>({validation:'kontrola cíle',compatibility:'kontrola definic',progress:'materiály a výzkum',factory:'výrobní kapacity',market:'tržní knihy',expansion:'kandidáti další základny',idle:'připraveno'}[id]||id);
  function journeyMenu(){
    const d=journeyAdvisor.state,s=d.snapshot,disabled=d.busy||state.processing||state.writing;
    const statuses={done:'Ověřeno splnění',pending:'Zbývá',review:'Ověřit podmínky',blocked:'Blokováno',unknown:'Neověřeno',replanned:'Nahrazeno přepočtem'};
    const products=Object.keys(GAME.recipes).sort((a,b)=>item(a).localeCompare(item(b))).map(id=>`<option value="${esc(id)}" ${d.itemId===id?'selected':''}>${esc(item(id))}</option>`).join('');
    const phases=[['now','Teď · vstupy a dostupné možnosti'],['then','Potom · výzkum a výroba'],['base','Další základna']];
    return wrap(`<b>Společný plán · teď → potom → další základna</b><p>Po obnovení se dokončení ověří z aktuálních zásob nebo stavu výzkumu. Nástroje nic neprovedou. Trh a hledání základny jsou volitelné a mohou načítat více podkladů.</p>
      <label>Cíl <select data-journey-value="goal" ${disabled?'disabled':''}><option value="production" ${d.goal==='production'?'selected':''}>Konečné množství výrobku</option><option value="research" ${d.goal==='research'?'selected':''}>Konkrétní výzkum</option></select></label>
      ${d.goal==='production'?`<label>Výrobek <select data-journey-value="itemId" ${disabled?'disabled':''}>${products}</select></label><label>Počet kusů <input data-journey-value="quantity" type="number" min="1" max="1000000" value="${esc(d.quantity)}" ${disabled?'disabled':''}></label><label>Samostatný výkon pro Factory Planner (ks/min) <input data-journey-value="rate" type="number" min="0.001" max="1000000" step="any" value="${esc(d.rate)}" ${disabled?'disabled':''}></label>`:`<label>ID výzkumu <input data-journey-value="projectId" maxlength="80" value="${esc(d.projectId)}" placeholder="první cíl se při načtení připne" ${disabled?'disabled':''}></label>`}
      ${[['includeAccount','Zahrnout vlastní další stanice'],['withFactory','Načíst kapacity (výrobní cíl)'],['withMarket','Načíst trh pro chybějící výrobek'],['withExpansion','Hledat lokalitu pro zbytkové raw vstupy']].map(([key,label])=>`<label class="tick"><input type="checkbox" data-journey-value="${key}" ${d[key]?'checked':''} ${disabled?'disabled':''}> ${label}</label>`).join('')}
      <button data-journey="refresh" ${disabled||!state.stationId?'disabled':''}>Obnovit a vyhodnotit splnění</button><button data-journey="cancel" ${d.busy?'':'disabled'}>Zrušit</button><button data-journey="check" ${disabled?'disabled':''}>Zkontrolovat definice</button><button data-journey="export" ${s&&!d.busy?'':'disabled'}>Export JSON</button>
      <p id="journey-status" data-busy="${d.busy}" role="status" class="${d.error?'err':''}">${esc(d.error||(d.busy?'Načítám: '+journeyStage(d.stage):s?'Plán sestaven z načtených podkladů.':'Vyber stanici a cíl.'))}</p>`)+
      (d.compatibility?wrap(`<b>Kontrola kompatibility</b><p>${d.compatibility.ok?'Kontrolované definice souhlasí.':'ZJIŠTĚNÁ ZMĚNA — nový společný plán a logistické zápisy jsou zablokované.'} · ${esc(d.compatibility.at)}</p>${d.compatibility.issues.slice(0,20).map(i=>`<p class="warning">${esc(i)}</p>`).join('')}<p>Kontrola porovnává recepty, stacky, budovy, rychlosti, produktivitu, výzkumné návaznosti, tick a tržní limity s referencemi vydání. Nepotvrzuje všechny serverové endpointy; jejich formát kontrolují jednotlivé moduly.</p>`):'')+
      (s?`<section id="journey-results">${wrap(`<b>${esc(s.goal.name)} · ${s.complete?'SPLNĚNO VE SNÍMKU':'probíhá'}</b><p>${esc(s.station.name)} · ${esc(s.at)}.</p><p id="journey-stale" class="warning" ${s.stale?'':'hidden'}>Hra oznámila změnu podkladů. Obnov plán; předchozí splnění není potvrzení aktuálního stavu.</p><p>Nově splněných kroků: ${s.steps.filter(t=>t.newlyCompleted).length}. Kroků s nižší aktuální zásobou/stavem: ${s.steps.filter(t=>t.regressed).length}.</p><p>Vlastní dodávky zobrazené ${s.transferCoverage.shown}/${s.transferCoverage.total}; celý podklad je v materiálovém plánu Poradce.</p>${s.failures.map(f=>`<p class="warning">${esc(journeyStage(f.stage))}: ${esc(f.reason)}</p>`).join('')}`)}
      ${phases.map(([phase,label])=>wrap(`<b>${label}</b>${s.steps.filter(t=>t.phase===phase).map(t=>`<div class="sect"><b>${esc(statuses[t.status])} · ${esc(t.title)}${t.newlyCompleted?' · nově splněno':''}${t.regressed?' · stav se zhoršil':''}</b><p>${esc(t.detail)}</p><button data-journey-open="${esc(t.action)}" data-journey-step="${esc(t.id)}">Otevřít související nástroj</button></div>`).join('')}${phase==='base'?s.candidates.map(c=>`<p><button data-journey-system="${esc(c.id)}">${esc(c.name)}</button> · pokrytí ${(c.coverage*100).toLocaleString('cs-CZ',{maximumFractionDigits:1})} % · ${fmt(c.distance)} ly</p>`).join(''):''}`)).join('')}
      ${wrap(`<b>Časy podkladů</b>${Object.entries(s.sources).map(([k,v])=>`<p>${esc(k)}: ${esc(v||'nenačteno')}</p>`).join('')}${s.warnings.map(w=>`<p class="warning">${esc(w)}</p>`).join('')}`)}</section>`:'');
  }
  function journeyOpen(name,stepId){
    if(journeyAdvisor.state.busy)return;
    const s=journeyAdvisor.state.snapshot,step=s?.steps.find(t=>t.id===stepId);
    if(name==='factory'){const target=step?.resource||s?.goal.id;if(GAME.recipes[target]&&factoryPlanner.state.itemId!==target)factoryPlanner.edit('itemId',target);state.tab='factory'}
    else if(name==='market'){const target=step?.resource||s?.goal.id;if(GAME.items[target]&&marketAssistant.state.itemId!==target){marketAssistant.edit('itemId',target);if(step?.amount)marketAssistant.edit('quantity',String(step.amount))}state.tab='market'}
    else if(name==='expansion'||name==='mining'){state.exploredOpened=true;state.exploredMinimized=false;state.exploredTab=name==='mining'?'mining':'expansion';if(name==='mining'&&s?.station.system)miningOptimizer.state.input=s.station.system;renderExplored();return}
    else state.tab=name==='account'?'account':'advisor';render();
  }
  async function journeyAction(name){
    const d=journeyAdvisor.state;if(name==='cancel'){journeyAdvisor.cancel();return}
    if(d.busy||state.processing||state.writing)return;
    if(name==='export'){if(d.snapshot)download(d.snapshot,'aos-toolkit-journey.json');return}
    if(factoryPlanner.state.busy||marketAssistant.state.busy||progressAdvisor.state.busy||accountOverview.state.busy||expansionAdvisor.state.busy||expansionAdvisor.state.preparing)return;
    if(name==='check')await journeyAdvisor.check();if(name==='refresh')await journeyAdvisor.refresh(state.stationId);
  }
  function coverageStatus(){const d=productionCoverage.state;return d.error||(!d.busy?d.snapshot?'Rozbor dokončen.':'Připraveno k načtení.':d.phase==='rules'?'Kontroluji pravidla…':d.phase==='products'?`Produkty podle tieru ${d.progress}/${d.total}…`:`Stanice ${d.progress}/${d.total}; pokusy detailů hal ${d.bays}/80…`)}
  function coverageResults(){
    const d=productionCoverage.state,s=d.snapshot;if(!s)return '';
    const nf=n=>Number(n).toLocaleString('cs-CZ',{maximumSignificantDigits:5}),labels={missing:'Chybí aktivní nastavená výroba',deficit:'Nominální spotřeba převyšuje výrobu','low-stock':'Zásoba pod rezervou',unknown:'Výroba není kompletně ověřená'};
    const q=d.query.toLocaleLowerCase('cs-CZ'),rows=s.rows.filter(r=>(d.tier==='all'||r.tier===Number(d.tier))&&(!d.onlyNeeds||r.need||r.lowStock===true||r.provisional)&&(r.name+' '+r.id).toLocaleLowerCase('cs-CZ').includes(q));
    const pages=Math.max(1,Math.ceil(rows.length/10));d.page=Math.max(0,Math.min(d.page,pages-1));
    return wrap(`<b>Produkty T1 → T${Math.max(...s.rows.map(r=>r.tier))}</b><p>Stanice ${s.evidence.loaded}/${s.evidence.total}; inventář ${s.evidence.inventoryComplete?'úplný':'NEÚPLNÝ'}, nominální výroba ${s.evidence.productionComplete?'úplně načtená':'NEÚPLNÁ'}. Haly ověřené ${s.evidence.baysLoaded}, pokusů ${s.evidence.baysRead}/80. K ${esc(s.at)}.</p><p id="coverage-stale" class="warning" ${s.stale?'':'hidden'}>Hra oznámila změnu. Obnov účet; přepočet starého snímku nezajistí aktuální stav.</p>
      ${[...s.evidence.failures,...(s.evidence.productionFailures||[])].slice(0,20).map(f=>`<p class="warning">${esc(f.station||f.kind||'data')} ${f.slot!==undefined?'slot '+esc(f.slot):''}: ${esc(f.reason)}</p>`).join('')}
      <p>Zobrazeno ${rows.length}/${s.rows.length} produktů. Strana ${d.page+1}/${pages}. <button data-coverage="prev" ${d.page>0?'':'disabled'}>Předchozí</button><button data-coverage="next" ${d.page+1<pages?'':'disabled'}>Další</button></p>`)+
      rows.slice(d.page*10,d.page*10+10).map(r=>wrap(`<b>T${r.tier} · ${esc(r.name)}</b><p>${r.flags.map(f=>esc(labels[f])).join(' · ')||'Bez zjištěného problému podle nastavené politiky.'}${r.provisional?' · závěry jsou PROVIZORNÍ':''}</p><p>Zásoba ${nf(r.stock)} ks ${s.evidence.inventoryComplete?'':'(jen načtené stanice)'} / rezerva účtu ${nf(r.reserve)} ks. Známý nominální výkon ${nf(r.knownMade)} / spotřeba ${nf(r.knownUsed)} ks/min.</p>
      <p>Model navýšení: <strong>${nf(r.extraRate)} ks/min navíc</strong> ${r.provisional?'podle neúplných podkladů':''}. ${!r.need?(r.provisional?'Z načtené části nebyl odvozen další výkon. Neúplnost ale neumožňuje potvrdit, že není potřeba.':'Nová výroba podle této politiky není nyní potřeba; případné doplnění rezervy může pokrýt stávající nominální tok.'):''}</p>
      ${r.existing.length?`<details><summary>Aktuální známí výrobci (${r.existing.length})</summary>${r.existing.map(p=>`<p>${esc(p.name)}: ${nf(p.rate)} ks/min.</p>`).join('')}</details>`:''}
      ${r.need?`<details><summary>Doporučená stanice a dvě alternativy (${r.candidates.length}; mezi ${r.alternativesAmong} načtenými stanicemi)</summary>${r.candidates.length?r.candidates.map((c,i)=>`<div class="sect"><b>${i===0?'Doporučená varianta':`Alternativa ${i}`} · ${esc(c.name)}</b><p>${c.status==='blocked'?'Nejdřív odstranit blokující podmínky':c.status==='unknown'?'Neověřené podklady':'Podmíněná varianta'} · skóre ${nf(c.score)}.</p>${c.error?`<p class="warning">${esc(c.error)}</p>`:`<p>Dodatečně ${nf(c.extraRate)} ks/min: ${nf(c.machines)} × ${esc(c.model)}, kapacita jednoho ${nf(c.capacityEach)} ks/min; produktivita +${nf(c.productivity*100)} %.</p><p>Lokální krytí podle známé nominální bilance ${(c.localCoverage*100).toLocaleString('cs-CZ',{maximumFractionDigits:1})} %. Volné sloty ${c.freeSlots===null?'neověřené':nf(c.freeSlots)}; vážená vzdálenost k odběratelům ${c.meanConsumerDistance===null?'neověřená / bez odběru':nf(c.meanConsumerDistance)+' ly'}.</p>
      <div class="table"><table><thead><tr><th>Vstup</th><th>Nová potřeba / volný místní tok</th><th>Zásoba / nutný nový tok</th></tr></thead><tbody>${c.inputs.map(n=>`<tr><td>${esc(item(n.id))}</td><td>${nf(n.rate)} / ${nf(n.localNet)} ks/min</td><td>${nf(n.stock)} ks / ${nf(n.continuousGap)} ks/min${n.donors.length?`<small>Jednorázoví kandidáti: ${n.donors.map(d=>esc(d.name)+' '+nf(d.units)+' ks').join('; ')}</small>`:''}</td></tr>`).join('')}</tbody></table></div><p>Váhy: ${Object.entries(c.points).map(([k,v])=>esc(k)+' '+nf(v)).join(' · ')}.</p><button data-coverage-factory="${esc(r.id)}" data-coverage-station="${esc(c.station)}" data-coverage-rate="${esc(c.extraRate)}">Otevřít Factory Planner zde</button><button data-coverage-station-open="${esc(c.station)}">Otevřít stanici</button>`}
      ${c.reasons.map(reason=>`<p>${esc(reason)}</p>`).join('')}</div>`).join(''):'<p>Není načtená vlastní stanice pro porovnání.</p>'}</details>`:''}`)).join('')+
      wrap(s.warnings.map(w=>`<p class="warning">${esc(w)}</p>`).join(''));
  }
  function coverageMenu(){
    const d=productionCoverage.state,s=d.snapshot,disabled=d.busy||state.processing||state.writing;
    const tiers=[...new Set((s?.rows||[]).map(r=>r.tier))].sort((a,b)=>a-b);
    return wrap(`<b>Poradce výrobního pokrytí</b><p>Projde produkty po tierech. Rezerva je pro celý účet; horizont určuje tempo jejího doplňování. Návrhy jsou samostatné alternativy, nic nestaví ani nenastavují.</p>
      <label>Rezerva účtu ve stackách na produkt <input data-coverage-value="reserveStacks" type="number" min="0" max="100" step="any" value="${esc(d.reserveStacks)}" ${disabled?'disabled':''}></label>
      <label>Horizont doplnění v minutách <input data-coverage-value="horizon" type="number" min="1" max="1440" value="${esc(d.horizon)}" ${disabled?'disabled':''}></label>
      <label>Nejnižší plánovaný tier strojů <select data-coverage-value="machineTier" ${disabled?'disabled':''}>${[1,2,3].map(t=>`<option value="${t}" ${Number(d.machineTier)===t?'selected':''}>T${t}</option>`).join('')}</select></label>
      <label class="tick"><input data-coverage-value="includeBuildings" type="checkbox" ${d.includeBuildings?'checked':''} ${disabled?'disabled':''}> Zahrnout stavební produkty</label>
      <button data-coverage="refresh" ${disabled?'disabled':''}>Načíst stanice a projít produkty</button><button data-coverage="calculate" ${disabled||!d.evidence?'disabled':''}>Přepočítat snímek bez sítě</button><button data-coverage="cancel" ${d.busy?'':'disabled'}>Zrušit</button><button data-coverage="export" ${s&&!d.busy?'':'disabled'}>Export JSON</button>
      <p id="coverage-status" data-busy="${d.busy}" role="status" class="${d.error?'err':''}">${esc(coverageStatus())}</p>
      <label>Tier produktů <select id="coverage-tier" ${disabled?'disabled':''}><option value="all">Všechny</option>${tiers.map(t=>`<option value="${t}" ${d.tier===String(t)?'selected':''}>T${t}</option>`).join('')}</select></label>
      <label>Filtr produktu <input id="coverage-query" value="${esc(d.query)}" ${disabled?'disabled':''}></label><label class="tick"><input id="coverage-needs" type="checkbox" ${d.onlyNeeds?'checked':''} ${disabled?'disabled':''}> Jen nízké zásoby, nové potřeby a neověřené</label>`)+(d.compatibility?.ok===false?wrap('<b>Změna herního rozhraní</b>'+d.compatibility.issues.slice(0,20).map(i=>`<p class="warning">${esc(i)}</p>`).join('')):'')+`<section id="coverage-results">${coverageResults()}</section>`;
  }
  function bindCoverageResults(panel){
    panel.querySelectorAll('[data-coverage="prev"],[data-coverage="next"]').forEach(b=>b.addEventListener('click',()=>coverageAction(b.dataset.coverage)));
    panel.querySelectorAll('[data-coverage-station-open]').forEach(b=>b.addEventListener('click',()=>coverageOpen(b.dataset.coverageStationOpen)));
    panel.querySelectorAll('[data-coverage-factory]').forEach(b=>b.addEventListener('click',()=>coverageOpen(b.dataset.coverageStation,b.dataset.coverageFactory,b.dataset.coverageRate)));
  }
  function refreshCoverageResults(){const panel=state.root?.getElementById('panel'),results=panel?.querySelector('#coverage-results');if(results){results.innerHTML=coverageResults();bindCoverageResults(panel)}}
  async function coverageOpen(id,product='',rate=''){
    if(productionCoverage.state.busy||state.processing||state.writing)return;
    const station=productionCoverage.state.evidence?.stations.find(s=>s.id===id);if(!station)return;
    if(!state.stations.some(s=>String(s.id)===id))state.stations.push({id,system:station.system,systemName:station.name});state.stationId=id;state.view=null;state.plan=[];state.selected.clear();
    await loadView();if(state.stationId!==id||!state.view)return;
    if(product&&GAME.recipes[product]){factoryPlanner.edit('itemId',product);factoryPlanner.edit('rate',rate);state.tab='factory'}else state.tab='summary';render();
  }
  async function coverageAction(name){
    const d=productionCoverage.state;if(name==='cancel'){productionCoverage.cancel();return}
    if(d.busy||state.processing||state.writing)return;
    if(name==='prev'||name==='next'){d.page+=name==='next'?1:-1;refreshCoverageResults();return}
    if(name==='export'){if(d.snapshot)download(d.snapshot,'aos-toolkit-production-coverage.json');return}
    if(journeyAdvisor.state.busy||factoryPlanner.state.busy||marketAssistant.state.busy||accountOverview.state.busy||progressAdvisor.state.busy||expansionAdvisor.state.busy||expansionAdvisor.state.preparing)return;
    if(name==='refresh')await productionCoverage.refresh();if(name==='calculate')await productionCoverage.recalculate();
  }
  async function runAutomaticSourceCheck(){try{if(typeof navigator!=='undefined'&&navigator.locks?.request)return await navigator.locks.request('aos-toolkit-test-source-updates',{ifAvailable:true},lock=>lock?sourceUpdater.check({automatic:true}):null);return await sourceUpdater.check({automatic:true})}catch(e){sourceUpdater.state.error='Automatická kontrola nebyla dostupná: '+String(e.message||e);refreshSourceUpdates();return null}}
  function downloadSourceSnapshot(snapshot){
    const blob=new Blob([makeSourceZip(snapshot)],{type:'application/zip'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='aos-game-sources-'+snapshot.at.replace(/[:.]/g,'-')+'.zip';a.click();setTimeout(()=>URL.revokeObjectURL(url),6000);
  }
  function sourceUpdateStatus(){const d=sourceUpdater.state,s=d.snapshot;return d.busy?`Kontrola veřejných JS ${d.progress}/${d.total}…`:d.error?d.error:!s?'Zatím nezkontrolováno.':s.changed.length||s.added.length?`Zjištěná změna: ${s.changed.length} souborů, ${s.added.length} nových závislostí.`:s.complete?'Známé dostupné JS odpovídají referencím.':'Kontrola není úplná.'}
  function sourceUpdateDetails(){const s=sourceUpdater.state.snapshot;if(!s)return '';return wrap(`<b>Kontrola zdrojů · ${esc(s.at)}</b><p>${s.complete?'Kompletní načtení známých referencí; volitelné závislosti jsou uvedené zvlášť.':'ČÁSTEČNÝ snímek; neúspěšné zdroje nejsou ověřené.'} Souborů ${s.files.length}/${s.discovered}, velikost ${fmt(s.bytes/1048576)} MiB.</p><p>Jde o změnu obsahu vůči referencím Toolkitu, nikoliv potvrzené číselné označení vydání hry.</p>${s.changed.length?'<b>Změněné</b>'+s.changed.map(p=>`<p>${esc(p)}</p>`).join(''):''}${s.added.length?'<b>Nové závislosti</b>'+s.added.map(p=>`<p>${esc(p)}</p>`).join(''):''}${s.optionalFailures?.length?'<b>Nedostupné volitelné testovací závislosti</b>'+s.optionalFailures.map(f=>`<p>${esc(f.path)}: ${esc(f.reason)}</p>`).join(''):''}${s.failures.length?'<b>Neověřené</b>'+s.failures.map(f=>`<p class="warning">${esc(f.path)}: ${esc(f.reason)}</p>`).join(''):''}`)}
  function sourceBanner(){const d=sourceUpdater.state,s=d.snapshot;if(!s||!s.changed.length&&!s.added.length)return '';return `Herní JS se liší od referencí: ${s.changed.length} změn, ${s.added.length} nových závislostí${s.complete?'':' · částečný snímek'}. <button data-source-updates="open">Podrobnosti</button><button data-source-updates="download">Stáhnout JS ZIP</button>`}
  function gameChangesMenu(){return wrap(`<b>Změny hry · 25. 10. 2026</b><p>Přehled podle nově dodaných herních JS a oznámení hry. Auditovaná společná pravidla: materiálový výzkum a návaznosti kitů; na testu doplněny outposty a bay levely.</p><ul>
<li><b>Výzkum za materiály:</b> Tier 2 Buildings potřebuje celkem 200 Iron Plate, 200 Copper Wire a 100 Glass; Tier 3 Buildings 300 Titanium Plate, 300 Galvanized Steel, 200 Magnesium Alloy a 200 Rubber; Automatic Requests 400 Iron Plate, 400 Copper Wire a 200 Glass. Výzkum probíhá v laboratoři. Dříve zakoupené dokončené projekty zůstávají hotové.</li>
<li><b>Vyšší budovy spotřebují předchozí tier:</b> 15 receptů nyní vyžaduje také jeden odpovídající kit nižšího tieru (včetně minerů a výrobních strojů). Tier 2 Assembly Bay je výjimka: bezplatná Tier 1 není inventářová položka.</li>
<li><b>Request a export:</b> nové requesty standardně nemají Open market, pokud jej nezapne preference. Herní UI ukazuje odhad maximální tržní ceny. Sell excess se vztahuje pouze na market; vlastní stanice a inventář znovu respektují Keep pro daný cíl.</li>
<li><b>Čísla a datum:</b> Settings → Interface nabízí oddělovače čísel, pořadí dne/měsíce a 12/24hodinový čas; automatická volba následuje prohlížeč. Názvy měsíců zůstávají anglicky.</li>
<li><b>Inventář:</b> Move in / Move out umožňuje při více než čtyřech stanicích filtrovat podle stanice nebo systému.</li></ul><p><b>Toolkit 0.2.0:</b> nové náklady zahrnují Poradce, výrobní pokrytí, Factory Planner, Market Assistant i plán expanze. Aktualizovány reference, kontrola kompatibility a detekce dalších aktualizací (191 JS). Opraveno vyhodnocení známé rezervy exportu do stanic při Sell excess.</p><p>Proběhly automatické testy a audit klientských rozhraní. Ovládání v živé hře a skutečné odesílání pravidel vyžadují následné uživatelské ověření.</p>`)}
  function updatesMenu(){const d=sourceUpdater.state;return gameChangesMenu()+wrap(`<b>Update Analyzer · zdroje testovací hry</b><p>Port produkčních modulů. Test: jedna osobní stanice, expanze přes outposty a Construction Ship; čekající stavby zůstávají neověřenou obsazeností. Diagnostika je pod samostatným tlačítkem TEST Diagnostika.</p><p>Porovná SHA-256 dostupných veřejných JS s ${Object.keys(SOURCE_MANIFEST.files).length} auditovanými referencemi této verze Toolkitu. Najde i přímé statické importy nových souborů. Text pouze čte; stažený kód se nespouští.</p><label class="tick"><input id="updates-auto" type="checkbox" ${d.autoEnabled?'checked':''}> Automatická kontrola po otevření hry, nejvýše jednou za 24 hodin v tomto prohlížeči</label><button data-source-updates="check" ${d.busy?'disabled':''}>Zkontrolovat nyní</button><button data-source-updates="cancel" ${d.busy?'':'disabled'}>Zrušit</button><button data-source-updates="download" ${d.snapshot?.files.length?'':'disabled'}>Stáhnout JS ZIP</button><p id="updates-status" role="status">${esc(sourceUpdateStatus())}</p><p>ZIP obsahuje skutečné načtené soubory v references/game-source a manifest s hashi, změnami a případnou neúplností. Použij jej pro kontrolované doplnění referencí soukromého projektu. Herní pravidla ani baseline kompatibility se automaticky nepřepisují.</p>`)+`<section id="updates-details">${sourceUpdateDetails()}</section>`}
  function bindSourceActions(panel){panel.querySelectorAll('[data-source-updates]').forEach(b=>b.addEventListener('click',()=>sourceUpdateAction(b.dataset.sourceUpdates)))}
  function refreshSourceUpdates(){
    const panel=state.root?.getElementById('panel');if(!panel)return;const d=sourceUpdater.state,auto=panel.querySelector('#updates-auto');if(auto)auto.checked=d.autoEnabled;const status=panel.querySelector('#updates-status');if(status)status.textContent=sourceUpdateStatus();
    for(const b of panel.querySelectorAll('[data-source-updates="check"]'))b.disabled=d.busy;for(const b of panel.querySelectorAll('[data-source-updates="cancel"]'))b.disabled=!d.busy;for(const b of panel.querySelectorAll('[data-source-updates="download"]'))b.disabled=!d.snapshot?.files.length;
    const details=panel.querySelector('#updates-details');if(details&&!d.busy)details.innerHTML=sourceUpdateDetails();
    const banner=panel.querySelector('#source-update-banner'),html=sourceBanner();if(banner){banner.hidden=!html;if(banner.innerHTML!==html){banner.innerHTML=html;bindSourceActions(banner)}}
  }
  async function sourceUpdateAction(name){
    if(name==='open'){state.tab='updates';state.opened=true;render();return}
    if(name==='cancel'){sourceUpdater.cancel();return}
    if(name==='download'){sourceUpdater.downloadNow();return}
    if(name==='check')await sourceUpdater.check();
  }
  function debugMenu(){
    const d=debugTools.state,s=d.snapshot,planet=s?.planets.find(p=>p.letter===d.letter);
    const disabled=d.busy?'disabled':'';
    const kv=(label,value)=>`<tr><th>${esc(label)}</th><td>${esc(value??'neznámé')}</td></tr>`;
    return `${wrap(`<b>Cheat / Debug · klientské nástroje</b><p>Resource X-Ray a inspektor zobrazují generovaná data bez ohledu na průzkum nebo aktivní minery. Vyčerpání, vlastnictví a dostupnost na serveru nejsou ověřené. Kamera mění pouze pohled.</p>
      <label>ID systému <input id="debug-system" type="text" maxlength="40" placeholder="sx.sy.cell" value="${esc(d.input)}" ${disabled}></label>
      <button data-debug="inspect" ${disabled}>Načíst ID</button><button data-debug="current" ${disabled}>Aktuální systém mapy</button>
      <button data-debug="station" ${disabled||!state.view?'disabled':''}>Systém vybrané stanice</button><button data-debug="return" ${disabled||!debugTools.canReturn?'disabled':''}>Vrátit kameru</button>
      <p role="status" class="${d.error?'err':''}">${esc(d.busy?'Načítám generátor…':d.error||d.notice)}</p>`)}
      ${s?wrap(`<b>${esc(s.system.name)} · ${esc(s.system.id)}</b><p>Souřadnice: ${fmt(s.system.x)}, ${fmt(s.system.y)} ly · sektor ${esc(s.system.sx)}, ${esc(s.system.sy)} · buňka ${esc(s.system.cell)} · tier ${esc(s.system.tier)}</p>
      <button data-debug="system-camera">Přesun kamery na systém</button><button data-debug="xray">${d.xray?'Vypnout':'Zapnout'} Resource X-Ray</button><button data-debug="export">Export inspektoru</button>
      <p>X-Ray přidá popisky k rozpoznaným planetám aktuálně otevřeného systému. Při změně systému se skryjí. Přejmenované planety nemusí být rozpoznány.</p>
      <label>Planeta <select id="debug-planet">${s.planets.map(p=>`<option value="${esc(p.letter)}" ${p.letter===d.letter?'selected':''}>${esc(p.name||p.letter)} · ${esc(p.kind)}</option>`).join('')}</select></label>
      ${planet?`<button data-debug="planet-camera">Vystředit kameru na planetu</button><div class="table"><table><tbody>
      ${kv('Typ',planet.kind)}${kv('Oběžná vzdálenost (AU)',planet.orbitAU)}${kv('Poloměr (Země = 1)',planet.radiusEarth)}${kv('Oběžná doba (roky)',planet.periodYears)}${kv('Teplota (K)',planet.temperatureK)}${kv('Měsíce',planet.moons)}${kv('Prstence',planet.rings?'ano':'ne')}${kv('Obyvatelná podle generátoru',planet.habitable?'ano':'ne')}${kv('Bohatost',planet.richness)}
      </tbody></table></div><b>Počáteční velikosti ložisek podle generátoru</b><div class="table"><table><thead><tr><th>Surovina</th><th>Tier</th><th>Počáteční jednotky</th></tr></thead><tbody>${planet.resources.map(r=>`<tr><td>${esc(r.name)}</td><td>${esc(r.tier)}</td><td>${fmt(r.initialUnits)}</td></tr>`).join('')}</tbody></table></div><p>Počáteční velikost není aktuální zbývající množství. Vlastnictví: neověřené.</p>`:'<p>Systém nemá planety.</p>'}`):''}`;
  }
  async function debugAction(name){
    const d=debugTools.state;if(d.busy)return;d.error='';
    try{
      if(name==='inspect')await debugTools.inspect(d.input);
      else if(name==='current')await debugTools.inspect(debugTools.currentSystemId());
      else if(name==='station')await debugTools.inspect(state.view?.station?.system);
      else if(name==='xray')debugTools.setXray(!d.xray);
      else if(name==='system-camera')debugTools.cameraToSystem();
      else if(name==='planet-camera')debugTools.cameraToPlanet(d.letter);
      else if(name==='return')debugTools.returnCamera();
      else if(name==='export'&&d.snapshot)download(d.snapshot,'aos-toolkit-planet-inspector.json');
    }catch(e){d.error=String(e.message||e)}
    render();
  }
  function exploredCounts(row,key){const n=row[key];return n===null||row.error?'neověřeno':n>0?`${n}${row.unknown?' + ?':''}`:row.unknown?'neověřeno':'ne'}
  function systemsWindowSubtitle(){
    const e=expansionAdvisor.state,m=miningOptimizer.state,g=galaxyScanner.state;
    if(e.preparing)return 'Expanze · načítám cíl a účet…';if(e.busy)return `Expanze · kandidáti ${e.progress}/${e.total} · lokality ${e.sites}/${e.totalSites}`;
    if(m.busy)return 'Těžba · načítám systém…';if(g.busy)return `Scanner běží · ${g.visited} systémů`;
    if(state.exploredTab==='expansion'&&e.at)return `Expanze · ${e.rows.length} návrhů`;if(state.exploredTab==='mining'&&m.snapshot)return `Těžba · ${m.snapshot.rows.length} variant`;
    if(state.exploredTab==='scanner'&&g.at)return `Scanner · ${g.rows.length} shod${g.complete?'':' · dílčí výsledek'}`;
    return `Serverový průzkum · ${exploredSystems.state.total} systémů`;
  }
  function exploredMarkup(){
    const d=exploredSystems.state,p=exploredSystems.page();
    const header=`<header id="explored-drag"><div><b>Systémy · AOS Toolkit</b><small>${esc(systemsWindowSubtitle())}</small></div><div class="window-controls"><button data-explored="minimize" aria-label="${state.exploredMinimized?'Obnovit okno':'Minimalizovat okno'}" aria-expanded="${!state.exploredMinimized}">${state.exploredMinimized?'□':'−'}</button><button data-explored="close" aria-label="Zavřít prozkoumané systémy">×</button></div></header>`;
    if(state.exploredMinimized)return header;
    return `${header}
    <div class="tabs"><button data-explored="tabList" class="${state.exploredTab==='list'?'active':''}">Prozkoumané</button><button data-explored="tabExpansion" class="${state.exploredTab==='expansion'?'active':''}">Doporučené systémy</button><button data-explored="tabScanner" class="${state.exploredTab==='scanner'?'active':''}">Galaxy Scanner</button><button data-explored="tabMining" class="${state.exploredTab==='mining'?'active':''}">Těžba</button></div>${state.exploredTab==='mining'?miningMarkup():state.exploredTab==='scanner'?scannerMarkup():state.exploredTab==='expansion'?expansionMarkup():`<div class="explored-tools"><button data-explored="refresh" ${d.busy||state.writing?'disabled':''}>Načíst / obnovit</button><button data-explored="cancel" ${d.busy?'':'disabled'}>Zrušit načítání</button><button data-explored="return" ${debugTools.canReturn?'':'disabled'}>Vrátit kameru</button>
    <label>Hledat <input id="explored-query" type="search" value="${esc(d.query)}" placeholder="název nebo ID"></label><label>Zobrazit <select id="explored-filter">${[['all','Vše'],['stations','Se stanicí'],['miners','S minery'],['empty','Bez stanice a minerů']].map(([id,label])=>`<option value="${id}" ${d.filter===id?'selected':''}>${label}</option>`).join('')}</select></label><label>Řadit <select id="explored-sort">${[['name','Název'],['stations','Počet základen'],['miners','Počet minerů'],['upgrade','Upgrade (bays / miner tier)']].map(([id,label])=>`<option value="${id}" ${d.sort===id?'selected':''}>${label}</option>`).join('')}</select></label><select id="explored-direction" aria-label="Směr řazení"><option value="asc" ${d.direction==='asc'?'selected':''}>Vzestupně</option><option value="desc" ${d.direction==='desc'?'selected':''}>Sestupně</option></select></div>
    <div id="expansion-status" class="status" role="status">${esc(d.error||(d.preparing?'Načítám čerstvý materiálový plán a účet…':d.notice))} ${d.busy?`Ověřeno ${d.progress}/${d.total}.`:''}</div>
    <div class="explored-body"><p>Kliknutí na název přesune kameru. Počty zahrnují všechny stavby, které server pro daný systém zpřístupní, včetně cizích. Neověřené údaje neznamenají prázdný systém.</p>
    <div class="table"><table><thead><tr><th>Systém</th><th><button data-explored-sort="stations">Stanice / outposty ↕</button></th><th><button data-explored-sort="miners">Mineři ↕</button></th><th><button data-explored-sort="upgrade">Upgrade ↕</button></th><th>Ověření</th></tr></thead><tbody id="explored-rows">${exploredRows(p.rows)}</tbody></table></div></div>
    <footer><span id="explored-page">${p.total} výsledků · strana ${p.index+1}/${p.pages}</span><div><button data-explored="prev" ${p.index?'':'disabled'}>Předchozí</button><button data-explored="next" ${p.index+1<p.pages?'':'disabled'}>Další</button></div></footer>`}`;
  }
  function exploredRows(rows){return rows.map(row=>`<tr><td><button class="system-link" data-explored-system="${esc(row.id)}" ${row.system?'':'disabled'}>${esc(row.name)}</button><button data-mining-system="${esc(row.id)}" title="Porovnat těžbu v systému">Těžba</button><small>${esc(row.id)}</small></td><td>${exploredCounts(row,'stations')}</td><td>${exploredCounts(row,'miners')}</td><td>${row.upgradeTier==null||row.error?'neověřeno':row.stationBays?'Bays '+row.stationBays:row.upgradeTier?'T'+row.upgradeTier:'—'}<small>Stanice ${row.stationTier==null?'?':row.stationTier?'T'+row.stationTier:'—'} · mineři ${row.minerTier==null?'?':row.minerTier?'T'+row.minerTier:'—'}</small></td><td>${esc(row.error||row.checkedAt||'čeká na načtení')}${row.unknown?` · ${row.unknown} neověřených objektů / čekajících staveb`:''}</td></tr>`).join('')||'<tr><td colspan="5">Žádné výsledky.</td></tr>'}
  function expansionMarkup(){
    const d=expansionAdvisor.state,context=d.context,origin=state.view?.station?.system||debugTools.currentSystemId();
    return `<div class="explored-tools"><p>Výchozí systém: ${esc(origin||'vyber stanici nebo otevři systém na mapě')}. Ověřuje se nejvýše 120 kandidátů; cílový režim nejprve porovná suroviny okolí a podrobně prověří až 24 lokalit.</p>
    <label>Záměr <select id="expansion-goal-mode"><option value="general" ${d.goalMode==='general'?'selected':''}>Obecné hledání</option><option value="goal" ${d.goalMode==='goal'?'selected':''}>Podle cíle Poradce (čerstvé podklady)</option></select></label><label>Plánovaný miner <select id="expansion-miner">${(d.availableMiners?.length?d.availableMiners:Object.keys(GAME.buildings).filter(id=>GAME.buildings[id].k==='miner').map(id=>({id,name:GAME.buildings[id].n}))).map(spec=>`<option value="${esc(spec.id)}" ${d.minerId===spec.id?'selected':''}>${esc(spec.name)}</option>`).join('')}</select></label><label>Okolí <select id="expansion-radius">${[250,500,1000].map(n=>`<option value="${n}" ${Number(d.radius)===n?'selected':''}>${n} ly</option>`).join('')}</select></label><label>Požadovaná surovina <select id="expansion-wanted" ${d.goalMode==='goal'?'disabled':''}><option value="">Libovolná vhodná kombinace</option>${Object.keys(GAME.items).filter(id=>GAME.items[id].c==='raw').map(id=>`<option value="${esc(id)}" ${d.wanted===id?'selected':''}>${esc(item(id))}</option>`).join('')}</select></label>
    <button data-explored="searchExpansion" ${d.busy||d.preparing||state.writing||accountOverview.state.busy||progressAdvisor.state.busy?'disabled':''}>Najít vhodné systémy</button><button data-explored="cancelExpansion" ${d.busy||d.preparing?'':'disabled'}>Zrušit hledání</button><button data-explored="exportExpansion" ${d.at?'':'disabled'}>Export JSON</button><button data-explored="return" ${debugTools.canReturn?'':'disabled'}>Vrátit kameru</button></div>
    <div id="expansion-status" class="status" role="status">${esc(d.error||(d.preparing?'Načítám čerstvý materiálový plán a účet…':d.notice))} ${d.busy?`Ověřeno ${d.progress}/${d.total} · ${esc({loading:'Načítání podkladů',map:'Hledání okolí',structures:'Ověření staveb',resources:'Porovnání ložisek',sites:'Ověření lokalit '+d.sites+'/'+d.totalSites,prefilter:'Suroviny '+d.prefilterDone+'/'+d.prefilterTotal}[d.phase]||d.phase)}`:''}</div>
    <div id="expansion-results" class="explored-body">${context?expansionContextMarkup(context):''}<p>Neprozkoumané: nejdřív průzkum lodí, potom stavba a těžba. Skóre zvýhodňuje suroviny, které podle generátoru chybí ve výchozím systému, jejich rozmanitost a bohatost. Vyšší tier suroviny vyžaduje odpovídající miner. Obecný režim neověřuje zůstatky ani geometrii. Režim cíle ověřuje zůstatky a vzorová klientská místa zvlášť; dosah lodě, odemčení a serverové podmínky zůstávají neověřené.</p>
    ${d.at?`<p>Hledáno kolem ${esc(d.origin?.name)} · ${d.radius} ly · nalezeno ${d.nearby}, prověřeno ${d.total}${d.limited?' (omezený výběr 120)':''}${d.prefilterLimited?' · předvýběr omezen na 4000 systémů':''}. Vyřazeno: těžba ${d.excluded.mined}, cizí/nejistá stanice ${d.excluded.occupied}, neověřené ${d.excluded.unknown}, nevhodné suroviny ${d.excluded.unsuitable}, místo ${d.excluded.placement||0}, vyčerpání ${d.excluded.depleted||0}. ${context?`Detailně ověřeno ${d.sites}/${d.totalSites}${d.siteLimited?' (výběr nejvýše 24 lokalit)':''}.`:''} Stav k ${esc(d.at)}.</p>`:''}
    ${d.rows.map((row,i)=>`<section class="sect"><button class="system-link" data-explored-source="expansion" data-explored-system="${esc(row.id)}">${i+1}. ${esc(row.name)}</button><button data-mining-system="${esc(row.id)}" title="Porovnat těžbu v systému">Těžba</button><small>${esc(row.id)} · ${fmt(row.distance)} ly · skóre ${fmt(row.score)}</small>${row.site?expansionSiteMarkup(row):''}<p>${row.scouted?'Prozkoumaný, bez minerů':'Neprozkoumaný kandidát k průzkumu'} · ${row.built.ownStations?'vlastní stanice / outpost bez těžby':'server nevrátil stanici ani minery'}</p><p>Suroviny (generátor): ${esc(row.resources.map(item).join(', '))}</p><p>Navíc proti výchozímu systému: ${esc(row.newResources.map(item).join(', ')||'žádné nové druhy')} · průměrná bohatost ${fmt(row.richness)}. Stavby ověřeny ${esc(row.checkedAt)}.</p></section>`).join('')||'<p>Zatím žádné doporučené systémy. Spusť hledání nebo změň okolí či požadovanou surovinu.</p>'}</div>`;
  }
  function expansionContextMarkup(context){
    return `<section class="sect"><b>Cíl: ${esc(context.target.name)}</b><p>Stanice ${esc(context.station.name)} · podklady ${esc(context.at)} · ${context.scope==='account'?'účetní':'místní'} režim. Model mineru ${esc(context.minerId)}.</p>${context.provisional?'<p class="warning">Účet je neúplný. Jde o podmíněné nepokryté potřeby dostupného snímku, ne o prokázaný nedostatek celého účtu.</p>':''}<p>Nepokryté těžené vstupy: ${context.needs.map(n=>`${esc(item(n.resource))} ${fmt(n.amount)} ks`).join(', ')||'žádné — nová těžba pro tento materiálový rozpočet není potřeba'}.</p><p>Výrobní návaznosti: ${context.crafts.map(c=>`${esc(item(c.resource))} ${fmt(c.amount)} ks`).join(', ')||'žádné další výrobní dávky'}.</p><p>Podmíněné vlastní dodávky již zohledněné v rozpočtu: ${context.transfers.map(t=>`${esc(t.name)} → ${esc(item(t.resource))} ${fmt(t.amount)} ks`).join(', ')||'žádné'}. Před novou základnou ověř skutečné doručení.</p>${context.manufacturingLocks?.length?'<p class="warning">Výrobní řetězec má neověřené či nedokončené výzkumné návaznosti. Pokrytí těžených vstupů neznamená odemčenou výrobu.</p>':''}${context.blocked.length?'<p class="warning">Část řetězce má chybějící recept nebo zdroj; plán expanze ji nepotvrzuje jako vyřešenou.</p>':''}</section>`;
  }
  function expansionSiteMarkup(row){
    const site=row.site;return `<p><strong>Pokrytí chybějících těžených vstupů: ${fmt(site.coverage*100)} %</strong> · ${site.full?'celý těžený rozpočet':'pouze část'} · ${site.productionMinutes===null?'doba pro celý cíl neověřena':`orientačně ${fmt(site.productionMinutes)} min při neměnném simulovaném podílu a plném odběru`}.</p><p>Obsazení: bez minerů podle aktuálního GET. Zůstatky: ověřené. Zázemí stanice / outpostu: ${site.stationPlacement.status==='existing-own'?'vlastní existuje':'nalezené klientské vzorové místo'}. Miner: ${esc(site.model.name)} · T${site.model.tier}, klientská místa na ${site.minerPlacements.map(p=>esc(p.planet)).join(', ')}.</p>${site.material.map(m=>`<p>${esc(item(m.resource))}: potřeba ${fmt(m.needed)}, teoretická dostupná kapacita ${fmt(m.capacity)} ks; ${fmt(m.rate)} ks/min při rovnoměrném rozdělení, planety ${m.planets.map(esc).join(', ')||'žádné'}.</p>`).join('')}<p class="warning">${esc(site.caveat)} Neprozkoumaný kandidát vyžaduje průzkum. Těžební čas neobsahuje cestu, stavbu, dopravu ani výrobu a nemodeluje pozdější přerozdělení podílů. Náklady nové základny nejsou zahrnuté v rozpočtu původního cíle.</p>`;
  }
  function scannerMarkup(){
    const d=galaxyScanner.state,c=d.config,p=galaxyScanner.page();
    const options=(items,value)=>items.map(([id,label])=>`<option value="${id}" ${value===id?'selected':''}>${label}</option>`).join('');
    return `<div class="scanner-controls"><div class="explored-tools"><label>Střed <select id="scanner-origin-mode">${options([['station','Vybraná stanice'],['map','Systém mapy'],['id','Vlastní ID systému'],['point','Souřadnice x, y']],state.scannerOriginMode)}</select></label>
      ${state.scannerOriginMode==='id'?`<label>ID <input id="scanner-origin-id" value="${esc(state.scannerOriginId)}" placeholder="sx.sy.cell"></label>`:state.scannerOriginMode==='point'?`<label>X <input id="scanner-x" type="number" value="${esc(state.scannerX)}"></label><label>Y <input id="scanner-y" type="number" value="${esc(state.scannerY)}"></label>`:`<p>${esc(state.scannerOriginMode==='station'?state.view?.station?.system||'Nejprve načti stanici':debugTools.currentSystemId()||'Otevři systém na mapě')}</p>`}
      ${[['radius','Radius (ly)',50,5000],['sectorLimit','Max. sektorů',1,4096],['systemLimit','Max. systémů',1,20000],['resultLimit','Max. výsledků',1,2000]].map(([key,label,min,max])=>`<label>${label}<input data-scanner-value="${key}" type="number" min="${min}" max="${max}" step="1" value="${esc(c[key])}"></label>`).join('')}
      <label>Shoda <select data-scanner-value="mode">${options([['all','Všechny vybrané suroviny'],['any','Alespoň jedna surovina']],c.mode)}</select></label><label>Kombinace <select data-scanner-value="scope">${options([['system','V celém systému'],['planet','Na jedné planetě']],c.scope)}</select></label><label>Průzkum <select data-scanner-value="exploration">${options([['new','Neprozkoumané'],['known','Prozkoumané'],['all','Všechny']],c.exploration)}</select></label>
      <label class="tick"><input id="scanner-idle" type="checkbox" ${c.onlyIdle?'checked':''}> Jen bez minerů a cizí stanice (ověřit serverem)</label>
      <button data-explored="scan" ${d.busy||state.writing?'disabled':''}>Spustit scanner</button><button data-explored="cancelScan" ${d.busy?'':'disabled'}>Zrušit hledání</button><button data-explored="exportScan" ${d.rows.length?'':'disabled'}>Export JSON</button><button data-explored="return" ${debugTools.canReturn?'':'disabled'}>Vrátit kameru</button></div>
      <div class="scanner-resources">${Object.keys(GAME.items).filter(id=>GAME.items[id].c==='raw').sort((a,b)=>GAME.items[a].t-GAME.items[b].t||item(a).localeCompare(item(b))).map(id=>`<label><input type="checkbox" data-scanner-resource="${esc(id)}" ${c.resources.includes(id)?'checked':''}>T${GAME.items[id].t} · ${esc(item(id))}</label>`).join('')}</div></div>
      <div id="scanner-status" class="status" role="status">${esc(d.error||d.notice)} · sektory ${d.sectors}/${d.totalSectors}, systémů ${d.visited}, generováno ${d.generated}, shod ${d.matches}, výsledků ${d.rows.length}.</div>
      <div class="explored-body" id="scanner-results"><p>Ložiska a jejich počáteční velikosti jsou generované. Aktuální zůstatky, dosah lodí a možnost stavby nejsou potvrzené. ${c.onlyIdle?'Výsledky projdou čerstvým ověřením staveb.':'Zobrazuješ všechny generované shody bez ověření těžby; nejde o doporučení k obsazení.'}</p>
      ${d.origin?`<p>Střed výsledku: ${esc(d.origin.name)} (${fmt(d.origin.x)}, ${fmt(d.origin.y)}) · ${d.at?esc(d.at):'hledání běží'}. ${Object.keys(d.limits).length?`Dosažené limity: ${esc(Object.keys(d.limits).map(key=>({sectors:'sektory',systems:'systémy',results:'výsledky'}[key])).join(', '))}. Výběr není úplný ani zaručeně nejbližší.`:''} Chyby generování ${d.failed}; neověřené stavby ${d.verificationFailed}; vyřazeno ${d.excluded}.</p>`:''}
      ${p.rows.map(row=>`<section class="sect"><button class="system-link" data-explored-source="scanner" data-explored-system="${esc(row.id)}">${esc(row.name)}</button><button data-mining-system="${esc(row.id)}" title="Porovnat těžbu v systému">Těžba</button><small>${esc(row.id)} · ${fmt(row.distance)} ly · x ${fmt(row.system.x)}, y ${fmt(row.system.y)} · ${row.scouted?'prozkoumaný':'neprozkoumaný'}</small><p>${row.verification==='idle'?'Server nevrátil minery ani cizí stanici · ověřeno '+esc(row.checkedAt):'Pouze generátor · stavby a těžba neověřené'}</p>${row.planets.filter(planet=>row.matchingPlanets.includes(planet.letter)).map(planet=>`<p>Planeta ${esc(planet.letter)} · bohatost ${fmt(planet.richness)}: ${planet.resources.map(id=>`${esc(item(id))} (počáteční ${fmt(planet.initialUnits[id])} ks)`).join(', ')}</p>`).join('')}</section>`).join('')||'<p>Zatím žádné výsledky. Vyber suroviny a spusť hledání.</p>'}</div>
      <footer id="scanner-footer">${p.total} výsledků · strana ${p.index+1}/${p.pages}<div><button data-explored="scanPrev" ${p.index?'':'disabled'}>Předchozí</button><button data-explored="scanNext" ${p.index+1<p.pages?'':'disabled'}>Další</button></div></footer>`;
  }
  function scannerCenter(){
    if(state.scannerOriginMode==='point')return {x:String(state.scannerX).trim()===''?NaN:Number(state.scannerX),y:String(state.scannerY).trim()===''?NaN:Number(state.scannerY)};
    return {systemId:state.scannerOriginMode==='id'?state.scannerOriginId.trim():state.scannerOriginMode==='map'?debugTools.currentSystemId():state.view?.station?.system||''};
  }
  function miningMarkup(){
    const d=miningOptimizer.state,s=d.snapshot,c=d.config,disabled=d.busy?'disabled':'',opts=(list,value)=>list.map(([id,label])=>`<option value="${esc(id)}" ${id===value?'selected':''}>${esc(label)}</option>`).join('');
    const hours=seconds=>seconds===null?'neověřeno':seconds<60?'pod 1 min':fmt(seconds/3600)+' h';
    return `<div class="scanner-controls"><div class="explored-tools"><label>ID systému <input id="mining-system" value="${esc(d.input)}" placeholder="sx.sy.cell" ${disabled}></label><button data-explored="loadMining" ${disabled||state.writing?'disabled':''}>Načíst ID</button><button data-explored="miningStation" ${disabled||!state.view?'disabled':''}>Vybraná stanice</button><button data-explored="miningMap" ${disabled}>Systém mapy</button><button data-explored="cancelMining" ${d.busy?'':'disabled'}>Zrušit</button>
    <label>Cílová surovina <select data-mining-config="target" ${disabled}><option value="">Součet ks/min</option>${opts(Object.keys(GAME.items).filter(id=>GAME.items[id].c==='raw').map(id=>[id,item(id)]),c.target)}</select></label><label>Rozdělení <select data-mining-config="mode" ${disabled}>${opts([['even','Rovnoměrně'],['focus','Zaměřit cílovou surovinu']],c.mode)}</select></label><label>Podíl cíle (%) <input data-mining-config="share" type="number" min="0" max="100" step="1" value="${esc(c.share)}" ${disabled}></label><label>Min. životnost (h) <input data-mining-config="minHours" type="number" min="0" max="87600" value="${esc(c.minHours)}" ${disabled}></label><label>Miner <select data-mining-config="specId" ${disabled}><option value="">Porovnat všechny modely</option>${opts((s?.specs||[]).map(spec=>[spec.id,`${spec.name} · T${spec.tier}`]),c.specId)}</select></label><button data-explored="recalculateMining" ${disabled||!s?'disabled':''}>Přepočítat simulaci</button><button data-explored="exportMining" ${s?'':'disabled'}>Export JSON</button></div></div>
    <div id="mining-status" class="status" role="status">${esc(d.error||d.notice)}</div><div id="mining-results" class="explored-body">${s?`<p><button class="system-link" data-explored-source="mining" data-explored-system="${esc(s.system.id)}">${esc(s.system.name)}</button> · ${esc(s.system.id)} · stav k ${esc(s.at)} · průzkum ${s.scouted===null?'neověřený':s.scouted?'ano':'ne'}. Stavby ${s.structuresVerified?'ověřené':'neověřené'}, zůstatky ${s.depletionVerified?'ověřené podle serveru':'neověřené'}.</p>
      <section class="sect"><b>Nejlepší podmíněná varianta pro zvolené filtry</b>${s.best?`<p>Planeta ${esc(s.best.planet)} · ${esc(s.best.name)} (T${s.best.tier}) · ${fmt(s.best.rate)} ks/min · ${esc(s.best.reason)}.</p>`:'<p>Žádná vhodná ověřená varianta. Zkontroluj cíl, obsazení a podmínku životnosti.</p>'}<p>Pořadí vychází z nominálního výkonu; neověřuje výzkum, inventář, stavitelnost ani skutečný odběr. Nižší tiery a cizí/nejisté obsazení se nedoporučují jako upgrade.</p></section>
      ${s.warnings.map(w=>`<p class="warning">${esc(w)}</p>`).join('')}
      <div class="table"><table><thead><tr><th>Planeta / miner</th><th>Výkon cíle</th><th>Současné rozdělení</th><th>Rozdíl</th><th>Nejdřívější vyčerpání</th><th>Posouzení</th></tr></thead><tbody>${s.rows.map(row=>`<tr><td>${esc(row.planet)} · ${esc(row.name)}<br>T${row.tier} · bohatost ${fmt(row.richness)} · spotřeba ložiska ${fmt(row.drain)}</td><td>${fmt(row.rate)} ks/min</td><td>${row.currentRate===null?'neověřeno':fmt(row.currentRate)+' ks/min'}</td><td>${row.gain===null?'neověřeno':fmt(row.gain)+' ks/min'}</td><td>${row.minimumHours===null?'neověřeno / bez výkonu':fmt(row.minimumHours)+' h'}<br>${row.durationPass?'splňuje filtr':'nesplňuje / neověřeno'}</td><td>${row.eligible?'Podmíněný kandidát':'Pouze porovnání'}<br>${esc(row.reason)}</td></tr>`).join('')}</tbody></table></div>
      ${s.planets.map(planet=>`<section class="sect"><b>Planeta ${esc(planet.letter)} · ${esc(planet.name)}</b><p>Stav: ${esc({free:'bez minerů podle serveru',own:'vlastní miner',foreign:'cizí miner',multiple:'více minerů',unknown:'neověřeno'}[planet.occupancy])}. ${planet.current.map(m=>`${esc(m.building)}: ${m.known?'aktuální nastavený podíl '+esc(JSON.stringify(m.split)):esc(m.error)}`).join(' · ')}</p>
      ${s.rows.filter(row=>row.planet===planet.letter).map(row=>`<details><summary>${esc(row.name)} · T${row.tier} · ${fmt(row.rate)} ks/min</summary><div class="table"><table><thead><tr><th>Surovina</th><th>Stav</th><th>Podíl</th><th>ks/min</th><th>Počáteční / zůstatek</th><th>Max. získatelné</th><th>Min. doba</th></tr></thead><tbody>${row.resources.map(resource=>`<tr><td>${esc(item(resource.id))}</td><td>${!resource.mineable?'tier mineru nestačí':resource.exhausted?'vyčerpané':'nominální'}</td><td>${resource.share}%</td><td>${fmt(resource.rate)}</td><td>${fmt(resource.initialUnits)} / ${resource.remaining===null?'neověřeno':fmt(resource.remaining)}</td><td>${resource.maximumOutput===null?'neověřeno':fmt(resource.maximumOutput)}</td><td>${hours(resource.minimumSeconds)}</td></tr>`).join('')}</tbody></table></div></details>`).join('')}</section>`).join('')}`:'<p>Načti systém. Porovnávají se planety a aktuální herní modely minerů; rozdělení výkonu se mění pouze v simulaci.</p>'}</div>`;
  }
  function bindExploredLinks(win){win.querySelectorAll('[data-explored-system]').forEach(b=>b.addEventListener('click',()=>{
    const rows=b.dataset.exploredSource==='mining'&&miningOptimizer.state.snapshot?[{...miningOptimizer.state.snapshot.system,system:miningOptimizer.state.snapshot.system}]:b.dataset.exploredSource==='scanner'?galaxyScanner.state.rows:b.dataset.exploredSource==='expansion'?expansionAdvisor.state.rows:exploredSystems.state.rows;
    const row=rows.find(row=>row.id===b.dataset.exploredSystem);
    try{if(!row?.system)throw Error('Systém není ověřen');debugTools.cameraToKnownSystem(row.system,{leaveStation:true});exploredSystems.state.error='';exploredSystems.state.notice='Kamera přesunuta na '+row.name;expansionAdvisor.state.error='';galaxyScanner.state.error='';miningOptimizer.state.error=''}catch(e){if(state.exploredTab==='mining')miningOptimizer.state.error=e.message;else if(state.exploredTab==='scanner')galaxyScanner.state.error=e.message;else if(state.exploredTab==='expansion')expansionAdvisor.state.error=e.message;else exploredSystems.state.error=e.message}renderExplored();
  }))}
  function renderExplored(){
    const win=state.root?.getElementById('explored-window');if(!win)return;win.hidden=!state.exploredOpened;if(!state.exploredOpened)return;
    const minimizedButton=win.querySelector('[data-explored="minimize"]');
    if(state.exploredMinimized&&minimizedButton?.getAttribute?.('aria-expanded')==='false'){
      const subtitle=win.querySelector('header small');if(subtitle)subtitle.textContent=systemsWindowSubtitle();return;
    }
    const expansionStatus=win.querySelector('#expansion-status'),expansionBusy=expansionAdvisor.state.busy||expansionAdvisor.state.preparing;
    if(state.exploredTab==='expansion'&&!state.exploredMinimized&&expansionBusy&&expansionStatus){
      const d=expansionAdvisor.state;expansionStatus.textContent=d.preparing?'Načítám čerstvý materiálový cíl a účet…':`${d.notice} · kandidáti ${d.progress}/${d.total}, suroviny ${d.prefilterDone}/${d.prefilterTotal}, lokality ${d.sites}/${d.totalSites}`;
      const result=win.querySelector('#expansion-results');if(result)result.textContent='Návrhy se zobrazí až po dokončení ověření.';
      const mode=win.querySelector('#expansion-goal-mode');if(mode)mode.value=d.goalMode;const wanted=win.querySelector('#expansion-wanted');if(wanted)wanted.disabled=d.goalMode==='goal';
      for(const [name,disabled] of [['searchExpansion',true],['cancelExpansion',false],['exportExpansion',true]]){const b=win.querySelector('[data-explored="'+name+'"]');if(b)b.disabled=disabled}return;
    }
    // Scanner progress updates must not replace controls between pointerdown and click.
    const scannerStatus=win.querySelector('#scanner-status');
    if(state.exploredTab==='scanner'&&!state.exploredMinimized&&galaxyScanner.state.busy&&scannerStatus){
      const d=galaxyScanner.state;scannerStatus.textContent=`${d.notice} · sektory ${d.sectors}/${d.totalSectors}, systémů ${d.visited}, generováno ${d.generated}, shod ${d.matches}, výsledků ${d.rows.length}.`;
      const result=win.querySelector('#scanner-results');if(result){result.hidden=false;result.textContent=`Hledání běží. Dokončených shod: ${d.rows.length}. Řádky se zobrazí po dokončení nebo zrušení hledání.`}
      const footer=win.querySelector('#scanner-footer');if(footer)footer.hidden=true;
      const subtitle=win.querySelector('header small');if(subtitle)subtitle.textContent=`Scanner běží · ${d.visited} systémů`;
      for(const [name,disabled] of [['scan',true],['cancelScan',false],['exportScan',!d.rows.length]]){const b=win.querySelector('[data-explored="'+name+'"]');if(b)b.disabled=disabled}
      return;
    }
    // Preserve focus and partially typed search text during background batch updates.
    const scannerScroll=win.querySelector('.scanner-controls')?.scrollTop||0,resourceScroll=win.querySelector('.scanner-resources')?.scrollTop||0;
    const active=win.querySelector('#explored-query'),focused=!!active&&state.root.activeElement===active,start=active?.selectionStart,end=active?.selectionEnd;
    win.classList?.toggle('minimized',state.exploredMinimized);win.innerHTML=exploredMarkup();
    win.querySelector('#explored-drag').addEventListener('pointerdown',e=>drag(e,win,'exploredPosition'));
    if(win.querySelector('.scanner-controls'))win.querySelector('.scanner-controls').scrollTop=scannerScroll;if(win.querySelector('.scanner-resources'))win.querySelector('.scanner-resources').scrollTop=resourceScroll;
    win.querySelectorAll('[data-explored]').forEach(b=>b.addEventListener('click',()=>exploredAction(b.dataset.explored)));
    if(state.exploredMinimized)return;
    const query=win.querySelector('#explored-query');query?.addEventListener('input',e=>{exploredSystems.state.query=e.target.value;exploredSystems.state.page=0;renderExplored()});
    win.querySelector('#explored-filter')?.addEventListener('change',e=>{exploredSystems.state.filter=e.target.value;exploredSystems.state.page=0;renderExplored()});
    for(const [id,key] of [['explored-sort','sort'],['explored-direction','direction']])win.querySelector('#'+id)?.addEventListener('change',e=>{exploredSystems.state[key]=e.target.value;exploredSystems.state.page=0;renderExplored()});
    win.querySelectorAll('[data-explored-sort]').forEach(b=>b.addEventListener('click',()=>{const d=exploredSystems.state,key=b.dataset.exploredSort;d.direction=d.sort===key&&d.direction==='desc'?'asc':'desc';d.sort=key;d.page=0;renderExplored()}));
    for(const [id,key] of [['expansion-radius','radius'],['expansion-wanted','wanted'],['expansion-goal-mode','goalMode'],['expansion-miner','minerId']])win.querySelector('#'+id)?.addEventListener('change',e=>{invalidateExpansionWork();expansionAdvisor.state[key]=e.target.value;renderExplored()});bindExploredLinks(win);
    win.querySelectorAll('[data-mining-system]').forEach(b=>b.addEventListener('click',async()=>{if(state.writing)return;state.exploredTab='mining';miningOptimizer.invalidate(false);miningOptimizer.state.input=b.dataset.miningSystem;renderExplored();await miningOptimizer.refresh()}));
    win.querySelector('#mining-system')?.addEventListener('input',e=>{miningOptimizer.state.input=e.target.value;miningOptimizer.invalidate(false);const result=win.querySelector('#mining-results');if(result)result.hidden=true;const status=win.querySelector('#mining-status');if(status)status.textContent=miningOptimizer.state.notice;for(const name of ['exportMining','recalculateMining']){const button=win.querySelector('[data-explored="'+name+'"]');if(button)button.disabled=true}});
    win.querySelectorAll('[data-mining-config]').forEach(input=>input.addEventListener(input.tagName==='SELECT'?'change':'input',e=>{
      if(miningOptimizer.state.busy)return;miningOptimizer.state.config[input.dataset.miningConfig]=e.target.value;
      if(input.tagName==='SELECT'){miningOptimizer.recalculate();return}
      miningOptimizer.recalculate(false);const result=win.querySelector('#mining-results');if(result)result.hidden=true;
      const status=win.querySelector('#mining-status');if(status)status.textContent=miningOptimizer.state.error||'Volby změněny. Zobraz výsledek tlačítkem Přepočítat simulaci.';
      const exportButton=win.querySelector('[data-explored="exportMining"]');if(exportButton)exportButton.disabled=true;
      const recalc=win.querySelector('[data-explored="recalculateMining"]');if(recalc)recalc.disabled=!miningOptimizer.state.snapshot;
    }));
    win.querySelector('#scanner-origin-mode')?.addEventListener('change',e=>{galaxyScanner.invalidate();state.scannerOriginMode=e.target.value;renderExplored()});
    for(const [id,key] of [['scanner-origin-id','scannerOriginId'],['scanner-x','scannerX'],['scanner-y','scannerY']])win.querySelector('#'+id)?.addEventListener('input',e=>{state[key]=e.target.value;invalidateScannerInput(win)});
    win.querySelectorAll('[data-scanner-value]').forEach(input=>input.addEventListener(input.tagName==='SELECT'?'change':'input',e=>{galaxyScanner.state.config[input.dataset.scannerValue]=e.target.value;if(input.tagName==='SELECT')galaxyScanner.invalidate();else invalidateScannerInput(win)}));
    win.querySelectorAll('[data-scanner-resource]').forEach(input=>input.addEventListener('change',()=>{const ids=new Set(galaxyScanner.state.config.resources);input.checked?ids.add(input.dataset.scannerResource):ids.delete(input.dataset.scannerResource);galaxyScanner.state.config.resources=[...ids];galaxyScanner.invalidate()}));
    win.querySelector('#scanner-idle')?.addEventListener('change',e=>{galaxyScanner.state.config.onlyIdle=e.target.checked;galaxyScanner.invalidate()});
    if(focused){query.focus({preventScroll:true});if(start!==null&&start!==undefined)query.setSelectionRange?.(start,end)}
  }
  function invalidateScannerInput(win){
    galaxyScanner.invalidate(false);
    for(const id of ['scanner-results','scanner-footer']){const el=win.querySelector('#'+id);if(el)el.hidden=true}
    const status=win.querySelector('#scanner-status');if(status)status.textContent=galaxyScanner.state.notice;
    for(const [name,disabled] of [['scan',state.writing],['cancelScan',true],['exportScan',true]]){const b=win.querySelector('[data-explored="'+name+'"]');if(b)b.disabled=disabled}
  }
  async function exploredAction(name){
    if(name==='minimize'){state.exploredMinimized=!state.exploredMinimized;save();renderExplored();return}
    if(['loadMining','miningStation','miningMap'].includes(name)){if(!state.writing)await miningOptimizer.refresh(name==='miningStation'?state.view?.station?.system:name==='miningMap'?debugTools.currentSystemId():miningOptimizer.state.input);return}
    if(name==='cancelMining'){miningOptimizer.cancel();return}
    if(name==='recalculateMining'){miningOptimizer.recalculate();return}
    if(name==='exportMining'){if(miningOptimizer.state.snapshot)download({version:'0.2.0',...miningOptimizer.state.snapshot},'aos-toolkit-mining-optimizer.json');return}
    if(name==='scan'){if(!state.writing)await galaxyScanner.search({center:scannerCenter()});return}
    if(name==='cancelScan'){galaxyScanner.cancel();return}
    if(name==='scanPrev'||name==='scanNext'){galaxyScanner.state.page+=name==='scanPrev'?-1:1;renderExplored();return}
    if(name==='exportScan'){download({version:'0.2.0',exportedAt:new Date().toISOString(),busy:galaxyScanner.state.busy,error:galaxyScanner.state.error,phase:galaxyScanner.state.phase,notice:galaxyScanner.state.notice,config:galaxyScanner.state.config,origin:galaxyScanner.state.origin,at:galaxyScanner.state.at,complete:galaxyScanner.state.complete,canceled:galaxyScanner.state.canceled,limits:galaxyScanner.state.limits,coverage:{sectors:galaxyScanner.state.sectors,totalSectors:galaxyScanner.state.totalSectors,systems:galaxyScanner.state.visited,failed:galaxyScanner.state.failed,verificationFailed:galaxyScanner.state.verificationFailed},rows:galaxyScanner.state.rows},'aos-toolkit-galaxy-scanner.json');return}
    if(['tabList','tabExpansion','tabScanner','tabMining'].includes(name)){state.exploredTab=name==='tabList'?'list':name==='tabScanner'?'scanner':name==='tabMining'?'mining':'expansion';renderExplored();return}
    if(name==='searchExpansion'){if(expansionAdvisor.state.goalMode==='goal'){await searchGoalExpansion();return}if(!state.writing)await expansionAdvisor.search({originId:state.view?.station?.system||debugTools.currentSystemId()});return}
    if(name==='cancelExpansion'){cancelExpansionWork();renderExplored();return}
    if(name==='exportExpansion'){download({version:'0.2.0',at:expansionAdvisor.state.at,context:expansionAdvisor.state.context,origin:expansionAdvisor.state.origin,limits:{candidates:expansionAdvisor.state.limited,sites:expansionAdvisor.state.siteLimited},excluded:expansionAdvisor.state.excluded,rows:expansionAdvisor.state.rows},'aos-toolkit-expansion.json');return}
    if(name==='close'){state.exploredOpened=false;miningOptimizer.cancel();galaxyScanner.cancel();cancelExpansionWork();exploredSystems.cancel();renderExplored();return}
    if(name==='cancel'){exploredSystems.cancel();return}
    if(name==='refresh'){if(!state.writing){invalidateExpansionWork();await exploredSystems.refresh();}return}
    if(name==='return'){const target=state.exploredTab==='mining'?miningOptimizer.state:state.exploredTab==='scanner'?galaxyScanner.state:state.exploredTab==='expansion'?expansionAdvisor.state:exploredSystems.state;try{debugTools.returnCamera();target.error=''}catch(e){target.error=e.message}}
    if(name==='prev')exploredSystems.state.page--;if(name==='next')exploredSystems.state.page++;renderExplored();
  }
  function diagnostics(){
    return `${wrap(`<b>Diagnostika a verze</b><p>Toolkit 0.2.0 · herní data ${esc(GAME.version)}. Žádné odesílání mimo alloutofspace.com.</p>
      <p>Stanice: ${state.stations.length}. Generátor: ${esc(state.depositStatus)}. Ložiska: ${state.depositNames.length}. Plán: ${state.plan.length} položek.</p>
      <button data-journey="check">Zkontrolovat herní rozhraní</button><p>${esc(storageMigration.warnings.join(" "))}</p><p>Kompatibilita: ${esc(journeyAdvisor.state.compatibility?.ok===true?"kontrolované definice souhlasí":journeyAdvisor.state.compatibility?.ok===false?"zjištěná změna — viz Společný plán":"dosud neověřena")}</p><button data-act="resetFab">Vrátit tlačítko AOS do rohu</button><button data-act="diag">Exportovat anonymizovanou diagnostiku</button><button data-act="backup">Záloha logistických pravidel</button>`)}
      ${state.serverLog.length?wrap(`<b>Zápisní protokol</b><pre>${esc(JSON.stringify(state.serverLog,null,2))}</pre>`):''}`;
  }
  function render(){
    if(!state.root)return;
    if(state.opened&&state.root.getElementById('panel')?.hidden!==true&&state.tab==='coverage'&&productionCoverage.state.busy&&state.root.getElementById('panel')?.querySelector('#coverage-status')?.dataset.busy==='true'){state.root.getElementById('panel').querySelector('#coverage-status').textContent=coverageStatus();return}
    if(state.opened&&state.root.getElementById('panel')?.hidden!==true&&state.tab==='journey'&&journeyAdvisor.state.busy&&state.root.getElementById('panel')?.querySelector('#journey-status')?.dataset.busy==='true'){
      state.root.getElementById('panel').querySelector('#journey-status').textContent='Načítám: '+journeyStage(journeyAdvisor.state.stage);return;
    }
    if(state.opened&&state.root.getElementById('panel')?.hidden!==true&&state.tab==='market'&&marketAssistant.state.busy&&state.root.getElementById('panel')?.querySelector('#market-status')?.dataset.busy==='true'){
      state.root.getElementById('panel').querySelector('#market-status').textContent=`Načítám knihy ${marketAssistant.state.progress}/${marketAssistant.state.total}…`;return;
    }
    // Keep busy controls alive between pointerdown and cancellation clicks.
    if(state.opened&&state.root.getElementById('panel')?.hidden!==true&&state.tab==='factory'&&factoryPlanner.state.busy&&state.root.getElementById('panel')?.querySelector('#factory-status')?.dataset.busy==='true'){
      const status=state.root.getElementById('panel').querySelector('#factory-status');status.textContent=`Načítám vlastní stanici a haly ${factoryPlanner.state.progress}/${factoryPlanner.state.total}…`;return;
    }
    const fab=state.root.getElementById('fab'),panel=state.root.getElementById('panel');fab.hidden=state.opened;panel.hidden=!state.opened;
    if(!state.opened)return;
    const tabs=[['summary','Přehled'],['journey','Společný plán'],['resources','Logistika'],['galaxy','Galaxie'],['production','Výroba'],['coverage','Pokrytí výroby'],['proposals','Návrhy'],['account','Účet'],['advisor','Poradce'],['factory','Factory Planner'],['market','Trh'],['debug','Debug'],['updates','Aktualizace hry'],['diag','Diagnostika']];
    panel.innerHTML=`<header id="drag"><div><b>AOS Toolkit TEST</b><small>v0.2.0 · ${settings.enableWrites?'zápisy POVOLENY':'režim čtení'}</small></div><button data-act="hide" title="Zavřít" aria-label="Zavřít AOS Toolkit">×</button></header>
     <nav><button data-act="exploredOpen" title="Samostatné okno prozkoumaných systémů">Systémy</button><select id="station" aria-label="Stanice" ${state.processing?'disabled':''}><option value="">Vyber stanici</option>${state.stations.map((s,i)=>`<option value="${esc(s.id)}" ${state.stationId===String(s.id)?'selected':''}>${esc(s.systemName||s.name||s.system||'Stanice '+(i+1))}</option>`).join('')}</select>
      <button data-act="refresh" ${state.processing||accountOverview.state.busy||progressAdvisor.state.busy?'disabled':''}>${state.processing?'Načítám…':'Načíst / obnovit'}</button></nav>
     <div class="status">${state.error?`<span class="err">${esc(state.error)}</span>`:esc(state.notice)}</div>
     <div id="source-update-banner" class="status" ${sourceBanner()?'':'hidden'}>${sourceBanner()}</div><div class="tabs">${tabs.map(([id,label])=>`<button data-tab="${id}" ${state.tab===id?'class="active"':''}>${label}</button>`).join('')}</div>
     <main>${({summary,journey:journeyMenu,resources,galaxy,production,coverage:coverageMenu,proposals,account:accountMenu,advisor:advisorMenu,factory:factoryMenu,market:marketMenu,debug:debugMenu,updates:updatesMenu,diag:diagnostics}[state.tab]||summary)()}</main>
     <footer>All Out of Space · ${state.processing?'Probíhá operace':'Připraveno'} <button data-act="exportPlan">Export návrhů</button></footer>`;
    panel.querySelector('#station').addEventListener('change',e=>{if(state.processing)return;state.stationId=e.target.value;invalidateExpansionWork();galaxyScanner.invalidate();miningOptimizer.invalidate();state.view=null;state.plan=[];state.selected.clear();loadView()});
    panel.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{state.tab=b.dataset.tab;render()}));
    panel.querySelectorAll('[data-act]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.act)));
    panel.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('change',()=>{if(state.processing)return;b.checked?state.selected.add(b.dataset.plan):state.selected.delete(b.dataset.plan);render()}));
    panel.querySelectorAll('[data-edit]').forEach(input=>input.addEventListener(input.tagName==='SELECT'?'change':'input',e=>{
      editDraft(input.dataset.id,input.dataset.edit,e.target.value);
      const p=state.plan.find(p=>p.id===input.dataset.id),row=input.closest('[data-draft-row]');if(!p||!row)return;
      row.classList.toggle('same',!p.modified);
      row.querySelector('[data-draft-summary]').textContent=`${p.change} · ${p.current===null?'chybí':fmt(p.current)} → ${fmt(p.target)} ks (${fmt(p.target/stack(p.resource))} stacků)`;
      row.querySelector('[data-draft-error]').textContent=p.error||'';
      const tick=row.querySelector('[data-plan]');tick.checked=checked(p.id);tick.disabled=!p.modified||state.processing;
      const apply=panel.querySelector('[data-act="apply"]');if(apply){apply.disabled=state.processing||accountOverview.state.busy||progressAdvisor.state.busy||state.depositStatus!=='ok'||!settings.enableWrites||!selectedChanges().length||selectedChanges().some(p=>p.error);apply.textContent=`Použít vybraná pravidla (${selectedChanges().length})`}
      const count=panel.querySelector('[data-draft-count]');if(count)count.textContent=`${state.plan.filter(p=>p.modified).length} změn; vybráno ${selectedChanges().length}. Ostatní importy se nemažou.`;
      const warnings=panel.querySelector('[data-draft-warnings]');if(warnings)warnings.innerHTML=proposalWarnings().map(w=>`<p class="warning">${esc(w)}</p>`).join('');
    }));
    panel.querySelector('#crafted')?.addEventListener('change',e=>{if(state.processing)return;if(state.plan.some(p=>p.edited)&&!confirm('Změna profilu nahradí ruční návrhy. Pokračovat?')){e.target.checked=settings.includeCraftedExports;return}settings.includeCraftedExports=e.target.checked;save();createPlan();render()});
    panel.querySelector('#enableWrites')?.addEventListener('change',e=>{if(state.processing)return;settings.enableWrites=e.target.checked;save();render()});
    panel.querySelector('#debug-system')?.addEventListener('input',e=>{debugTools.state.input=e.target.value});
    panel.querySelector('#debug-planet')?.addEventListener('change',e=>{debugTools.state.letter=e.target.value;render()});
    bindSourceActions(panel);panel.querySelector('#updates-auto')?.addEventListener('change',e=>sourceUpdater.setAuto(e.target.checked));
    panel.querySelectorAll('[data-coverage]:not([data-coverage="prev"]):not([data-coverage="next"])').forEach(b=>b.addEventListener('click',()=>coverageAction(b.dataset.coverage)));
    bindCoverageResults(panel);
    panel.querySelectorAll('[data-coverage-value]').forEach(input=>input.addEventListener(input.tagName==='SELECT'||input.type==='checkbox'?'change':'input',()=>{
      productionCoverage.edit(input.dataset.coverageValue,input.type==='checkbox'?input.checked:input.value);const r=panel.querySelector('#coverage-results');if(r)r.innerHTML='';const status=panel.querySelector('#coverage-status');if(status)status.textContent='Politika změněna; přepočítej nebo obnov snímek.';const exp=panel.querySelector('[data-coverage="export"]');if(exp)exp.disabled=true;
    }));
    for(const [id,key] of [['coverage-tier','tier'],['coverage-query','query'],['coverage-needs','onlyNeeds']])panel.querySelector('#'+id)?.addEventListener(id==='coverage-query'?'input':'change',e=>{productionCoverage.state[key]=id==='coverage-needs'?e.target.checked:e.target.value;productionCoverage.state.page=0;refreshCoverageResults()});
    panel.querySelectorAll('[data-journey]').forEach(b=>b.addEventListener('click',()=>journeyAction(b.dataset.journey)));
    panel.querySelectorAll('[data-journey-open]').forEach(b=>b.addEventListener('click',()=>journeyOpen(b.dataset.journeyOpen,b.dataset.journeyStep)));
    panel.querySelectorAll('[data-journey-system]').forEach(b=>b.addEventListener('click',()=>{try{const c=journeyAdvisor.state.snapshot?.candidates.find(c=>c.id===b.dataset.journeySystem);debugTools.cameraToKnownSystem(c?.system,{leaveStation:true})}catch(e){state.error=String(e.message||e);render()}}));
    panel.querySelectorAll('[data-journey-value]').forEach(input=>input.addEventListener(input.tagName==='SELECT'||input.type==='checkbox'?'change':'input',()=>{
      journeyAdvisor.edit(input.dataset.journeyValue,input.type==='checkbox'?input.checked:input.value);
      if(input.dataset.journeyValue==='goal'){render();return}
      panel.querySelector('#journey-results')?.setAttribute('hidden','');const status=panel.querySelector('#journey-status');if(status)status.textContent='Cíl změněn; obnov společný plán.';const exp=panel.querySelector('[data-journey="export"]');if(exp)exp.disabled=true;
    }));
    panel.querySelectorAll('[data-market]').forEach(b=>b.addEventListener('click',()=>marketAction(b.dataset.market)));
    panel.querySelectorAll('[data-market-value]').forEach(input=>input.addEventListener(input.tagName==='SELECT'?'change':'input',()=>{
      marketAssistant.edit(input.dataset.marketValue,input.value);panel.querySelector('#market-results')?.setAttribute('hidden','');
      const status=panel.querySelector('#market-status');if(status)status.textContent='Scénář změněn; přepočítej nebo načti nové knihy.';
      const exp=panel.querySelector('[data-market="export"]');if(exp)exp.disabled=true;
      const calc=panel.querySelector('[data-market="calculate"]');if(calc)calc.disabled=!marketAssistant.state.evidence;
    }));
    panel.querySelectorAll('[data-factory]').forEach(b=>b.addEventListener('click',()=>factoryAction(b.dataset.factory)));
    panel.querySelectorAll('[data-factory-value]').forEach(input=>input.addEventListener(input.tagName==='SELECT'?'change':'input',()=>{
      factoryPlanner.edit(input.dataset.factoryValue,input.value);
      panel.querySelector('#factory-results')?.setAttribute('hidden','');
      const status=panel.querySelector('#factory-status');if(status)status.textContent='Cíl změněn; přepočítej plán.';
      const exp=panel.querySelector('[data-factory="export"]');if(exp)exp.disabled=true;
    }));
    panel.querySelectorAll('[data-debug]').forEach(b=>b.addEventListener('click',()=>debugAction(b.dataset.debug)));
    for(const [id,key] of [['advisor-goal','goal'],['advisor-item','itemId']]){
      panel.querySelector('#'+id)?.addEventListener('change',e=>{progressAdvisor.state[key]=e.target.value;progressAdvisor.invalidate()});
    }
    for(const [id,key] of [['advisor-quantity','quantity'],['advisor-project','projectId']]){
      panel.querySelector('#'+id)?.addEventListener('input',e=>{
        progressAdvisor.state[key]=e.target.value;progressAdvisor.invalidate(false);if(expansionAdvisor.state.goalMode==='goal')invalidateExpansionWork();
        panel.querySelector('#advisor-results')?.setAttribute('hidden','');
        const status=panel.querySelector('#advisor-status');if(status)status.textContent='Cíl změněn; znovu vyhodnoť další kroky.';
        for(const button of panel.querySelectorAll('[data-advisor="export"],[data-advisor="logistics"]'))button.disabled=true;
      });
    }
    panel.querySelectorAll('[data-advisor]').forEach(b=>b.addEventListener('click',()=>advisorAction(b.dataset.advisor)));
    panel.querySelector('#advisor-account')?.addEventListener('change',e=>{progressAdvisor.state.includeAccount=e.target.checked;progressAdvisor.invalidate();if(expansionAdvisor.state.goalMode==='goal')invalidateExpansionWork()});
    panel.querySelectorAll('[data-account]').forEach(b=>b.addEventListener('click',()=>accountAction(b.dataset.account)));
    panel.querySelectorAll('[data-account-open]').forEach(b=>b.addEventListener('click',()=>{
      if(state.processing||accountOverview.state.busy||progressAdvisor.state.busy)return;
      state.stationId=b.dataset.accountOpen;invalidateExpansionWork();galaxyScanner.invalidate();miningOptimizer.invalidate();state.view=null;state.plan=[];state.selected.clear();state.tab='summary';loadView();
    }));
    panel.querySelector('#account-filter')?.addEventListener('input',e=>{
      accountOverview.state.query=e.target.value;const query=e.target.value.toLocaleLowerCase('cs-CZ');
      panel.querySelectorAll('[data-account-resource]').forEach(row=>{row.hidden=!row.dataset.accountResource.includes(query)});
    });
    panel.querySelector('#drag')?.addEventListener('pointerdown',drag);
    sourceUpdater.offer();
  }
  async function action(name){
    if(name==='exploredOpen'){state.exploredOpened=true;state.exploredMinimized=false;save();renderExplored();if(!exploredSystems.state.at&&!exploredSystems.state.busy&&!state.writing)await exploredSystems.refresh();return}
    if(name==='resetFab'){state.fabMover?.reset();return}
    if(state.processing && !['hide','exportPlan','diag'].includes(name))return;
    if(name==='hide'){state.opened=false;render();return}
    if(name==='refresh'){await loadStations();return}
    if(name==='recalc'){if(state.plan.some(p=>p.edited)&&!confirm('Přepočítat a zahodit ruční úpravy návrhu?'))return;createPlan();render();return}
    if(name==='addRequest'||name==='addExport'){addDraft(name==='addRequest'?'request':'export',state.root?.getElementById('panel')?.querySelector('#draft-item')?.value);render();return}
    if(name==='selectAll'){state.selected=new Set(state.plan.filter(p=>p.modified).map(p=>p.id));render();return}
    if(name==='selectNone'){state.selected.clear();render();return}
    if(name==='exportPlan'){download({version:'0.2.0',at:new Date().toISOString(),station:state.stationId,settings:{importStacks:5,exportStacks:10},
      selected:state.plan.filter(p=>checked(p.id)).map(p=>({kind:p.kind,item:p.resource,target:p.target,current:p.current,sources:p.source,priority:p.priority,group:p.existing?.group??p.group,risk:p.risk,error:p.error}))},'aos-toolkit-plan.json');return}
    if(name==='backup'){download(backup(),'aos-toolkit-logistics-backup.json');return}
    if(name==='diag'){download(diagnostic(),'aos-toolkit-diagnostika-v0.2.json');return}
    if(name==='apply'){await applySelected();return}
  }
  function drag(e,target=null,positionKey='position'){
    if(e.button!==0||e.target.closest('button'))return;
    const panel=target||state.root.getElementById('panel');const rect=panel.getBoundingClientRect(),p={x:e.clientX,y:e.clientY,left:rect.left,top:rect.top};
    panel.setPointerCapture?.(e.pointerId);
    const move=x=>{const left=Math.max(0,Math.min(innerWidth-100,p.left+x.clientX-p.x));const top=Math.max(0,Math.min(innerHeight-75,p.top+x.clientY-p.y));panel.style.left=left+'px';panel.style.top=top+'px';panel.style.right='auto';state[positionKey]={left,top}};
    const stop=()=>{panel.removeEventListener('pointermove',move);panel.removeEventListener('pointerup',stop);panel.removeEventListener('pointercancel',stop);save()};
    panel.addEventListener('pointermove',move);panel.addEventListener('pointerup',stop);panel.addEventListener('pointercancel',stop);
  }
  function mount(){
    if(!document.body)return;
    const host=document.createElement('div');host.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2147483646';
    const root=host.attachShadow({mode:'open'});state.root=root;
    const style=document.createElement('style');style.textContent=`
      *{box-sizing:border-box}button,input,select{font:inherit}button{cursor:pointer;background:#21586a;color:#e4faff;border:1px solid #3b91a0;padding:6px 9px;border-radius:6px}button:not(:disabled):hover{background:#2b7084}button:focus-visible{outline:2px solid #90e6f4;outline-offset:2px}button:disabled{opacity:1;cursor:not-allowed}input{accent-color:#61c2d7}
      [hidden]{display:none!important}#fab{touch-action:none;user-select:none;pointer-events:auto;position:fixed;right:18px;bottom:22px;background:#163a49;border:1px solid #38a0b0;color:#e8fcff;font-weight:bold;border-radius:15px;width:57px;height:57px;box-shadow:0 8px 28px #0008}
      #panel{pointer-events:auto;position:fixed;right:16px;top:55px;width:min(650px,calc(100vw - 18px));min-width:min(320px,calc(100vw - 16px));max-width:calc(100vw - 16px);min-height:min(350px,calc(100vh - 75px));max-height:calc(100vh - 75px);resize:both;display:flex;flex-direction:column;background:#101d27;color:#e6f3fa;border:1px solid #446474;border-radius:12px;box-shadow:0 15px 45px #000b;font:12px/1.45 system-ui,Arial,sans-serif;overflow:hidden}
      header{padding:12px 14px;background:#1a3544;display:flex;align-items:center;justify-content:space-between;cursor:move;touch-action:none;user-select:none}header div{display:grid}header b{font-size:15px}header small{font-size:11px;color:#afc6d1}header button{background:#273d49;color:#fff;border:1px solid #56717b;border-radius:6px;font-size:20px;width:30px;height:30px}
      #panel header button[data-act="hide"]{display:grid;place-items:center;padding:0;font:24px/1 Arial,sans-serif;flex-shrink:0}
      nav{display:flex;gap:7px;padding:10px 12px}nav select{flex:1;min-width:0;background:#182e3b;border:1px solid #587080;border-radius:6px;color:#fff;padding:7px}button[data-act],button[data-debug],button[data-advisor],button[data-account],button[data-account-open]{background:#21586a;color:#e4faff;border:1px solid #3b91a0;padding:6px 9px;border-radius:6px}button[data-act]:hover,button[data-debug]:hover,button[data-advisor]:hover,button[data-account]:hover,button[data-account-open]:hover{filter:brightness(1.15)}
      .status{padding:7px 12px;background:#203745;color:#b5dae5;font-size:11px}.err{color:#ffb4a8}.tabs{display:flex;flex-wrap:wrap;border-bottom:1px solid #395666;padding:3px 8px}.tabs button{background:transparent;border:0;border-bottom:2px solid transparent;color:#b5c8d5;padding:7px 9px}.tabs button.active{color:#fff;border-color:#61c2d7}
      main{flex:1;overflow:auto;min-height:120px;padding:11px;overscroll-behavior:contain}.sect{border-bottom:1px solid #294250;padding:6px 0 12px;margin-bottom:8px}.sect>b{display:block;font-size:13px}.sect p{color:#b6cad5;margin:7px 0}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.metric{background:#1b3340;border:1px solid #365666;padding:9px 5px;border-radius:6px;text-align:center}.metric strong{display:block;font-size:21px}.metric small{font-size:10px;color:#b8d3d7}
      .table{overflow:auto;margin:8px 0}.table table{border-collapse:collapse;min-width:440px;width:100%;font-size:11px}.table th,.table td{padding:7px;text-align:left;border-bottom:1px solid #34505c;vertical-align:top}.table th{background:#1e3543;color:#b5e6ed}
      .plan{display:flex;align-items:flex-start;gap:9px;padding:8px 6px;border:1px solid #314f5f;border-radius:7px;margin-top:5px}.plan.same{opacity:.8}.draft-fields{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}.draft-fields label{display:grid;gap:3px}.draft-fields input{width:130px}.draft-fields input,.draft-fields select,#draft-item{background:#182e3b;color:#fff;border:1px solid #587080;border-radius:5px;padding:5px;max-width:100%}.info{min-width:0}.plan input{margin-top:3px}.info{flex:1}.info strong{color:#e7f9ff}.info small{display:block;color:#a9c7d2}.info b{color:#fff}.caution{color:#ffcc7b!important}.tick{display:flex;gap:8px;align-items:center;margin:8px 0}.warning{padding:9px;background:#4b3b20;border-radius:7px;color:#ffde9b}.dangerbtn{background:#762b30!important;border-color:#c85656!important}pre{overflow:auto;background:#162f3b;padding:9px}footer{display:flex;justify-content:space-between;align-items:center;font-size:10px;padding:8px 12px;background:#1a303e;color:#b4c8d3}
      #debug-system,#debug-planet,[id^="advisor-"],#account-filter,[data-factory-value],[data-market-value],[data-journey-value],[data-coverage-value],#coverage-tier,#coverage-query{background:#182e3b;color:#fff;border:1px solid #587080;border-radius:6px;padding:6px;margin:6px 0;max-width:100%}#debug-system{width:100%}
      #explored-window{pointer-events:auto;position:fixed;z-index:2;left:25px;top:100px;width:min(800px,calc(100vw - 16px));height:480px;min-width:min(320px,calc(100vw - 16px));min-height:min(260px,calc(100vh - 16px));max-width:calc(100vw - 16px);max-height:calc(100vh - 16px);resize:both;overflow:hidden;display:flex;flex-direction:column;background:#101d27;color:#e6f3fa;border:1px solid #527d8f;border-radius:12px;font:12px/1.45 system-ui;box-shadow:0 15px 45px #000b}
      #explored-window[hidden]{display:none}#explored-window header button{display:grid;place-items:center;padding:0;font:24px/1 Arial,sans-serif}#explored-window .explored-body{flex:1;min-height:80px;overflow:auto;padding:10px}#explored-window .explored-tools{display:flex;flex-wrap:wrap;gap:6px;padding:8px}#explored-window label{display:flex;align-items:center;gap:5px}#explored-window input,#explored-window select{max-width:220px;background:#182e3b;color:#fff;border:1px solid #587080;padding:5px;border-radius:5px}#explored-window button[data-explored],#explored-window .system-link{background:#21586a;color:#e4faff;border:1px solid #3b91a0;border-radius:5px;padding:5px 7px}#explored-window .system-link{text-align:left;text-decoration:underline;background:transparent;border:0;color:#8bdcef;padding:0}#explored-window td small{display:block;color:#afc6d1}#explored-window .tabs button[data-explored]{background:transparent;border:0;border-bottom:2px solid transparent;border-radius:0;color:#b5c8d5}#explored-window .tabs button.active{color:#fff;border-bottom-color:#61c2d7}#explored-window button[data-explored-sort]{background:transparent;border:0;color:#b5e6ed;font-weight:bold;padding:0}#explored-window .sect small{display:block;color:#a9c7d2;margin:5px 0}#explored-window header{flex-shrink:0}#explored-window footer{gap:5px}
      #explored-window.minimized{height:auto!important;min-height:0;max-height:none;resize:none}#explored-window.minimized>:not(header){display:none!important}#explored-window header>div:first-child{min-width:0;overflow:hidden}#explored-window header b,#explored-window header small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#explored-window .window-controls{display:flex;gap:5px;flex-shrink:0}.scanner-controls{max-height:45%;overflow:auto;flex-shrink:0}.scanner-resources{display:flex;flex-wrap:wrap;gap:6px;padding:8px;max-height:135px;overflow:auto;flex-shrink:0}.scanner-resources label{min-width:140px;font-size:11px}#explored-window [data-scanner-value]{max-width:190px}#explored-window input[type="number"]{width:110px}
      #explored-window button[data-mining-system]{background:#21586a;color:#e4faff;border:1px solid #3b91a0;border-radius:5px;padding:3px 6px;margin-left:6px}#mining-results details{margin:7px 0}#mining-results summary{cursor:pointer;color:#8bdcef}
      #panel,#explored-window{color-scheme:dark}#panel button:disabled,#explored-window button:disabled{opacity:1;background:#203b49;color:#b8d8df;border-color:#486b79}#panel [data-source-updates]{margin:3px}#updates-status{color:#b5e6ed}
      @media(max-width:670px){#panel{top:8px;left:8px!important;right:auto!important;width:calc(100vw - 16px);max-height:calc(100vh - 16px)}.metrics{grid-template-columns:repeat(2,1fr)}}`;
    const fab=document.createElement('button');fab.id='fab';fab.textContent='AOS TEST';fab.title='AOS Toolkit · přesuň tažením';state.fabMover=makeMovableButton(fab,{getPosition:()=>state.fabPosition,setPosition:p=>{state.fabPosition=p},viewport:()=>({width:innerWidth,height:innerHeight}),save});fab.addEventListener('click',()=>{state.opened=true;render();if(!state.loaded)loadStations()});
    const panel=document.createElement('section');panel.id='panel';panel.hidden=true;
    if(state.position){panel.style.left=state.position.left+'px';panel.style.top=state.position.top+'px';panel.style.right='auto'}
    if(state.windowSize){
      const {width,height}=state.windowSize;
      if(Number.isFinite(width)&&Number.isFinite(height)&&width>0&&height>0){
        panel.style.width=Math.min(Math.max(320,width),Math.max(1,innerWidth-16))+'px';
        panel.style.height=Math.min(Math.max(350,height),Math.max(1,innerHeight-75))+'px';
      }
    }
    const explored=document.createElement('section');explored.id='explored-window';explored.hidden=true;
    root.append(style,fab,panel,explored);document.body.append(host);state.host=host;render();setTimeout(()=>runAutomaticSourceCheck(),3000);
    const restoreExplored=()=>{if(state.exploredSize){explored.style.width=Math.min(Math.max(320,state.exploredSize.width||800),Math.max(1,innerWidth-16))+'px';explored.style.height=Math.min(Math.max(260,state.exploredSize.height||480),Math.max(1,innerHeight-16))+'px'}const p=clampFloatingPosition(state.exploredPosition||{left:25,top:100},{width:innerWidth,height:innerHeight},Math.min(320,innerWidth),40);if(p){state.exploredPosition=p;explored.style.left=p.left+'px';explored.style.top=p.top+'px'}};restoreExplored();
    window.addEventListener('resize',()=>{state.fabMover.restore();restoreExplored();save()});
    if(typeof ResizeObserver==='function'){
      let resizeSave;
      new ResizeObserver(()=>{
        // Native resize sets inline dimensions; content-driven automatic sizes stay automatic.
        if(!panel.style.width||!panel.style.height)return;
        const rect=panel.getBoundingClientRect();if(!(rect.width>0&&rect.height>0))return;
        state.windowSize={width:Math.round(rect.width),height:Math.round(rect.height)};
        clearTimeout(resizeSave);resizeSave=setTimeout(save,250);
      }).observe(panel);
      let exploredSave;new ResizeObserver(()=>{if(!explored.style.width||!explored.style.height||explored.hidden||state.exploredMinimized)return;const box=explored.getBoundingClientRect();state.exploredSize={width:Math.round(box.width),height:Math.round(box.height)};clearTimeout(exploredSave);exploredSave=setTimeout(save,250)}).observe(explored);
    }
  }
  document.addEventListener('spacefactory:auth',e=>{
    if(e.detail?.profile)return;
    testRules.reset();testConstruction.reset();
    state.exploredOpened=false;productionCoverage.invalidate();journeyAdvisor.reset();marketAssistant.invalidate();factoryPlanner.invalidate();miningOptimizer.invalidate();galaxyScanner.invalidate();invalidateExpansionWork();exploredSystems.invalidate();accountOverview.invalidate();progressAdvisor.invalidate();state.querySerial++;state.stations=[];state.stationId='';state.view=null;state.plan=[];state.selected.clear();state.loaded=false;state.processing=state.writing;render();
  });
  for(const event of ['spacefactory:scouting','spacefactory:structures'])document.addEventListener(event,()=>{if(event==='spacefactory:structures')productionCoverage.invalidate();journeyAdvisor.invalidate();marketAssistant.invalidate();factoryPlanner.invalidate();exploredSystems.stale();invalidateExpansionWork();galaxyScanner.invalidate();miningOptimizer.invalidate()});
  function markJourneyStale(){journeyAdvisor.markStale(false);const el=state.root?.getElementById('panel')?.querySelector('#journey-stale');if(el)el.hidden=false}
  for(const event of ['spacefactory:market','spacefactory:wallet'])document.addEventListener(event,()=>{markJourneyStale();marketAssistant.invalidate(false);if(state.tab==='market')render()});
  for(const event of ['spacefactory:logistics','spacefactory:research'])document.addEventListener(event,()=>{markJourneyStale();productionCoverage.markStale(false);const el=state.root?.getElementById('panel')?.querySelector('#coverage-stale');if(el)el.hidden=false});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)sourceUpdater.offer()});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();

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
 </style><button id="launch">TEST Diagnostika</button><article id="panel" hidden aria-label="AOS Toolkit TEST"><header><b>AOS Toolkit TEST · 0.2.0</b><span><button id="minimize" aria-label="Minimalizovat">−</button><button id="close" aria-label="Zavřít">×</button></span></header><main>
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
 el('report').addEventListener('click',()=>{if(!report||sources.state.busy||diagnostics.state.busy)return;download('aos-test-diagnostics-'+report.at.replace(/[:.]/g,'-')+'.json',new Blob([JSON.stringify({toolkit:'AOS Toolkit TEST',version:'0.2.0',...report},null,2)],{type:'application/json'}))});
})();

})();
