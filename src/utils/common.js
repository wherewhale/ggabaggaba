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

export function getNameByNumber(number) {
  switch (number) {
    case 1:
      return '동윤👦🏻';
    case 2:
      return '정우👸🏻';
    case 3:
      return '영호👨🏻‍🦱';
    case 4:
      return '유라👩🏻‍🏫';
    default:
      return '알 수 없음';
  }
}
