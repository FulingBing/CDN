laydate.render({elem:'#stime',theme:'#0088FF',type:'datetime'});laydate.render({elem:'#etime',theme:'#0088FF',type:'datetime'});
var loc=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
function setBox(i,s,e,b,c,u,l){document.getElementById("advid").value=i;document.getElementById("stime").value=s;document.getElementById("etime").value=e;
document.getElementById("bz").value=b;document.getElementById("code").value=c;document.getElementById("use").checked=(u===1);for(var j=0;j<loc.length;j++){
var t=document.getElementById("loc"+loc[j]);if(t){t.checked=(l.indexOf(loc[j])>=0);}}document.getElementById('setadv').style.display='';}
function chall(o){for(var j=0;j<loc.length;j++){var t=document.getElementById("loc"+loc[j]);if(t){t.checked=o.checked;}}}function deladv(i){
EjectConfirm('确定要这么做吗？',function(){stopall();window.location.href="../SetTf.do?deladv="+i+"&token="+token;});}