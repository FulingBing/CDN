var token;function closereg(){var t=document.getElementById("closeregt").value;if(t==""){alert("提示不能为空");return;}if(getRex(t)){alert("请勿包含特殊字符：< ' \" \\ / ? &");return;}var v=document.getElementById("closereg").value;EjectPrompt("执行这个操作的原因（10个字符以内）",function(str){if(str.length>10){alert("内容必须在10个字符以内");return;}if(getRex(str)){alert("请勿包含特殊字符：< ' \" \\ / ? &");return;}stopall();ajax("../SetWeb.do?closetype=8&closevalue="+v+"&closemsg="+t+"&closesql="+str+"&token="+token,"reset");});}function reset(i){if(i=="true"){alert("操作成功");}else if(i=="false"){alert("参数错误");}else{alert("操作失败");}location.reload();}function getRex(s){var rex=new Array("<","'","\"","\\","/","?","&");for(var i=0;i<rex.length;i++){if(s.indexOf(rex[i])>-1){return true;}}return false;}