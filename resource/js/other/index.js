﻿if(objdata.stop=="true"){showhttp('stop.html');}function download(){document.getElementById("alertbk").style.display="";
document.getElementById("downloadbk").style.display="";}function hide(){document.getElementById("alertbk").style.display="none";
document.getElementById("downloadbk").style.display="none";document.getElementById("htmlbk").style.display="none";
}function showhttp(i){document.getElementById("alertbk").style.display="";document.getElementById("htmlbk").style.display="";
document.getElementById("divload").innerHTML="正在加载";sethttp(i);}function sethttp(i){var iframe=document.getElementById("htmlth");iframe.src=i;
if(iframe.attachEvent){iframe.attachEvent("onload", function(){document.getElementById("divload").innerHTML="";});}else{iframe.onload=function(){
document.getElementById("divload").innerHTML="";};}}log();var ts_obj,ts_lbt,ts_index,isstart=true;var ts_txt=document.getElementById("lbttxt");
ajax('//'+objdata.bbs+'/ServerApi.do?push=1',"rePush");function rePush(i){if(i==""){ts_txt.innerHTML="　读取数据失败";}else{ts_obj=JSON.parse(i);var s="";for(var j=0;j<ts_obj.length;j++){
var url=ts_obj[j].url;url=url.replace("<%=bbs %>","//"+objdata.bbs);url=url.replace("<%=mc %>","");var img=ts_obj[j].img;img=img.replace("<%=bbs %>","//"+objdata.bbs);
img=img.replace("<%=mc %>","");s=s+"<img class=\"bodylbt\" onclick=\"wo('"+url+"')\" src=\""+img+"\">";}var lbinfo=document.getElementById("lbinfo");
lbinfo.innerHTML=s;ts_lbt=document.getElementsByClassName("bodylbt");ts_index=ts_lbt.length-1;isstart=false;tonext();setInterval("tonext()",6000);
}}function tonext(){if(isstart){return;}isstart=true;if(ts_index==ts_lbt.length-1){ts_index=0;for(var i=1;i<ts_lbt.length;i++){ts_lbt[i].style.marginLeft="100%";}
}else{ts_index++;ts_lbt[ts_index].style.marginLeft="0";}ts_txt.innerHTML="　"+(ts_index+1)+"/"+ts_lbt.length+"　"+ts_obj[ts_index].msg;isstart=false;}
function toup(){if(isstart){return;}isstart=true;if(ts_index==0){ts_index=ts_lbt.length-1;for(var i=0;i<ts_lbt.length;i++){ts_lbt[i].style.marginLeft="0";}}
else{ts_lbt[ts_index].style.marginLeft="100%";ts_index--;}ts_txt.innerHTML="　"+(ts_index+1)+"/"+ts_lbt.length+"　"+ts_obj[ts_index].msg;isstart=false;}
function wo(s){window.open(s);}function changeLx(){lx_time=1;var l1=document.getElementById("lx1");var l2=document.getElementById("lx2");
var l1b=document.getElementById("lx1btn");var l2b=document.getElementById("lx2btn");if(l1.style.opacity==1){l1.style.opacity=0;l2.style.opacity=1;
l2b.style.backgroundColor="gold";l1b.style.backgroundColor="#FFF";}else{l2.style.opacity=0;l1.style.opacity=1;l1b.style.backgroundColor="gold";
l2b.style.backgroundColor="#FFF"; }}function clicklx(){lx_time=1;if(document.getElementById("lx1").style.opacity==1){showhttp('html/mod.html');
}else{showhttp('html/ban.html')}}var lx_time=1;function starlx(){lx_time++;if(lx_time>3){lx_time=1;changeLx();}setTimeout("starlx()",1000);}starlx();