var urlvalue="";function menuset(s,t){document.getElementById("usermenu").style.display=s;document.getElementById("usermenum").innerHTML="<b>"+t+"</b>";}var msgright;function setmsgbox(){var bk=document.getElementById("msgbk");if(bk.style.display==""){
bk.style.display="none";document.getElementById("msgtx").style.right="-420px";}else{newadminmsg();bk.style.display="";msgright=-420;addmsg();}}function addmsg(){msgright=msgright+100;if(msgright>=-20){msgright=-20;}var tx=document.getElementById("msgtx");
tx.style.right=msgright+"px";if(msgright<-20){setTimeout(addmsg,10);}else{getadminmsg();}}function gotourl(i){setmef();document.getElementById("ifadmin").src="admin/"+i+".jsp"+urlvalue;urlvalue="";}function setmenu(i){var m=document.getElementById("me"+i);
if(m.style.display==""){m.style.display="none";document.getElementById("mt"+i).innerHTML="<b>∨　　</b>";}else{m.style.display="";document.getElementById("mt"+i).innerHTML="<b>∧　　</b>";}}function setcolor(m){var ms=document.getElementsByClassName("admenu2d");
for(var i=0;i<ms.length;i++){ms[i].style.backgroundColor="#1B2428";}document.getElementById("me"+m).style.backgroundColor="#00A65A";}function reloadurl(){document.getElementById("ifadmin").contentWindow.location.reload();}function setifh(){setmef();
document.getElementById("ifadmin").style.height=(document.documentElement.clientHeight-100)+"px";}document.getElementById("ifadmin").style.height=(document.documentElement.clientHeight-100)+"px";function getadminmsg(){newadminmsg();ajax("ServerApi.do?adminmsg=1",
"regetadminmsg");}function regetadminmsg(i){var div=document.getElementById("msgnr");div.innerHTML="";if(i.length<10){return;}else{var obj=JSON.parse(i);for(var i=0;i<obj.msg.length;i++){div.innerHTML="<div class='hei30 admsgou'><div class='admsgli cupo'"+
" onclick=\"showhttp2('admin/adminmsg.jsp?id="+obj.msg[i].id+"')\">"+obj.msg[i].txt+"</div><div class='admsgdel cupo' onclick=\"deladminmsg('"+obj.msg[i].id+"')\">×</div></div>"+div.innerHTML;}}}function deladminmsg(i){newadminmsg();ajax("admin/adminmsg.jsp?del="+i,
"redeladminmsg");}function redeladminmsg(i){getadminmsg();}function newadminmsg(){document.getElementById("msgnr").innerHTML="<p>　正在加载数据...</p>";}window.onresize=function(){setifh();};function fixWebNone(fa){var w=fa.style.width;fa.style.width="0";fa.style.width=w;}
function setmef(){document.getElementById("menubtn").style.maxHeight=(document.documentElement.clientHeight-50)+"px";}setmef();