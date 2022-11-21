function solution(answers) {
  var answer = [];
  let count = [0, 0, 0];
  let supoman1 = [1, 2, 3, 4, 5];
  let supoman2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let supoman3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((e, n) => {
    if (e === supoman1[n % supoman1.length]) {
      count[0]++;
    }
    if (e === supoman2[n % supoman2.length]) {
      count[1]++;
    }
    if (e === supoman3[n % supoman3.length]) {
      count[2]++;
    }
  });

  let max = Math.max(...count);
  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) {
      answer.push(i + 1);
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
