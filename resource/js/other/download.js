﻿function hidediv(i){document.getElementById(i).style.display="none";}function showdiv(i){document.getElementById(i).style.display="";}document.getElementById("md5_start").innerHTML=downloaddata.starthash;document.getElementById("md5_main").innerHTML=downloaddata.mainhash;function showmsg(t,b){var btn="<input type=\"button\" class=\"downbtn\" onclick=\"hidemsg()\" value=\"我知道了\"/>";document.getElementById("msgtx").innerHTML="<b>"+t+"</b><hr /><p>"+b+"</p>"+btn;document.getElementById("msgbg").style.display="";}function hidemsg(){document.getElementById("msgbg").style.display="none";}var mhtml="",shtml="";var mdata=downloaddata.mainurl.split(" ");var sdata=downloaddata.starturl.split(" ");for(var i=0;i<mdata.length;i+=2){mhtml=mhtml+"\n<a href=\""+mdata[i+1]+"\" target=\"_blank\"><input type=\"button\" class=\"downbtn downmaint\" value=\""+mdata[i]+"\"/></a>";}document.getElementById("mbox").innerHTML=mhtml;for(var i=0;i<sdata.length;i+=2){shtml=shtml+"\n<a href=\""+sdata[i+1]+"\" target=\"_blank\"><input type=\"button\" class=\"downbtn downmaint\" value=\""+sdata[i]+"\"/></a>";}document.getElementById("sbox").innerHTML=shtml;