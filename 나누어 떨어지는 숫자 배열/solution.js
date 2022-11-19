/**
 * @todo array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
   divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
 * @description arr은 자연수를 담은 배열입니다.
 * @description 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
 * @description divisor는 자연수입니다.
 * @description array는 길이 1 이상인 배열입니다.
 * @param {*} arr 
 * @param {*} divisor 
 * @returns 
 */

function solution(arr, divisor) {
  var answer = [];
  let arr2 = arr.filter((e) => e % divisor == 0).sort((a, b) => a - b);
  arr2.length == 0 ? (answer = [-1]) : (answer = arr2);
  return answer;
}