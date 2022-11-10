/**
 * @todo 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
 * @description sides의 원소는 자연수입니다.
 * @description sides의 길이는 3입니다.
 * @description 1 ≤ sides의 원소 ≤ 1,000
 * @param { Array } sides 세 변의 길이가 담긴 배열
 * @returns { Number } 주어진 세 변으로 삼각형을 만들 수 있다면 1, 그렇지 않다면 2를 리턴
 */

function solution(sides) {
  var answer = 0;
  sides.sort();
  if (sides[0] + sides[1] > sides[2]) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}
