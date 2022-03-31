var y_g=new Array(31,29,31,30,31,30,31,31,30,31,30,31);var y_n=new Array(30,29,30,29,30,29,29,30,29,29,30,30);var y_s=new Array("正","二","三","四","五","六","七","八","九","寒","冬","腊");
var y_r=new Array("初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十");
function sety(){var t=document.getElementById("sr_t").selectedIndex;var y=document.getElementById("sr_y");if(t==0){y.innerHTML="<option>月</option>";setr();}else if(t==1){var s="<option style=\"display:none\">请选择</option>";
for(var i=0;i<12;i++){s=s+"<option value=\""+(i+1)+"\">"+y_s[i]+"月</option>";}y.innerHTML=s;setr();}else{var s="<option style=\"display:none\">请选择</option>";for(var i=0;i<12;i++){
s=s+"<option value=\""+(i+1)+"\">"+(i+1)+"月</option>";}y.innerHTML=s;setr();}y.selectedIndex=0;}function setr(){var t=document.getElementById("sr_t").selectedIndex;
var y=document.getElementById("sr_y").selectedIndex;var r=document.getElementById("sr_r");if(y==0){r.innerHTML="<option>日</option>";}else{if(t==0){r.innerHTML="<option>日</option>";
}else if(t==1){var s="<option style=\"display:none\">请选择</option>";for(var i=0;i<y_n[y-1];i++){ s=s+"<option value=\""+(i+1)+"\">"+y_r[i]+"</option>";}r.innerHTML=s;}else{
var s="<option style=\"display:none\">请选择</option>";for(var i=0;i<y_g[y-1];i++){ s=s+"<option value=\""+(i+1)+"\">"+(i+1)+"日</option>";}r.innerHTML=s;}}r.selectedIndex=0;}
function sets(s){if(s.length<3){return;}var sr=new Array();sr=s.split("-");sr[0]=sr[0]-0;sr[1]=sr[1]-0;sr[2]=sr[2]-0;sr[0]+=1;var t=document.getElementById("sr_t");t.selectedIndex=sr[0];
sety();var y=document.getElementById("sr_y");y.selectedIndex=sr[1];setr();var r=document.getElementById("sr_r");r.selectedIndex=sr[2];}function setw(s){if(s.length<3){s="-";}else{
var sr=new Array();sr=s.split("-");sr[0]=sr[0]-0;sr[1]=sr[1]-0;sr[2]=sr[2]-0;if(sr[0]==0){s="农历"+y_s[sr[1]-1]+"月"+y_r[sr[2]-1];}else{s="公历"+sr[1]+"月"+sr[2]+"日";}}
document.getElementById("day").innerHTML=s;}function in_xy(){var q=document.getElementById("qq").value;var w=document.getElementById("web").value;var reg=/^[0-9]\d*$/;if(q.length>0 && (!reg.test(q))){
alert("QQ号必须全为数字");return false;}reg=/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;if(w.length>0 && (!reg.test(w))){alert("个人主页的URL的格式不正确");return false;}stopall();return true;}