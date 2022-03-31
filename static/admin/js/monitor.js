function loadWorld(){ajax("../ServerApi.do?world=world","reLoadWorld");}function reLoadWorld(s){var json=JSON.parse(s);document.getElementById("data").style.display="none";
for(var i=0;i<json.length;i++){var html="<div class=\"bkback libk\">"+"名称："+json[i].name+"<br />"+"UUID："+json[i].uuid+"<br />"+"世界类型："+json[i].environment+"<br />"
+"在线人数："+json[i].player+"<br />"+"实体数量："+json[i].entity+"<br />"+"下雨："+json[i].storm+"<br />"+"雷暴："+json[i].thunder+"<br />"+"<a href=\"javascript:()\" onclick=\"showorhide('"
+json[i].uuid+"');return false;\" class=\"text\">已加载区块："+json[i].loadedchunk+"</a>"+"<div id=\""+json[i].uuid+"\" style=\"display:none\"><table class=\"tablecss\"><thead><tr>"
+"<td width='25%'>区块坐标（X）</td><td width='25%'>区块坐标（Z）</td><td width='25%'>区块实体数量</td><td>状态方块数量</td></tr></thead>";for(var j=0;j<json[i].chunklist.length;j++){html=html
+"<tr><td>"+json[i].chunklist[j].x+"</td><td>"+json[i].chunklist[j].z+"</td><td>"+json[i].chunklist[j].entity+"</td><td>"+json[i].chunklist[j].tile+"</td></tr>";}html=html+"</table></div></div>"
var para=document.createElement("div");para.innerHTML=html;document.getElementById("world").appendChild(para);}tableDescBtn();}function showorhide(t){var d=document.getElementById(t);
if(d.style.display=="none"){d.style.display="";}else{d.style.display="none";}}var tps=new Array();for(var i=0;i<60;i++){tps[i]=0;}function loadServer(){
ajax("../ServerApi.do?server=server","reLoadServer");}function reLoadServer(s){var json=JSON.parse(s);var html="名称："+json.name+"<br />Bukkit版本："+json.bukkitversion
+"<br />服务器版本："+json.version+"<br />视距："+json.view+"<br />在线人数："+json.player+"<br />tps："+json.tps;document.getElementById("data").innerHTML=html;for(var i=0;i<59;i++)
{tps[i]=tps[i+1];}tps[59]=parseFloat(json.tps);drawtps();setTimeout("loadServer()",5000);}function drawtps(){var data=[{name:'tps',value:tps,color:'#0d8ecf',line_width:2}];
var line=new iChart.LineBasic2D({render:'tpsline',data:data,align:'center',title:'tps',width:800,height:400,tip:{enable:true,shadow:true},legend:{enable:true,row:1,column:'max',
valign:'top',sign:'bar',background_color:null,border:true},crosshair:{enable:true,line_color:'#62bce9'},sub_option:{label:false,point_hollow:false},coordinate:{width:640,
height:240,axis:{color:'#9f9f9f',width:[0,0,2,2]},grids:{vertical:{way:'share_alike',value:5}},scale:[{position:'left',start_scale:0,max_scale:20,end_scale:20,scale_color:'#9f9f9f'
},{position:'bottom'}]}});line.setUp();line.draw();}var lookplayer;function loadplayer(s){lookplayer=s;ajax("../ServerApi.do?player="+s+"&token="+token,"reloadplayer");}function reloadplayer(s)
{document.getElementById("data").style.display="none";var json=JSON.parse(s);var http="<div class=\"bkback libk\">UUID："+json.uuid+"<br />附魔经验："+json.exp+"<br />附魔等级："
+json.level+"<br />血量："+json.health+"/"+json.maxhealth+"<br />饱食度："+json.fool+"<br />位置："+json.world+"("+json.x+","+json.y+","+json.z+")<br />OP："+json.op+"<br />"
+"<a href=\"javascript:()\" onclick=\"parent.showhttp2('html/admin/douser.jsp?user="+lookplayer+"');return false;\">管理</a></div><div class=\"bkback libk\">领地列表："
+"<table class=\"tablecss mt5\"><thead><tr><td width=\"50%\">领地名称"+"</td><td>所在世界</td></tr></thead>";for(var i=0;i<json.residence.length;i++){http=http+"<tr><td>"
+json.residence[i].name+"</td><td>"+json.residence[i].world+"</td></tr>";}http=http+"</table></div><div class=\"bkback libk\">地皮列表：<table class=\"tablecss mt5\">"
+"<thead><tr><td width=\"50%\">地皮ID</td><td>所在世界</td></tr></thead>";for(var i=0;i<json.plot.length;i++){http=http+"<tr><td>"+json.plot[i].idx+","+json.plot[i].idz
+"</td><td>"+json.plot[i].world+"</td></tr>";}http=http+"</table></div>";document.getElementById("obj").innerHTML=http;tableDescBtn();}