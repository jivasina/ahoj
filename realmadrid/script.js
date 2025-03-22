function zkontrolujOdpovedi() {
  let spravne = 0;

  // 1
  const q1 = document.getElementById("q1").value.trim();
  if (q1 === "1902") spravne++;

  // 2
  if (document.getElementById("q2_correct").checked) spravne++;

  // 3
  const q3 = document.getElementById("q3").value;
  if (q3 === "14") spravne++;

  // 4
  const q4 = document.getElementById("q4").value.trim().toLowerCase();
  if (q4.includes("ronaldo")) spravne++;

  // 5
  const q5_wrong = document.getElementById("q5_wrong");
  if (q5_wrong && q5_wrong.checked) spravne++;

  const vysledek = document.getElementById("vysledek");
  vysledek.innerHTML = `<p>Správně máš <strong>${spravne} z 5</strong>.</p>`;
  if (spravne === 5) {
    vysledek.innerHTML += "<p>👏 Skvělá práce! Jsi fanoušek Realu jako se patří.</p>";
  } else {
    vysledek.innerHTML += "<p>Zkus se podívat do sekce Historie a zkus to znovu!</p>";
  }
}
