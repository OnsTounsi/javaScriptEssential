let testText = "Le rapide renard brun saute par-dessus le chien paresseux.";
let startTime, endTime;

function startTest() {
  document.getElementById("inputText").value = testText;
  document.getElementById("userInput").readOnly = false;
  document.getElementById("userInput").value = "";
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  const button = document.getElementById("btn");
  button.innerHTML = "Terminer le Test";
  button.onclick = endTest;
}

function endTest() {
  endTime = new Date().getTime();
  document.getElementById("userInput").readOnly = true;

  const timeElapsed = (endTime - startTime) / 1000;
  const userTypedText = document.getElementById("userInput").value;
  const typedWords = userTypedText.trim().split(/\s+/).filter(word => word !== "").length;
  const charCount = userTypedText.length;

  let wpm = 0;
  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h2>Résultats du Test de Dactylographie :</h2>
    <p>Mots Tapés : ${typedWords}</p>
    <p>Caractères Tapés : ${charCount}</p>
    <p>Temps Écoulé : ${timeElapsed.toFixed(2)} secondes</p>
    <p>Mots Par Minute (WPM) : ${wpm}</p>
  `;

  const button = document.getElementById("btn");
  button.innerHTML = "Démarrer le Test";
  button.onclick = startTest;
}
