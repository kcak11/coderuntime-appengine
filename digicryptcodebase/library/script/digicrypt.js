/**
DigiCrypt Cryptography Algorithm
Author: K.C.Ashish Kumar
Version: 2.11.121
Language Type: JavaScript
Supported Browsers: ALL

~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
The CODE below is protected by copyright laws.
(c)2012 - Ashish's Web [http://ashish-web.appspot.com]
~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

For more info:
visit: http://code-archives.appspot.com

Usage Warning !! Please read carefully.
- This code is tested accross all the available browsers.
- However, we do not assume any type of responsibility for
  any kind of mal-functioning of the code.
- The CODE is provided AS-IS. 

FILE SIGNATURE:
1Q6ImCq+N8QdEHfgF9+Bn0PpZ/hkkMkDRLFstBzWP128lf3ITr8pIusv/
rKIN/i33wERU//2eyzeg7gD39oOkIoLKHV+IqMCARWglOGondt2WLbtlm
0bO9rN2zYsE1vsMq50cPQnuB2Rs35r75+v+fmKmPo1v3riYxd34Evbgc9
F0x1pV4BShqbESrk/RVCrcdvGltWwzelpWXTbnI6OVj1BLNCXaCtqrmKt
9Ut7scXH8x/sgIip4ttC3AFxB36RHfjkQvoP0FSAUrBSRkatIKMMRIGag
E8BQS3abYtm26zeNqu2TeptE45KOnJa+k0QWRBc3LLIWX+R10q8kb/ZDo
iY+jfbWvGGxR34pnZAYKg/mY9Y6dQBegpA5UjjJUVXQFMjo6QMRwlEPy+
AqIKWUb5tkG3rpdt6ybZBSt8SuOroFnCDYp31m3pffW1PVsTUr+0VEx+v
uANf4A78CaDCykto+lnsFSqmjKEK3NQMNGWslBBUuW2UMRyVuwwyl0Hq0
mNJXLqNbe36tnZtW7e2rd3Y1km2jQqCYSArlGSxzvoFvg3Eh7QtZj6Ibw
JxB8Qd+Gt34P8vQwVJFVRfAlQwVI

*/
(function(_w){
_w.DigiCrypt={};
DigiCrypt.api={
	genCodeKey:function(key){
		var t=[];
		for(var i=0;i<key.length;i++){
			t.push(parseInt(key.charCodeAt(i),10));
		}
		this.codeKey="^2^11^121^"+t.join("^");
			t=[];
		for(var i=0;i<this._spep.length;i++){
			t.push(String.fromCharCode(this._spep[i].charCodeAt(0)-1));
		}
		this._spcp=t.join("");
	},
	encrypt:function(key,text){
		if(!this.dataValidation(key,text)){
			return this._valmsg;
		}
		this.genCodeKey(key);
		text=text+encodeURIComponent(key)+this._signature;
		var t=[];
		t.push("_ENC");
		for(var i=0;i<text.length;i++){
			t.push(this._c(text.charCodeAt(i)));
		}
		t.push("_EOF");
		this.codeKey="";
		return encodeURIComponent(t.join("").split(this._sp).join(this._spcp)).split("%").join(this._sp);
	},
	decrypt:function(key,text){
		if(!this.dataValidation(key,text)){
			return this._valmsg;
		}
		this.genCodeKey(key);
		text=text.split(this._sp).join("%");
		try{
		text=decodeURIComponent(text.split(this._spcp).join(this._sp));
		}catch(DE){
			alert("ERR:092 - Detected Corrupted Data / Key.\nPlease ensure that valid data is specified.");
			return "--DATA IS CORRUPTED--\n(ERR:092 - Terminating Operation)";
		}
		var t=[];
		for(var i=0;i<text.length;i++){
			t.push(this._c(text.charCodeAt(i)));
		}
		this.codeKey="";
		_dec=t.join("").substr(4,t.length-8);
		if(_dec.indexOf(encodeURIComponent(key)+this._signature)==-1){
			alert("ERR:029 - Decryption Key INVALID.\nPlease specify valid Key.");
			return "--INVALID KEY SPECIFIED--\n(ERR:029 - Terminating Operation)";
		}
		return _dec.replace(encodeURIComponent(key)+this._signature,"");
	},
	_sp:".",
	_spcp:"",
	_spep:"*\")",
	_signature:"[ENC-ALGORITHM:2.11.121]--/-",
	_c:function(c){
		var t=Function("return "+(c+this.codeKey)+";")();
			return String.fromCharCode(t);
	},
	_valmsg:"ERR:038\nINVALID_DATA - Source Data & Key cannot be empty.",
	dataValidation:function(key,text){
		if(!key || !text || key.length==0 || text.length==0)
			return false;
		return true;
	}
};
DigiCrypt.doc={};
/*
@param dataSource: input / textarea element containing the source data
@param key: The encryption key
@param outputElem: input / textarea element where the output is to be streamed.
@return void
*/
DigiCrypt.doc.api={
	doEncrypt:function(dataSource,key,outputElem){
		outputElem.value=DigiCrypt.api.encrypt(key,dataSource.value);
	},
	doDecrypt:function(dataSource,key,outputElem){
		outputElem.value=DigiCrypt.api.decrypt(key,dataSource.value);
	}
};
})(window);