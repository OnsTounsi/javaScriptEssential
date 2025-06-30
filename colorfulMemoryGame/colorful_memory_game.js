const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = [];
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval = null;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateCards() {
    gameContainer.innerHTML = ''; // Vider les anciennes cartes

    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        card.style.backgroundColor = '#ddd'; // couleur par défaut
        card.addEventListener('click', handleCardClick);
        gameContainer.appendChild(card);
    }
}

function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched') || selectedCards.includes(card)) {
        return; // Ignore les clics sur cartes déjà appariées ou déjà sélectionnées
    }

    card.textContent = '';
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);

    if (selectedCards.length === 2) {
        gameContainer.style.pointerEvents = 'none'; // désactive les clics temporairement
        setTimeout(checkMatch, 700);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score : ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
    gameContainer.style.pointerEvents = 'auto'; // réactive les clics
}

function startGame() {
    clearInterval(gameInterval); // Nettoyer tout timer existant
    timeLeft = 30;
    score = 0;
    scoreElement.textContent = `Score : ${score}`;
    timerElement.textContent = `Temps restant : ${timeLeft}`;
    startbtn.disabled = true;

    // Double la liste des couleurs pour les paires
    cards = shuffle(colors.concat(colors));

    generateCards();

    // Démarre le chronomètre
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Temps restant : ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over !');
            startbtn.disabled = false;
            // Bloquer toutes les cartes
            Array.from(gameContainer.children).forEach(card => card.removeEventListener('click', handleCardClick));
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);
