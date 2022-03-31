var cm_edit_url="/bbs/editor/",cm_edit_menu_new=false,cm_edit_overlook="",cm_edit_lookhea=0,nrzs=0;var cm_edit_cdn="";
function cm_edit_loadcdn(){var js=document.scripts;cm_edit_cdn=js[js.length-1].src;
    
    cm_edit_cdn=cm_edit_cdn.substring(0,cm_edit_cdn.lastIndexOf('/'));
    cm_edit_cdn=cm_edit_cdn+"/";}cm_edit_loadcdn();
function cm_edit_selecttxt(p,s,o){
	var t=document.getElementById("cm_edit_txt");
	var ts=t.value;
	var st=t.selectionStart;
	var et=t.selectionEnd;
	if(st==et){
		var s1=ts.substring(0,st);
		var s2=ts.substring(st);
		t.value=s1+o+s2;
	}else{
		var s1=ts.substring(0,st);
		var s2=ts.substring(st,et);
		var s3=ts.substring(et);
		t.value=s1+p+s2+s+s3;
	}
	cm_edit_showlook();
}
function cm_edit_addtxt(s){
	var t=document.getElementById("cm_edit_txt");
	var ts=t.value;
	var st=t.selectionEnd;
	var s1=ts.substring(0,st);
	var s2=ts.substring(st);
	t.value=s1+s+s2;
	cm_edit_showlook();
}
function cm_edit_addtxtByDom(i,p,s){
	var t=document.getElementById(i).value;
	cm_edit_addtxt(p+t+s);
}
function cm_edit_showlook(){
	var t=document.getElementById("cm_edit_txt").value;
	cm_edit_showSize(t);
	t=strDelJs(t);
	var l=document.getElementById("cm_edit_look");
	if(l.style.display=="none"){
		return;
	}
	if(t==cm_edit_overlook){
		return;
	}
	cm_edit_overlook=t;
	t=bbcodeParser.bbcodeToHtml(t).replace(/\[br\]/g,"</br>");
	var converter=new showdown.Converter();
	t=converter.makeHtml(t);
	document.getElementById("cm_edit_look").innerHTML=t;
	hideshowobj();
	prettyPrint();
}
function cm_edit_look(){
	var l=document.getElementById("cm_edit_look");
	var t=document.getElementById("cm_edit_looktd");
	var b=document.getElementById("cm_edit_box");
	var o=document.getElementById("cm_edit_out");
	if(l.style.display=="none"){
		l.style.display="";
		t.style.width="820px";
		b.className="cm_edit_box";
		if(o){
			o.className=o.className+" cm_edit_out";
		}
	}else{
		l.style.display="none";
		t.style.width="0";
		b.className="cm_edit_boxn";
		if(o){
			o.className=o.className.replace(" cm_edit_out","");
		}
	}
	cm_edit_showlook();
}
function cm_edit_openMenu(o,h){
	var z=o.childNodes;
	if(z){
		for(var i=0;i<z.length;i++){
			if(z[i].className=="cm_edit_menu"){
				cm_edit_menu_new=false;
				cm_edit_closeMenu();
				return;
			}
		}
	}
	cm_edit_menu_new=false;
	cm_edit_closeMenu();
	cm_edit_menu_new=true;
	var n=document.createElement("div");
	n.className="cm_edit_menu";
	n.innerHTML=h;
	o.appendChild(n);
}
function cm_edit_closeMenu(){
	if(!cm_edit_menu_new){
		var o=document.getElementsByClassName("cm_edit_menu");
		if(o){
			for(var i=0;i<o.length;i++){
				var p=o[i].parentNode;
				p.removeChild(o[i]);
			}
		}
	}else{
		cm_edit_menu_new=false;
	}
}
function cm_edit_reSize(){
	if(navigator.userAgent.indexOf("Firefox")==-1){
		return;
	}
	if(document.getElementById("cm_edit_txt")){
		var h=document.getElementById("cm_edit_txt").offsetHeight+4;
		if(h!=cm_edit_lookhea){
			cm_edit_lookhea=h;
			document.getElementById("cm_edit_look").style.height=h+"px";
		}
		setTimeout("cm_edit_reSize()",300);
	}
}
if(document.body.addEventListener){
	document.body.addEventListener('click',function(e){
		cm_edit_closeMenu();
	},false);
}else{
	document.body.attachEvent("onclick",function(){
		cm_edit_closeMenu();
	});
}
function cm_edit_openDiv(t,h){
	document.getElementById("cm_edit_tit").innerHTML=t;
	document.getElementById("cm_edit_div").innerHTML=h;
	document.getElementById("cm_edit_bg").style.display="";
}
function cm_edit_closeDiv(){
	document.getElementById("cm_edit_tit").innerHTML="";
	document.getElementById("cm_edit_div").innerHTML="";
	document.getElementById("cm_edit_bg").style.display="none";
}
function cm_edit_openColor(o,s){
	cm_edit_openMenu(o,"<table border='0' cellspacing='0' cellpadding='0'><tr><td onclick=\"cm_edit_"+s+"('#E53333')\" bgcolor='#E53333' width='20' height='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#E56600')\" bgcolor='#E56600' width='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#FF9900')\" bgcolor='#FF9900' width='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#64451D')\" bgcolor='#64451D' width='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#DFC5A4')\" bgcolor='#DFC5A4' width='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#FFE500')\" bgcolor='#FFE500' width='20'>&nbsp;</td></tr><tr><td onclick=\"cm_edit_"+s+"('#009900')\" bgcolor='#009900' height='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#006600')\" bgcolor='#006600'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#99BB00')\" bgcolor='#99BB00'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#B8D100')\" bgcolor='#B8D100'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#60D978')\" bgcolor='#60D978'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#00D5FF')\" bgcolor='#00D5FF'>&nbsp;</td></tr><tr><td onclick=\"cm_edit_"+s+"('#337FE5')\" bgcolor='#337FE5' height='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#003399')\" bgcolor='#003399'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#4C33E5')\" bgcolor='#4C33E5'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#9933E5')\" bgcolor='#9933E5'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#CC33E5')\" bgcolor='#CC33E5'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#EE33EE')\" bgcolor='#EE33EE'>&nbsp;</td></tr><tr><td onclick=\"cm_edit_"+s+"('#FFFFFF')\" bgcolor='#FFFFFF' height='20'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#CCCCCC')\" bgcolor='#CCCCCC'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#999999')\" bgcolor='#999999'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#666666')\" bgcolor='#666666'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#333333')\" bgcolor='#333333'>&nbsp;</td><td onclick=\"cm_edit_"+s+"('#000000')\" bgcolor='#000000'>&nbsp;</td></tr></table>");
}
function cm_edit_strToUrl(u){
	if(u==""){
		return u;
	}
	var patt=/[a-zA-z]+:\/\/[^\s]*/;
	if(!patt.test(u)){
		u="http://"+u;
	}
	return u;
}
function cm_edit_openUrl(u){
	var f=document.getElementById("cm_edit_inif");
	if(f.src!="about:blank"){
		return;
	}
	document.getElementById('cm_edit_inim').style.display='';
	f.src=u;
}
function cm_edit_showSize(o){
	nrzs=o.length;
	var c=document.getElementById("word_count");
	if(c){
		c.innerHTML=nrzs;
	}
}
function cm_edit_upShow(){
	document.getElementById('cm_edit_inim').style.display='';
}
function cm_edit_openManager(t){
	var f=document.getElementById('cm_edit_mfbf');
	if(f.src!="about:blank"){
		return;
	}
	document.getElementById('cm_edit_mfbf').style.display='';
	f.src=cm_edit_url+"html/file_manager.jsp?"+t;
}
function cm_edit_jc(){
	cm_edit_selecttxt("**","**","**加粗**");
}
function cm_edit_qx(){
	cm_edit_selecttxt("*","*","*倾斜*");
}
function cm_edit_scx(){
	cm_edit_selecttxt("~~","~~","~~删除线~~");
}
function cm_edit_xhx(){
	cm_edit_selecttxt("[u]","[/u]","[u]下划线[/u]");
}
function cm_edit_sb(){
	cm_edit_selecttxt("[sup]","[/sup]","[sup]上标[/sup]");
}
function cm_edit_xb(){
	cm_edit_selecttxt("[sub]","[/sub]","[sub]下标[/sub]");
}
function cm_edit_wbys(o){
	cm_edit_openColor(o,"wbys_s");
}
function cm_edit_wbys_s(s){
	cm_edit_selecttxt("[color="+s+"]","[/color]","[color="+s+"]文本颜色[/color]");
}
function cm_edit_bjys(o){
	cm_edit_openColor(o,"bjys_s");
}
function cm_edit_bjys_s(s){
	cm_edit_selecttxt("[backcolor="+s+"]","[/backcolor]","[backcolor="+s+"]背景颜色[/backcolor]");
}
function cm_edit_zh(o){
	cm_edit_openMenu(o,"<div class='cm_edit_menu_z' style='font-size:9px' onclick=\"cm_edit_selecttxt('[size=9]','[/size]','[size=9]字号[/size]')\">9px</div><div class='cm_edit_menu_z' style='font-size:10px' onclick=\"cm_edit_selecttxt('[size=10]','[/size]','[size=10]字号[/size]')\">10px</div><div class='cm_edit_menu_z' style='font-size:12px' onclick=\"cm_edit_selecttxt('[size=12]','[/size]','[size=12]字号[/size]')\">12px</div><div class='cm_edit_menu_z' style='font-size:14px' onclick=\"cm_edit_selecttxt('[size=14]','[/size]','[size=14]字号[/size]')\">14px</div><div class='cm_edit_menu_z' style='font-size:16px' onclick=\"cm_edit_selecttxt('[size=16]','[/size]','[size=16]字号[/size]')\">16px</div><div class='cm_edit_menu_z' style='font-size:18px' onclick=\"cm_edit_selecttxt('[size=18]','[/size]','[size=18]字号[/size]')\">18px</div><div class='cm_edit_menu_z' style='font-size:24px' onclick=\"cm_edit_selecttxt('[size=24]','[/size]','[size=24]字号[/size]')\">24px</div><div class='cm_edit_menu_z' style='font-size:32px' onclick=\"cm_edit_selecttxt('[size=32]','[/size]','[size=32]字号[/size]')\">32px</div>");
}
function cm_edit_bt(o){
	cm_edit_openMenu(o,"<div class='cm_edit_menu_z' style='font-size:2em' onclick=\"cm_edit_selecttxt('\\n# ','\\n','\\n# h1\\n')\"><b>h1</b></div><div class='cm_edit_menu_z' style='font-size:1.5em' onclick=\"cm_edit_selecttxt('\\n## ','\\n','\\n## h2\\n')\"><b>h2</b></div><div class='cm_edit_menu_z' style='font-size:1.17em' onclick=\"cm_edit_selecttxt('\\n### ','\\n','\\n### h3\\n')\"><b>h3</b></div><div class='cm_edit_menu_z' style='font-size:1em' onclick=\"cm_edit_selecttxt('\\n#### ','\\n','\\n#### h4\\n')\"><b>h4</b></div><div class='cm_edit_menu_z' style='font-size:0.83em' onclick=\"cm_edit_selecttxt('\\n##### ','\\n','\\n##### h5\\n')\"><b>h5</b></div><div class='cm_edit_menu_z' style='font-size:0.67em' onclick=\"cm_edit_selecttxt('\\n###### ','\\n','\\n###### h6\\n')\"><b>h6</b></div>");
}
function cm_edit_dq(o){
	cm_edit_openMenu(o,"<div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[align=left]','[/align]','[align=left]对齐文本[/align]')\">左对齐</div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[align=center]','[/align]','[align=center]对齐文本[/align]')\">居中对齐</div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[align=right]','[/align]','[align=right]对齐文本[/align]')\">右对齐</div>");
}
function cm_edit_fd(o){
	cm_edit_openMenu(o,"<div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[float=left]','[/float]','[float=left]浮动文本[/float]')\">左浮动</div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[float=right]','[/float]','[float=right]浮动文本[/float]')\">右浮动</div>");
}
function cm_edit_lb(o){
	cm_edit_openMenu(o,"<div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('\\n1. ','\\n\\n','\\n1. 列表文本\\n\\n')\">有序列表</div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('\\n* ','\\n\\n','\\n* 列表文本\\n\\n')\">无序列表</div>");
}
function cm_edit_zt(o){
	cm_edit_openMenu(o,"<div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=宋体]','[/font]','[font=宋体]文本内容[/font]')\"><font face='宋体'>宋体</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=新宋体]','[/font]','[font=新宋体]文本内容[/font]')\"><font face='新宋体'>新宋体</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=黑体]','[/font]','[font=黑体]文本内容[/font]')\"><font face='黑体'>黑体</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=微软雅黑]','[/font]','[font=微软雅黑]文本内容[/font]')\"><font face='微软雅黑'>微软雅黑</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Arial]','[/font]','[font=Arial]文本内容[/font]')\"><font face='Arial'>Arial</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Verdana]','[/font]','[font=Verdana]文本内容[/font]')\"><font face='Verdana'>Verdana</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=simsun]','[/font]','[font=simsun]文本内容[/font]')\"><font face='simsun'>simsun</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Helvetica]','[/font]','[font=Helvetica]文本内容[/font]')\"><font face='Helvetica'>Helvetica</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Trebuchet MS]','[/font]','[font=Trebuchet MS]文本内容[/font]')\"><font face='Trebuchet MS'>Trebuchet MS</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Tahoma]','[/font]','[font=Tahoma]文本内容[/font]')\"><font face='Tahoma'>Tahoma</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Impact]','[/font]','[font=Impact]文本内容[/font]')\"><font face='Impact'>Impact</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=Times New Roman]','[/font]','[font=Times New Roman]文本内容[/font]')\"><font face='Times New Roman'>Times New Roman</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=仿宋,仿宋_GB2312]','[/font]','[font=仿宋,仿宋_GB2312]文本内容[/font]')\"><font face='仿宋,仿宋_GB2312'>仿宋,仿宋_GB2312</font></div><div class='cm_edit_menu_z' onclick=\"cm_edit_selecttxt('[font=楷体,楷体_GB2312]','[/font]','[font=楷体,楷体_GB2312]文本内容[/font]')\"><font face='楷体,楷体_GB2312'>楷体,楷体_GB2312</font></div>");
}
function cm_edit_yy(){
	cm_edit_openDiv("引用","<textarea id='cm_edit_t1' rows='9' class='cm_edit_ins cm_edit_ins_t cm_edit_inp' placeholder='请输入需要引用的文字'></textarea><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addtxtByDom('cm_edit_t1','[quote]','[/quote]');cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div>");
}
function cm_edit_dm(){
	cm_edit_openDiv("代码","<textarea id='cm_edit_t1' rows='9' class='cm_edit_ins cm_edit_ins_t cm_edit_inp' placeholder='请输入代码'></textarea><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addtxtByDom('cm_edit_t1','[code]','[/code]');cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div>");
}
function cm_edit_zd(){
	cm_edit_openDiv("折叠文字","<label class='label'>按钮上的文字</label><input type='text' id='cm_edit_t1' class='cm_edit_ins input'/><br /><textarea id='cm_edit_t2' rows='9' class='cm_edit_ins cm_edit_ins_t cm_edit_inp' placeholder='被折叠的文本'></textarea><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addzd();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div>");
}
function cm_edit_addzd(){
	var t=document.getElementById('cm_edit_t1').value;
	var s=document.getElementById('cm_edit_t2').value;
	if(t==""){
		cm_edit_addtxt('[spoiler'+']'+s+'[/spoiler]');
	}else{
		cm_edit_addtxt('[spoiler='+t+']'+s+'[/spoiler]');
	}
}
function cm_edit_lj(){
	cm_edit_openDiv("连接","<label class='label'>网址</label><input type='text' id='cm_edit_t2' class='cm_edit_ins input' placeholder='https://xxxxxx'/><br /><label class='label'>标题</label><input type='text' id='cm_edit_t1' class='cm_edit_ins input' placeholder='可不填'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addurl();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div>");
}
function cm_edit_addurl(){
	var u=cm_edit_strToUrl(document.getElementById('cm_edit_t2').value);
	if(u==""){
		return;
	}
	var t=document.getElementById('cm_edit_t1').value;
	if(t==""){
		t=u;
	}
	cm_edit_addtxt("["+t+"]("+u+")");
}
function cm_edit_bg(){
	cm_edit_openDiv("表格","<label class='label'>表格行数</label><input type='number' id='cm_edit_t1' class='cm_edit_ins input'/><br /><label class='label'>表格列数</label><input type='number' id='cm_edit_t2' class='cm_edit_ins input'/><br /><label class='label'>表格宽度</label><input type='number' id='cm_edit_t3' class='cm_edit_ins input' placeholder='可不填'/><br /><div onclick=\"cm_edit_openColor(this,'tabsetys')\"><label class='label'>背景颜色</label><input type='text' id='cm_edit_t4' class='cm_edit_ins input' placeholder='可不填'/></div><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addtab();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div>");
}
function cm_edit_addtab(){
	var h=document.getElementById('cm_edit_t1').value;
	var l=document.getElementById('cm_edit_t2').value;
	var k=document.getElementById('cm_edit_t3').value;
	var y=document.getElementById('cm_edit_t4').value;
	if(h=="" || l==""){
		return;
	}
	if(h<1 || l<1){
		return;
	}
	if(k==""){
		k="100%";
	}
	var t="[table="+k;
	if(y!=""){
		t=t+","+y;
	}
	t=t+"]\n";
	for(var i=0;i<h;i++){
		t=t+"[tr]";
		for(var j=0;j<l;j++){
			t=t+"[td] [/td]";
		}
		t=t+"[/tr]\n";
	}
	t=t+"[/table]";
	cm_edit_addtxt(t);
}
function cm_edit_tabsetys(s){
	document.getElementById('cm_edit_t4').value=s;
}
function cm_edit_bq(o,k){
	var l=k;
	var h="<div style='height:170px;overflow-y:scroll'><table width='0' border='0' cellspacing='0' cellpadding='0'>";
	for(var i=0;i<15;i++){
		h=h+"<tr>";
		for(var j=0;j<9;j++){
			h=h+"<td><img src='"+cm_edit_cdn+"img/"+l+".gif' width='30px' height='30px' class='cm_edit_menu_z' onclick=\"cm_edit_addtxt('![]("+cm_edit_cdn+"img/"+l+".gif =30x30)')\"/></td>";
			l++
		}
		h=h+"</tr>";
	}
	h=h+"</table><div>";
	cm_edit_openMenu(o,h);
}
function cm_edit_cheakTab(o,i){
	var t=document.getElementsByClassName("cm_edit_tea");
	for(var l=0;l<t.length;l++){
		t[l].style.borderBottom="1px #888888 solid";
	}
	o.style.borderBottom="1px #FFFFFF solid";
	var a=document.getElementsByClassName("cm_edit_teab");
	for(var l=0;l<a.length;l++){
		a[l].style.display="none";
	}
	document.getElementById(i).style.display="";
}
function cm_edit_tp(){
	cm_edit_openDiv("图片","<table border='0' cellspacing='0' cellpadding='0'><tr><td width='100' height='30'><div class='cm_edit_tea' style='border-bottom:1px #FFFFFF solid' onclick=\"cm_edit_cheakTab(this,'cm_edit_tp1')\">网络图片</div></td><td width='100'><div class='cm_edit_tea' onclick=\"cm_edit_cheakTab(this,'cm_edit_tp2');cm_edit_openUrl('"+cm_edit_url+"html/updata_btn.jsp?dir=image')\">本地上传</div></td></td><td width='100'><div class='cm_edit_tea' onclick=\"cm_edit_cheakTab(this,'cm_edit_tp3');cm_edit_openManager('type=image')\">文件空间</div></td></td><td><div class='cm_edit_tbg'>&nbsp;</div></td></td></tr><tr><td colspan='4'><div class='cm_edit_tbo'><div class='cm_edit_div cm_edit_teab' id='cm_edit_tp1'><label class='label'>图片网址</label><input type='text' id='cm_edit_t2' class='cm_edit_ins input' placeholder='https://xxxxxx'/><br /><label class='label'>图片描述</label><input type='text' id='cm_edit_t1' class='cm_edit_ins input' placeholder='可不填'/><br /><label class='label'>图片宽度</label><input type='number' id='cm_edit_t3' class='cm_edit_ins input' placeholder='可不填'/><br /><label class='label'>图片高度</label><input type='number' id='cm_edit_t4' class='cm_edit_ins input' placeholder='可不填'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addimg();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div></div><div class='cm_edit_div cm_edit_teab' style='display:none' id='cm_edit_tp2'><iframe onload=\"document.getElementById('cm_edit_inim').style.display='none'\" class='cm_edit_upd_f' src='about:blank' id='cm_edit_inif'>此浏览器不支持框架</iframe><div class='cm_edit_upd_b' id='cm_edit_inim'><img class='cm_edit_upd_m' src='"+cm_edit_cdn+"themes/loading.gif'/></div></div><div class='cm_edit_div cm_edit_teab' style='display:none' id='cm_edit_tp3'><div class='cm_edit_mfb'><iframe onload=\"document.getElementById('cm_edit_mfbm').style.display='none'\" class='cm_edit_mfb' src='about:blank' id='cm_edit_mfbf'>此浏览器不支持框架</iframe></div><div class='cm_edit_mfb_b' id='cm_edit_mfbm'><img class='cm_edit_mfb_m' src='"+cm_edit_cdn+"themes/loading.gif'/></div></div></div></td></tr></table>");
}
function cm_edit_addimg(){
	var u=cm_edit_strToUrl(document.getElementById('cm_edit_t2').value);
	if(u==""){
		return;
	}
	var t=document.getElementById('cm_edit_t1').value;
	if(t==""){
		t=u;
	}
	var w=document.getElementById('cm_edit_t3').value;
	var h=document.getElementById('cm_edit_t4').value;
	if(w=="" || h==""){
		cm_edit_addtxt("!["+t+"]("+u+")");
	}else{
		cm_edit_addtxt("!["+t+"]("+u+" ="+w+"x"+h+")");
	}
}
function cm_edit_sp(o){
	cm_edit_openDiv("视频","<table border='0' cellspacing='0' cellpadding='0'><tr><td width='100' height='30'><div class='cm_edit_tea' style='border-bottom:1px #FFFFFF solid' onclick=\"cm_edit_cheakTab(this,'cm_edit_yp1')\">网络视频</div></td><td width='100'><div class='cm_edit_tea' onclick=\"cm_edit_cheakTab(this,'cm_edit_yp3')\">a站视频</div></td><td width='100'><div class='cm_edit_tea' onclick=\"cm_edit_cheakTab(this,'cm_edit_yp2')\">b站视频</div></td><td><div class='cm_edit_tbg'>&nbsp;</div></td></tr><tr><td colspan='4'><div class='cm_edit_tbo'><div class='cm_edit_div cm_edit_teab' id='cm_edit_yp1'><label class='label'>视频网址</label><input type='text' id='cm_edit_t1' class='cm_edit_ins input' placeholder='https://xxxxxx'/><br /><label class='label'>视频宽度</label><input type='number' id='cm_edit_t2' class='cm_edit_ins input' placeholder='可不填'/><br /><label class='label'>视频高度</label><input type='number' id='cm_edit_t3' class='cm_edit_ins input' placeholder='可不填'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addsp();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div></div><div class='cm_edit_div cm_edit_teab' style='display:none' id='cm_edit_yp3'><label class='label'>视频的AC号</label><input type='number' id='cm_edit_t8' class='cm_edit_ins input' placeholder='xxxxxx'/><br /><label class='label'>视频宽度</label><input type='number' id='cm_edit_t9' class='cm_edit_ins input' placeholder='可不填'/><br /><label class='label'>视频高度</label><input type='number' id='cm_edit_t10' class='cm_edit_ins input' placeholder='可不填'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addazsp();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div></div><div class='cm_edit_div cm_edit_teab' style='display:none' id='cm_edit_yp2'><label class='label'>视频的BV号</label><input type='text' id='cm_edit_t4' class='cm_edit_ins input' placeholder='BVxxxxxx'/><br /><label class='label'>视频的P数</label><input type='text' id='cm_edit_t5' class='cm_edit_ins input' placeholder='可不填'/><br /><label class='label'>视频宽度</label><input type='number' id='cm_edit_t6' class='cm_edit_ins input' placeholder='可不填'/><br /><label class='label'>视频高度</label><input type='number' id='cm_edit_t7' class='cm_edit_ins input' placeholder='可不填'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addbzsp();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div></div></div></td></tr></table>");
}
function cm_edit_addsp(){
	var u=cm_edit_strToUrl(document.getElementById('cm_edit_t1').value);
	if(u==""){
		return;
	}
	var w=document.getElementById('cm_edit_t2').value;
	var h=document.getElementById('cm_edit_t3').value;
	var s="[video";
	if(w!=""){
		s=s+"="+w;
		if(h!=""){
			s=s+","+h;
		}
	}
	s=s+"]"+u+"[/video]";
	cm_edit_addtxt(s);
}
function cm_edit_addazsp(){
	var u=document.getElementById('cm_edit_t8').value;
	if(u==""){
		return;
	}
	var w=document.getElementById('cm_edit_t9').value;
	if(w==""){
		w=500;
	}
	var h=document.getElementById('cm_edit_t10').value;
	if(h==""){
		h=380;
	}
	cm_edit_addtxt("[video_a="+w+","+h+"]ac"+u+"[/video_a]");
}
function cm_edit_addbzsp(){
	var u=document.getElementById('cm_edit_t4').value;
	if(u.length<2){
		return;
	}
        if(u.substring(0,2)!="BV"){
            u="BV"+u;
        }
	var p=document.getElementById('cm_edit_t5').value;
	if(p==""){
		p=1;
	}
	var w=document.getElementById('cm_edit_t6').value;
	if(w==""){
		w=500;
	}
	var h=document.getElementById('cm_edit_t7').value;
	if(h==""){
		h=380;
	}
	cm_edit_addtxt("[video_b="+w+","+h+","+u+"]"+p+"[/video_b]");
}
function cm_edit_yp(o){
	cm_edit_openDiv("音频","<table border='0' cellspacing='0' cellpadding='0'><tr><td width='100' height='30'><div class='cm_edit_tea' style='border-bottom:1px #FFFFFF solid' onclick=\"cm_edit_cheakTab(this,'cm_edit_yp1')\">网络音频</div></td></td><td width='100'><div class='cm_edit_tea' onclick=\"cm_edit_cheakTab(this,'cm_edit_yp2')\">网易云外链</div></td></td><td><div class='cm_edit_tbg'>&nbsp;</div></td></td></tr><tr><td colspan='3'><div class='cm_edit_tbo'><div class='cm_edit_div cm_edit_teab' id='cm_edit_yp1'><label class='label'>音频网址</label><input type='text' id='cm_edit_t1' class='cm_edit_ins input' placeholder='https://xxxxxx'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addyp();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div></div><div class='cm_edit_div cm_edit_teab' style='display:none' id='cm_edit_yp2'><label class='label'>音频的ID</label><input type='number' id='cm_edit_t2' class='cm_edit_ins input' placeholder='xxxxxx'/><br /><input type='button' value='取消' class='cm_edit_ann button_r' onclick='cm_edit_closeDiv()'/><input type='button' value='确定' class='cm_edit_ann button_b' onclick=\"cm_edit_addwyy();cm_edit_closeDiv()\"/><div class='cm_edit_clear'></div></div></div></td></tr></table>");
}
function cm_edit_addyp(){
	var u=cm_edit_strToUrl(document.getElementById('cm_edit_t1').value);
	if(u==""){
		return;
	}
	cm_edit_addtxt("[audio]"+u+"[/audio]");
}
function cm_edit_addwyy(){
	var u=document.getElementById('cm_edit_t2').value;
	if(u==""){
		return;
	}
	cm_edit_addtxt("[music]"+u+"[/music]");
}
function cm_edit_fj(){
	cm_edit_openDiv("附件","<table border='0' cellspacing='0' cellpadding='0'><tr><td width='100' height='30'><div class='cm_edit_tea' style='border-bottom:1px #FFFFFF solid' onclick=\"cm_edit_cheakTab(this,'cm_edit_tp1');cm_edit_openUrl('"+cm_edit_url+"html/updata_btn.jsp?dir=file')\">本地上传</div></td></td><td width='100'><div class='cm_edit_tea' onclick=\"cm_edit_cheakTab(this,'cm_edit_tp2');cm_edit_openManager('type=file&js=parent.cm_edit_addtxt%28%27%5B%25name%25%5D%28%25url%25%29%27%29%3Bparent.cm_edit_closeDiv%28%29%3B')\">文件空间</div></td></td><td><div class='cm_edit_tbg'>&nbsp;</div></td></td></tr><tr><td colspan='3'><div class='cm_edit_tbo'><div class='cm_edit_div cm_edit_teab' id='cm_edit_tp1'><iframe onload=\"document.getElementById('cm_edit_inim').style.display='none'\" class='cm_edit_upd_f' src='about:blank' id='cm_edit_inif'>此浏览器不支持框架</iframe><div class='cm_edit_upd_b' id='cm_edit_inim'><img class='cm_edit_upd_m' src='"+cm_edit_cdn+"themes/loading.gif'/></div></div><div class='cm_edit_div cm_edit_teab' style='display:none' id='cm_edit_tp2'><div class='cm_edit_mfb'><iframe onload=\"document.getElementById('cm_edit_mfbm').style.display='none'\" class='cm_edit_mfb' src='about:blank' id='cm_edit_mfbf'>此浏览器不支持框架</iframe></div><div class='cm_edit_mfb_b' id='cm_edit_mfbm'><img class='cm_edit_mfb_m' src='"+cm_edit_cdn+"themes/loading.gif'/></div></div></div></td></tr></table>");
	cm_edit_openUrl(cm_edit_url+"html/updata_btn.jsp?dir=file");
}