import { checkAnswer } from '../../utils/grading.js';

let answer = [];

function nextQuestion(current, checkedNumber) {
  answer.push(checkedNumber);
  document.getElementById('q' + current).classList.remove('active');
  document.getElementById('d' + current).classList.remove('active');
  document.getElementById('d' + current).classList.add('done');
  var nextQuestion = document.getElementById('q' + (current + 1));
  var nextDot = document.getElementById('d' + (current + 1));
  if (nextQuestion && nextDot) {
    nextQuestion.classList.add('active');
    nextDot.classList.add('active');
  } else {
    window.location.href = `/src/pages/result/index.html?score=${checkAnswer(answer)}`;
  }
}

window.nextQuestion = nextQuestion;
