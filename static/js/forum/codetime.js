var sub_new=document.getElementById("sub_new");var sub_cg=document.getElementById("sub_cg");var sub_new2=document.getElementById("sub_new2");var sun_code_time=60;function setcodetime(i){i++;sun_code_time=i;starcodetime();}function starcodetime(){if(sun_code_time<=1){sub_new.value="发表";sub_new2.value="快速回复";if(sub_cg){sub_cg.value="保存草稿";}}else{sun_code_time--;sub_new.value="冷却中("+sun_code_time+")";sub_new2.value=sub_new.value;if(sub_cg){sub_cg.value=sub_new.value;}setTimeout(starcodetime,1000);}}