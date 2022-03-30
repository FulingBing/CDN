var server_type="";function setServerTypeRe(i){var headtype=document.getElementsByClassName("headtype");if(i=="true"){headtype[0].alt="服务器正常运行";headtype[0].title="服务器正常运行";
headtype[0].innerHTML="🟢";}else if(i=="false"){headtype[0].alt="服务器没有运行";headtype[0].title="服务器没有运行";headtype[0].innerHTML="🟠";}else
{headtype[0].alt="无法获取服务器运行状态，请稍后重试";headtype[0].title="无法获取服务器运行状态，请稍后重试";headtype[0].innerHTML="🟡";}server_type=headtype[0].title;}
function setServerType(){var headtype=document.getElementsByClassName("headtype");if(objdata.stop=="true"){headtype[0].alt="服务器正在维护";headtype[0].title="服务器正在维护";
headtype[0].src="img/server_time.png";}else{ajax("//"+objdata.bbs+"/ServerApi.do?game=game","setServerTypeRe");}}setServerType();