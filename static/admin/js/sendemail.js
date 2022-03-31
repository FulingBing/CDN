function additem(){
	document.getElementById('add').style.display='';
	document.getElementById("itemid").focus();
}
function clearitem(){
	EjectConfirm('确定要这么做吗？',function(){document.getElementById("item").value="";});
}
function addItem(){
	var itemid=document.getElementById("itemid");
	var itemzid=document.getElementById("itemzid");
	var itemnum=document.getElementById("itemnum");
	var itemname=document.getElementById("itemname");
	var itemlore=document.getElementById("itemlore");
	var itemnbtstr=document.getElementById("itemnbtstr");
	var itemnbtint=document.getElementById("itemnbtint");
	var itemnbtflo=document.getElementById("itemnbtflo");
	var itemnbtboo=document.getElementById("itemnbtboo");
	if(itemid.value==""){
		return;
	}
	var str="item:\r\n-id:"+itemid.value;
	if(itemzid.value!=""){
		str=str+"\r\n-zid:"+itemzid.value;
	}
	if(itemnum.value!=""){
		str=str+"\r\n-num:"+itemnum.value;
	}
	if(itemname.value!=""){
		str=str+"\r\n-name:"+itemname.value;
	}
	if(itemlore.value!=""){
		str=str+"\r\n-lore:"+itemlore.value.replace(RegExp("<br>", "g"),"\r\n-lore:");
	}
	if(itemnbtstr.value!=""){
		str=str+"\r\n-nbtstr:"+itemnbtstr.value.replace(RegExp("<br>", "g"),"\r\n-nbtstr:");
	}
	if(itemnbtint.value!=""){
		str=str+"\r\n-nbtint:"+itemnbtint.value.replace(RegExp("<br>", "g"),"\r\n-nbtint:");
	}
	if(itemnbtflo.value!=""){
		str=str+"\r\n-nbtflo:"+itemnbtflo.value.replace(RegExp("<br>", "g"),"\r\n-nbtflo:");
	}
	if(itemnbtboo.value!=""){
		str=str+"\r\n-nbtboo:"+itemnbtboo.value.replace(RegExp("<br>", "g"),"\r\n-nbtboo:");
	}
	var old=document.getElementById("item").value;
	if(old!=""){
		str=old+"\r\n"+str;
	}
	document.getElementById("item").value=str;
	itemid.value="";
	itemzid.value="";
	itemnum.value="";
	itemname.value="";
	itemlore.value="";
	itemnbtstr.value="";
	itemnbtint.value="";
	itemnbtflo.value="";
	itemnbtboo.value="";
	document.getElementById('add').style.display='none';
}