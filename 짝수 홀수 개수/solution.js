/**
 * @todo 정수가 담긴 num_list 가 주어질 때, num_list 의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하는 함수
 * @description 1 <= num_list 의 길이 <= 100
 * @description 0 <= num_list 의 원소 <= 1000
 * @param { Array } Array 정수가 담긴 배열
 * @returns { Array } Array [짝수, 홀수]
 */
function solution(num_list) {
  var answer = [];
  let even = 0;
  let odd = 0;

  num_list.forEach((e) => {
    if (e % 2 === 1) {
      odd++;
    } else {
      even++;
    }
  });
  return (answer = [even, odd]);
}
