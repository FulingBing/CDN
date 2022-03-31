function ajax(http,str){
    if(http===""){return "";}if(str===""){str="yhbyfunction";}
    var fun=function(resData){
	var obj=resData;
	eval(str+"(obj)");
    };
    sendajax(http,"",fun,fun);
}
function sendajax(http,data,okfun,errfun){
    http=encodeURI(http);
    var xmlhttp;
    if(window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
    }else{
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState===4){
	    if(xmlhttp.status===200){
		okfun(xmlhttp.responseText);
	    }else{
		errfun(xmlhttp.status);
	    }
	}
    };
    if(data===""){
	xmlhttp.open("GET",http,true);
	xmlhttp.send();
    }else{
	xmlhttp.open("POST",http,true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.send(data);
    }
}
function yhbyfunction(i){}