function checkAnswers() {
    let answer1 = document.getElementById('answer1').value;
    
    if (answer1 == 'Sendal') {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        showFlowers();
    } else {
        alert('Jawaban salah, coba lagi!');
    }
}

function showFlowers() {
    let flowersContainer = document.getElementById('flowers');
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 4 + 's';
        flowersContainer.appendChild(flower);
    }
}
