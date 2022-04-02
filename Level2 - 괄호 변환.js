function solution(w) {
  if (w === "") return "";
  let u, v;
  let cnt = 0;
  for (let i = 0; i < w.length; i++) {
    w[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }
  if (!isPerfect(u)) {
    let str = "";
    str += `(${solution(v)})`;
    for (let i = 1; i < u.length - 1; i++) {
      u[i] === "(" ? (str += ")") : (str += "(");
    }
    return str;
  }
  return u + solution(v);
}

function isPerfect(str) {
  if (str === "" || str[0] === ")" || str[str.length - 1] === "(") return false;
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === "(" ? cnt++ : cnt--;
  }
  return cnt === 0 ? true : false;
}
