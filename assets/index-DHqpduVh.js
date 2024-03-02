import{a as ie,g as ve}from"./category-CpMFniUK.js";import{g as pe,a as me,b as fe,e as ye,c as _e,d as ge}from"./records-jKfkKutN.js";import{f as oe}from"./moneyFormat-VgRRH0h_.js";import{_ as le,r as d,j as he,d as h,o as r,c as f,a as I,b as l,t as M,F as H,k as j,n as Z,l as T,e as V,m as ae,p as ke,g as Ce,q as ee,s as G,f as R,w as s,v as De,E as $,x as Me,y as $e}from"./index-FHfZcE39.js";import"./request-CVdgLUBt.js";const be="/hope/assets/cost-CzR4K-fl.png",we="/hope/assets/income-BpWlCHRw.png",re=p=>(ke("data-v-0b5bd580"),p=p(),Ce(),p),Ie={class:"calendarContainer"},Ve={class:"toolbar"},xe={class:"date"},Se={class:"calendarBox"},Ye=["onClick"],Re=["onClick"],Le={key:0,class:"records"},Be={key:0,class:"income"},Ae=re(()=>I("span",null,"收入: ",-1)),Te={key:1,class:"cost"},Pe=re(()=>I("span",null,"支出: ",-1)),Ne=["onClick"],Ue={__name:"myCalendar",emits:["pickedDate"],setup(p,{expose:z,emit:L}){(async()=>{const n=await pe();console.log(n)})();let _=d();const x=d(["一","二","三","四","五","六","日"]),B=d(0),P=d([]),N=d(0),E=d([]),C=d(0),i=d(0),u=d(0),y=d(0),t=d([]),Y=(n,D)=>new Date(n,D-1,1).getDay(),b=()=>{const n=new Date,D=n.getFullYear(),A=n.getMonth()+1,c=n.getDate();return{year:D,month:A,date:c}},k=d([31,29,31,30,31,30,31,31,30,31,30,31]),w=d([31,28,31,30,31,30,31,31,30,31,30,31]),v=n=>n%4===0&&n%100!==0||n%400===0,U=()=>{const{year:n,month:D,date:A}=b();i.value===n&&u.value===D?y.value=A:y.value="",B.value=Y(i.value,u.value)===0?6:Y(i.value,u.value)-1,C.value=v(i.value)?k.value[u.value-1]:w.value[u.value-1],t.value=[];const c=ee(()=>K.value.filter(a=>a.statusCode==="1").map(a=>a.costYear+a.costMonth+a.costDate+"$"+a.money)),m=ee(()=>K.value.filter(a=>a.statusCode==="0").map(a=>a.costYear+a.costMonth+a.costDate+"$"+a.money));let Q=i.value.toString(),de=u.value<10?"0"+u.value.toString():u.value.toString();for(let a=0;a<C.value;a++){let g=a+1<10?"0"+(a+1).toString():(a+1).toString(),W=Q+de+g;t.value.push({date:W,isholiday:!1,income:!1,cost:!1,incomeTotal:0,costTotal:0})}t.value.forEach(a=>{for(let g=0;g<se.length;g++)a.date===se[g].date&&(a.isholiday=!0);for(let g=0;g<c.value.length;g++)if(a.date===c.value[g].substring(0,8)){a.income=!0;let W=+c.value[g].substring(9);a.incomeTotal+=W}for(let g=0;g<m.value.length;g++)if(a.date===m.value[g].substring(0,8)){a.cost=!0;let W=+m.value[g].substring(9);a.costTotal+=W}});let X=0;u.value===1?X=v(i.value-1)?k.value[k.value.length-1]:w.value[w.value.length-1]:X=v(i.value)?k.value[u.value-2]:w.value[u.value-2],N.value=42-(B.value+C.value);const ne=[],ue=[];for(let a=X-B.value+1;a<=X;a++)ne.push(a);for(let a=1;a<=N.value;a++)ue.push(a);P.value=ne,E.value=ue},te=()=>{const{year:n,month:D,date:A}=b();i.value=n,u.value=D,y.value=A,U()},O=n=>{_.value=n,u.value===1?(u.value=12,i.value--):u.value--,n&&(S.value=`${i.value}-${u.value}-${n}`,q("pickedDate")),F()},J=n=>{_.value=n,u.value===12?(u.value=1,i.value++):u.value++,n&&(S.value=`${i.value}-${u.value}-${n}`,q("pickedDate")),F()};let S=d("");const q=L,o=n=>{_.value=n,S.value=`${i.value}-${u.value}-${n}`,q("pickedDate")},K=d([]),F=async()=>{const{data:{data:n}}=await me();K.value=n,U()},se=[];return te(),he(()=>{S.value=`${i.value}-${u.value}-${y.value}`}),F(),z({openDate:S,getMonthlyRecords:F}),(n,D)=>{const A=h("font-awesome-icon");return r(),f("div",Ie,[I("div",Ve,[I("div",{class:"changeMonthBtn",onClick:D[0]||(D[0]=c=>O())},[l(A,{icon:["fas","chevron-left"]})]),I("div",xe,M(i.value)+"年"+M(u.value)+"月",1),I("div",{class:"changeMonthBtn",onClick:D[1]||(D[1]=c=>J())},[l(A,{icon:["fas","chevron-right"]})])]),I("div",Se,[(r(!0),f(H,null,j(x.value,(c,m)=>(r(),f("div",{key:m,class:"weekday"},M(c),1))),128)),(r(!0),f(H,null,j(P.value,(c,m)=>(r(),f("div",{onClick:Q=>O(c),key:m,class:Z(["date notThisMonth",{holiday:c.isholiday===!0,pickDate:m+1===T(_)}])},M(c),11,Ye))),128)),(r(!0),f(H,null,j(t.value,(c,m)=>(r(),f("div",{onClick:Q=>o(m+1),key:m,class:Z(["date",{active:m+1===y.value,holiday:c.isholiday===!0,pickDate:m+1===T(_)}])},[V(M(m+1)+" ",1),c.income||c.cost?(r(),f("div",Le,[c.income?(r(),f("div",Be,[Ae,I("span",null,M(T(oe)(c.incomeTotal)),1)])):ae("",!0),c.cost?(r(),f("div",Te,[Pe,I("span",null,M(T(oe)(c.costTotal)),1)])):ae("",!0)])):ae("",!0)],10,Re))),128)),(r(!0),f(H,null,j(E.value,(c,m)=>(r(),f("div",{onClick:Q=>J(c),key:m,class:Z(["date notThisMonth",{holiday:c.isholiday===!0,pickDate:m+1===T(_)}])},M(c),11,Ne))),128))])])}}},ze=le(Ue,[["__scopeId","data-v-0b5bd580"]]),ce=p=>G(p).format("YYYY-MM-DD"),Ee=p=>G(p).format("YYYY"),Fe=p=>G(p).format("MM"),He=p=>G(p).format("DD"),je=G().format("YYYY-MM-DD"),Oe=["id"],qe={class:"dialog-footer"},Ke={__name:"editRecord",props:{cateList:Array},emits:["success"],setup(p,{expose:z,emit:L}){const e=d({id:"",date:"",status:"0",categoryId:"",money:0,memo:""}),_=d(!1),x=p,B=ee(()=>x.cateList.filter(y=>y.statusCode==="0")),P=ee(()=>x.cateList.filter(y=>y.statusCode==="1")),N=L,E=/^[1-9]\d*$/,C=async y=>{if(e.value.date=ce(e.value.date),e.value.costYear=Ee(e.value.date),e.value.costMonth=Fe(e.value.date),e.value.costDate=He(e.value.date),e.value.date==="Invalid Date")return $.error("請輸入日期");if(e.value.categoryId==="")return $.error("請選擇類別");if(e.value.money===0)return $.error("請輸入金額");if(!E.test(e.value.money))return $.error("金額只能是正整數");if(e.value.id){const{data:t}=await ye({id:e.value.id,categoryId:e.value.categoryId,money:e.value.money,memo:e.value.memo});if(t.status!==0)return $.error("更新紀錄失敗");$.success("更新紀錄成功"),_.value=!1}else{const{data:t}=await fe(e.value);if(t.status!==0)return $.error("新增失敗");$.success("新增成功"),y==="save"&&(_.value=!1)}e.value.id="",e.value.categoryId="",e.value.money=0,e.value.memo="",N("success")},i=(y,t)=>{Object.keys(t).length===0?e.value.date=y:e.value={id:t.id,date:t.completeDate,status:t.statusCode,categoryId:t.categoryId,money:t.money,memo:t.memo},_.value=!0},u=()=>{e.value.id="",e.value.categoryId="",e.value.money=0,e.value.memo="",_.value=!1};return z({open:i}),(y,t)=>{const Y=h("el-icon"),b=h("el-date-picker"),k=h("el-form-item"),w=h("el-option"),v=h("el-select"),U=h("el-col"),te=h("el-row"),O=h("el-input"),J=h("el-form"),S=h("el-button"),q=h("el-dialog");return r(),R(q,{onClose:u,modelValue:_.value,"onUpdate:modelValue":t[10]||(t[10]=o=>_.value=o),width:"370","show-close":!1,style:{"background-color":"#fff8f1","border-radius":"8px"}},{header:s(({close:o,titleId:K,titleClass:F})=>[I("h4",{id:K,class:Z(F)},M(e.value.id?"編輯":"新增"),11,Oe),l(Y,{onClick:o,color:"#F56C6C",size:"24",style:{cursor:"pointer"}},{default:s(()=>[l(T(De))]),_:2},1032,["onClick"])]),footer:s(()=>[I("div",qe,[e.value.id?(r(),R(S,{key:1,onClick:t[8]||(t[8]=o=>C("save")),type:"primary",style:{width:"100px"}},{default:s(()=>[V("更新")]),_:1})):(r(),R(S,{key:0,onClick:t[7]||(t[7]=o=>C("save")),type:"primary",style:{width:"100px"}},{default:s(()=>[V("儲存")]),_:1})),e.value.id?(r(),R(S,{key:3,onClick:u,type:"danger",style:{width:"100px"}},{default:s(()=>[V("取消")]),_:1})):(r(),R(S,{key:2,onClick:t[9]||(t[9]=o=>C("oneMore")),type:"primary",style:{width:"100px"}},{default:s(()=>[V("再記一筆")]),_:1}))])]),default:s(()=>[l(J,null,{default:s(()=>[l(k,null,{default:s(()=>[l(b,{readonly:e.value.id,modelValue:e.value.date,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value.date=o),type:"date",style:{width:"100%"}},null,8,["readonly","modelValue"])]),_:1}),l(te,{gutter:20},{default:s(()=>[l(U,{span:7},{default:s(()=>[l(k,null,{default:s(()=>[l(v,{onChange:t[1]||(t[1]=o=>e.value.categoryId=""),"fit-input-width":"",modelValue:e.value.status,"onUpdate:modelValue":t[2]||(t[2]=o=>e.value.status=o)},{default:s(()=>[l(w,{label:"支出",value:"0"}),l(w,{label:"收入",value:"1"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(U,{span:17},{default:s(()=>[e.value.status==="0"?(r(),R(k,{key:0},{default:s(()=>[l(v,{modelValue:e.value.categoryId,"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.categoryId=o),placeholder:"選擇類別"},{default:s(()=>[(r(!0),f(H,null,j(B.value,o=>(r(),R(w,{key:o.id,label:o.categoryName,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):(r(),R(k,{key:1},{default:s(()=>[l(v,{modelValue:e.value.categoryId,"onUpdate:modelValue":t[4]||(t[4]=o=>e.value.categoryId=o),placeholder:"選擇類別"},{default:s(()=>[(r(!0),f(H,null,j(P.value,o=>(r(),R(w,{key:o.id,label:o.categoryName,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}))]),_:1})]),_:1}),l(k,null,{default:s(()=>[l(O,{modelValue:e.value.money,"onUpdate:modelValue":t[5]||(t[5]=o=>e.value.money=o),maxlength:"9",autocomplete:"off",placeholder:"請輸入金額",formatter:o=>`$ ${o}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:o=>o.replace(/\$\s?|(,*)/g,""),"validate-event":""},null,8,["modelValue","formatter","parser"])]),_:1}),l(k,null,{default:s(()=>[l(O,{modelValue:e.value.memo,"onUpdate:modelValue":t[6]||(t[6]=o=>e.value.memo=o),maxlength:"30",rows:5,placeholder:"請輸入備註","show-word-limit":"",resize:"none",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},We=le(Ke,[["__scopeId","data-v-444fcced"]]),Ge=Me("budget-category",()=>{const p=d([]);return{cateList:p,setCateList:L=>{p.value=L}}},{persist:!0}),Je={class:"homeContainer m50"},Qe={key:0,src:be,class:"statusIcon"},Xe={key:1,src:we,class:"statusIcon"},Ze={__name:"index",setup(p){const z=Ge(),L=d([]),e=d(null),_=je,x=d(""),B=d([]),P=d(null),N=t=>{P.value.open(e.value.openDate,t)},E=t=>{$e.confirm("確定要刪除此類別嗎?",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const{data:Y}=await ge(t);Y.status!==0&&$.error("刪除失敗"),$.success("刪除成功"),C(),e.value.getMonthlyRecords()}).catch(()=>{})},C=async()=>{x.value=x.value||_;const{data:t}=await _e(x.value);if(t.status!==0)return $.error("服務異常");L.value=t.data},i=async()=>{const{data:t}=await ve();if(t.status!==0)return $.error("服務異常");z.setCateList(t.data),B.value=t.data},u=()=>{C(),e.value.getMonthlyRecords()},y=()=>{x.value=e.value.openDate,C(x.value)};return C(),i(),(t,Y)=>{const b=h("el-table-column"),k=h("el-button"),w=h("el-table");return r(),f("div",Je,[l(ze,{ref_key:"calendar",ref:e,onPickedDate:y},null,512),l(ie,{onClick:Y[0]||(Y[0]=v=>N({}))},{default:s(()=>[V("新增一筆")]),_:1}),l(w,{data:L.value,stripe:"",style:{width:"100%"}},{default:s(()=>[l(b,{prop:"completeDate",label:"日期",width:"100"},{default:s(({row:v})=>[V(M(T(ce)(v.completeDate)),1)]),_:1}),l(b,{prop:"categoryId",label:"類別"},{default:s(({row:v})=>[v.statusCode==="0"?(r(),f("img",Qe)):(r(),f("img",Xe)),V(" "+M(v.categoryName),1)]),_:1}),l(b,{prop:"money",label:"金額"},{default:s(({row:v})=>[V(M(T(oe)(v.money)),1)]),_:1}),l(b,{prop:"memo",label:"備註"}),l(b,{label:"操作",width:"75"},{default:s(({row:v})=>[l(k,{size:"small",type:"success",onClick:U=>N(v)},{default:s(()=>[V("編輯")]),_:2},1032,["onClick"])]),_:1}),l(b,{width:"75"},{default:s(({row:v})=>[l(k,{onClick:U=>E(v.id),size:"small",type:"danger"},{default:s(()=>[V("刪除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(We,{ref_key:"dialog",ref:P,cateList:B.value,onSuccess:u},null,8,["cateList"])])}}},st=le(Ze,[["__scopeId","data-v-b009a9ff"]]);export{st as default};
