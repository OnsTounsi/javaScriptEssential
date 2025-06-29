function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperince').value;
  
    alert('Thank you for your valuable feedback');
  
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userExperinceDisplay').innerText = experience;
    document.getElementById('userInfo').style.display = 'block';
  }
  
  // Liaison du bouton en dehors de la fonction
  const submitButton = document.getElementById('submitBtn');
  submitButton.onclick = submitFeedback;
  
  // Envoi avec la touche "Entrée"
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
  