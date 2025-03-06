import { getScoreAverage } from '../../utils/get.user.choice.js';

const params = new URLSearchParams(window.location.search);
const userScore = Number(params.get('score')) || 0; // score 값 없을시 기본값 0
const averageScore = document.getElementById('average_score');

document.getElementById('score').textContent = params.get('score') || 0;

// 평가 멘트들 설정
let feedback = '';
if (userScore >= 90) {
  feedback = '🎉 벌써 저희를 다 아시는군요!(쑥쓰)';
} else if (userScore >= 75) {
  feedback = '👍 어쩌면 베스트 프렌드가 될 지도?!';
} else if (userScore >= 50) {
  feedback = '🙂 괜찮아요~ 앞으로 더 알아가면 돼죠...';
} else {
  feedback = '💪 저희를 정말 모르시는군요 ㅠ.ㅠ';
}

// 평가 멘트 반영하기
const feedbackElement = document.getElementsByClassName('feedback')[0];
if (feedbackElement) {
  feedbackElement.textContent = feedback;
}

// 퀴즈 시작 페이지로 이동하는 부분 (문제시 삭제)
document.getElementById('retry-btn').addEventListener('click', function () {
  window.location.href = '../index.html'; // pages 폴더로 이동
});

averageScore.textContent = (await getScoreAverage()).score.toFixed(0);
