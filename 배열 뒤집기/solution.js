/**
 * @todo 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
 * @param { Array } Array 정수가 들어있는 배열
 * @description 1 ≤ num_list의 길이 ≤ 1,000
 * @description 0 ≤ num_list의 원소 ≤ 1,000
 * @returns { Array } 원소의 순서를 거꾸로 뒤집은 배열
 */

function solution(num_list) {
  var answer = [];
  num_list.forEach(e => {
    answer.unshift(e)
  });
  return answer;
}

// num_list.reverse() 메소드를 쓰면 간단하게 배열을 뒤집을 수 있다.
// 그런데 reverse() 메소드는 기존 배열도 함께 변경된다. (얕은 복사)
// 이를 방지하기 위해 spread operator 를 사용하거나 Array.map 구문을 사용하는 것이 바람직하다.


