function performOperation() {
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
  
    if (!isNaN(num1) && !isNaN(num2)) {
      debugger; // Utilisé pour observer les valeurs dans l'inspecteur
  
      let addition = num1 + num2;
      let multiplication = num1 * num2;
      let division = num2 !== 0 ? (num1 / num2).toFixed(2) : "Impossible (division par 0)";
  
      let resultText = `
        Addition : ${addition}<br>
        Multiplication : ${multiplication}<br>
        Division : ${division}
      `;
  
      displayResult(resultText);
    } else {
      displayResult("Veuillez entrer des nombres valides.");
    }
  }
  
  function displayResult(result) {
    document.getElementById('result').innerHTML = result;
  }
  