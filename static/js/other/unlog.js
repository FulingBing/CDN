function unlogin(s){var un=document.getElementById("unlogin");if(un.innerHTML!="<b>退出</b>"){return;}else{un.innerHTML="<b>退出中</b>";}ajax("UnLoginApi.do?token="+s,"relogajax");}function relogajax(i){setCookie("autoId","",0);setCookie("autoKey","",0);location.reload();}