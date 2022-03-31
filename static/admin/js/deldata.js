var tj2=document.getElementById("tj2");function disthis(i){tj2.style.display=i;}function redel(i){if(i=="true"){alert("清理成功");}else if(i=="false"){alert("无效的参数");}else{alert("服务器繁忙");}disthis("none");}
function coldjb(){EjectConfirm('将清理已处理的举报记录，确定要这么做吗？',function(){disthis("");ajax("../RemoveJl.do?oldjb=oldjb"+all_token,"redel");});}
function cgame(){EjectConfirm('将清理玩家的聊天、命令、登录、方块操作、实体击杀等全部游戏记录，确定要这么做吗？',function(){disthis("");ajax("../RemoveJl.do?game=game"+all_token,"redel");});}
function cdata(){EjectConfirm('将清理玩家的操作、财富、贡献、勋章、违章等全部论坛记录，确定要这么做吗？',function(){disthis("");ajax("../RemoveJl.do?bbs=bbs"+all_token,"redel");});}
function clog(){EjectConfirm('将清理玩家的登录记录，确定要这么做吗？',function(){disthis("");ajax("../RemoveJl.do?log=log"+all_token,"redel");});}
function caly(){EjectConfirm('将清理所有的留言（含未读和未处理的举报），确定要这么做吗？',function(){disthis("");ajax("../RemoveJl.do?ly=ly"+all_token,"redel");});}
function cztset(){EjectConfirm('将清理帖子的操作记录，确定要这么做吗？',function(){disthis("");ajax("../RemoveJl.do?set=set"+all_token,"redel");});}
function cache(){EjectConfirm('这可能会花费一点时间，确定要这么做吗？',function(){disthis("");ajax("../SetWeb.do?cache=cache"+all_token,"redel");});}