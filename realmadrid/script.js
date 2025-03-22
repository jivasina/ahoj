// Funkce pro kontrolu odpovědí kvízu
function zkontrolujOdpovedi() {
    let spravnych = 0;
    let celkem = 3;
  
    // 1. otázka – rok založení
    const odpoved1 = document.getElementById("q1").value.trim();
    if (odpoved1 === "1902") {
      spravnych++;
    }
  
    // 2. otázka – stadion (správná odpověď má id="q2_correct")
    const odpoved2 = document.getElementById("q2_correct");
    if (odpoved2.checked) {
      spravnych++;
    }
  
    // 3. otázka – počet vítězství v LM (správná hodnota "14")
    const odpoved3 = document.getElementById("q3").value;
    if (odpoved3 === "14") {
      spravnych++;
    }
  
    // Zobrazení výsledku
    const vysledekDiv = document.getElementById("vysledek");
    if (spravnych === celkem) {
      vysledekDiv.textContent = "Výborně! Odpověděli jste správně na všechny otázky (" + spravnych + " z " + celkem + ").";
    } else {
      vysledekDiv.textContent = "Správně máte " + spravnych + " z " + celkem + " odpovědí. Zkuste to znovu nebo si projděte sekci Historie klubu.";
    }
  }