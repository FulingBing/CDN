﻿cz();function cz(){document.getElementById("namet").style.color="blue";document.getElementById("pwdt").style.color="blue";document.getElementById("namet").innerHTML="请输入你的用户名或邮箱";
document.getElementById("pwdt").innerHTML="请输入你的登陆密码";}function issubok(){var name=document.getElementById("name").value;var pwd=document.getElementById("pwd").value;var re=false;
if(name==""){document.getElementById("namet").style.color="red";document.getElementById("namet").innerHTML="账号不能为空";re=true;}if(pwd==""){document.getElementById("pwdt").style.color="red";
document.getElementById("pwdt").innerHTML="密码不能为空";re=true;}if(pwd.length<6){document.getElementById("pwdt").style.color="red";document.getElementById("pwdt").innerHTML="密码至少6位";re=true;}
return re;}function yz(){cz();if(issubok()){return;}var name=document.getElementById('name').value;var pwd=document.getElementById('pwd').value;pwd=encrypt(pwd);if(document.getElementById("autolog").checked)
{pwd=pwd+"&autolog=1";}else{pwd=pwd+"&autolog=0";}window.location.href='//'+objdata.bbs+'/html/other/login.jsp?id='+name+'&key='+pwd+tzhttp;}