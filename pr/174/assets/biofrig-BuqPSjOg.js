import{bn as e,bo as o,bz as b,bA as d,bB as I,bq as y,bx as h,by as C,bC as l,bD as s}from"./links-B5GUw5jg.js";import{a as E,b as x,c as $,d as v}from"./startup-DUojTJzE.js";import"./gallery-jw24F08C.js";import"./runtime-dom.esm-bundler-DlIeXlWY.js";import"./Explanation.vue_vue_type_script_setup_true_lang-BZuTRe0M.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function u(){const t=e.region;o.output.regNr.innerText=b(t)}function m(){const e=d();o.output.addInfo.innerText=`${e}`}function T(){const t=e.system;e.catalogue=`Category: ${t}`}function c(){const t=e.name,n=e.tentacles,r=e.mainColour,a=e.secColour,i=o.input.appearanceInput;if(!(r.trim()||a.trim()||n.trim()))return;const l=`${t} is ${r.trim()?`${I(r)} ${r.trim()}`:""} organic frigate${a.trim()?` with ${a} accents`:""} with ${n}.`;i.value=l,y(i)}function w(){return`{{Class|${e.class}}}`}function F(){return"Organic Frigate Album"}const A=[{element:"nameInput",func:()=>{E(),c()}},{element:"portalglyphsInput",func:()=>u()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>c()},{element:"researchTeam",func:()=>m()},{element:"classInput",func:()=>x()},{element:"hideAppearanceButton",handler:"click",func:function(){h("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>$()}];l.albumOtherExternal=()=>w(),l.albumItemTypeExternal=()=>F(),s("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Rear view of frigate</li>\n\t\t\t<li>Interaction screen</li>\n\t\t\t<li>System Page</li>\n\t\t</ol>\n \t</div>"),s("galleryArray",["","Rear view of frigate","Interaction screen","System Page"]),C(A),u(),T(),m(),v();
