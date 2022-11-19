/**
 * @todo 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 * @description 공백은 아무리 밀어도 공백입니다.
 * @description s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
 * @description s의 길이는 8000이하입니다.
 * @description n은 1 이상, 25이하인 자연수입니다.
 * @param {*} s
 * @param {*} n
 * @returns
 */

// ASCII
// a~z = 97~122
// A~Z == 65~90
// 1~25

// 100 + 23 > 25
// 88(X) + 5 > 90 X Y Z A B
// 88 + 5 = 93-26
// 26!

function solution(s, n) {
  var answer = "";
  let arr = s.split("");
  let arr2 = [];
  arr.map((e) => {
    if (e === " ") {
      arr2.push(e);
    } else if (e.toUpperCase().charCodeAt() + n > 90) {
      arr2.push(String.fromCharCode(e.charCodeAt() + n - 26));
    } else {
      arr2.push(String.fromCharCode(e.charCodeAt() + n));
    }
  });
  return (answer = arr2.join(""));
}

// charCodeAt() 문자 -> 아스키코드 변환
// String.formcharCode() 아스키코드 -> 문자 변환
// 알파벳의 범위는 0~25 = 26
// z 다음 a 로직은 대소문자와 관계없이 같으니,
// 대문자로 변환 후 조건설정.
