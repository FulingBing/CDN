var up_day=1;function getRex(s){var rex=new Array("<","'","\"","\\","/","?","&");for(var i=0;i<rex.length;i++){if(s.indexOf(rex[i])>-1){return true;}}return false;}function reajax(i){parent.readhtml();}function fw(){
up_day=1;document.getElementById("day").selectedIndex=0;}function xz(){var i=document.getElementById("day").selectedIndex;if(i==0){up_day=1;return;}if(i==1){up_day=3;return;}if(i==2){up_day=7;return;}if(i==3){fw();
EjectPrompt("请输入提升主题的天数（1-999）",function(str){if(str.length>3){alert("无效的输入");return;}var res=/^[0-9]\d*$/;if(!res.test(str)){alert("无效的输入");return;}str=str-0;if(str<1 || str>999){alert("无效的输入");return;}
up_day=str;document.getElementById("day").selectedIndex=3;});}}function down(id,tk){EjectPrompt("执行这个操作的原因（20个字符以内）",function(ls){if(ls.length>20){alert("内容必须在20个字符以内");
return;}if(getRex(ls)){alert("请勿包含特殊字符：< ' \" \\ / ? &");return;}stopall();ajax("../../SetTz.do?id="+id+"&type=newtime&value=0&lx=zt"+tk+"&set=21&ly="+ls,"reajax");});}function up(id,tk){EjectPrompt("执行这个操作的原因（20个字符以内）",
function(ls){if(ls.length>20){alert("内容必须在20个字符以内");return;}if(getRex(ls)){alert("请勿包含特殊字符：< ' \" \\ / ? &");return;}up_day=up_day*24*60*60*1000;var utc=(new Date()).getTime()+((new Date()).getTimezoneOffset())*60000+28800000;
var nt=(new Date(utc)).valueOf();nt=nt-0+up_day;stopall();ajax("../../SetTz.do?id="+id+"&type=newtime&value="+nt+"&lx=zt"+tk+"&set=20&ly="+ls,"reajax");});}