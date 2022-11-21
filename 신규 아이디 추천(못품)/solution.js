function solution(new_id) {
  var answer = "";
  answer = rule1(new_id);
  answer = rule2(answer);
  answer = rule3(answer);
  answer = rule4(answer);
  answer = rule5(answer);
  answer = rule6(answer);
  answer = rule7(answer);
  return answer;
}

const rule1 = (id) => {
  id = id.toLowerCase();
  return id;
};

const rule2 = (id) => {
  id = id.replace(/[^\w-_.]/g, "");
  return id;
};

const rule3 = (id) => {
  while (id.includes("..")) {
    id = id.replace("..", ".");
  }
  return id;
};

const rule4 = (id) => {
  if (id.length > 0 && id[0] === ".") {
    id = id.slice(1, id.length);
  }
  if (id.length > 0 && id[id.length - 1] === ".") {
    id = id.slice(0, id.length - 1);
  }
  return id;
};

const rule5 = (id) => {
  if (id.length === 0) {
    id = "a";
  }
  return id;
};

const rule6 = (id) => {
  if (id.length > 15) {
    id = id.slice(0, 15);
    if (id[14] === ".") {
      id = id.slice(0, id.length - 1);
    }
  }
  return id;
};

const rule7 = (id) => {
  if (id.length < 3) {
    let char = id[id.length];
    while (id.length < 3) {
      id += char
    }
  }
};

console.log(solution("123_.def"));
console.log(solution("...!@BaT#*..y.abcdefghijklm"));
