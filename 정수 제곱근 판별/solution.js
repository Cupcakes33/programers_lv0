/**
 * @todo 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
 * @description n은 1이상, 50000000000000 이하인 양의 정수입니다.
 * @param { Number } n
 * @returns
 */
function solution(n) {
  var answer = 0;
  if (Number.isInteger(Math.sqrt(n))) {
    answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  } else {
    answer = -1;
  }
  return answer;
}

// https://hianna.tistory.com/463 정수인지 실수인지 체크하는 방법