window.onunload=function(e){};
document.onbeforeunload=function(){};
document.oncontextmenu=function(e){return false;};
function doRedirectionCR(){setTimeout(function(){window.top.location="home.html?redir="+parseInt((Math.random()*11).toString().split(".").join(""),10).toString(36);},11);}