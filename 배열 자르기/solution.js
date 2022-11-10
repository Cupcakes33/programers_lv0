/**
 * @todo 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
 * numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
 * @description 2 ≤ numbers의 길이 ≤ 30
 * @description 0 ≤ numbers의 원소 ≤ 1,000
 * @description 0 ≤num1 < num2 < numbers의 길이
 * @param { Array } numbers 정수 배열
 * @param { Number } num1 매개변수1
 * @param { Number } num2 매개변수2
 * @returns
 */

function solution(numbers, num1, num2) {
  var answer = [];
  // for(let i=num1; i<num2+1; i++){
  //   answer.push(numbers[i])
  // }
  answer = numbers.splice(num1,num2)
  return answer;
}

// answer = numbers.splice(num1,num2+1)로 풀 수도 있다.

