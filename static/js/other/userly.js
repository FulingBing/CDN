function rem(t,i){EjectConfirm('确定要这么做吗？',function(){stopall();window.location.href="DelXx.do?id=all&lx="+i+"&token="+t;});}function del(i,t){closelook();document.getElementById("div"+i).innerHTML="<div style='width:100%;height:75px;transition:all 0.3s' id='hdiv"+i+"'></div>";hidetoclose(i);ajax("DelXx.do?id="+i+t,"redel");}function redel(i){if(i=="ok"){return;}messageshow("删除失败："+i);}function read(i){var show=document.getElementById("show"+i);if(show){show.style.display="none";}}function openlook(i){stopall();closelook();var ly_show=document.getElementById("ly_show");ly_show.src="html/user/show.jsp?id="+i;}function closelook(){var ly_show=document.getElementById("ly_show");ly_show.src="about:blank";}function hidetoclose(i){var div=document.getElementById("hdiv"+i);var h=div.offsetHeight-75;div.style.height=h+"px";setTimeout("document.getElementById('div"+i+"').style.display='none'",400);}function reTit(t){document.getElementById("titshow"+t).style.display="none";document.getElementById("titlook"+t).style.display="";}