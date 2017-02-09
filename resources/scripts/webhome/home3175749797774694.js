var bodyElem=document.getElementsByTagName("body")[0];
var mainContainer=document.getElementById("mainContainer");
var blackBox=document.getElementById("blackBox");
var blackBox_w=$("#blackBox").width();
function adjustBlackBox(){
blackBox.style.left=(($(window).width()-blackBox_w)/2)+"px";
}
function resizeContainer(){
pagebg.style.width=($(window).width()+11)+"px";
pagebg.style.height=($(window).height()+11)+"px";
mainContainer.style.width=($(window).width())+"px"; //For debugging -4 and border be used for width,height
mainContainer.style.height=($(window).height())+"px";
adjustBlackBox();
}
resizeContainer();
if(navigator.userAgent.indexOf("MSIE")==-1){
window.addEventListener("scroll",function(){window.scrollTo(0,0);},false);
window.addEventListener("resize",function(){resizeContainer();},false);
}else{
window.attachEvent("onscroll",function(){bodyElem.scrollTop=0;bodyElem.scrollLeft=0;});
window.attachEvent("onresize",function(){resizeContainer();});
}

var resChecktimer;
function checkResAvail(){
if(pagebg_img.complete && bcurvebox_img.complete && crlogoinfo_img.complete){
pagebg.style.display="block";
mainContainer.style.display="block";
ibs();
clearInterval(resChecktimer);
}
}
resChecktimer=setInterval(function(){checkResAvail();},50);
