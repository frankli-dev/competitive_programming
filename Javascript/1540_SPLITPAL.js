process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here

// declare global variables
var input_stdin = "";
var lines = "";
var input_currentline = 0;

// standard input is stored into input_stdin
process.stdin.on("data", function (data) {
  input_stdin += data;
});

// standard input is done and stored into an array
process.stdin.on("end", function () {
  lines = input_stdin.split("\n");
  start();
});

function start() {
  t = parseInt(lines[0]);
  let line = 1;
  while (t > 0) {
    let n = parseInt(lines[line++]);
    let a = lines[line++].split(" ").map((x) => parseInt(x));
    let res = 0;
    let i = 0,
      j = n - 1;
    while (i < j) {
      let diff = a[i] - a[j];
      i++;
      j--;
      if (diff > 0) {
        i--;
        a[i] = diff;
        res++;
      } else if (diff < 0) {
        j++;
        a[j] = -diff;
        res++;
      }
    }
    console.log(res);
    t--;
  }
}
