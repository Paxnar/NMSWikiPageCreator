import{bq as c,bo as o,bp as a,br as f,bs as m,bt as b,bu as s,bv as u,bw as x,bx as g,bG as I,by as h,bH as T,bJ as i}from"./links-B5GUw5jg.js";import{p as y}from"./dateLogic-ZCE60Mbx.js";import{g as r}from"./startup-DUojTJzE.js";import"./gallery-jw24F08C.js";import"./runtime-dom.esm-bundler-DlIeXlWY.js";import"./Explanation.vue_vue_type_script_setup_true_lang-BZuTRe0M.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l='<output name="exocrafts"></output>';function d(){const e=document.getElementsByName("exocraftInput"),t=[];for(const n of Array.from(e))n.checked&&t.push(n.value);c(t.join(", "),"exocrafts")}function v(){const e=o.input.censusDiscordInput,t=e.value,n=/^[a-z0-9._]+$/.test(t);a(e,!t||n?"":"Invalid Discord tag. Please give your username, not your display name.")}function E(){const e=o.input.censusRedditInput,t=e.value.trim(),n=t.toLowerCase().startsWith("u/")?t.substring(2):t;if(n.includes(" "))return void a(e,"Reddit name must not include spaces");a(e);const u=e.dataset.destNoauto;c(n,u)}function k(){const e=o.input.censusFriendInput;e.value=e.value.toUpperCase();const t=e.dataset.destNoauto;c(e,t)}function A(){const e=o.input.censusFriendInput,t=e.value,n=new RegExp(/(?:[0-9A-Za-z]{4}-){2}[0-9A-Za-z]{5}/);!t||f(t,n)?a(e):a(e,"Formato del código de amigo incorrecto")}function C(){const e=o.input.censusShowInput,t=!!o.input.censusPlayerInput.value;e.checked!=t&&(e.checked=t,m(e))}const F=[{element:["planetInput","moonInput"],func:function(){b()}},{element:"censusRedditInput",func:function(){E()}},{element:"exocraftInput",func:()=>d()},{element:"censusFriendInput",func:function(){k()}},{element:"censusFriendInput",handler:"change",func:function(){A()}},{element:"censusPlayerInput",func:function(){C()}},{element:"builderInput",func:function(){s("builderInput","builderlinkInput"),u()}},{element:"builderlinkInput",func:function(){s("builderlinkInput","builderInput"),u()}},{element:"addInfoInput",func:function(){x()}},{element:"censusDiscordInput",handler:"change",func:function(){v()}},{element:"censusArrivalInput",handler:"change",func:function(){y(this)}},{element:"censusHideButton",handler:"click",func:function(){g("census",this)}}],w={input:{exocrafts:"exocrafts",classTableActions:"classTableActions",exocraftTableActions:"exocraftTableActions",exocraftTable2Actions:"exocraftTable2Actions"},output:{portalglyphsPreview:"portalglyphsPreview",exocraftTable:"exocraftTable",exocraftTableEntry:"exocraftTableEntry",exocraftTable2:"exocraftTable2",exocraftTableEntry2:"exocraftTableEntry2",indexEntry:"indexEntry",exocraftText:"exocraftText"}};I(w),h(F),o.output.exocraftTable.innerHTML=l,o.output.exocraftText.innerHTML=l;const D="exocraftTableActionsNote",B=`<p id="${D}">Si la página ya existe, simplemente agregue una entrada para el carguero abandonado desde su sistema</p>`;r.body.insertAdjacentHTML("afterbegin",B),T(r,o.input.exocraftTableActions,"afterbegin");const M=o.input.fileInput,N=o.input.portalglyphsInput;i(M,"input"),i(N,"input"),d();
