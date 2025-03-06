import { checkAnswer } from '../../utils/grading.js';
import { insertAnswer } from '../../utils/post.user.choice.js';

const answer = [];

async function nextQuestion(current,checkedNumber) {
    answer.push(checkedNumber);
    
    document.getElementById('q' + current).classList.remove('active');
    document.getElementById('d' + current).classList.remove('active');
    document.getElementById('d' + current).classList.add('done');

    const nextQuestion = document.getElementById('q' + (current + 1));
    const nextDot = document.getElementById('d' + (current + 1));

    if (nextQuestion && nextDot) {
        nextQuestion.classList.add('active');
        nextDot.classList.add('active');
    } else {
        await insertAnswer(answer);
        window.location.href = `/src/pages/result/index.html?score=${checkAnswer(answer)}`;
    }
}

window.nextQuestion = nextQuestion;