let length;
let width;
function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
 let area = length * width;
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
function groceryTracker() {
    let item1 = parseFloat(document.getElementById("grocery1").value) || 0;
    let item2 = parseFloat(document.getElementById("grocery2").value) || 0;
    let item3 = parseFloat(document.getElementById("grocery3").value) || 0;
  
    let total = item1 + item2 + item3;
  
    document.getElementById("totalResult").innerText = `Total des achats d'épicerie : ${total.toFixed(2)} €`;
  }