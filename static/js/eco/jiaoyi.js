var num=document.getElementById("num");var type=document.getElementById("type");var renum=document.getElementById("renum");var retype=document.getElementById("retype");function js(){var n=num.value;if(n==""){n="0";}var reg=/^[0-9]\d*$/;if(!reg.test(n)){renum.innerHTML="无效的数字";retype.innerHTML="--";return;}var t=type.selectedIndex;n=n-0;var m=Math.ceil(n+n/100*2);if(t==1){renum.innerHTML=m;retype.innerHTML="清梦币";}else{renum.innerHTML=m;retype.innerHTML="曦源币";}}function setid(i){type.selectedIndex=i;}function tj(){var n=num.value;if(n==""){num.focus();return false;}var reg=/^[0-9]\d*$/;if(!reg.test(n)){renum.innerHTML="无效的数字";retype.innerHTML="--";return false;}var pw=document.getElementById("pwd");if(pw.value==""){pw.focus();return false;}stopall();return true;}