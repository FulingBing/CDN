function uptjyz(id){var t=document.getElementById(id);if(t.value==""){t.focus();return false;}else{stopall();return true;}}function uptjyzlist(idstr){var ids=idstr.split(",");for(var i=0;i<ids.length;i++){var t=document.getElementById(ids[i]);if(!t){continue;}if(t.value==""){t.focus();return false;}}stopall();return true;}