<!DOCTYPE html>
<html>
<head>
<%
String baseURL="";
java.lang.StringBuffer requestURL=request.getRequestURL();
if(requestURL!=null){
	if(requestURL.toString().indexOf("http://coderuntime.appspot.com")!=-1){
		baseURL="http://coderuntime.appspot.com/digicryptcodebase/";
	}else{
		baseURL="http://localhost:8080/coderuntime/digicryptcodebase/";
	}
}
%>
<base href="<%=baseURL%>"/>
<title>DigiCrypt: Encryption - Decryption Utility</title>
<link rel="stylesheet" type="text/css" href="library/theme/default.css"></link>
<script type="text/javascript" src="library/script/digicrypt.js"></script>
</head>
<body>
<form name="mainForm">
<div align="center">
<span style="font-size:56px;"><br/></span>
<img src="library/theme/digicrypt.png" style="width:788px;height:74px;"/>
<span style="font-size:56px;"><br/><br/></span>
<table id="mainTable" align="center">
	<tr>
		<td colspan="3">
			<div style="background-color:rgb(255,255,255);width:268px;position:relative;top:-24px;">
				&nbsp;Please specify your input here:&nbsp;
			</div>
		</td>
	</tr>
	<tr>
		<td valign="top">Source Data</td>
		<td valign="top">:</td>
		<td align="center"><textarea id="sourceData" rows="4" cols="77"></textarea></td>
	</tr>
	<tr>
		<td valign="top">Key</td>
		<td valign="top">:</td>
		<td align="center"><textarea rows="2" cols="77" id="_key"></textarea></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td align="center" style="padding-top:5px;padding-bottom:5px;">
			<button class="actButton" type="button" onclick="DigiCrypt.doc.api.doEncrypt(document.getElementById('sourceData'),document.getElementById('_key').value,document.getElementById('resultData'));">Encrypt Data</button>
			<button style="width:55px;visibility:hidden;">spacer</button>
			<button type="button" class="actButton" onclick="DigiCrypt.doc.api.doDecrypt(document.getElementById('sourceData'),document.getElementById('_key').value,document.getElementById('resultData'));">Decrypt Data</button>
		</td>
	</tr>
	<tr>
		<td valign="top">Output Data</td>
		<td valign="top">:</td>
		<td align="center"><textarea id="resultData" rows="4" cols="77"></textarea></td>
	</tr>
</table>
</div>
</form>
<script type="text/javascript">
document.getElementById("sourceData").focus();
</script>
</body>
</html>