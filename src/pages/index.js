import { getScoreAverage } from '../utils/get.user.choice.js';

document.addEventListener('DOMContentLoaded', async function () {
  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeInOut(progress);
      obj.innerText = `현재까지 참여한 인원 : ${Math.floor(easedProgress * (end - start) + start)}명`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function animateScore(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeInOut(progress);
      obj.innerText = `평균 점수 : ${Math.floor(easedProgress * (end - start) + start)}점`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Fetch the average score and then start the animations
  const averageScore = await getScoreAverage();
  animateValue('participant-count', 0, averageScore.total, 2000);
  animateScore('average-score', 0, averageScore.score, 2000);
});
