<!DOCTYPE html>
<html>
<head>
<title>Code Runtime - The ultimate Technology Source</title>
<style type="text/css">
a:link,a:visited,a:hover,a:active{color:#ff0000;text-decoration:none;font-weight:bold;position:absolute;right:10px;}
a:hover{text-decoration:underline;}
</style>
<script type="text/javascript" src="resources/scripts/jq1_7_1.js"></script>
</head>
<body>
<br/>
<div align="center">
<img id="notify_bug" src="resources/images/bug.png"/>
</div>
<div id="webLinks_bug" style="position:absolute;display:none;text-align:left;font-family:Verdana;font-size:12px;width:411px;">
<br/>Microsoft Internet Explorer (Latest Version) <a href="http://www.microsoft.com/windows/ie/" target="_blank">Get it here !</a>
<br/>Mozilla Firefox (Latest Version) <a href="http://www.firefox.com/" target="_blank">Get it here !</a>
<br/>Google Chrome (Latest Version) <a href="http://www.google.com/chrome/" target="_blank">Get it here !</a>
<br/>Safari (Latest Version) <a href="http://www.apple.com/safari/" target="_blank">Get it here !</a>
<br/>Opera (Latest Version) <a href="http://www.opera.com/" target="_blank">Get it here !</a>
</div>
<script type="text/javascript">
var notificationElem=document.getElementById("notify_bug");
var weblinks_bug=document.getElementById("webLinks_bug");
var t=0;
window.clearInterval(t);
t=window.setInterval(function(){if(notificationElem.complete){weblinks_bug.style.display="block";window.clearInterval(t);}},200);
function adjustPosition(){
weblinks_bug.style.position="absolute";
weblinks_bug.style.left=($(window).width()-411)/2+"px";
}
adjustPosition();
if(navigator.userAgent.indexOf("MSIE")==-1){
window.addEventListener("resize",adjustPosition,false);
}else{
window.attachEvent("onresize",adjustPosition);
}
</script>
</body>
</html>