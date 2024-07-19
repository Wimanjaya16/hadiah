document.getElementById('submit').addEventListener('click', function() {
    const answerInput = document.getElementById('answer');
    const feedback = document.getElementById('feedback');
    const quizPage = document.getElementById('quiz-page');
    const message = document.getElementById('message');
    const goToResponsePageButton = document.getElementById('go-to-response-page');

    const answer = answerInput.value.trim().toLowerCase();

    if (answer === 'jokowi') {
        // Show the message and then show the button to go to the next page
        feedback.classList.add('hidden');
        message.classList.remove('hidden');
        message.classList.add('show');
        goToResponsePageButton.classList.remove('hidden');

        goToResponsePageButton.addEventListener('click', function() {
            message.classList.add('hidden');
            goToResponsePageButton.classList.add('hidden');
            document.getElementById('response-page').classList.remove('hidden');
            quizPage.classList.add('hidden');
        });
    } else {
        feedback.textContent = 'Jawaban salah. Silakan coba lagi!';
        feedback.classList.remove('hidden');
    }
});

document.getElementById('yes').addEventListener('click', function() {
    const doll = document.getElementById('doll');
    const responseText = document.getElementById('response-text');

    doll.classList.remove('doll-idle');
    doll.classList.add('doll-happy');
    responseText.textContent = 'Yeyy!';

    setTimeout(() => {
        doll.classList.remove('doll-happy');
        doll.classList.add('doll-idle');
    }, 3000); // Set idle animation after 3 seconds
});

document.getElementById('no').addEventListener('click', function() {
    const doll = document.getElementById('doll');
    const responseText = document.getElementById('response-text');

    doll.classList.remove('doll-idle');
    doll.classList.add('doll-sad');
    responseText.textContent = 'Oh, tidak!';

    // Add tears
    const tear = document.createElement('div');
    tear.className = 'tear';
    doll.appendChild(tear);

    setTimeout(() => {
        doll.classList.remove('doll-sad');
        doll.classList.add('doll-idle');
        tear.remove(); // Remove tears after animation
    }, 3000); // Set idle animation after 3 seconds
});

document.getElementById('go-to-quiz-page').addEventListener('click', function() {
    document.getElementById('response-page').classList.add('hidden');
    document.getElementById('quiz-page').classList.remove('hidden');
});
