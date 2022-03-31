var alljf=0;function showgame(l0,l1,l2,l3,l4,l5,l6,l7,l8,l9){var chart=iChart.create({render:"ichart-gamelv",width:980,
height:606,background_color:"#fefefe",gradient:false,color_factor:0.2,border:{color:"BCBCBC",width:1},align:"center",
offsetx:0,offsety:0,sub_option:{border:{color:"#BCBCBC",width:0},label:{fontweight:600,fontsize:10,color:"#4572a7",
sign:"square",sign_size:12,border:{color:"#BCBCBC",width:4},background_color:"#fefefe"}},shadow:false,animation:true,
shadow_color:"#666666",shadow_blur:2,showpercent:false,column_width:"70%",bar_height:"70%",radius:"90%",title:{
text:"等级分布图",color:"#111111",fontsize:20,textAlign:"left",height:30,offsetx:0,offsety:0},subtitle:{text:"",color:"#111111",
fontsize:16,textAlign:"center",height:20,offsetx:0,offsety:0},footnote:{text:"",color:"#111111",fontsize:12,
textAlign:"left",height:20,offsetx:0,offsety:0},legend:{enable:true,background_color:"#fefefe",color:"#333333",
fontsize:12,border:{color:"#BCBCBC",width:1},column:1,align:"right",valign:"center",offsetx:0,offsety:0},
coordinate:{width:"80%",height:"84%",background_color:"#ffffff",axis:{color:"#a5acb8",width:[1,"",1,""]},
grid_color:"#d9d9d9",label:{fontweight:500,color:"#666666",fontsize:11}},label:{fontweight:500,color:"#666666",
fontsize:11},type:"pie2d",data:[{name:"耕作",value:l0,color:"#808000"},{name:"挖掘",value:l1,color:"#606060"},
{name:"伐木",value:l2,color:"#008080"},{name:"挖矿",value:l3,color:"#5830E0"},{name:"钓鱼",value:l4,color:"#008000"},
{name:"箭术",value:l5,color:"#C06000"},{name:"防御",value:l6,color:"#9000FF"},{name:"格斗",value:l7,color:"#0060C0"},
{name:"探索",value:l8,color:"#E07000"},{name:"杂技",value:l9,color:"#DA00DA"}]});chart.draw();alljf=parseInt(l0)+parseInt(l1)
+parseInt(l2)+parseInt(l3)+parseInt(l4)+parseInt(l5)+parseInt(l6)+parseInt(l7)+parseInt(l8)+parseInt(l9);}
function showbbs(l1,l2,l3,b1,b2,b3,b4){var l0=parseInt(alljf/5);l1=l1*10;l2=l2*5;b1=b1*10;b2=b2*3;b3=parseInt(b3/2);b4=parseInt(b4/5);
var chart=iChart.create({render:"ichart-bbslv",width:980,height:606,background_color:"#fefefe",gradient:false,color_factor:0.2,
border:{color:"BCBCBC",width:1},align:"center",offsetx:0,offsety:0,sub_option:{border:{color:"#BCBCBC",width:0},label:{fontweight:600,
fontsize:10,color:"#4572a7",sign:"square",sign_size:12,border:{color:"#BCBCBC",width:4},background_color:"#fefefe"}},shadow:false,
animation:true,shadow_color:"#666666",shadow_blur:2,showpercent:false,column_width:"70%",bar_height:"70%",radius:"90%",title:{text:"积分分布图",
color:"#111111",fontsize:20,textAlign:"left",height:30,offsetx:0,offsety:0},subtitle:{text:"",color:"#111111",fontsize:16,
textAlign:"center",height:20,offsetx:0,offsety:0},footnote:{text:"",color:"#111111",fontsize:12,textAlign:"left",height:20,offsetx:0,
offsety:0},legend:{enable:true,background_color:"#fefefe",color:"#333333",fontsize:12,border:{color:"#BCBCBC",width:1},column:1,
align:"right",valign:"center",offsetx:0,offsety:0},coordinate:{width:"80%",height:"84%",background_color:"#ffffff",axis:{color:"#a5acb8",
width:[1,"",1,""]},grid_color:"#d9d9d9",label:{fontweight:500,color:"#666666",fontsize:11}},label:{fontweight:500,color:"#666666",
fontsize:11},type:"pie2d",data:[{name:"游戏技巧",value:l0,color:"#339A33"},{name:"贡献",value:l1,color:"#0088FF"},{name:"爱心",value:l2,
color:"#D8D800"},{name:"人气",value:l3,color:"#FF5080"},{name:"精华帖数",value:b1,color:"#9000FF"},{name:"优秀帖数",value:b2,
color:"#C06000"},{name:"主题数",value:b3,color:"#808080"},{name:"发帖数",value:b4,color:"#00C2C2"}]});chart.draw();}

