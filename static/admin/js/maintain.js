function tsform(){var form=document.getElementById("set_ts");form.submit();return false;}function tsdel(s){EjectConfirm('确定要这么做吗？',function(){window.location.href="../maintain.do?ts_del="+s;});}