function atarget(o){if(document.getElementById("atarget").checked){window.open(o.href);return false;}else{return true;}}function c_atarget(){if(document.getElementById("atarget").checked){setCookie("atarget","1",864000000);}else{setCookie("atarget","0",864000000);}}if(getCookie("atarget")=="1"){document.getElementById("atarget").checked=true;}