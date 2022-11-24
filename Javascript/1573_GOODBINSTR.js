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
    let s = lines[line++];
    let n = s.length;
    let a = 0,
      b = 0;
    for (let i = 0; i < n - 1; i++) {
      if (s[i] == "0" && s[i + 1] == "1") a++;
      if (s[i] == "1" && s[i + 1] == "0") b++;
    }
    if (Math.abs(a - b) > 1) {
      console.log(0);
    } else if (a == b) {
      console.log(n - 2);
    } else {
      console.log(2);
    }
    t--;
  }
}
