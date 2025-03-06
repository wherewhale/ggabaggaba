import { getUserResult } from '../../utils/get.user.choice.js';
import { QUESTION } from '../../common/constants/question.js';
import { ANSWER } from '../../common/constants/answer.js';
import { getNameByNumber } from '../../utils/common.js';

const resultData = await getUserResult();
const statisticsTitle = document.getElementById('statistics-title');
const statisticsDescription = document.getElementById('statistics-description');
statisticsTitle.textContent = QUESTION[0];
statisticsDescription.textContent = getNameByNumber(ANSWER[0]);
let currentAnswer = 0;

function nextAnswer() {
  currentAnswer += 1;
  if (currentAnswer > 9) {
    currentAnswer = 9;
  } else {
    statisticsTitle.textContent = QUESTION[currentAnswer];
    statisticsDescription.textContent = getNameByNumber(ANSWER[currentAnswer]);
    myChart.data.datasets[0].data = Object.values(
      resultData[`q${currentAnswer + 1}`]
    );
    myChart.update();
  }
}

function prevAnswer() {
  currentAnswer -= 1;
  if (currentAnswer < 0) {
    currentAnswer = 0;
  } else {
    statisticsTitle.textContent = QUESTION[currentAnswer];
    statisticsDescription.textContent = getNameByNumber(ANSWER[currentAnswer]);
    myChart.data.datasets[0].data = Object.values(
      resultData[`q${currentAnswer + 1}`]
    );
    myChart.update();
  }
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie', // Changed from 'bar' to 'pie'
  data: {
    labels: ['동윤👦🏻', '정우👸🏻', '영호👨🏻‍🦱', '유라👩🏻‍🏫'],
    datasets: [
      {
        label: '선택 비율',
        data: Object.values(resultData[`q${currentAnswer + 1}`]),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    animation: {
      duration: 500, // Animation duration in milliseconds
      easing: 'easeOut', // Animation easing effect
    },
  },
});

window.nextAnswer = nextAnswer;
window.prevAnswer = prevAnswer;
