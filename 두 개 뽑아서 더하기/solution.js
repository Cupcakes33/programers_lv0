function solution(numbers) {
  let sumArr = [];
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      sumArr.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(sumArr);
  return [...set].sort((a, b) => a - b);
}
