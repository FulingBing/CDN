function saveEdit(){var s=document.getElementById("cm_edit_txt").value;if(s!==""){localStorage.setItem(saveInfo,s);}else{localStorage.removeItem(saveInfo);}setTimeout("saveEdit()", 10000);}var saveInfo;function cshSaveEdit(key){saveInfo=key;var saveVlaue=localStorage.getItem(saveInfo);if(saveVlaue){document.getElementById("cm_edit_txt").value=saveVlaue;}saveEdit();}function getEdit(h){ajax(h,"regetEdit");}function regetEdit(i){document.getElementById("cm_edit_txt").value=i;}