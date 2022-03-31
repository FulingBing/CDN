//加载或重新加载验证码验证码
//[控件的name],[验证码类型],[验证成功的回调函数],[取消验证的回调函数]
function loadCaptcha(){
	var name,type,tcallback,ccallback;var i=arguments.length;if(i>=1){name=arguments[0];}else{name="reCaptcha";}if(i>=2){type=arguments[1];}else{type=1;}if(i>=3){tcallback=arguments[2];}
	else{tcallback=function(){};}if(i>=4){ccallback=arguments[3];}else{ccallback=function(){};}c_reCaprcha(name,type);c_putCaptchaFun(name,tcallback);c_putCaptchaCen(name,ccallback);
}
//刷新验证码
//控件的name
function reloadCaptcha(name){
	var j=JSON.parse(getCaptchaInfo(name));c_reCaprcha(name,j.type);
}
//开始验证(获取验证码阶段)
//控件的name
function runCaptcha(name){
	if(isPassCaptcha(name)){return false;}c_closeCaptchaWin();var f=document.getElementsByName(name);if(f.length===0){return false;}c_showCaptcha(f,3);c_setdate();c_getdate();
	var t=c_getCaptchaType(f[0]);if(t===""){c_setCaptchaErr(f);}sendajax("/bbs/CaptchaApi.do?lx=get&type="+t,c_data,function(i){c_ajaxCaptcha(i,name);},function(j){c_setCaptchaErr(f);});
}
//开始验证(提交验证码阶段)
//验证码key,处理后的待提交的验证码数据,控件name,验证失败的回调函数
function yzCaptcha(key,value,name,fune){
	sendajax("/bbs/CaptchaApi.do","lx=yz&key="+key+"&value="+value+"&t="+c_captchatime()+"&m="+c_getmouse(),function(i){c_yzCaptcha(i,name,key,fune);},function(j){c_setCaptchaErr(f);});
}
//是否通过了验证
//控件的name
function isPassCaptcha(name){
	var n=document.getElementsByName(name);if(n.length===0){return false;}var c=n[0].firstChild;if(c){return c.value!=="";}return false;
}
//显示验证窗口
//窗口宽度,窗口高度
function showCaptchaWin(w,h){
	var maxh=window.self.document.documentElement.scrollHeight-74;if(h>maxh){h=maxh;w=w+c_scrollw();}
	var b=document.getElementById("captchaBgDiv");var i=document.getElementById("captchaIfrmae");i.style.width=w+"px";i.style.height=h+"px";b.style.display="";
}
//隐藏验证窗口
function hideCaptchaWin(){
	var b=document.getElementById("captchaBgDiv");b.style.display="none";
}
//验证码错误
//控件的name
function errCaptcha(name){
	var f=document.getElementsByName(name);c_showCaptcha(f,2);
}
//获取验证码的key和类型
//控件的name
function getCaptchaInfo(name){
	var n=document.getElementsByName(name);if(n.length===0){return "{\"key\":\"\",\"type\":\"\"}";}var c=n[0].children;if(c && c.length===3){return "{\"key\":\""+c[0].value+"\",\"type\":\""+c[1].value+"\"}";}return "{\"key\":\"\",\"type\":\"\"}";
}
//取消验证
function cenCaptcha(name){
	var json=JSON.parse(getCaptchaInfo(name));c_closeCaptchaWin();c_reCaprcha(name,json.type);c_runCaptchaCen(name);
}
//获取验证码的key
//控件的name
function getCaptchaKey(name){
	var j=JSON.parse(getCaptchaInfo(name));return j.key;
}
var c_utc=(new Date()).getTime()+((new Date()).getTimezoneOffset())*60000+28800000;var capt_cdn="";function c_loadcdn(){var js=document.scripts;capt_cdn=js[js.length-1].src;capt_cdn=capt_cdn.substring(0,capt_cdn.lastIndexOf('/'));capt_cdn=capt_cdn.substring(0,capt_cdn.lastIndexOf('/'));capt_cdn=capt_cdn.substring(0,capt_cdn.lastIndexOf('/'));capt_cdn=capt_cdn+"/";}c_loadcdn();var c_data="";var c_mouse=new Array();var c_event=false,c_evot,c_evol;
var c_captname="";function c_yzCaptcha(json,name,key,fune){var obj=JSON.parse(json);var f=document.getElementsByName(name);if(obj.error==="false"){c_setCaptchaOk(f,key);c_runCaptchaFun(name);}else{fune();}}function c_getCaptchaDom(n){var c=n.children;if(c && c.length===3){var r=c[2].children;if(r && r.length===5){return r;}}return null;}function c_getCaptchaType(n){var c=n.children;if(c && c.length===3){return c[1].value;}return "";}
function c_captchatime(){return (new Date(c_utc)).valueOf();}function c_setCaptchaOk(f,tk){for(var i=0;i<f.length;i++){f[i].firstChild.value=tk;}c_showCaptcha(f,1);}function c_showCaptcha(f,id){c_closeCaptchaWin();for(var i=0;i<f.length;i++){var c=c_getCaptchaDom(f[i]);for(var j=0;j<c.length;j++){if(j===id){c[j].style.display="";}else{c[j].style.display="none";}}}}function c_showCaptchaByName(name,id){var f=document.getElementsByName(name);
c_showCaptcha(f,id);}var c_CaptchaFunF=new Array();var c_CaptchaFunI=new Array();function c_putCaptchaFun(n,func){for(var i=0;i<c_CaptchaFunI.length;i++){if(c_CaptchaFunI[i]===n){c_CaptchaFunF[i]=func.toString();return;}}c_CaptchaFunI[c_CaptchaFunI.length]=n;c_CaptchaFunF[c_CaptchaFunI.length]=func.toString();}var c_CaptchaCenF=new Array();var c_CaptchaCenI=new Array();function c_putCaptchaCen(n,func){for(var i=0;i<c_CaptchaCenI.length;i++)
{if(c_CaptchaCenI[i]===n){c_CaptchaCenF[i]=func.toString();return;}}c_CaptchaCenI[c_CaptchaCenI.length]=n;c_CaptchaCenF[c_CaptchaCenI.length]=func.toString();}function c_runCaptchaFun(n){for(var i=0;i<c_CaptchaFunI.length;i++){if(c_CaptchaFunI[i]===n){eval(c_CaptchaFunF[i]);return;}}}function c_runCaptchaCen(n){for(var i=0;i<c_CaptchaCenI.length;i++){if(c_CaptchaCenI[i]===n){eval(c_CaptchaCenF[i]);return;}}}
function c_reCaprcha(name,type){var nl=document.getElementsByName(name);var html="<input type='hidden' name='captchaToken' value=''/>"+"<input type='hidden' name='captchaType' value='"+type+"'/>"+"<div class='captchabody'>"+"<div class='capt_click' onclick=\"runCaptcha('"+name+"')\"><div class='capt_img_box capt_img_noc'><div class='capt_img capt_loc'></div></div><div class='capt_txt_box capt_txt_noc'>　单击此处进行人机验证</div></div>"
+"<div style='display:none'><div class='capt_img_box capt_img_passc'><div class='capt_img capt_loc'></div></div><div class='capt_txt_box capt_txt_passc'>　验证通过</div></div>"+"<div style='display:none'><div class='capt_img_box capt_img_erc'><div class='capt_img capt_loc'></div></div><div class='capt_txt_box capt_txt_erc'>　服务器繁忙，请刷新重试</div></div>"+"<div style='display:none'><div class='capt_img_box capt_img_doc'>"
+"<img src='"+capt_cdn+"img/loadimg.png' width='24' height='24' class='load_img capt_loc'/></div><div class='capt_txt_box capt_txt_doc'>　少女祈祷中...</div></div>"+"<div style='display:none'><div class='capt_img_box capt_img_erc'><div class='capt_img capt_loc'></div></div><div class='capt_txt_box capt_txt_erc'>　操作过于频繁，请稍后重试</div></div>"+"</div>";for(var i=0;i<nl.length;i++){nl[i].innerHTML=html;}}function c_ajaxCaptcha(json,name)
{var obj=JSON.parse(json);var f=document.getElementsByName(name);if(obj.error==="true"){c_showCaptcha(f,2);}if(obj.error==="time"){c_showCaptcha(f,4);setTimeout(function(){c_showCaptcha(f,0);},3000);}if(obj.error==="false"){c_captname=name;document.getElementById("captchaIfrmae").src="/bbs/html/captcha/captcha.jsp?key="+obj.key+"&name="+name+"&t="+c_captchatime();}}document.write("<div id='captchaBgDiv' class='capt_bk_box' style='display:none'>"
+"<table style='width:100vw;height:100vh' border='0' cellpadding='0' cellspacing='0'><tr><td align='center' valign='middle'>"+"<div class='capt_body_div'><div class='capt_body_bb'><div class='capt_body_bt ende cupo flor' style='background-image:url("+capt_cdn+"img/captcha/close.png)' onclick='cenCaptcha(c_captname)'></div><div class='capt_body_bt cupo flor' style='background-image:url("+capt_cdn+"img/captcha/reload.png)' onclick='c_closeCaptchaWin();"
+"runCaptcha(c_captname)'></div><div class='flol'>请完成安全验证</div><div class='capt_body_bt ende cupo flol' style='background-image:url("+capt_cdn+"img/captcha/help.png)' onclick=\"window.open('/bbs/')\"></div></div><div class='capt_body_if'><iframe id='captchaIfrmae' onload='c_loadif(this)' src='about:blank' class='openi'>此浏览器不支持iframe框架</iframe></div></div>"+"</td></tr></table></div>");function c_closeCaptchaWin(){hideCaptchaWin();
document.getElementById("captchaIfrmae").src="about:blank";}function c_getpoint(){if(c_event){var e=c_event || window.event;var x=parseInt(e.clientX+c_evol);var y=parseInt(e.clientY+c_evot);var p=new Array(x,y);var l=c_mouse.length;if(l>=50){l--;for(var i=0;i<l;i++){c_mouse[i]=c_mouse[i+1];}c_mouse[l]=p;}else{c_mouse[l]=p;}}setTimeout("c_getpoint()",100);}c_getpoint();function c_putmouse(event,ot,ol){c_event=event;c_evot=ot;
c_evol=ol;}document.body.addEventListener("mousemove",function(event){c_putmouse(event,0,0);},false);function c_loadif(k){var ot=k.offsetTop;var ol=k.offsetLeft;k.contentWindow.document.body.addEventListener("mousemove",function(event){c_putmouse(event,ot,ol);},false);}var _0x240b=['JnM9','WGNCVnA=','Z2V0VGltZQ==','U0FFZlc=','VXJlQUg=','ZUxraVY=','c2NyZWVu','d2lkdGg=','ZUlBYk0=','T3VtVGQ=','aGVpZ2h0','REpNaVU=','TlZFc0g=','YnZqS2U=',
'dG9TdHJpbmc=','M3w0fDF8Mnw2fDB8N3w1','WkR3dVc=','bGVuZ3Ro','SllNaWI=','c3FLSEI=','bmZCSm0=','dmZzRXA=','TlV1ZW4=','ZnpTdmk=','c3BsaXQ=','RExRWWk=','aW5kZXhPZg==','cmVwbGFjZQ==','YnRvYQ==','Jm09'];(function(_0x31af35,_0x20f0dd){var _0x198ab8=function(_0x1c0208){while(--_0x1c0208){_0x31af35['push'](_0x31af35['shift']());}};_0x198ab8(++_0x20f0dd);}(_0x240b,0x11d));var _0x5eaf=function(_0x3579f7,_0x3a70c2){_0x3579f7=_0x3579f7-0x0;
var _0xd415a0=_0x240b[_0x3579f7];if(_0x5eaf['uWBwAK']===undefined){(function(){var _0x17dc1b=function(){var _0x5f5880;try{_0x5f5880=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x4335b4){_0x5f5880=window;}return _0x5f5880;};var _0x41e6ac=_0x17dc1b();var _0x1bdb9f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x41e6ac['atob']||(_0x41e6ac['atob']=function(_0x5cdd8f){
var _0x2ca8a4=String(_0x5cdd8f)['replace'](/=+$/,'');for(var _0x4f5884=0x0,_0x320f47,_0x399149,_0x350e0c=0x0,_0x1efc9c='';_0x399149=_0x2ca8a4['charAt'](_0x350e0c++);~_0x399149&&(_0x320f47=_0x4f5884%0x4?_0x320f47*0x40+_0x399149:_0x399149,_0x4f5884++%0x4)?_0x1efc9c+=String['fromCharCode'](0xff&_0x320f47>>(-0x2*_0x4f5884&0x6)):0x0){_0x399149=_0x1bdb9f['indexOf'](_0x399149);}return _0x1efc9c;});}());_0x5eaf['dcrEod']=function(_0x371c64){
var _0x54be62=atob(_0x371c64);var _0x4a79bf=[];for(var _0x530179=0x0,_0x6e51f=_0x54be62['length'];_0x530179<_0x6e51f;_0x530179++){_0x4a79bf+='%'+('00'+_0x54be62['charCodeAt'](_0x530179)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4a79bf);};_0x5eaf['wYbIFH']={};_0x5eaf['uWBwAK']=!![];}var _0x2995d5=_0x5eaf['wYbIFH'][_0x3579f7];if(_0x2995d5===undefined){_0xd415a0=_0x5eaf['dcrEod'](_0xd415a0);_0x5eaf['wYbIFH'][_0x3579f7]=_0xd415a0;
}else{_0xd415a0=_0x2995d5;}return _0xd415a0;};function c_getmouse(){var _0x31f701={'ZDwuW':function(_0x783399,_0x4e4285){return _0x783399<_0x4e4285;},'JYMib':function(_0x31e137,_0x48f986){return _0x31e137!==_0x48f986;},'sqKHB':function(_0x252f86,_0x166f91){return _0x252f86+_0x166f91;},'nfBJm':function(_0x1244a3,_0x14a114){return _0x1244a3+_0x14a114;},'vfsEp':function(_0x5a7ce8,_0x4b8ac9){return _0x5a7ce8+_0x4b8ac9;},'NUuen':function(_0x3415d5,_0xee930a){
return _0x3415d5>_0xee930a;},'fzSvi':_0x5eaf('0x0'),'DLQYi':function(_0x70e83e,_0x2d6c3a){return _0x70e83e-_0x2d6c3a;}};var _0x766c28='';for(var _0x25da31=0x0;_0x31f701[_0x5eaf('0x1')](_0x25da31,c_mouse[_0x5eaf('0x2')]);_0x25da31++){if(_0x31f701[_0x5eaf('0x3')](_0x25da31,0x0)){_0x766c28=_0x31f701[_0x5eaf('0x4')](_0x766c28,';');}_0x766c28=_0x31f701[_0x5eaf('0x5')](_0x31f701[_0x5eaf('0x5')](_0x31f701[_0x5eaf('0x6')](_0x766c28,c_mouse[_0x25da31][0x0]),','),
c_mouse[_0x25da31][0x1]);}if(_0x31f701[_0x5eaf('0x7')](c_mouse[_0x5eaf('0x2')],0x0)){var _0x11c679=_0x31f701[_0x5eaf('0x8')][_0x5eaf('0x9')]('|'),_0x3eaca0=0x0;while(!![]){switch(_0x11c679[_0x3eaca0++]){case'0':for(var _0x25da31=0x1;_0x31f701[_0x5eaf('0x1')](_0x25da31,_0x14d6be[_0x5eaf('0x2')]);_0x25da31+=0x2){var _0x24c215=_0x14d6be[_0x25da31];_0x14d6be[_0x25da31]=_0x14d6be[_0x31f701[_0x5eaf('0xa')](_0x25da31,0x1)];
_0x14d6be[_0x31f701[_0x5eaf('0xa')](_0x25da31,0x1)]=_0x24c215;}continue;case'1':while(_0x31f701[_0x5eaf('0x3')](_0x766c28[_0x5eaf('0xb')]('='),-0x1)){_0x766c28=_0x766c28[_0x5eaf('0xc')]('=','');_0x3b0cf3++;}continue;case'2':_0x766c28=_0x31f701[_0x5eaf('0x6')](_0x3b0cf3,_0x766c28);continue;case'3':_0x766c28=window[_0x5eaf('0xd')](_0x766c28);continue;case'4':var _0x3b0cf3=0x0;continue;case'5':for(var _0x25da31=0x0;
_0x31f701[_0x5eaf('0x1')](_0x25da31,_0x14d6be[_0x5eaf('0x2')]);_0x25da31++){_0x766c28+=_0x14d6be[_0x25da31];}continue;case'6':var _0x14d6be=_0x766c28[_0x5eaf('0x9')]('');continue;case'7':_0x766c28='';continue;}break;}}return _0x766c28;}function c_setdate(){var _0x566a79={'XcBVp':function(_0x4b84ec){return _0x4b84ec();},'SAEfW':function(_0x924c2,_0x4b1768,_0x143d4e){return _0x924c2(_0x4b1768,_0x143d4e);},'UreAH':function(_0x36b5f3,_0x1552ce){
return _0x36b5f3+_0x1552ce;},'eLkiV':function(_0x204b63,_0x3e5c30){return _0x204b63+_0x3e5c30;},'eIAbM':function(_0x1a97e8,_0x43cb9c,_0x3c4943){return _0x1a97e8(_0x43cb9c,_0x3c4943);},'OumTd':function(_0x5ab15e,_0x4298ff){return _0x5ab15e+_0x4298ff;},'DJMiU':function(_0x5c37c2,_0x5a14c1){return _0x5c37c2+_0x5a14c1;},'NVEsH':_0x5eaf('0xe'),'bvjKe':_0x5eaf('0xf')};var _0x4cf3c7='',_0x184794=_0x566a79[_0x5eaf('0x10')](c_getmouse),_0x2bd217='',
_0x46a7a5=new Date(c_utc)[_0x5eaf('0x11')]();_0x4cf3c7=_0x566a79[_0x5eaf('0x12')](c_code,_0x46a7a5,0x1a);_0x2bd217=_0x566a79[_0x5eaf('0x13')](_0x566a79[_0x5eaf('0x14')](_0x566a79[_0x5eaf('0x12')](c_code,_0x566a79[_0x5eaf('0x14')](window[_0x5eaf('0x15')][_0x5eaf('0x16')],_0x46a7a5),0x19),','),_0x566a79[_0x5eaf('0x17')](c_code,_0x566a79[_0x5eaf('0x18')](window[_0x5eaf('0x15')][_0x5eaf('0x19')],_0x46a7a5),0x18));
c_data=_0x566a79[_0x5eaf('0x18')](_0x566a79[_0x5eaf('0x1a')](_0x566a79[_0x5eaf('0x1a')](_0x566a79[_0x5eaf('0x1a')](_0x566a79[_0x5eaf('0x1a')]('t=',_0x4cf3c7),_0x566a79[_0x5eaf('0x1b')]),_0x184794),_0x566a79[_0x5eaf('0x1c')]),_0x2bd217);}function c_code(_0x3125a0,_0x55dc0c){var _0x1c4ec4;_0x1c4ec4=window[_0x5eaf('0xd')](_0x3125a0[_0x5eaf('0x1d')](_0x55dc0c));return _0x1c4ec4;}function c_scrollw(){var el=document.createElement("p"),
styles={width:"100px",height:"100px",overflowY:"scroll"},i;for(i in styles){el.style[i]=styles[i];}document.body.appendChild(el);var scrollBarWidth=el.offsetWidth-el.clientWidth;el.remove();return scrollBarWidth+2;}var j0_a=['w5VfwqvCiAw=','wqRRdA==','AMKDMsKJbcOZKQt0MMOL','SsK3asOZwpU=','w54ww7sgRg==','N8OMdMOyfXLCusKBwqI=','QkTDt8KSR8Oewr00HQ==','QE0UwrHDgxp+ABE=','ImHDs0A3','w4zCncOAw73Drw==','w4vCj8OYCsO5','wrzCjBbDt8Kd','w6tSLUHCv8OHXQ==',
'wpbCsMOzw5pU','fcOZK8ONOsKnw75jw4c=','WMO8w5/ClhM='];(function(a,b){var e=function(f){while(--f){a['push'](a['shift']());}};e(++b);}(j0_a,0x73));var j0_b=function(a,b){a=a-0x0;var c=j0_a[a];if(j0_b['SCDCyp']===undefined){(function(){var f;try{var h=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');f=h();}catch(i){f=window;}var g='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
f['atob']||(f['atob']=function(j){var k=String(j)['replace'](/=+$/,'');var l='';for(var m=0x0,n,o,p=0x0;o=k['charAt'](p++);~o&&(n=m%0x4?n*0x40+o:o,m++%0x4)?l+=String['fromCharCode'](0xff&n>>(-0x2*m&0x6)):0x0){o=g['indexOf'](o);}return l;});}());var e=function(f,g){var h=[],l=0x0,m,n='',o='';f=atob(f);for(var q=0x0,r=f['length'];q<r;q++){o+='%'+('00'+f['charCodeAt'](q)['toString'](0x10))['slice'](-0x2);}f=decodeURIComponent(o);var p;
for(p=0x0;p<0x100;p++){h[p]=p;}for(p=0x0;p<0x100;p++){l=(l+h[p]+g['charCodeAt'](p%g['length']))%0x100;m=h[p];h[p]=h[l];h[l]=m;}p=0x0;l=0x0;for(var t=0x0;t<f['length'];t++){p=(p+0x1)%0x100;l=(l+h[p])%0x100;m=h[p];h[p]=h[l];h[l]=m;n+=String['fromCharCode'](f['charCodeAt'](t)^h[(h[p]+h[l])%0x100]);}return n;};j0_b['wixBfd']=e;j0_b['SlBTLn']={};j0_b['SCDCyp']=!![];}var d=j0_b['SlBTLn'][a];if(d===undefined){if(j0_b['pYuZXe']===undefined){j0_b['pYuZXe']=!![];}
c=j0_b['wixBfd'](c,b);j0_b['SlBTLn'][a]=c;}else{c=d;}return c;};function c_getdate(){var a={'CWyfC':j0_b('0xf','$[UJ'),'BqnGE':function(h,i){return h+i;},'FFYXO':function(h,i){return h(i);},'bbAfT':function(h,i){return h+i;},'GpokL':function(h,i){return h+i;},'wIGBV':function(h,i){return h+i;},'nunub':j0_b('0xe','anCh')};var b=a['CWyfC'][j0_b('0x1','n&Z*')]('|');var c=0x0;while(!![]){switch(b[c++]){case'0':var d=c_data[j0_b('0x3','Ig1D')](0x2,g);
continue;case'1':var e=c_data[j0_b('0xb','!DV]')](a[j0_b('0x6','i0jC')](g,0x3));continue;case'2':var f=a[j0_b('0x8','xmr(')](md5,a[j0_b('0xa','oyrV')](d+e[j0_b('0x2','XY[U')](0x0,0x2),'jbg'));continue;case'3':c_data=a[j0_b('0xc','bG(^')](a[j0_b('0x0','#MG0')](a['GpokL'](a[j0_b('0xd','ge#k')]('t=',d),a[j0_b('0x7','h6^W')]),f),e);continue;case'4':f=a[j0_b('0x8','xmr(')](md5,a[j0_b('0x5','sytr')](d,f))[j0_b('0x4','5RKB')](0x0,0x3);continue;case'5':
var g=c_data[j0_b('0x9','anCh')]('&m=');continue;}break;}}
