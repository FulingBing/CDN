var t=0;function retime(){t--;var s="";if(t>0){s="（"+s+"）";}document.getElementById("emailbtn").value="发送邮箱验证码"+s;if(t>0){setTimeout("retime()",1000);}}function getyzm(){var btn=document.getElementById("emailbtn");
if(btn.value!=="发送邮箱验证码"){return;}var p=document.getElementById("pwd").value;var e=document.getElementById("email").value;if(p=="" || e==""){alert('内容不能为空');return;}p=md5(p);btn.value="正在发送";
ajax("../../SetEmail.do?pwd="+p+"&email="+e+"&token="+getCaptchaKey("reCaptcha"),"regetyzm");}function regetyzm(i){t=1;if(i=="false"){alert('服务器内部错误');}else if(i=="pwd"){alert('密码错误');}else if(i=="email"){
alert('此邮箱不可用，请使用其它邮箱');}else if(i=="yzm"){alert('请点击验证码进行人机验证');}else{t=60;getEmail(i);}retime();reloadCaptcha("reCaptcha");}function setYx(){var p=document.getElementById("pwd").value;var e=document.getElementById("email").value;
var y=document.getElementById("yzm").value;if(p=="" || e=="" || y==""){alert('内容不能为空');return;}p=md5(p);stopall();ajax("../../SetEmail.do?pwd="+p+"&email="+e+"&yzm="+y,"resetYx");}function resetYx(i){if(i=="false"){
alert('服务器内部错误');}else if(i=="pwd"){alert('密码错误');}else if(i=="email"){alert('此邮箱不可用，请使用其它邮箱');}else if(i=="yzm"){alert('验证码错误');}else{alert('操作成功');window.location.href='../admin/safe.jsp';return;}showall();}