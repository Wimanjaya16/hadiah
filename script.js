document.addEventListener('DOMContentLoaded', () => {
    const correctAnswer = 'jokowi';
    const submitButton = document.getElementById('submit');
    const answerInput = document.getElementById('answer');
    const feedback = document.getElementById('feedback');
    const message = document.getElementById('message');
    const goToResponsePageButton = document.getElementById('go-to-response-page');
    const goToQuizPageButton = document.getElementById('go-to-quiz-page');
    const responsePage = document.getElementById('response-page');
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const doll = document.getElementById('doll');
    const responseText = document.getElementById('response-text');
    
    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === correctAnswer) {
            feedback.classList.add('hidden');
            message.classList.add('show');
            setTimeout(() => {
                message.classList.remove('show');
                document.getElementById('quiz-page').classList.add('hidden');
                responsePage.classList.remove('hidden');
            }, 2000);
        } else {
            feedback.textContent = 'Jawaban salah, coba lagi!';
            feedback.classList.remove('hidden');
        }
    });
    
    yesButton.addEventListener('click', () => {
        doll.classList.remove('doll-idle');
        doll.classList.add('doll-happy');
        responseText.textContent = 'Yeyy!';
        responseText.classList.remove('hidden');
    });
    
    noButton.addEventListener('click', () => {
        doll.classList.remove('doll-idle');
        doll.classList.add('doll-sad');
        responseText.textContent = 'Sedih!';
        responseText.classList.remove('hidden');
    });
    
    goToQuizPageButton.addEventListener('click', () => {
        responsePage.classList.add('hidden');
        document.getElementById('quiz-page').classList.remove('hidden');
    });
});
