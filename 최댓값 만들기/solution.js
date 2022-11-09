/**
 * @todo 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 * @description 0 ≤ numbers의 원소 ≤ 10,000
 * @description 2 ≤ numbers의 길이 ≤ 100
 * @param {numbers} Array 정수 배열
 * @returns number 두 개를 곱해 만들 수 있는 최댓값
 */

function solution(numbers) {
  var answer = 0;
  let max = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (max < numbers[i] * numbers[j]) {
        max = numbers[i] * numbers[j];
      }
    }
  }
  return (answer = max);
}

// 다른사람들의 solution
// function solution(numbers) {
//     numbers.sort((a,b)=>b-a);
//     return numbers[0] * numbers[1];
// }
// sort((a,b)=>(b-a)) 로 내림차순 정렬 한 후 0번째 인덱스와 1번째 인덱스를 곱할 수도 있다.