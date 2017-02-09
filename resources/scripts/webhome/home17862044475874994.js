var ctr=0;
function ibs(){
var ibox=document.getElementById("infoScroller");
var iboxheight=ibox.offsetHeight;
var textboxheight=document.getElementById("textContent").offsetHeight;
setInterval(function(){if(ctr>(textboxheight-iboxheight)){ctr=0;}ibox.scrollTop=ctr;ctr+=2;},40);
}
