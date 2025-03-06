import supabase from './db.config.js';
import { ANSWER } from '../common/constants/answer.js';

export async function getScoreAverage() {
  const { data, error } = await supabase
    .from('TEST')
    .select('q1, q2, q3, q4, q5, q6, q7, q8, q9, q10');

  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }

  let totalScore = 0;
  let total = data.length;

  console.log(total);

  const frequencyMap = {};

  ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'].forEach(
    (col) => {
      frequencyMap[col] = { 1: 0, 2: 0, 3: 0, 4: 0 };
    }
  );

  data.forEach((row) => {
    Object.keys(row).forEach((col, idx) => {
      const value = row[col];
      if (value === ANSWER[idx]) {
        totalScore += 10;
      }
    });
  });

  console.log(totalScore);

  return totalScore / total;
}

export async function getUserResult() {
  const { data, error } = await supabase
    .from('TEST')
    .select('q1, q2, q3, q4, q5, q6, q7, q8, q9, q10');

  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }

  const frequencyMap = {};

  ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'].forEach(
    (col) => {
      frequencyMap[col] = { 1: 0, 2: 0, 3: 0, 4: 0 };
    }
  );

  data.forEach((row) => {
    Object.keys(row).forEach((col) => {
      const value = row[col];
      if (value !== null && frequencyMap[col].hasOwnProperty(value)) {
        frequencyMap[col][value] += 1;
      }
    });
  });

  return frequencyMap;
}
