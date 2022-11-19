/**
 * @todo 문제 설명
  자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
  예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 * @description N의 범위 : 100,000,000 이하의 자연수
 * @param { Number } n 
 * @returns 
 */
function solution(n) {
  var answer = 0;
  return answer = String(n).split("").map(Number).reduce((acc, curr) => acc + curr, 0);
}

// https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers 참고
// https://m.blog.naver.com/wideeyed/221877924629 참고
// 생성자함수 String 으로 문자열로 만들어주는 방법 외에 (n+'')를 하는 방법도 있다.