import{c0 as m,bo as s,bn as o,bq as l,bJ as p,c8 as f,bI as g,bH as b,c9 as y,bG as v,by as h,bD as S,bC as A}from"./links-Bw5ieAmi.js";import"./index-DzrzBcHC.js";import"./index-DWEzyWMK.js";import"./creatureData-fjGRP5XL.js";import"./startup-CT9slBv3.js";import"./gallery-vsDOoz5M.js";import"./Explanation.vue_vue_type_script_setup_true_lang-BuxkjOdm.js";import"./mineralDatalists-D0bIAFGk.js";const E={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function I(t){const n=t.parentElement,e=document.querySelectorAll("[data-moon]"),o=f(Array.from(e),"dataset.moon"),a="moon_input"+o,l=g(`<div class="table-cell text removable" data-moon="section${o}">\n\t\t<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>\n\t\t<label for="${a}">Moon name:</label>\n\t</div>\n\t<div class="table-cell data" data-moon="section${o}">\n\t\t<input type="text" id="${a}" data-evt-id="moonInput">\n\t</div>`,{},[{element:"moonInput",handler:"input",func:()=>i()},{element:"removeButton",handler:"click",func:()=>{y("section"+o,"moon"),x()}}]);b(l,n,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function x(){s.input.moonInputs.querySelector("button").disabled=!1,i()}function i(){const t=document.querySelectorAll("[data-moon] input"),n=[];for(const e of Array.from(t))e.value&&n.push(`[[${m(e.value)}]]`);s.output.moonList.innerText=n.join(", "),o.moons=n,L()}function C(t,n=""){const e=1===t?"is":"are";if(!n)return e;l(e,n)}function L(){const t=(()=>{const t=o.moons;if(!t||0===t.length)return"This planet has no moons.";{const n=t.length;return`This planet's [[moon]]${n>1?"s":""} ${C(n)} ${t.join(" and ")}.`}})();l(t,"moonSentence")}function M(){const t=["","Landscape","Night View","Cave System","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"],n=["Coast Area","Underwater"];if("Pangean"!==o.terrain){const e=t.indexOf("Analysis Visor");t.splice(e,0,...n)}o.galleryArray=t}function c(){const t=o.terrain;"string"==typeof t&&l("Pangean"!==t?"Yes":"No","water")}function P(){i();const t=s.input.terrainInput;t instanceof HTMLSelectElement&&p(t,"change")}const w=[{element:"addMoonButton",handler:"click",func:function(){I(this)}},{element:"terrainInput",func:()=>c()}];A.generateGalleryArray=()=>M(),document.addEventListener("pageReset",(()=>P())),v(E),h(w),i(),c(),S("galleryExplanationExternal","\nThere is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Landscape</li>\n\t\t\t<li>Night View</li>\n\t\t\t<li>Cave System</li>\n\t\t\t<li>Coast Area</li>\n\t\t\t<li>Underwater</li>\n\t\t\t<li>Analysis Visor</li>\n\t\t\t<li>Planet Exploration Guide</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>");
