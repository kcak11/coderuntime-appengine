var CODERuntime={};
CODERuntime["generatePBar"]=function(pbarSize){
this.pSize=pbarSize;
(function(d,c){
var ctr=1;
d._f=d.write;
while(ctr<=c){
d._f("<img src=\"resources/images/pbar.png\" id=\"p"+ctr+"\" style=\"position:relative;top:2px;left:2px;visibility:hidden;width:1px;\" />");
ctr++;
}
})(document,pbarSize);
};

CODERuntime["loadWeb"]=function(){
(function(ps){
var _loadCheck=function(){
if(Dom._("crlogomain").complete && Dom._("pbar").complete){
Dom._("crlogomain").style.visibility="visible";
Dom._("pbarCont").style.visibility="visible";
	if(BrowserUtils.getBrowser()==="Firefox"){
		Dom._("pStat").style.top="4px";
	}
var pid=1;
var pTimer=setInterval(function(){
Dom._("p"+pid).style.visibility="visible";
Dom._("pStat").innerHTML=parseInt(pid*100/ps)+"%";
Dom.hAlignCenter(Dom._("pbarCont"),Dom._("pStat"));
pid++;
if(pid>ps){
clearInterval(pTimer);
setTimeout(function(){doRedirectionCR();},1000);
}
},33);
}else{
setTimeout(function(){_loadCheck();},200);
}
}
_loadCheck();
var adjustCenter=function(){Dom.hAlignCenter(window,Dom._("pCont"));};
adjustCenter();
Dom.addEvent(window,"resize",adjustCenter);
})(this.pSize);
};

