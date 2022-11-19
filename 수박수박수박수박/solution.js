/**
 * @todo 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
 * 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
 * @description n은 길이 10,000이하인 자연수입니다.
 * @param {*} n
 * @returns
 */
function solution(n) {
  var answer = "";

  n % 2 === 0
    ? (answer = "수박".repeat(n / 2))
    : (answer = "수박".repeat(n / 2) + "수박"[0]);
  return answer;
}

// const waterMelon = n => "수박".repeat(n).slice(0,n);
