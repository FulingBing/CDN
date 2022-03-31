var fgm={
	on:function(element,type,handler){
		return element.addEventListener ? element.addEventListener(type,handler,false) : element.attachEvent("on"+type,handler);
	},
	un:function(element,type,handler){
		return element.removeEventListener ? element.removeEventListener(type,handler,false) : element.detachEvent("on"+type,handler);
	},
	bind:function(object,handler){
		return function(){
			return handler.apply(object,arguments);
		};
	},
	randomRange:function(lower,upper){
		return Math.floor(Math.random()*(upper-lower+1)+lower);
	},
	getRanColor:function(){
		var str=this.randomRange(0,0xFFFFFF).toString(16);
		while(str.length<6) str="0"+str;
		return "#"+str;
	}
};
function FireWorks(){
	this.type=0;
	this.timer=null;
	this.fnManual=fgm.bind(this,this.manual);
}
FireWorks.prototype={
	initialize:function(){
		clearTimeout(this.timer);
		fgm.un(document,"click",this.fnManual);
		switch (this.type){
			case 1:
				fgm.on(document,"click",this.fnManual);
				break;
		};
	},
	manual:function(event){
		event=event || window.event;
		this.__create__({
			x:event.clientX,
			y:event.clientY
		});
	},
	__create__:function(param){
		var that=this;
		var oChip=null;
		var aChip=[];
		var timer=null;
		var oFrag=document.createDocumentFragment();
		(function(){
			var len=(/msie/i.test(navigator.userAgent) || that.type==2) ? fgm.randomRange(5,10) : fgm.randomRange(10,20);
			for(i=0;i<len;i++){
				oChip=document.createElement("div");
				var cTop=param.y-4+document.documentElement.scrollTop+document.body.scrollTop;
				var cLeft=param.x-4+document.documentElement.scrollLeft+document.body.scrollLeft;
				with (oChip.style){
					position="absolute";
					top=cTop+"px";
					left=cLeft+"px";
					width="4px";
					height="4px";
					overflow="hidden";
					borderRadius="4px";
					background=fgm.getRanColor();
                                        zIndex="999999";
				};
				oChip.speedX=fgm.randomRange(-10,10);
				oChip.speedY=fgm.randomRange(-10,10);
				oFrag.appendChild(oChip);
				aChip[i]=oChip;
			};
			document.body.appendChild(oFrag);
			timer=setInterval(function(){
				for(i=0;i<aChip.length;i++){
					var obj=aChip[i];
					with(obj.style){
						top=obj.offsetTop+obj.speedY+"px";
						left=obj.offsetLeft+obj.speedX+"px";
					};
					obj.speedY++;
					(obj.offsetTop<0 || obj.offsetLeft<0 || obj.offsetTop>document.documentElement.clientHeight+document.documentElement.scrollTop+document.body.scrollTop-10 || obj.offsetLeft>document.documentElement.clientWidth+document.documentElement.scrollLeft+document.body.scrollLeft-10) && (document.body.removeChild(obj),aChip.splice(i,1));
				};
				!aChip[0] && clearInterval(timer);
			},30);
		})();
	}
};
fgm.on(window,"load",function(){
	var oFireWorks=new FireWorks();
	oFireWorks.type=1;
	oFireWorks.initialize();
});