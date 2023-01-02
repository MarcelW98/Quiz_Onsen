

	let nav=document.getElementById('navigator');
	let richtigeAntworten=0;
	let falscheAntworten=0;
	let aktuelleFrage=0;
	let anzahlFragen=3;
	let spielername=localStorage.getItem("sn");
	let alter=0;
	let land="";
	let anrede="";
	
	
	function speichereEinstellungen() {
		//alert("Speichere Einstellungen!");
		spielername=document.getElementById("spielername").value;
		//alert(spielername);
		land=document.getElementById("land").value;
		alter=document.getElementById("alter").value;
		
		//für Fortgeschrittene: man könnte auch das Value der Radio-Box über den Namen auslesen
		
		if (document.getElementById("checkbox_f").checked == true ) {
			anrede="Frau";
		}
		else if (document.getElementById("checkbox_m").checked == true ) {
			anrede="Herr";
		}
		else {
			anrede="";
		}
		
		//Testausgabe:
		alert("Name " + spielername + " Alter: " + alter 
			+ " Anrede: " + anrede 
			+ " Land: " + land);
		
		localStorage.setItem("sn", spielername);

		nav.pushPage("home");
		
	}
	
	
	function naechsteFrage() {
		aktuelleFrage++;
		
		if (aktuelleFrage==1) {
			//Spieler*in vor 1. Frage begrüßen!
			let begruessung="";
			if (land=="Österreich") {
				begruessung="Servus ";
			}
			else if (land=="Schweiz") {
				begruessung="Grüezi ";
			}
			else {
				begruessung="Hallo ";
			}
			begruessung=begruessung + spielername + " viel Spaß beim Quiz!";
			alert(begruessung)
			//TODO irgendwie schöne ausgeben
			
		}
		
		
		if (aktuelleFrage>anzahlFragen) {
			alert("Spiel zu Ende!");
		}
		else {
			nav.pushPage("frage" + aktuelleFrage);
		}
		
		/*if (aktuelleFrage==1) {
			nav.pushPage("frage1");
		}
		else if (aktuelleFrage==2) {
			nav.pushPage("frage2");
		}
		*/
	}
	
	function pruefeAntwort(gewaehlteAntwort) {
	
		if (aktuelleFrage==1 && gewaehlteAntwort==3) {
			//Frage 1 richtig beantwortet
			richtigeAntworten++;
			// geht so leider nicht
			// document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
			//Tipp für Fortgeschrittene: eine Funktion für folgende Zeile schreiben, z. B. navigiereWeiter("richtig");
			nav.resetToPage("auswertung").then(function() {
				document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
				document.getElementById("anzahl_falsch").textContent=falscheAntworten;
				document.getElementById("richtig_oder_falsch").textContent="richtig";
			});
		}
		else if (aktuelleFrage==1) {
			//Frage 1 falsch beantwortet
			falscheAntworten++;
			nav.resetToPage("auswertung").then(function() {
				document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
				document.getElementById("anzahl_falsch").textContent=falscheAntworten;
				document.getElementById("richtig_oder_falsch").textContent="falsch";
				document.getElementById("simley").setAttribute("src","grafik/fail_icon.png");
				
			});
		}
		else if (aktuelleFrage==2 && gewaehlteAntwort==4) {
			//Frage 2 richtig beantwortet
			richtigeAntworten++;
			nav.resetToPage("auswertung").then(function() {
				document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
				document.getElementById("anzahl_falsch").textContent=falscheAntworten;
				document.getElementById("richtig_oder_falsch").textContent="richtig"
				
			});
		}
		else if (aktuelleFrage==2) {
			//Frage 2 falsch beantwortet
			falscheAntworten++;
			nav.resetToPage("auswertung").then(function() {
				document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
				document.getElementById("anzahl_falsch").textContent=falscheAntworten;
				document.getElementById("richtig_oder_falsch").textContent="falsch";
				document.getElementById("simley").setAttribute("src","grafik/fail_icon.png");
			});
		}	
		else if (aktuelleFrage==3) {
			//alert("Prüfe Frage 3");

			/*if (document.getElementById("checkbox1").checked == true) {
				alert("Checkbox 1 ist aktiviert");
			}
			if (document.getElementById("checkbox2").checked == true) {
				alert("Checkbox 2 ist aktiviert");
			}
			if (document.getElementById("checkbox3").checked == true) {
				alert("Checkbox 3 ist aktiviert");
			}			
			if (document.getElementById("checkbox4").checked == true) {
				alert("Checkbox 4 ist aktiviert");
			}*/
			
			// für Fortgeschrittene: kürzer kann man TRUE prüfen 
			//if (document.getElementById("checkbox1").checked) 
			//und FALSE
			//if (!document.getElementById("checkbox1").checked) 
			
			if (document.getElementById("checkbox1").checked == true 
				&& document.getElementById("checkbox2").checked ==  false
				&& document.getElementById("checkbox3").checked == true 
				&& document.getElementById("checkbox4").checked == false ) {
						//alert("Die Antwort ist richtig!");
						richtigeAntworten++;
						nav.resetToPage("auswertung").then(function() {
							document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
							document.getElementById("anzahl_falsch").textContent=falscheAntworten;
							document.getElementById("richtig_oder_falsch").textContent="richtig"
							
						});							
			} else {
						//alert("Die Antwort ist falsch!");
						falscheAntworten++;
						nav.resetToPage("auswertung").then(function() {
							document.getElementById("anzahl_richtig").textContent=richtigeAntworten;
							document.getElementById("anzahl_falsch").textContent=falscheAntworten;
							document.getElementById("richtig_oder_falsch").textContent="falsch";
							document.getElementById("simley").setAttribute("src","grafik/fail_icon.png");
						});							
			}
			
			
		}
		
		//alert("Du hast bisher " + falscheAntworten + " falsche und " + richtigeAntworten + " richtige Antworten");
	
	}
	