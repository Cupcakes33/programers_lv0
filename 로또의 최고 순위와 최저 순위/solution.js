/**
 * @todo https://school.programmers.co.kr/learn/courses/30/lessons/77484
 * @param {*} lottos
 * @param {*} win_nums
 * @returns
 */

function solution(lottos, win_nums) {
  let rankArr = [6, 6, 5, 4, 3, 2, 1];
  let arr = lottos.filter((v) => v != 0);
  let zeroCount = 6 - arr.length;
  let count = 0;
  win_nums.forEach((e) => {
    arr.forEach((n) => {
      if (e === n) {
        count++;
      }
    });
  });
  return [rankArr[count + zeroCount], rankArr[count]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
