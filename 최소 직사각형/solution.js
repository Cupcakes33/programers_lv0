function solution(sizes) {
  let width = [];
  let height = [];

  sizes.forEach((e) => {
    if (e[0] > e[1]) {
      width.push(e[0]);
      height.push(e[1]);
    } else {
      width.push(e[1]);
      height.push(e[0]);
    }
  });
  return Math.max(...width) * Math.max(...height);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
