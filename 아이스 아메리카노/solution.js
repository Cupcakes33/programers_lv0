/**
 * @todo 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다.
 * 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * @param { Number } Number 머쓱이의 잔고
 * @description 0 < money <= 1000000
 * @returns [ Array ] Array [아메리카노 잔 수, 남은 돈]
 */
function solution(money) {
  var answer = [];
  let americano = parseInt(money / 5500);
  let balance = money - americano * 5500;
  return answer = [americano, balance];
}

// 다른 사람들의 solution
// function solution(money) {
//     return [Math.floor(money / 5500), money % 5500];
// }
// Math.floor 는 소수점 이하를 버림하는 메소드
// 해당 솔루션의 목적에는 숫자 형 변환을 하는 parseInt보다
// Math.floor 를 사용하는 것이 좀 더 목적에 부합한다고 볼 수 있겠다.
// 생각해보니까 % 함수로 나머지를 구하면 바로 잔고가 됐을 텐데 이 부분은 실수했던 것 같다.