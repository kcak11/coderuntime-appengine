/*
Framework by K.C.Ashish Kumar
Prerequisite: jQuery.js
*/
(function(w){
var _=function(){};
w.BrowserUtils={
userAgent:function(){return navigator.userAgent;},
isIE:function(){return (this.userAgent().indexOf("MSIE")>=0);},
isFirefox:function(){return (this.userAgent().toLowerCase().indexOf("firefox")>=0);},
isChrome:function(){return (this.userAgent().toLowerCase().indexOf("chrome")>=0);},
isSafari:function(){return (this.userAgent().toLowerCase().indexOf("chrome")<0 && this.userAgent().toLowerCase().indexOf("safari")>=0);},
isOpera:function(){return (this.userAgent().toLowerCase().indexOf("opera")>=0);},
getBrowser:function(){return (this.isIE())?"Internet Explorer":(this.isFirefox())?"Firefox":(this.isChrome())?"Chrome":(this.isSafari())?"Safari":(this.isOpera())?"Opera":"Unknown / Not Supported";}
};
_.prototype={
_:function(id){return document.getElementById(id);},
hAlignCenter:function(parentElem,childElem){var pX=($(parentElem).width()-$(childElem).width())/2;childElem.style.position="absolute";childElem.style.left=pX+"px";},
eventObject:function(e){if(!e){e=window.Event;} if(!e.target){e.target=e.srcElement;} return e;},
addEvent:function(element,eventType,actionDef){if(BrowserUtils.isIE()){element.attachEvent("on"+eventType,actionDef);}else{element.addEventListener(eventType,actionDef,false);}},
removeEvent:function(element,eventType,actionDef){if(BrowserUtils.isIE()){element.detachEvent("on"+eventType,actionDef);}else{element.removeEventListener(eventType,actionDef,false);}}
};
w.Dom=new _();
})(window);