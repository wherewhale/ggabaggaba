import { checkAnswer, getNameByNumber } from '../../utils/common.js';
import { insertAnswer } from '../../utils/post.user.choice.js';
import { QUESTION } from '../../common/constants/question.js';

const answer = [];

const questionsContainer = document.getElementById('questions-container');

QUESTION.forEach((_, index) => {
  const questionDiv = document.createElement('div');
  questionDiv.className = `question ${index === 0 ? 'active' : ''}`;
  questionDiv.id = `q${index + 1}`;

  for (let i = 1; i <= 4; i++) {
    const button = document.createElement('button');
    button.onclick = () => nextQuestion(index + 1, i);
    button.className = 'question-button';
    button.textContent = getNameByNumber(i);
    questionDiv.appendChild(button);
  }

  questionsContainer.appendChild(questionDiv);
});

function initQuestion() {
  document.getElementById('question-text').innerText = `Q1. ${QUESTION[0]}`;
  document.getElementById('q1').classList.add('active');
}

async function nextQuestion(current, checkedNumber) {
  answer.push(checkedNumber);

  document.getElementById('q' + current).classList.remove('active');
  document.getElementById('d' + current).classList.remove('active');
  document.getElementById('d' + current).classList.add('done');

  const nextQuestion = document.getElementById('q' + (current + 1));
  const nextDot = document.getElementById('d' + (current + 1));

  if (nextQuestion && nextDot) {
    document.getElementById('question-text').innerText = `Q${current + 1}. ${
      QUESTION[current]
    }`;
    nextQuestion.classList.add('active');
    nextDot.classList.add('active');
  } else {
    await insertAnswer(answer).then(() => {
      window.location.href = `/src/pages/result/index.html?score=${checkAnswer(
        answer
      )}`;
    });
  }
}

window.nextQuestion = nextQuestion;
initQuestion();
