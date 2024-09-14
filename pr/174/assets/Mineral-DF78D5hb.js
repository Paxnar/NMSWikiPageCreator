const __vite__mapDeps=(e,l=__vite__mapDeps,a=l.f||(l.f=["assets/gallery-jw24F08C.js","assets/runtime-dom.esm-bundler-DlIeXlWY.js","assets/links-B5GUw5jg.js","assets/links-BX-iapST.css","assets/Explanation.vue_vue_type_script_setup_true_lang-BZuTRe0M.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/gallery-JxCbolZp.css"]))=>e.map((e=>a[e]));import{u as ye,_ as he,a as ge}from"./main-2x1Q2F1F.js";import{n as be,l as q}from"./runtime-dom.esm-bundler-DlIeXlWY.js";import{a as b,w as X,b as u,c as _e,d as Ve,e as Ne,_ as R,S as De,f as Ie,g as Se,I as ke,h as we,O as Me,i as Te}from"./index-atF6WBA2.js";import{H as ne,av as p,p as oe,bf as i,s as l,aV as o,bZ as Ue,bY as J,aD as N,ao as Ce,bD as K,bX as Pe,o as C,cY as Q,bb as xe,r as y,z as t,b2 as e,a6 as m,y as r,F as P,aF as ee,bh as le,q as x,cZ as ae}from"./links-B5GUw5jg.js";import{_ as Fe}from"./Explanation.vue_vue_type_script_setup_true_lang-BZuTRe0M.js";import{m as F}from"./mineralDatalists-CKshA0d-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ee=ne({__name:"MineralInfobox",props:{mineralName:{},image:{},region:{},hubname:{},galaxy:{},systemName:{},planetName:{},moonName:{},content:{},formation:{},notes:{},elemPrimary:{},elemSecondary:{},polymorphic:{},discoveredlinkName:{},discoveredName:{},discDate:{},mode:{},researchteam:{},release:{}},setup:e=>(e,a)=>(p(),oe(b,{"is-single-line":!1,"template-name":"Mineral infobox"},{default:i((()=>[l("div",null,"| name = "+o(e.mineralName),1),l("div",null,"| image = "+o(e.image||"nmsMisc_NotAvailable.png"),1),l("div",null,"| galaxy = "+o(e.galaxy),1),l("div",null,"| region = "+o(e.region),1),l("div",null,"| system = "+o(e.systemName),1),l("div",null,"| planet = "+o(e.planetName),1),l("div",null,"| moon = "+o(e.moonName),1),l("div",null,"| content = "+o(e.content),1),l("div",null,"| formation = "+o(e.formation),1),l("div",null,"| notes = "+o(e.notes),1),l("div",null,"| element_primary = "+o(e.elemPrimary),1),l("div",null,"| element_secondary = "+o(e.elemSecondary),1),l("div",null,"| polymorphic = "+o(e.polymorphic),1),l("div",null,"| civilized = "+o(e.hubname),1),l("div",null,"| discoveredlink = "+o(e.discoveredlinkName),1),l("div",null,"| discovered = "+o(e.discoveredName),1),l("div",null,"| discovered_on = "+o(e.discDate),1),l("div",null,"| mode = "+o(e.mode),1),l("div",null,"| researchteam = "+o(e.researchteam),1),l("div",null,"| release = "+o(e.release),1)])),_:1}))}),$e=l("label",{for:"discDate"},"Discovery date:",-1),Ae=l("br",null,null,-1),Be=l("p",null,"Information about the player.",-1),Oe=l("label",{for:"appearance"},"Appearance:",-1),Re=l("div",{id:"galleryInput"},null,-1),ze=l("div",{id:"galleryItems",class:"gallery-items-wrapper"},null,-1),Le=l("br",null,null,-1),Ge=l("div",null,"==Summary==",-1),He=l("br",null,null,-1),We=l("br",null,null,-1),Ye=l("div",null,"==Alias Names==",-1),Ze={key:1},je=l("br",null,null,-1),qe=l("div",null,"==Discovery Menu==",-1),Xe=l("br",null,null,-1),Je=l("div",null,"==Location==",-1),Ke={key:0},Qe=l("br",null,null,-1),el=l("div",null,"==Resources==",-1),ll=l("br",null,null,-1),al=l("div",null,"==Additional Information==",-1),nl={key:2},ol=l("br",null,null,-1),tl=l("div",{id:"gallery"},null,-1),vl=ne({__name:"Mineral",setup(a){const n=Ue(),{fullArticleElement:s}=J(n),d=ye(),c=N(null);Ce((()=>{s.value=c.value,K("galleryArray",["","Scanner view","Discovery Menu"]),K("galleryExplanationExternal","\n\tThere is a preferred order of gallery pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Scanner view</li>\n\t\t\t<li>Discovery Menu</li>\n\t\t</ol>\n \t</div>"),he((()=>import("./gallery-jw24F08C.js")),__vite__mapDeps([0,1,2,3,4,5,6]))}));const v=Pe(),{release:f,name:h,orgName:g,image:_,discovered:V,discoveredlink:D,system:U,galaxy:I,hubname:j,planet:k,moon:w,glyphs:M,content:S,formation:T,notes:A,elements:B,polymorphic:E,discDate:z,docBy:O,researchteam:W,region:Z,sanitisedStrings:G,docBySentence:Y,appearance:H}=J(v),L=C((()=>Q(E.value))),$=C((()=>Q(S.value))),ne=N(""),te=N("");X(T,(()=>ne.value=ae(T.value,F.formationData)),{debounce:500}),X(A,(()=>te.value=ae(A.value,F.mineralNotesData)),{debounce:500}),xe((()=>{B.value[0]===B.value[1]&&(B.value[1]="")}));const ie=C((()=>{const e=parseInt(S.value);if(!isNaN(e))return e+"%"})),re=C((()=>B.value.filter(Boolean))),me=N(""),ue=N(!1);function se(){const{isValidData:e,message:l}=ge();me.value=l.value,ue.value=!e.value}return(a,n)=>(p(),y(P,null,[t(ke,null,{default:i((()=>[l("form",{class:"table",onSubmit:n[16]||(n[16]=be((()=>{}),["prevent"]))},[t(u,{label:"Mineral name:",identifier:"nameInput",modelValue:e(h),"onUpdate:modelValue":n[0]||(n[0]=e=>m(h)?h.value=e:null),img:"mineral/mineralName"},{heading:i((()=>[r("Mineral Name")])),content:i((()=>[r("Enter exactly as seen in game. Watch out for 0 (zero) and O (o).")])),default:i((()=>[r(" Enter exactly as seen in game. Watch out for 0 (zero) and O (o). ")])),_:1},8,["modelValue"]),t(u,{label:"Original name before uploading (if available):",identifier:"orgNameInput",modelValue:e(g),"onUpdate:modelValue":n[1]||(n[1]=e=>m(g)?g.value=e:null)},null,8,["modelValue"]),t(u,{label:"Claimed by which civilized space:",identifier:"hubnameInput",modelValue:e(j),"onUpdate:modelValue":n[2]||(n[2]=e=>m(j)?j.value=e:null)},null,8,["modelValue"]),t(_e),t(u,{label:"Name of the Galaxy:",identifier:"galaxyInput",modelValue:e(I),"onUpdate:modelValue":n[3]||(n[3]=e=>m(I)?I.value=e:null)},null,8,["modelValue"]),t(u,{label:"Name of the System:",identifier:"systemInput",modelValue:e(U),"onUpdate:modelValue":n[4]||(n[4]=e=>m(U)?U.value=e:null)},null,8,["modelValue"]),t(u,{label:"Name of the Region where the systems is located:",identifier:"regionInput",modelValue:e(Z),"onUpdate:modelValue":n[5]||(n[5]=e=>m(Z)?Z.value=e:null)},null,8,["modelValue"]),t(u,{label:"Name of the planet:",identifier:"planetInput",modelValue:e(k),"onUpdate:modelValue":n[6]||(n[6]=e=>m(k)?k.value=e:null)},{default:i((()=>[r(" Planet Name OR the planet circled by the moon where the mineral can be found. ")])),_:1},8,["modelValue"]),t(u,{label:"Name of the moon (if mineral is on moon):",identifier:"moonInput",modelValue:e(w),"onUpdate:modelValue":n[7]||(n[7]=e=>m(w)?w.value=e:null)},{default:i((()=>[r(" If the mineral is located on a moon. Leave blank if the mineral is on a planet. ")])),_:1},8,["modelValue"]),t(Ve),t(u,{modelValue:e(S),"onUpdate:modelValue":n[8]||(n[8]=e=>m(S)?S.value=e:null),error:$.value,label:"Metal content:",identifier:"content",img:"mineral/content",maxlength:"2"},{heading:i((()=>[r("Metal Content")])),content:i((()=>[r("Found on the mineral scan.")])),default:i((()=>[r(" Found on the mineral scan. ")])),_:1},8,["modelValue","error"]),t(u,{modelValue:e(T),"onUpdate:modelValue":n[9]||(n[9]=e=>m(T)?T.value=e:null),error:ne.value,label:"Formation process:",identifier:"formation",list:"formationData",img:"mineral/formation"},{heading:i((()=>[r("Formation Process")])),content:i((()=>[r("Found on the mineral scan.")])),default:i((()=>[r(" Found on the mineral scan. ")])),_:1},8,["modelValue","error"]),t(u,{modelValue:e(A),"onUpdate:modelValue":n[10]||(n[10]=e=>m(A)?A.value=e:null),error:te.value,label:"Notes:",identifier:"notes",list:"mineralNotesData",img:"mineral/notes"},{heading:i((()=>[r("Notes")])),content:i((()=>[r("Found on the mineral scan.")])),default:i((()=>[r(" Found on the mineral scan. ")])),_:1},8,["modelValue","error"]),t(u,{modelValue:e(E),"onUpdate:modelValue":n[11]||(n[11]=e=>m(E)?E.value=e:null),error:L.value,identifier:"polymorphic",label:"Polymorphic (number of instances):",maxlength:"2"},{heading:i((()=>[r("Polymorphic")])),content:i((()=>[r(' Sometimes multiple mineral models have the same name. This is called "Polymorphism". Enter the number of how many different mineral models had this name. ')])),default:i((()=>[r(" How many different models of this mineral were discovered. ")])),_:1},8,["modelValue","error"]),(p(),y(P,null,ee(2,(l=>t(Ne,{index:l-1,resources:e(F).mineralResources,item:"mineral"},null,8,["index","resources"]))),64)),t(R,null,{label:i((()=>[$e,t(Fe,{img:"mineral/discDate"},{heading:i((()=>[r("Discovery Date")])),content:i((()=>[r(" Found on the mineral scan. "),Ae,r(" The exact discovery timestamp is displayed on the top left. ")])),default:i((()=>[r(" Found on the mineral scan. ")])),_:1})])),input:i((()=>[le(l("input",{"onUpdate:modelValue":n[12]||(n[12]=e=>m(z)?z.value=e:null),id:"discDate",type:"date"},null,512),[[q,e(z)]])])),_:1}),t(De,null,{default:i((()=>[t(R,null,{default:i((()=>[Be])),_:1}),t(Ie),t(u,{label:"Documenter if not discoverer:",identifier:"docBy",modelValue:e(O),"onUpdate:modelValue":n[13]||(n[13]=e=>m(O)?O.value=e:null)},null,8,["modelValue"]),t(u,{label:"Researchteam you belong to::",identifier:"researchteamInput",modelValue:e(W),"onUpdate:modelValue":n[14]||(n[14]=e=>m(W)?W.value=e:null)},null,8,["modelValue"])])),_:1}),t(R,null,{default:i((()=>[Oe,le(l("textarea",{"onUpdate:modelValue":n[15]||(n[15]=e=>m(H)?H.value=e:null),id:"appearance",placeholder:"This mineral is a <size> <colour> <type>."},null,512),[[q,e(H)]])])),_:1})],32),Re,ze,t(Se)])),_:1}),t(we,{open:ue.value,"onUpdate:open":n[17]||(n[17]=e=>ue.value=e),"error-message":me.value},null,8,["open","error-message"]),t(Me,{onMousedown:se},{default:i((()=>[l("div",{ref_key:"wikiText",ref:c,class:"wikiText",id:"fullArticle",onMouseup:n[18]||(n[18]=(...l)=>e(d).getSelectedText&&e(d).getSelectedText(...l)),onTouchend:n[19]||(n[19]=(...l)=>e(d).getSelectedText&&e(d).getSelectedText(...l))},[l("div",null,[t(b,{"template-name":"Version"},{default:i((()=>[r(o(e(f)),1)])),_:1})]),t(Ee,{"mineral-name":e(G).name,image:e(_),region:e(Z),galaxy:e(I),hubname:e(j),systemName:e(G).system,planetName:e(G).planet,moonName:e(G).moon,content:ie.value,formation:e(T),notes:e(A),"elem-primary":e(B)[0],"elem-secondary":e(B)[1],polymorphic:e(E),"disc-date":e(z).replaceAll("-","/"),"discovered-name":e(G).discovered,"discoveredlink-name":e(G).discoveredlink,researchteam:e(W),release:e(f)},null,8,["mineral-name","image","region","galaxy","hubname","systemName","planetName","moonName","content","formation","notes","elem-primary","elem-secondary","polymorphic","disc-date","discovered-name","discoveredlink-name","researchteam","release"]),l("div",null,"'''"+o(e(G).name)+"''' is a variety of mineral.",1),Le,Ge,l("div",null,"'''"+o(e(G).name)+"''' is a type of [[mineral]]. "+o(e(G).appearance),1),He,e(E)?(p(),y(P,{key:0},[l("div",null,[t(b,{"template-name":"Polymorphicmineral"},{default:i((()=>[r(o(e(E)),1)])),_:1})]),We],64)):x("",!0),Ye,e(g)?(p(),y("div",Ze,[t(b,{"template-name":"aliasc"},{default:i((()=>[r("text=Original|name="+o(e(G).orgName),1)])),_:1})])):x("",!0),l("div",null,[t(b,{"template-name":"aliasc"},{default:i((()=>[r("text=Current|name="+o(e(G).name),1)])),_:1})]),je,qe,l("div",null,"* Metal Content: "+o(ie.value),1),l("div",null,"* Formation Process: "+o(e(T)),1),l("div",null,"* Notes: "+o(e(A)),1),Xe,Je,l("div",null,[r(" It can be found on the "),e(w)?(p(),y("span",Ke,"[[moon]] [["+o(e(G).moon)+"]] of the",1)):x("",!0),r(" [[planet]] [["+o(e(G).planet)+"]] in the [["+o(e(G).system)+"]] [[star system]]. ",1)]),l("div",null,[t(b,{"template-name":"CoordGlyphConvert"},{default:i((()=>[r(o(e(M)),1)])),_:1})]),Qe,el,l("div",null," This mineral provides the "+o(re.value.length>1?"resources":"resource")+" "+o(re.value.map((e=>`[[${e}]]`)).join(" and "))+" when mined. ",1),ll,al,e(O)&&e(O)!==e(D)&&e(O)!==e(V)?(p(),y("div",nl,"Documented by "+o(e(Y)),1)):x("",!0),ol,tl],544)])),_:1}),(p(!0),y(P,null,ee(e(F),((e,l)=>(p(),oe(Te,{identifier:l,data:e},null,8,["identifier","data"])))),256))],64))}});export{vl as default};
