
function DateiInfo() {
	var Zeitstempel = new Date(document.lastModified);
	if (Zeitstempel != 0) {
		document.write ("<p style='font-size: x-small;'>Dokument &raquo;" + document.URL + "&laquo; zuletzt ge&auml;ndert am " + Zeitstempel.toLocaleDateString() + " um " + Zeitstempel.toLocaleTimeString() + "</p>");
			};
	};
 



