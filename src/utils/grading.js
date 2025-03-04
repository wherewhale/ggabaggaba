import { ANSWER } from '../common/constants/answer.js';

export function checkAnswer(answer) {
  // 여기서 결과에 대한 api 전송
  let score = 0;
  ANSWER.forEach((num, idx) => {
    if (answer[idx] === num) {
      score = score + 10;
    }
  });

  return score;
}
