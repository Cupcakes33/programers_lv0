/**
 * @todo 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 * @description n은 1 이상 100,000,000 이하인 자연수입니다.
 * @param {Number} n
 * @returns
 */
function solution(n) {
  var answer = 0;
  return (answer = parseInt(n.toString(3).split("").reverse().join(""), 3));
}

// Number.prototype.toString(n) => 10진수 Number를 n 진수로 변환
// parseInt('String', n) => n진수인 'String'을 10진수로 변환
