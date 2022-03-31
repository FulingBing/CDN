function tableDescUp(obj,index){tableDescPx(obj,index,true);}function tableDescDown(obj,index){tableDescPx(obj,index,false);}function tableDescPx(obj,index,up){
var olist=obj.parentNode.parentNode.parentNode.parentNode.parentNode.children;if(olist.length<2){return;}olist=olist[1].children;for(var i=0;i<olist.length;i++){
for(var j=i;j<olist.length;j++){if(olist[i].children.length!==olist[j].children.length){continue;}var s1=olist[i].children[index].innerHTML;var s2=olist[j].children[index].innerHTML;
if(up){if(s1>s2){var t3=olist[i].innerHTML;olist[i].innerHTML=olist[j].innerHTML;olist[j].innerHTML=t3;}}else{if(s1<s2){var t3=olist[i].innerHTML;olist[i].innerHTML=olist[j].innerHTML;
olist[j].innerHTML=t3;}}}}}function tableDescBtn(){var tl=document.getElementsByClassName("tablecss");for(var i=0;i<tl.length;i++){var tdl=tl[i].children[0].children[0].children;
for(var j=0;j<tdl.length;j++){tdl[j].innerHTML="<div class=\"tabledescb\"><span class=\"tabledesct\" onclick=\"tableDescUp(this,"+j+")\">▲</span><span class=\"tabledesct\" onclick=\"tableDescDown(this,"
+j+")\">▼</span></div>"+tdl[j].innerHTML;}}}window.addEventListener("load",function(){tableDescBtn();});