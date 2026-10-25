// ==UserScript==
// @name         AOS Toolkit - All Out of Space
// @namespace    https://alloutofspace.com/
// @version      0.5.0
// @description  Account overview, network-aware progression advisor, Smart Logistics and client Debug tools (CZ)
// @author       AOS Toolkit
// @homepageURL  https://github.com/XPODAK/AOoS-Toolkit-Updates
// @updateURL    https://raw.githubusercontent.com/XPODAK/AOoS-Toolkit-Updates/main/AOS-Toolkit.meta.js
// @downloadURL  https://raw.githubusercontent.com/XPODAK/AOoS-Toolkit-Updates/main/AOS-Toolkit.user.js
// @match        https://alloutofspace.com/*
// @exclude      https://alloutofspace.com/api/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  if (window.top !== window || window.__aosToolkitRunning) return;
  window.__aosToolkitRunning = true;
  // GAME is embedded at build time. Does not fetch or send player data elsewhere.
  const GAME = {"version":"2026-10-25","items":{"iron-ore":{"n":"Iron Ore","c":"raw","t":1,"s":100},"copper-ore":{"n":"Copper Ore","c":"raw","t":1,"s":100},"carbon":{"n":"Carbon Rock","c":"raw","t":1,"s":100},"silicon":{"n":"Silicon Ore","c":"raw","t":1,"s":100},"aluminum-ore":{"n":"Aluminum Ore","c":"raw","t":1,"s":100},"hydrogen-ice":{"n":"Hydrogen Ice","c":"raw","t":1,"s":100},"oxygen-ice":{"n":"Oxygen Ice","c":"raw","t":1,"s":100},"nickel-ore":{"n":"Nickel Ore","c":"raw","t":2,"s":50},"titanium-ore":{"n":"Titanium Ore","c":"raw","t":2,"s":50},"magnesium-ore":{"n":"Magnesium Ore","c":"raw","t":2,"s":50},"chromium-ore":{"n":"Chromium Ore","c":"raw","t":2,"s":50},"tin-ore":{"n":"Tin Ore","c":"raw","t":2,"s":50},"zinc-ore":{"n":"Zinc Ore","c":"raw","t":2,"s":50},"lead-ore":{"n":"Lead Ore","c":"raw","t":2,"s":50},"sulfur":{"n":"Sulfur Deposit","c":"raw","t":2,"s":50},"nitrogen-ice":{"n":"Nitrogen Ice","c":"raw","t":2,"s":50},"phosphorus-ore":{"n":"Phosphorus Ore","c":"raw","t":2,"s":50},"cobalt-ore":{"n":"Cobalt Ore","c":"raw","t":3,"s":20},"lithium-ore":{"n":"Lithium Ore","c":"raw","t":3,"s":20},"silver-ore":{"n":"Silver Ore","c":"raw","t":3,"s":20},"gold":{"n":"Gold Ore","c":"raw","t":3,"s":20},"tungsten-ore":{"n":"Tungsten Ore","c":"raw","t":3,"s":20},"boron-ore":{"n":"Boron Ore","c":"raw","t":3,"s":20},"neodymium-ore":{"n":"Neodymium Ore","c":"raw","t":3,"s":20},"helium-gas":{"n":"Helium Gas","c":"raw","t":3,"s":20},"xenon-gas":{"n":"Xenon Gas","c":"raw","t":3,"s":20},"platinum":{"n":"Platinum Ore","c":"raw","t":4,"s":10},"palladium-ore":{"n":"Palladium Ore","c":"raw","t":4,"s":10},"iridium-ore":{"n":"Iridium Ore","c":"raw","t":4,"s":10},"uranium-ore":{"n":"Uranium Ore","c":"raw","t":4,"s":10},"thorium-ore":{"n":"Thorium Ore","c":"raw","t":4,"s":10},"helium-3":{"n":"Helium-3","c":"raw","t":4,"s":10},"iron-ingot":{"n":"Iron Ingot","c":"refined","t":1,"s":100},"copper-ingot":{"n":"Copper Ingot","c":"refined","t":1,"s":100},"nickel-ingot":{"n":"Nickel Ingot","c":"refined","t":2,"s":50},"tin-ingot":{"n":"Tin Ingot","c":"refined","t":2,"s":50},"zinc-ingot":{"n":"Zinc Ingot","c":"refined","t":2,"s":50},"lead-ingot":{"n":"Lead Ingot","c":"refined","t":2,"s":50},"cobalt-ingot":{"n":"Cobalt Ingot","c":"refined","t":3,"s":20},"silver-ingot":{"n":"Silver Ingot","c":"refined","t":3,"s":20},"gold-ingot":{"n":"Gold Ingot","c":"refined","t":3,"s":20},"refined-carbon":{"n":"Refined Carbon","c":"refined","t":1,"s":100},"glass":{"n":"Glass","c":"refined","t":1,"s":100},"solder":{"n":"Solder","c":"refined","t":2,"s":50},"bronze":{"n":"Bronze","c":"refined","t":2,"s":50},"brass":{"n":"Brass","c":"refined","t":2,"s":50},"lead-shielding":{"n":"Lead Shielding","c":"refined","t":2,"s":50},"steel":{"n":"Steel","c":"refined","t":1,"s":100},"graphite":{"n":"Graphite","c":"refined","t":1,"s":100},"pure-silicon":{"n":"Pure Silicon","c":"refined","t":1,"s":100},"borosilicate-glass":{"n":"Borosilicate Glass","c":"refined","t":3,"s":20},"aluminum-ingot":{"n":"Aluminum Ingot","c":"refined","t":1,"s":100},"magnesium-ingot":{"n":"Magnesium Ingot","c":"refined","t":2,"s":50},"magnesium-alloy":{"n":"Magnesium Alloy","c":"refined","t":2,"s":50},"titanium-ingot":{"n":"Titanium Ingot","c":"refined","t":2,"s":50},"chromium-ingot":{"n":"Chromium Ingot","c":"refined","t":2,"s":50},"lithium-metal":{"n":"Lithium Metal","c":"refined","t":3,"s":20},"neodymium-metal":{"n":"Neodymium Metal","c":"refined","t":3,"s":20},"tungsten-powder":{"n":"Tungsten Powder","c":"refined","t":3,"s":20},"stainless-steel":{"n":"Stainless Steel","c":"refined","t":2,"s":50},"superalloy":{"n":"Superalloy","c":"refined","t":3,"s":20},"titanium-alloy":{"n":"Titanium Alloy","c":"refined","t":2,"s":50},"tungsten-carbide":{"n":"Tungsten Carbide","c":"refined","t":3,"s":20},"engine-nozzle":{"n":"Engine Nozzle","c":"parts","t":3,"s":10},"neodymium-magnet":{"n":"Neodymium Magnet","c":"parts","t":3,"s":10},"platinum-ingot":{"n":"Platinum Ingot","c":"refined","t":4,"s":10},"palladium-ingot":{"n":"Palladium Ingot","c":"refined","t":4,"s":10},"iridium-ingot":{"n":"Iridium Ingot","c":"refined","t":4,"s":10},"iridium-crucible":{"n":"Iridium Crucible","c":"parts","t":4,"s":5},"iron-plate":{"n":"Iron Plate","c":"refined","t":1,"s":100},"copper-wire":{"n":"Copper Wire","c":"refined","t":1,"s":100},"sulfur-powder":{"n":"Sulfur Powder","c":"refined","t":2,"s":50},"phosphorus-powder":{"n":"Phosphorus Powder","c":"refined","t":2,"s":50},"copper-sheet":{"n":"Copper Sheet","c":"refined","t":1,"s":100},"copper-tubing":{"n":"Copper Tubing","c":"refined","t":1,"s":100},"aluminum-sheet":{"n":"Aluminum Sheet","c":"refined","t":1,"s":100},"aluminum-frame":{"n":"Aluminum Frame","c":"refined","t":1,"s":100},"titanium-plate":{"n":"Titanium Plate","c":"refined","t":2,"s":50},"gold-foil":{"n":"Gold Foil","c":"refined","t":3,"s":20},"diamond":{"n":"Diamond","c":"refined","t":1,"s":100},"hydrogen-filter":{"n":"Hydrogen Filter","c":"parts","t":4,"s":5},"water":{"n":"Water","c":"refined","t":1,"s":100},"polymer":{"n":"Polymer","c":"refined","t":1,"s":100},"sulfuric-acid":{"n":"Sulfuric Acid","c":"refined","t":2,"s":50},"rubber":{"n":"Rubber","c":"refined","t":2,"s":50},"silver-paste":{"n":"Silver Paste","c":"refined","t":3,"s":20},"nickel-plating":{"n":"Nickel Plating","c":"refined","t":2,"s":50},"chrome-plating":{"n":"Chrome Plating","c":"refined","t":2,"s":50},"galvanized-steel":{"n":"Galvanized Steel","c":"refined","t":2,"s":50},"gold-contacts":{"n":"Gold Contacts","c":"parts","t":3,"s":10},"mirror":{"n":"Mirror","c":"parts","t":3,"s":10},"ammonia":{"n":"Ammonia","c":"refined","t":2,"s":50},"fertilizer":{"n":"Fertilizer","c":"goods","t":2,"s":20},"mining-charge":{"n":"Mining Charge","c":"goods","t":2,"s":20},"boron-powder":{"n":"Boron Powder","c":"refined","t":3,"s":20},"battery-cathode":{"n":"Battery Cathode","c":"parts","t":3,"s":10},"catalyst-mesh":{"n":"Catalyst Mesh","c":"parts","t":4,"s":5},"uranium-oxide":{"n":"Uranium Oxide","c":"refined","t":4,"s":10},"thorium-oxide":{"n":"Thorium Oxide","c":"refined","t":4,"s":10},"liquid-hydrogen":{"n":"Liquid Hydrogen","c":"refined","t":1,"s":100},"liquid-oxygen":{"n":"Liquid Oxygen","c":"refined","t":1,"s":100},"liquid-nitrogen":{"n":"Liquid Nitrogen","c":"refined","t":2,"s":50},"hydrogen-gas":{"n":"Hydrogen Gas","c":"refined","t":1,"s":100},"oxygen-gas":{"n":"Oxygen Gas","c":"refined","t":1,"s":100},"nitrogen-gas":{"n":"Nitrogen Gas","c":"refined","t":2,"s":50},"breathable-air":{"n":"Breathable Air","c":"refined","t":2,"s":50},"rocket-fuel":{"n":"Rocket Fuel","c":"refined","t":1,"s":100},"helium-tank":{"n":"Helium Tank","c":"parts","t":3,"s":10},"xenon-tank":{"n":"Xenon Tank","c":"parts","t":3,"s":10},"liquid-helium":{"n":"Liquid Helium","c":"refined","t":3,"s":20},"hydrogen-storage-cell":{"n":"Hydrogen Storage Cell","c":"parts","t":4,"s":5},"silicon-wafer":{"n":"Silicon Wafer","c":"parts","t":1,"s":50},"deuterium":{"n":"Deuterium","c":"refined","t":1,"s":100},"enriched-uranium":{"n":"Enriched Uranium","c":"refined","t":4,"s":10},"uranium-233":{"n":"Uranium-233","c":"refined","t":4,"s":10},"fusion-fuel-pellet":{"n":"Fusion Fuel Pellet","c":"refined","t":4,"s":10},"flare":{"n":"Flare","c":"goods","t":2,"s":20},"igniter":{"n":"Igniter","c":"parts","t":2,"s":20},"lead-acid-battery":{"n":"Lead-Acid Battery","c":"parts","t":2,"s":20},"lithium-battery":{"n":"Lithium Battery","c":"parts","t":3,"s":10},"electric-motor":{"n":"Electric Motor","c":"parts","t":3,"s":10},"xenon-lamp":{"n":"Xenon Lamp","c":"goods","t":3,"s":10},"fuel-cell":{"n":"Fuel Cell","c":"parts","t":4,"s":5},"ion-thruster":{"n":"Ion Thruster","c":"parts","t":3,"s":10},"neutron-detector":{"n":"Neutron Detector","c":"parts","t":4,"s":5},"control-rod":{"n":"Control Rod","c":"parts","t":3,"s":10},"fission-fuel-rod":{"n":"Fission Fuel Rod","c":"parts","t":4,"s":5},"thorium-fuel-rod":{"n":"Thorium Fuel Rod","c":"parts","t":4,"s":5},"fur-2":{"n":"Tier 2 Furnace","c":"buildings","t":2,"s":5},"fur-3":{"n":"Tier 3 Furnace","c":"buildings","t":3,"s":2},"prs-2":{"n":"Tier 2 Press","c":"buildings","t":2,"s":5},"prs-3":{"n":"Tier 3 Press","c":"buildings","t":3,"s":2},"chem-2":{"n":"Tier 2 Chemical Plant","c":"buildings","t":2,"s":5},"chem-3":{"n":"Tier 3 Chemical Plant","c":"buildings","t":3,"s":2},"cryo-2":{"n":"Tier 2 Cryo Plant","c":"buildings","t":2,"s":5},"cryo-3":{"n":"Tier 3 Cryo Plant","c":"buildings","t":3,"s":2},"ref-2":{"n":"Tier 2 Refinery","c":"buildings","t":2,"s":5},"ref-3":{"n":"Tier 3 Refinery","c":"buildings","t":3,"s":2},"asm-2":{"n":"Tier 2 Assembler","c":"buildings","t":2,"s":5},"asm-3":{"n":"Tier 3 Assembler","c":"buildings","t":3,"s":2},"assembler-2":{"n":"Tier 2 Assembly Bay","c":"buildings","t":2,"s":5},"assembler-3":{"n":"Tier 3 Assembly Bay","c":"buildings","t":3,"s":2},"miner-2":{"n":"Tier 2 Miner","c":"buildings","t":2,"s":5},"miner-3":{"n":"Tier 3 Miner","c":"buildings","t":3,"s":2},"fur-1":{"n":"Tier 1 Furnace","c":"buildings","t":1,"s":10},"prs-1":{"n":"Tier 1 Press","c":"buildings","t":1,"s":10},"chem-1":{"n":"Tier 1 Chemical Plant","c":"buildings","t":1,"s":10},"cryo-1":{"n":"Tier 1 Cryo Plant","c":"buildings","t":1,"s":10},"ref-1":{"n":"Tier 1 Refinery","c":"buildings","t":1,"s":10},"asm-1":{"n":"Tier 1 Assembler","c":"buildings","t":1,"s":10},"miner-1":{"n":"Tier 1 Miner","c":"buildings","t":1,"s":10},"station-1":{"n":"Tier 1 Space Station","c":"buildings","t":1,"s":10},"scout-1":{"n":"Tier 1 Scout Ship","c":"ships","t":1,"s":1}},"recipes":{"iron-ingot":{"o":"iron-ingot","m":1,"i":{"iron-ore":2}},"copper-ingot":{"o":"copper-ingot","m":1,"i":{"copper-ore":2}},"nickel-ingot":{"o":"nickel-ingot","m":1,"i":{"nickel-ore":2}},"tin-ingot":{"o":"tin-ingot","m":1,"i":{"tin-ore":2}},"zinc-ingot":{"o":"zinc-ingot","m":1,"i":{"zinc-ore":2}},"lead-ingot":{"o":"lead-ingot","m":1,"i":{"lead-ore":2}},"cobalt-ingot":{"o":"cobalt-ingot","m":1,"i":{"cobalt-ore":2}},"silver-ingot":{"o":"silver-ingot","m":1,"i":{"silver-ore":2}},"gold-ingot":{"o":"gold-ingot","m":1,"i":{"gold":2}},"refined-carbon":{"o":"refined-carbon","m":1,"i":{"carbon":2}},"glass":{"o":"glass","m":1,"i":{"silicon":2}},"solder":{"o":"solder","m":1,"i":{"tin-ingot":2,"copper-ingot":1}},"bronze":{"o":"bronze","m":1,"i":{"copper-ingot":3,"tin-ingot":1}},"brass":{"o":"brass","m":1,"i":{"copper-ingot":2,"zinc-ingot":1}},"lead-shielding":{"o":"lead-shielding","m":1,"i":{"lead-ingot":4}},"steel":{"o":"steel","m":1,"i":{"iron-ingot":2,"refined-carbon":1}},"graphite":{"o":"graphite","m":1,"i":{"refined-carbon":3}},"pure-silicon":{"o":"pure-silicon","m":1,"i":{"silicon":2,"refined-carbon":1}},"borosilicate-glass":{"o":"borosilicate-glass","m":1,"i":{"silicon":2,"boron-powder":1}},"aluminum-ingot":{"o":"aluminum-ingot","m":1,"i":{"aluminum-ore":2}},"magnesium-ingot":{"o":"magnesium-ingot","m":1,"i":{"magnesium-ore":2}},"magnesium-alloy":{"o":"magnesium-alloy","m":1,"i":{"magnesium-ingot":2,"aluminum-ingot":1}},"titanium-ingot":{"o":"titanium-ingot","m":1,"i":{"titanium-ore":2,"magnesium-ingot":1}},"chromium-ingot":{"o":"chromium-ingot","m":1,"i":{"chromium-ore":2,"refined-carbon":1}},"lithium-metal":{"o":"lithium-metal","m":1,"i":{"lithium-ore":2}},"neodymium-metal":{"o":"neodymium-metal","m":1,"i":{"neodymium-ore":2}},"tungsten-powder":{"o":"tungsten-powder","m":1,"i":{"tungsten-ore":2,"hydrogen-gas":2}},"stainless-steel":{"o":"stainless-steel","m":1,"i":{"steel":3,"chromium-ingot":1,"nickel-ingot":1}},"superalloy":{"o":"superalloy","m":1,"i":{"nickel-ingot":3,"cobalt-ingot":1,"chromium-ingot":1}},"titanium-alloy":{"o":"titanium-alloy","m":1,"i":{"titanium-ingot":3,"aluminum-ingot":1}},"tungsten-carbide":{"o":"tungsten-carbide","m":1,"i":{"tungsten-powder":1,"refined-carbon":1}},"engine-nozzle":{"o":"engine-nozzle","m":1,"i":{"tungsten-powder":4}},"neodymium-magnet":{"o":"neodymium-magnet","m":1,"i":{"iron-ingot":2,"neodymium-metal":1,"boron-powder":1}},"platinum-ingot":{"o":"platinum-ingot","m":1,"i":{"platinum":2}},"palladium-ingot":{"o":"palladium-ingot","m":1,"i":{"palladium-ore":2}},"iridium-ingot":{"o":"iridium-ingot","m":1,"i":{"iridium-ore":2}},"iridium-crucible":{"o":"iridium-crucible","m":1,"i":{"iridium-ingot":3}},"iron-plate":{"o":"iron-plate","m":1,"i":{"iron-ingot":2}},"copper-wire":{"o":"copper-wire","m":1,"i":{"copper-ingot":1}},"sulfur-powder":{"o":"sulfur-powder","m":1,"i":{"sulfur":1}},"phosphorus-powder":{"o":"phosphorus-powder","m":1,"i":{"phosphorus-ore":1}},"copper-sheet":{"o":"copper-sheet","m":1,"i":{"copper-ingot":2}},"copper-tubing":{"o":"copper-tubing","m":1,"i":{"copper-ingot":3}},"aluminum-sheet":{"o":"aluminum-sheet","m":1,"i":{"aluminum-ingot":2}},"aluminum-frame":{"o":"aluminum-frame","m":1,"i":{"aluminum-ingot":3}},"titanium-plate":{"o":"titanium-plate","m":1,"i":{"titanium-ingot":2}},"gold-foil":{"o":"gold-foil","m":1,"i":{"gold-ingot":1}},"diamond":{"o":"diamond","m":1,"i":{"graphite":5}},"hydrogen-filter":{"o":"hydrogen-filter","m":1,"i":{"palladium-ingot":2}},"water":{"o":"water","m":1,"i":{"hydrogen-gas":2,"oxygen-gas":1}},"polymer":{"o":"polymer","m":1,"i":{"refined-carbon":1,"hydrogen-gas":2}},"sulfuric-acid":{"o":"sulfuric-acid","m":1,"i":{"sulfur-powder":1,"oxygen-gas":2,"water":1}},"rubber":{"o":"rubber","m":1,"i":{"polymer":2,"sulfur-powder":1}},"silver-paste":{"o":"silver-paste","m":1,"i":{"silver-ingot":1,"polymer":1}},"nickel-plating":{"o":"nickel-plating","m":1,"i":{"steel":1,"nickel-ingot":1,"sulfuric-acid":1}},"chrome-plating":{"o":"chrome-plating","m":1,"i":{"steel":1,"chromium-ingot":1,"sulfuric-acid":1}},"galvanized-steel":{"o":"galvanized-steel","m":1,"i":{"steel":2,"zinc-ingot":1}},"gold-contacts":{"o":"gold-contacts","m":1,"i":{"copper-sheet":1,"gold-ingot":1}},"mirror":{"o":"mirror","m":1,"i":{"glass":1,"silver-ingot":1}},"ammonia":{"o":"ammonia","m":1,"i":{"nitrogen-gas":1,"hydrogen-gas":3}},"fertilizer":{"o":"fertilizer","m":1,"i":{"ammonia":2,"phosphorus-powder":1}},"mining-charge":{"o":"mining-charge","m":1,"i":{"ammonia":2,"sulfur-powder":1,"refined-carbon":1}},"boron-powder":{"o":"boron-powder","m":1,"i":{"boron-ore":2,"sulfuric-acid":1}},"battery-cathode":{"o":"battery-cathode","m":1,"i":{"lithium-metal":1,"cobalt-ingot":1,"oxygen-gas":2}},"catalyst-mesh":{"o":"catalyst-mesh","m":1,"i":{"stainless-steel":1,"platinum-ingot":1}},"uranium-oxide":{"o":"uranium-oxide","m":1,"i":{"uranium-ore":3,"sulfuric-acid":1}},"thorium-oxide":{"o":"thorium-oxide","m":1,"i":{"thorium-ore":3,"sulfuric-acid":1}},"liquid-hydrogen":{"o":"liquid-hydrogen","m":1,"i":{"hydrogen-ice":1}},"liquid-oxygen":{"o":"liquid-oxygen","m":1,"i":{"oxygen-ice":1}},"liquid-nitrogen":{"o":"liquid-nitrogen","m":1,"i":{"nitrogen-ice":1}},"hydrogen-gas":{"o":"hydrogen-gas","m":1,"i":{"liquid-hydrogen":1}},"oxygen-gas":{"o":"oxygen-gas","m":1,"i":{"liquid-oxygen":1}},"nitrogen-gas":{"o":"nitrogen-gas","m":1,"i":{"liquid-nitrogen":1}},"breathable-air":{"o":"breathable-air","m":1,"i":{"oxygen-gas":1,"nitrogen-gas":4}},"rocket-fuel":{"o":"rocket-fuel","m":1,"i":{"liquid-hydrogen":2,"liquid-oxygen":1}},"helium-tank":{"o":"helium-tank","m":1,"i":{"steel":1,"helium-gas":5}},"xenon-tank":{"o":"xenon-tank","m":1,"i":{"titanium-plate":1,"xenon-gas":5}},"liquid-helium":{"o":"liquid-helium","m":1,"i":{"helium-gas":3}},"hydrogen-storage-cell":{"o":"hydrogen-storage-cell","m":1,"i":{"palladium-ingot":1,"hydrogen-gas":4}},"silicon-wafer":{"o":"silicon-wafer","m":1,"i":{"pure-silicon":2}},"deuterium":{"o":"deuterium","m":1,"i":{"hydrogen-gas":10}},"enriched-uranium":{"o":"enriched-uranium","m":1,"i":{"uranium-oxide":5}},"uranium-233":{"o":"uranium-233","m":1,"i":{"thorium-fuel-rod":1}},"fusion-fuel-pellet":{"o":"fusion-fuel-pellet","m":1,"i":{"helium-3":1,"deuterium":1}},"flare":{"o":"flare","m":1,"i":{"magnesium-ingot":1,"iron-plate":1}},"igniter":{"o":"igniter","m":1,"i":{"copper-wire":1,"phosphorus-powder":1}},"lead-acid-battery":{"o":"lead-acid-battery","m":1,"i":{"lead-ingot":2,"sulfuric-acid":1,"polymer":1}},"lithium-battery":{"o":"lithium-battery","m":1,"i":{"battery-cathode":1,"graphite":1,"copper-sheet":1,"aluminum-sheet":1}},"electric-motor":{"o":"electric-motor","m":1,"i":{"neodymium-magnet":2,"copper-wire":4,"steel":2,"iron-plate":1}},"xenon-lamp":{"o":"xenon-lamp","m":1,"i":{"glass":1,"xenon-gas":1,"tungsten-powder":1,"copper-wire":1}},"fuel-cell":{"o":"fuel-cell","m":1,"i":{"catalyst-mesh":1,"polymer":2,"hydrogen-gas":2,"graphite":1}},"ion-thruster":{"o":"ion-thruster","m":1,"i":{"xenon-tank":1,"graphite":2,"copper-wire":4}},"neutron-detector":{"o":"neutron-detector","m":1,"i":{"helium-3":1,"steel":1,"copper-wire":2}},"control-rod":{"o":"control-rod","m":1,"i":{"boron-powder":2,"steel":1}},"fission-fuel-rod":{"o":"fission-fuel-rod","m":1,"i":{"enriched-uranium":2,"steel":1}},"thorium-fuel-rod":{"o":"thorium-fuel-rod","m":1,"i":{"thorium-oxide":2,"enriched-uranium":1,"steel":1}},"fur-2":{"o":"fur-2","m":1,"i":{"iron-plate":40,"copper-ingot":30,"refined-carbon":30,"glass":20,"copper-wire":20}},"fur-3":{"o":"fur-3","m":1,"i":{"titanium-plate":120,"galvanized-steel":100,"chrome-plating":80,"bronze":80,"lead-shielding":60,"nickel-plating":40,"solder":40}},"prs-2":{"o":"prs-2","m":1,"i":{"iron-plate":50,"iron-ingot":30,"copper-wire":25,"refined-carbon":15,"polymer":10}},"prs-3":{"o":"prs-3","m":1,"i":{"titanium-plate":140,"galvanized-steel":100,"magnesium-alloy":80,"brass":60,"rubber":50,"solder":40,"lead-acid-battery":20}},"chem-2":{"o":"chem-2","m":1,"i":{"iron-plate":35,"glass":30,"polymer":20,"copper-wire":20,"water":15,"oxygen-gas":10}},"chem-3":{"o":"chem-3","m":1,"i":{"chrome-plating":100,"nickel-plating":80,"rubber":80,"galvanized-steel":60,"sulfuric-acid":60,"brass":50,"lead-acid-battery":20}},"cryo-2":{"o":"cryo-2","m":1,"i":{"iron-plate":35,"copper-ingot":25,"glass":20,"polymer":15,"liquid-hydrogen":15,"liquid-oxygen":10}},"cryo-3":{"o":"cryo-3","m":1,"i":{"titanium-plate":100,"magnesium-alloy":80,"nickel-plating":80,"rubber":60,"liquid-nitrogen":60,"breathable-air":40,"lead-acid-battery":20}},"ref-2":{"o":"ref-2","m":1,"i":{"iron-plate":40,"glass":25,"copper-wire":25,"refined-carbon":20,"polymer":15,"hydrogen-gas":10}},"ref-3":{"o":"ref-3","m":1,"i":{"lead-shielding":120,"chrome-plating":80,"titanium-plate":80,"nickel-plating":60,"sulfuric-acid":50,"rubber":50,"lead-acid-battery":30}},"asm-2":{"o":"asm-2","m":1,"i":{"iron-plate":50,"copper-wire":40,"iron-ingot":20,"glass":15,"polymer":15}},"asm-3":{"o":"asm-3","m":1,"i":{"titanium-plate":120,"galvanized-steel":80,"magnesium-alloy":60,"solder":60,"brass":50,"rubber":50,"igniter":30,"lead-acid-battery":30}},"assembler-2":{"o":"assembler-2","m":1,"i":{"iron-plate":150,"copper-wire":100,"glass":80,"iron-ingot":80,"polymer":60,"refined-carbon":40}},"assembler-3":{"o":"assembler-3","m":1,"i":{"titanium-plate":400,"galvanized-steel":300,"magnesium-alloy":200,"chrome-plating":200,"bronze":150,"rubber":150,"solder":100,"lead-acid-battery":80}},"miner-2":{"o":"miner-2","m":1,"i":{"iron-plate":40,"copper-wire":25,"iron-ingot":20,"refined-carbon":15,"polymer":10}},"miner-3":{"o":"miner-3","m":1,"i":{"titanium-plate":100,"galvanized-steel":80,"chrome-plating":60,"mining-charge":60,"bronze":40,"rubber":40,"lead-acid-battery":20}},"fur-1":{"o":"fur-1","m":1,"i":{"silicon":10,"iron-ore":5}},"prs-1":{"o":"prs-1","m":1,"i":{"iron-ingot":15,"copper-ingot":5}},"chem-1":{"o":"chem-1","m":1,"i":{"iron-plate":15,"glass":10,"copper-wire":5}},"cryo-1":{"o":"cryo-1","m":1,"i":{"iron-plate":15,"copper-ingot":10,"glass":5}},"ref-1":{"o":"ref-1","m":1,"i":{"iron-plate":15,"glass":10,"copper-wire":10,"refined-carbon":5}},"asm-1":{"o":"asm-1","m":1,"i":{"iron-plate":15,"copper-wire":10}},"miner-1":{"o":"miner-1","m":1,"i":{"iron-ore":10,"copper-ore":5}},"station-1":{"o":"station-1","m":1,"i":{"iron-plate":30,"copper-wire":15,"glass":10}}},"buildings":{"miner-1":{"n":"Miner","k":"miner","s":null},"miner-2":{"n":"Miner","k":"miner","s":null},"miner-3":{"n":"Miner","k":"miner","s":null},"station-1":{"n":"Space Station","k":"station","s":20},"assembler-1":{"n":"Assembly Bay","k":"assembler","s":null},"assembler-2":{"n":"Assembly Bay","k":"assembler","s":null},"assembler-3":{"n":"Assembly Bay","k":"assembler","s":null},"lab-1":{"n":"Science Lab","k":"lab","s":null},"construct-1":{"n":"Building Crafter","k":"construct","s":null},"shipyard-1":{"n":"Ship Bay","k":"shipyard","s":null},"ops-1":{"n":"Operations Room","k":"ops","s":null},"contracts-1":{"n":"Contracts Office","k":"contracts","s":null}},"research":{"assembly-bay":{"i":{"iron-ore":1,"copper-ore":1}},"assembler":{"i":{"iron-ingot":1,"copper-ingot":1}},"floor-20":{"i":{"iron-plate":2,"iron-ingot":2}},"floor-75":{"i":{"titanium-plate":4,"galvanized-steel":4,"magnesium-alloy":2,"rubber":2}},"floor-250":{"i":{"superalloy":5,"tungsten-carbide":5,"neodymium-magnet":4,"borosilicate-glass":5,"lithium-battery":3,"gold-contacts":3}},"station-slots":{"i":{"iron-plate":2,"copper-wire":2,"glass":1}},"ship-bay":{"i":{"iron-plate":2,"copper-wire":1,"glass":1}},"tier-2-buildings":{"i":{}},"tier-3-buildings":{"i":{}},"auto-requests":{"i":{}}},"constructs":{"miner-1":{"i":{"iron-ore":10,"copper-ore":5}},"miner-2":{"i":{"iron-plate":40,"copper-wire":25,"iron-ingot":20,"refined-carbon":15,"polymer":10}},"miner-3":{"i":{"titanium-plate":100,"galvanized-steel":80,"chrome-plating":60,"mining-charge":60,"bronze":40,"rubber":40,"lead-acid-battery":20}},"station-1":{"i":{"iron-plate":30,"copper-wire":15,"glass":10}},"assembler-2":{"i":{"iron-plate":150,"copper-wire":100,"glass":80,"iron-ingot":80,"polymer":60,"refined-carbon":40}},"assembler-3":{"i":{"titanium-plate":400,"galvanized-steel":300,"magnesium-alloy":200,"chrome-plating":200,"bronze":150,"rubber":150,"solder":100,"lead-acid-battery":80}},"fur-1":{"i":{"silicon":10,"iron-ore":5}},"fur-2":{"i":{"iron-plate":40,"copper-ingot":30,"refined-carbon":30,"glass":20,"copper-wire":20}},"fur-3":{"i":{"titanium-plate":120,"galvanized-steel":100,"chrome-plating":80,"bronze":80,"lead-shielding":60,"nickel-plating":40,"solder":40}},"prs-1":{"i":{"iron-ingot":15,"copper-ingot":5}},"prs-2":{"i":{"iron-plate":50,"iron-ingot":30,"copper-wire":25,"refined-carbon":15,"polymer":10}},"prs-3":{"i":{"titanium-plate":140,"galvanized-steel":100,"magnesium-alloy":80,"brass":60,"rubber":50,"solder":40,"lead-acid-battery":20}},"chem-1":{"i":{"iron-plate":15,"glass":10,"copper-wire":5}},"chem-2":{"i":{"iron-plate":35,"glass":30,"polymer":20,"copper-wire":20,"water":15,"oxygen-gas":10}},"chem-3":{"i":{"chrome-plating":100,"nickel-plating":80,"rubber":80,"galvanized-steel":60,"sulfuric-acid":60,"brass":50,"lead-acid-battery":20}},"cryo-1":{"i":{"iron-plate":15,"copper-ingot":10,"glass":5}},"cryo-2":{"i":{"iron-plate":35,"copper-ingot":25,"glass":20,"polymer":15,"liquid-hydrogen":15,"liquid-oxygen":10}},"cryo-3":{"i":{"titanium-plate":100,"magnesium-alloy":80,"nickel-plating":80,"rubber":60,"liquid-nitrogen":60,"breathable-air":40,"lead-acid-battery":20}},"ref-1":{"i":{"iron-plate":15,"glass":10,"copper-wire":10,"refined-carbon":5}},"ref-2":{"i":{"iron-plate":40,"glass":25,"copper-wire":25,"refined-carbon":20,"polymer":15,"hydrogen-gas":10}},"ref-3":{"i":{"lead-shielding":120,"chrome-plating":80,"titanium-plate":80,"nickel-plating":60,"sulfuric-acid":50,"rubber":50,"lead-acid-battery":30}},"asm-1":{"i":{"iron-plate":15,"copper-wire":10}},"asm-2":{"i":{"iron-plate":50,"copper-wire":40,"iron-ingot":20,"glass":15,"polymer":15}},"asm-3":{"i":{"titanium-plate":120,"galvanized-steel":80,"magnesium-alloy":60,"solder":60,"brass":50,"rubber":50,"igniter":30,"lead-acid-battery":30}}}};
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
  function gameCamera(){
    const game=getGame();
    if(!game?.starmap||typeof game.starmap.goTo!=='function'||typeof game.starmap.view!=='function'||typeof game.setMapOpen!=='function')throw Error('Rozhraní kamery není dostupné; otevři mapu ve hře.');
    if(game.stationView?.isOpen)throw Error('Nejprve opusť vnitřek stanice a otevři mapu.');
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
    const game=gameCamera();
    if(typeof game.sysview?.frameOf!=='function'||typeof game.sysview?.focusOn!=='function'||typeof game.starmap.select!=='function')throw Error('Rozhraní zobrazení systému není dostupné.');
    const target=validateCamera(game.sysview.frameOf(system));rememberCamera(game);
    game.setMapOpen(true);game.starmap.select(system);game.sysview.focusOn(system);game.starmap.goTo(target.x,target.y,target.scale);
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
  return {state,inspect,currentSystemId,cameraToSystem,cameraToPlanet,returnCamera,setXray,paintXray,dispose,
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
    const candidates=desiredProject?frontier(desiredProject):projects.filter(p=>!rules.isDone(here,p.id)&&rules.isOpen(here,p));
    selected=[...candidates].sort((a,b)=>{
      const score=p=>(priority.length-(priority.indexOf(p.id)<0?priority.length:priority.indexOf(p.id)))*10+
        ((research.queue||[]).includes(p.id)?15:0)+(active.some(l=>(l.working??l.research)===p.id&&(rules.isGlobal(p)||String(l.station)===String(view.station.id)))?30:0);
      return score(b)-score(a)||a.id.localeCompare(b.id);
    })[0]||null;
    if(selected){
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
    rawRows.some(r=>r.inSystem===false)?'Materiálový plán potřebuje suroviny, které tento systém podle generátoru neobsahuje.':'Další stanice má doplňovat konkrétní chybějící zdroj nebo výrobní kapacitu.',
    'Hledej kombinaci potřebných surovin poblíž svých stanic. Před stavbou ověř obsazení, vyčerpání, vzdálenost a dostupné místo. Poradce zatím nevybírá galaxii ani nepotvrzuje volné planety.');
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
  const reserve=has(rule.reserves,'stations')?rule.reserves.stations:has(rule,'reserve')?rule.reserve:has(rule.keeps,'stations')?rule.keeps.stations:rule.keep;
  if(typeof reserve!=='number'||!Number.isFinite(reserve)||reserve<0||rule.excess===true)return {units:0,reason:'Exportní rezerva není jednoznačně známá'};
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
  const STORE = 'aos-toolkit.v0.2';
  const old = (() => { try { return JSON.parse(localStorage.getItem('aos-toolkit.v0.1') || '{}') } catch { return {} } })();
  const saved = (() => { try { return JSON.parse(localStorage.getItem(STORE) || '{}') } catch { return {} } })();
  const SETTINGS = { importStacks: 5, exportStacks: 10, priority: 50, includeCraftedExports: true, enableWrites: false };
  const settings = { ...SETTINGS, ...saved?.settings, enableWrites: false };
  // v0.1 settings are intentionally not migrated: their meanings changed.
  const state = {
    opened:false, tab:'summary', loaded:false, stations:[], stationId:'', view:null, meta:null,
    depositStatus:'unloaded', planets:[], depositNames:[], forecast:[], plan:[],
    error:'', notice:'Připraveno', processing:false, selected:new Set(), host:null, root:null, position:saved?.position||old?.position, windowSize:saved?.windowSize||null,
    audit:[], serverLog:[], querySerial:0, compact:false, writing:false
  };
  const debugTools=createDebugTools({catalog:GAME,api,getGame:()=>window.spacefactory,doc:document,onChange:()=>render(),
    loadWorld:async()=>{const [map,world,deposits]=await Promise.all([import('/src/world/mapgen.js'),import('/src/world/systemgen.js'),import('/src/deposits.js')]);return {map,world,deposits}}});
  const accountOverview=createAccountOverview({api,productionFlows,loadResearchRules:()=>import('/src/research.js'),onChange:()=>render()});
  const progressAdvisor=createProgressAdvisor({catalog:GAME,api,productionFlows,loadAccount:options=>accountOverview.refresh(options),onChange:()=>render(),
    loadRules:async()=>{const [research,production,buildings]=await Promise.all([import('/src/research.js'),import('/src/production.js'),import('/src/buildings.js')]);
      return {...research,RECIPES:production.RECIPES,buildingById:buildings.buildingById}}});
  const fmt = x => Number.isFinite(Number(x)) ? Number(x).toLocaleString('cs-CZ',{maximumFractionDigits:2}) : '–';
  const num = (x, alt=0) => Number.isFinite(Number(x)) ? Number(x) : alt;
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const item = id => GAME.items[id]?.n || id;
  const stack = id => GAME.items[id]?.s || null;
  const places = value => [value].flat().filter(Boolean);
  const maxStack = (view,id) => Math.round(num(GAME.buildings[view?.station?.building]?.s,20) * (stack(id)||0));
  const save = () => { try { localStorage.setItem(STORE,JSON.stringify({settings:{...settings,enableWrites:false},position:state.position,windowSize:state.windowSize})) } catch {} };
  const makeId = (kind,resource) => `${kind}:${resource}`;
  const checked = id => state.selected.has(id);
  const defaultChange = (have,goal) => have===null?'create':have===goal?'same':have<goal?'increase':'decrease';
  const backup = () => ({version:'0.5.0',at:new Date().toISOString(),station:state.stationId,
    groups:state.view?.groups||[],requests:state.view?.requests||[],exports:state.view?.exports||[]});
  function download(json,name){const blob=new Blob([JSON.stringify(json,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),6000)}
  async function api(path,body=undefined){
    if(!/^\/api\/[a-z0-9/_.?=&%:-]+$/i.test(path) || path.split('?')[0].split('/').some(part=>part==='.'||part==='..'))throw new Error('Neplatná cesta API');
    const c = new AbortController(), t = setTimeout(()=>c.abort(),15000);
    try {
      const response=await fetch(path,{method:body===undefined?'GET':'POST',credentials:'same-origin',cache:'no-store',
        headers:body===undefined?{'Accept':'application/json'}:{'Accept':'application/json','Content-Type':'application/json'},
        ...(body===undefined?{}:{body:JSON.stringify(body)}),signal:c.signal});
      const json=await response.json().catch(()=>null);
      if(!response.ok)throw new Error(String(json?.error||`HTTP ${response.status} ${path}`));
      if(!json||typeof json!=='object'||Array.isArray(json))throw new Error('Server neposlal JSON objekt');
      if(json.error || json.success===false || json.ok===false)throw new Error('Server odmítl požadavek');
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
      const [map,world]=await Promise.all([import('/src/world/mapgen.js'),import('/src/world/systemgen.js')]);
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
    state.plan=proposal.sort((a,b)=>a.kind.localeCompare(b.kind)||item(a.resource).localeCompare(item(b.resource)));
    state.selected=new Set(state.plan.filter(p=>p.modified).map(p=>p.id));
    if(state.depositStatus!=='ok')state.selected.clear();
  }
  function selectedChanges(){return state.plan.filter(p=>p.modified&&checked(p.id))}
  function payload(p){
    if(!Number.isSafeInteger(p.target)||p.target<=0)throw Error('Neplatné množství pravidla');
    const v=state.view;
    const group=p.existing?.group??v.groups?.find(g=>g.kind===p.kind)?.id;
    if(!group)throw Error('Pro '+p.kind+' chybí skupina; vytvoř ji nejprve ve hře.');
    const basic={station:state.stationId,kind:p.kind,id:p.existing?.id,resource:p.resource,group};
    if(p.kind==='request')return {...basic,amount:p.target,from:['miners','stations'],priority:Number.isFinite(Number(p.existing?.priority))?Number(p.existing.priority):settings.priority};
    return {...basic,keep:p.target,keeps:{stations:p.target},to:['stations'],excess:false};
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
    return JSON.stringify(canonical({station:v.station?.id,groups,requests:rules(v.requests),exports:rules(v.exports)}));
  }

  function verifyRule(v,body){
    const rules=body.kind==='request'?v.requests:v.exports;
    const r=rules.find(r=>r.resource===body.resource && String(r.group)===String(body.group) && (body.id===undefined || String(r.id)===String(body.id)));
    const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
    if(!r)return false;
    if(body.kind==='request')return Number(r.amount)===body.amount && equal(r.from,body.from) && Number(r.priority)===body.priority;
    return Number(r.keeps?.stations??r.keep)===body.keep && equal(places(r.to),body.to) && r.excess===false;
  }
  async function applySelected(){
    if(state.processing || state.writing || accountOverview.state.busy || progressAdvisor.state.busy)return;
    const changes=selectedChanges();if(!changes.length)return;
    if(!settings.enableWrites){state.error='Nejdřív zapni možnost Zápis do hry.';render();return}
    if(state.depositStatus!=='ok'){state.error='Generátor systému není ověřen. Zápis je zablokovaný.';render();return}
    if(changes.length>120){state.error='Příliš mnoho změn v jedné dávce';render();return}
    let bodies;
    try{validateView(state.view,state.stationId);bodies=changes.map(payload)}catch(e){state.error=e.message;render();return}
    const stationId=state.stationId,signature=configSignature(state.view);
    const stationName=state.stations.find(x=>String(x.id)===stationId)?.systemName || 'vybraná stanice';
    const warning=changes.some(p=>p.kind==='export'&&p.risk.length)?'\nPOZOR: cíl importu 5 stacků je menší než exportní rezerva 10 stacků. Export může zůstat neaktivní.':'';
    if(!confirm(`AOS Toolkit: ${changes.length} změn logistiky na ${stationName}.\n\nZáloha se stáhne jako JSON. Jde o SKUTEČNÉ změny na serveru.${warning}\n\nPokračovat?`))return;
    if(prompt('Pro potvrzení napiš přesně PROVEST:')!=='PROVEST'){state.notice='Zrušeno';render();return}
    state.processing=true;state.writing=true;accountOverview.invalidate();progressAdvisor.invalidate();state.error='';state.serverLog=[];state.notice='Kontroluji aktuální konfiguraci…';render();
    try{
      const fresh=await api('/api/stations/view?id='+encodeURIComponent(stationId));validateView(fresh,stationId);
      if(configSignature(fresh)!==signature)throw Error('Konfigurace se od náhledu změnila. Obnov detail a zkontroluj nový návrh');
      state.view=fresh;
      download(backup(),'aos-toolkit-backup-'+new Date().toISOString().slice(0,10)+'.json');
      for(const [idx,body] of bodies.entries()){
        if(state.stationId!==stationId)throw Error('Změna stanice během operace');
        await api('/api/logistics/rule',body);
        const savedView=await api('/api/stations/view?id='+encodeURIComponent(stationId));validateView(savedView,stationId);
        if(!verifyRule(savedView,body))throw Error('Server nepotvrdil uložené hodnoty pravidla '+body.resource);
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
    return {toolkit:'0.5.0',at:new Date().toISOString(),reference:GAME.version,
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
    return `${wrap(`<b>Návrh podle stacků</b><p>Import <strong>5 stacků</strong> (25 % kapacity 20stackové stanice), exportní rezerva <strong>10 stacků</strong> (50 %). Každý item má vlastní velikost stacku.</p>
      <label class="tick"><input type="checkbox" id="crafted" ${settings.includeCraftedExports?'checked':''}> Navrhnout export i pro již exportované / vyráběné produkty</label>
      <button data-act="recalc">Přepočítat</button><button data-act="selectAll">Vybrat změny</button><button data-act="selectNone">Odznačit</button>
      <p>${changed} změn; vybráno ${selectedChanges().length}. Ostatní importy vyráběných položek se automaticky nemažou.</p>`)}
      ${wrap(`<b>Importy</b>${state.plan.filter(p=>p.kind==='request').map(planRow).join('')||'<p>Žádná ložiska – ověř generátor.</p>'}`)}
      ${wrap(`<b>Exporty</b>${state.plan.filter(p=>p.kind==='export').map(planRow).join('')||'<p>Žádné položky.</p>'}`)}
      ${wrap(`<b>Uložit / testovat</b><p>Nejdřív zálohuj současná pravidla a ověř náhled. Serverové změny nejsou automaticky vratné. Zápisy jsou výchozí vypnuté.</p>
       <label class="tick"><input type="checkbox" id="enableWrites" ${settings.enableWrites?'checked':''}> Povolit skutečný zápis vybraných pravidel na server</label>
       <button data-act="exportPlan">Export návrhu</button><button data-act="backup">Stáhnout zálohu</button>
       <button class="dangerbtn" data-act="apply" ${disabled||!settings.enableWrites?'disabled':''}>Použít vybraná pravidla (${selectedChanges().length})</button>
       <p class="warning">Upozornění: Pokud mineři plní import jen na 5 stacků, nemusí nikdy překročit exportní rezervu 10 stacků. Toolkit zobrazí upozornění i před potvrzením zápisu.</p>`)}`;
  }
  function planRow(p){
    return `<label class="plan ${p.modified?'':'same'}"><input type="checkbox" data-plan="${esc(p.id)}" ${checked(p.id)?'checked':''} ${!p.modified?'disabled':''}><span class="info"><strong>${esc(item(p.resource))}</strong> · ${esc(p.change)}<small>Současné směry: ${esc(places(p.kind==='request'?p.existing?.from:p.existing?.to).join(' → ')||'žádné')}</small><small>${p.current===null?'chybí':fmt(p.current)} → <b>${fmt(p.target)}</b> ks (${p.target/stack(p.resource)} stacků)</small><small>${esc(p.kind==='request'?'mineři → stanice':'pouze ostatní stanice')} · ${esc(p.reason)}</small>${p.risk.length?`<small class="caution">${esc(p.risk[0])}</small>`:''}</span></label>`;
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
      <button data-advisor="refresh" ${disabled||!state.stationId?'disabled':''}>${d.busy?'Načítám…':'Vyhodnotit další kroky'}</button><button data-advisor="export" ${s?'':'disabled'}>Export plánu</button>
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
    if(name==='export'){if(progressAdvisor.state.snapshot)download(progressAdvisor.state.snapshot,'aos-toolkit-progression-plan.json');return}
    if(name==='refresh'&&!state.processing)await progressAdvisor.refresh(state.stationId,{system:state.view?.station?.system,resources:state.depositNames,verified:state.depositStatus==='ok'});
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
  function diagnostics(){
    return `${wrap(`<b>Diagnostika a verze</b><p>Toolkit 0.5.0 · herní data ${esc(GAME.version)}. Žádné odesílání mimo alloutofspace.com.</p>
      <p>Stanice: ${state.stations.length}. Generátor: ${esc(state.depositStatus)}. Ložiska: ${state.depositNames.length}. Plán: ${state.plan.length} položek.</p>
      <button data-act="diag">Exportovat anonymizovanou diagnostiku</button><button data-act="backup">Záloha logistických pravidel</button>`)}
      ${state.serverLog.length?wrap(`<b>Zápisní protokol</b><pre>${esc(JSON.stringify(state.serverLog,null,2))}</pre>`):''}`;
  }
  function render(){
    if(!state.root)return;
    const fab=state.root.getElementById('fab'),panel=state.root.getElementById('panel');fab.hidden=state.opened;panel.hidden=!state.opened;
    if(!state.opened)return;
    const tabs=[['summary','Přehled'],['resources','Logistika'],['galaxy','Galaxie'],['production','Výroba'],['proposals','Návrhy'],['account','Účet'],['advisor','Poradce'],['debug','Debug'],['diag','Diagnostika']];
    panel.innerHTML=`<header id="drag"><div><b>AOS Toolkit</b><small>v0.5.0 · ${settings.enableWrites?'zápisy POVOLENY':'režim čtení'}</small></div><button data-act="hide" title="Zavřít" aria-label="Zavřít AOS Toolkit">×</button></header>
     <nav><select id="station" aria-label="Stanice" ${state.processing?'disabled':''}><option value="">Vyber stanici</option>${state.stations.map((s,i)=>`<option value="${esc(s.id)}" ${state.stationId===String(s.id)?'selected':''}>${esc(s.systemName||s.name||s.system||'Stanice '+(i+1))}</option>`).join('')}</select>
      <button data-act="refresh" ${state.processing||accountOverview.state.busy||progressAdvisor.state.busy?'disabled':''}>${state.processing?'Načítám…':'Načíst / obnovit'}</button></nav>
     <div class="status">${state.error?`<span class="err">${esc(state.error)}</span>`:esc(state.notice)}</div>
     <div class="tabs">${tabs.map(([id,label])=>`<button data-tab="${id}" ${state.tab===id?'class="active"':''}>${label}</button>`).join('')}</div>
     <main>${({summary,resources,galaxy,production,proposals,account:accountMenu,advisor:advisorMenu,debug:debugMenu,diag:diagnostics}[state.tab]||summary)()}</main>
     <footer>All Out of Space · ${state.processing?'Probíhá operace':'Připraveno'} <button data-act="exportPlan">Export návrhů</button></footer>`;
    panel.querySelector('#station').addEventListener('change',e=>{if(state.processing)return;state.stationId=e.target.value;state.view=null;state.plan=[];state.selected.clear();loadView()});
    panel.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{state.tab=b.dataset.tab;render()}));
    panel.querySelectorAll('[data-act]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.act)));
    panel.querySelectorAll('[data-plan]').forEach(b=>b.addEventListener('change',()=>{if(state.processing)return;b.checked?state.selected.add(b.dataset.plan):state.selected.delete(b.dataset.plan);render()}));
    panel.querySelector('#crafted')?.addEventListener('change',e=>{if(state.processing)return;settings.includeCraftedExports=e.target.checked;save();createPlan();render()});
    panel.querySelector('#enableWrites')?.addEventListener('change',e=>{if(state.processing)return;settings.enableWrites=e.target.checked;save();render()});
    panel.querySelector('#debug-system')?.addEventListener('input',e=>{debugTools.state.input=e.target.value});
    panel.querySelector('#debug-planet')?.addEventListener('change',e=>{debugTools.state.letter=e.target.value;render()});
    panel.querySelectorAll('[data-debug]').forEach(b=>b.addEventListener('click',()=>debugAction(b.dataset.debug)));
    for(const [id,key] of [['advisor-goal','goal'],['advisor-item','itemId']]){
      panel.querySelector('#'+id)?.addEventListener('change',e=>{progressAdvisor.state[key]=e.target.value;progressAdvisor.invalidate()});
    }
    for(const [id,key] of [['advisor-quantity','quantity'],['advisor-project','projectId']]){
      panel.querySelector('#'+id)?.addEventListener('input',e=>{
        progressAdvisor.state[key]=e.target.value;progressAdvisor.invalidate(false);
        panel.querySelector('#advisor-results')?.setAttribute('hidden','');
        const status=panel.querySelector('#advisor-status');if(status)status.textContent='Cíl změněn; znovu vyhodnoť další kroky.';
        const exportButton=panel.querySelector('[data-advisor="export"]');if(exportButton)exportButton.disabled=true;
      });
    }
    panel.querySelectorAll('[data-advisor]').forEach(b=>b.addEventListener('click',()=>advisorAction(b.dataset.advisor)));
    panel.querySelector('#advisor-account')?.addEventListener('change',e=>{progressAdvisor.state.includeAccount=e.target.checked;progressAdvisor.invalidate()});
    panel.querySelectorAll('[data-account]').forEach(b=>b.addEventListener('click',()=>accountAction(b.dataset.account)));
    panel.querySelectorAll('[data-account-open]').forEach(b=>b.addEventListener('click',()=>{
      if(state.processing||accountOverview.state.busy||progressAdvisor.state.busy)return;
      state.stationId=b.dataset.accountOpen;state.view=null;state.plan=[];state.selected.clear();state.tab='summary';loadView();
    }));
    panel.querySelector('#account-filter')?.addEventListener('input',e=>{
      accountOverview.state.query=e.target.value;const query=e.target.value.toLocaleLowerCase('cs-CZ');
      panel.querySelectorAll('[data-account-resource]').forEach(row=>{row.hidden=!row.dataset.accountResource.includes(query)});
    });
    panel.querySelector('#drag')?.addEventListener('pointerdown',drag);
  }
  async function action(name){
    if(state.processing && !['hide','exportPlan','diag'].includes(name))return;
    if(name==='hide'){state.opened=false;render();return}
    if(name==='refresh'){await loadStations();return}
    if(name==='recalc'){createPlan();render();return}
    if(name==='selectAll'){state.selected=new Set(state.plan.filter(p=>p.modified).map(p=>p.id));render();return}
    if(name==='selectNone'){state.selected.clear();render();return}
    if(name==='exportPlan'){download({version:'0.5.0',at:new Date().toISOString(),settings:{importStacks:5,exportStacks:10},
      selected:state.plan.filter(p=>checked(p.id)).map(p=>({kind:p.kind,item:p.resource,target:p.target,current:p.current,sources:p.source,risk:p.risk}))},'aos-toolkit-plan.json');return}
    if(name==='backup'){download(backup(),'aos-toolkit-logistics-backup.json');return}
    if(name==='diag'){download(diagnostic(),'aos-toolkit-diagnostika-v0.2.json');return}
    if(name==='apply'){await applySelected();return}
  }
  function drag(e){
    if(e.button!==0||e.target.closest('button'))return;
    const panel=state.root.getElementById('panel');const rect=panel.getBoundingClientRect(),p={x:e.clientX,y:e.clientY,left:rect.left,top:rect.top};
    panel.setPointerCapture?.(e.pointerId);
    const move=x=>{const left=Math.max(0,Math.min(innerWidth-100,p.left+x.clientX-p.x));const top=Math.max(0,Math.min(innerHeight-75,p.top+x.clientY-p.y));panel.style.left=left+'px';panel.style.top=top+'px';panel.style.right='auto';state.position={left,top}};
    const stop=()=>{panel.removeEventListener('pointermove',move);panel.removeEventListener('pointerup',stop);panel.removeEventListener('pointercancel',stop);save()};
    panel.addEventListener('pointermove',move);panel.addEventListener('pointerup',stop);panel.addEventListener('pointercancel',stop);
  }
  function mount(){
    if(!document.body)return;
    const host=document.createElement('div');host.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:2147483646';
    const root=host.attachShadow({mode:'open'});state.root=root;
    const style=document.createElement('style');style.textContent=`
      *{box-sizing:border-box}button,input,select{font:inherit}button{cursor:pointer}button:disabled{opacity:.5;cursor:not-allowed}
      [hidden]{display:none!important}#fab{pointer-events:auto;position:fixed;right:18px;bottom:22px;background:#163a49;border:1px solid #38a0b0;color:#e8fcff;font-weight:bold;border-radius:15px;width:57px;height:57px;box-shadow:0 8px 28px #0008}
      #panel{pointer-events:auto;position:fixed;right:16px;top:55px;width:min(650px,calc(100vw - 18px));min-width:min(320px,calc(100vw - 16px));max-width:calc(100vw - 16px);min-height:min(350px,calc(100vh - 75px));max-height:calc(100vh - 75px);resize:both;display:flex;flex-direction:column;background:#101d27;color:#e6f3fa;border:1px solid #446474;border-radius:12px;box-shadow:0 15px 45px #000b;font:12px/1.45 system-ui,Arial,sans-serif;overflow:hidden}
      header{padding:12px 14px;background:#1a3544;display:flex;align-items:center;justify-content:space-between;cursor:move;touch-action:none;user-select:none}header div{display:grid}header b{font-size:15px}header small{font-size:11px;color:#afc6d1}header button{background:#273d49;color:#fff;border:1px solid #56717b;border-radius:6px;font-size:20px;width:30px;height:30px}
      #panel header button[data-act="hide"]{display:grid;place-items:center;padding:0;font:24px/1 Arial,sans-serif;flex-shrink:0}
      nav{display:flex;gap:7px;padding:10px 12px}nav select{flex:1;min-width:0;background:#182e3b;border:1px solid #587080;border-radius:6px;color:#fff;padding:7px}button[data-act],button[data-debug],button[data-advisor],button[data-account],button[data-account-open]{background:#21586a;color:#e4faff;border:1px solid #3b91a0;padding:6px 9px;border-radius:6px}button[data-act]:hover,button[data-debug]:hover,button[data-advisor]:hover,button[data-account]:hover,button[data-account-open]:hover{filter:brightness(1.15)}
      .status{padding:7px 12px;background:#203745;color:#b5dae5;font-size:11px}.err{color:#ffb4a8}.tabs{display:flex;flex-wrap:wrap;border-bottom:1px solid #395666;padding:3px 8px}.tabs button{background:transparent;border:0;border-bottom:2px solid transparent;color:#b5c8d5;padding:7px 9px}.tabs button.active{color:#fff;border-color:#61c2d7}
      main{flex:1;overflow:auto;min-height:120px;padding:11px;overscroll-behavior:contain}.sect{border-bottom:1px solid #294250;padding:6px 0 12px;margin-bottom:8px}.sect>b{display:block;font-size:13px}.sect p{color:#b6cad5;margin:7px 0}.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}.metric{background:#1b3340;border:1px solid #365666;padding:9px 5px;border-radius:6px;text-align:center}.metric strong{display:block;font-size:21px}.metric small{font-size:10px;color:#b8d3d7}
      .table{overflow:auto;margin:8px 0}.table table{border-collapse:collapse;min-width:440px;width:100%;font-size:11px}.table th,.table td{padding:7px;text-align:left;border-bottom:1px solid #34505c;vertical-align:top}.table th{background:#1e3543;color:#b5e6ed}
      .plan{display:flex;align-items:flex-start;gap:9px;padding:8px 6px;border:1px solid #314f5f;border-radius:7px;margin-top:5px}.plan.same{opacity:.55}.plan input{margin-top:3px}.info{flex:1}.info strong{color:#e7f9ff}.info small{display:block;color:#a9c7d2}.info b{color:#fff}.caution{color:#ffcc7b!important}.tick{display:flex;gap:8px;align-items:center;margin:8px 0}.warning{padding:9px;background:#4b3b20;border-radius:7px;color:#ffde9b}.dangerbtn{background:#762b30!important;border-color:#c85656!important}pre{overflow:auto;background:#162f3b;padding:9px}footer{display:flex;justify-content:space-between;align-items:center;font-size:10px;padding:8px 12px;background:#1a303e;color:#b4c8d3}
      #debug-system,#debug-planet,[id^="advisor-"],#account-filter{background:#182e3b;color:#fff;border:1px solid #587080;border-radius:6px;padding:6px;margin:6px 0;max-width:100%}#debug-system{width:100%}
      @media(max-width:670px){#panel{top:8px;left:8px!important;right:auto!important;width:calc(100vw - 16px);max-height:calc(100vh - 16px)}.metrics{grid-template-columns:repeat(2,1fr)}}`;
    const fab=document.createElement('button');fab.id='fab';fab.textContent='AOS';fab.title='AOS Toolkit';fab.addEventListener('click',()=>{state.opened=true;render();if(!state.loaded)loadStations()});
    const panel=document.createElement('section');panel.id='panel';panel.hidden=true;
    if(state.position){panel.style.left=state.position.left+'px';panel.style.top=state.position.top+'px';panel.style.right='auto'}
    if(state.windowSize){
      const {width,height}=state.windowSize;
      if(Number.isFinite(width)&&Number.isFinite(height)&&width>0&&height>0){
        panel.style.width=Math.min(Math.max(320,width),Math.max(1,innerWidth-16))+'px';
        panel.style.height=Math.min(Math.max(350,height),Math.max(1,innerHeight-75))+'px';
      }
    }
    root.append(style,fab,panel);document.body.append(host);state.host=host;render();
    if(typeof ResizeObserver==='function'){
      let resizeSave;
      new ResizeObserver(()=>{
        // Native resize sets inline dimensions; content-driven automatic sizes stay automatic.
        if(!panel.style.width||!panel.style.height)return;
        const rect=panel.getBoundingClientRect();if(!(rect.width>0&&rect.height>0))return;
        state.windowSize={width:Math.round(rect.width),height:Math.round(rect.height)};
        clearTimeout(resizeSave);resizeSave=setTimeout(save,250);
      }).observe(panel);
    }
  }
  document.addEventListener('spacefactory:auth',e=>{
    if(e.detail?.profile)return;
    accountOverview.invalidate();progressAdvisor.invalidate();state.querySerial++;state.stations=[];state.stationId='';state.view=null;state.plan=[];state.selected.clear();state.loaded=false;state.processing=state.writing;render();
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
