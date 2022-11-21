function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      else return -1;
    }
  });
}

// sort() : 문자열 배열의 compareFunction 이용하는 법
// sort((a,b)=>{
//   if(a>b) return -1
//   if(a<b) return 1
//   if(a=b) return 0

// }) // 내림차순 정렬
