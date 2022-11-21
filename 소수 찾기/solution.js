/**
 * @todo 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)
 * n은 2이상 1000000이하의 자연수입니다.
 * @param {*} n 
 * @returns 
 */

function solution(n) {
  var answer = 0;

  let sqrt = Math.ceil(Math.sqrt(n));
  let filledArr = new Array(n + 1).fill(0);
  for (let i = 2; i <= sqrt; i++) {
    for (let j = 2; j <= n / i; j++) {
      filledArr[i * j] = 1;
    }
  }
  return (answer = filledArr.filter((e) => e !== 1).length - 2);
}

// 에라토스테네스의 체 사용
// https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4
// n+1 길이의 배열을 만들고 그 안에 전부 0을 넣어서 0~n 까지 모두 일단 소수로 취급
// n의 제곱근보다 큰 수의 배수는 필요없으므로 n의 제곱근을 변수에 할당 (Math.ceil(Math.sqrt(n)))
// 기준점 2부터 sqrt 까지
// n번을 굳이 곱할필요 없이 n/i 까지만 곱해보면 되므로 곱해야 할 수는 n/i
// 0이 채워진 배열에 배수가 존재하는 수는 1로 변경
// filter 메소드를 사용하여 배수가 존재하는 수는 걸러내면 안에 소수만 남는다.
// 그 배열의 길이를 구해서 -2를 해주면 끝.
// 배열의 길이에 -2를 해주는 이유는 0과 1도 배열에 포함되어 있기 때문에.
