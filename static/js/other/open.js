var newrehtml=false;var openifbox=document.getElementById("htmlth");function showhttp2(i){document.getElementById("alertbk").style.display="";document.getElementById("htmlbk").style.display="";document.getElementById("divload").innerHTML="少女祈祷中...";
sethttp2(i);}function sethttp2(i){openifbox.src=i;if(openifbox.attachEvent){openifbox.attachEvent("onload", function(){document.getElementById("divload").innerHTML="";isrehtml();fixWebNone();});}else{openifbox.onload=function(){
document.getElementById("divload").innerHTML = "";isrehtml();fixWebNone();};}}function hide2(){document.getElementById("alertbk").style.display = "none";document.getElementById("htmlbk").style.display = "none";}var loads=document.getElementsByClassName("loadhead");
function reloads(){for(var fi=0;fi<loads.length;fi++){loads[fi].style.display="none";}}setTimeout('reloads()',1000);function readhtml(){sethttp2('html/temp/about.html');newrehtml=true;}function isrehtml(){if(newrehtml){location.reload();}setIframeWeb();}
var open_big=false;function setopenbig(){if(open_big){open_big=false;document.getElementById("openh").className="openh";document.getElementById("opent").className="opent";document.getElementById("htmlbk").className="openb";}else{open_big=true;
document.getElementById("openh").className="openh_b";document.getElementById("opent").className="opent_b";document.getElementById("htmlbk").className="openb_b";}}function setIframeWeb(){var obj=document.getElementById("htmlth");var h=obj.offsetHeight-1;
obj.style.height=h+"px";obj.style.height="";}function fixWebNone(){var w=openifbox.style.width;openifbox.style.width="0";openifbox.style.width=w;}