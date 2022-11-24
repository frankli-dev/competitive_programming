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
    let max = 0,
      max_bit = 0;
    for (let i = 0; i < n; i++) {
      if (max < a[i]) max = a[i];
    }
    while (max) {
      max_bit++;
      max >>= 1;
    }
    let factor = 1;
    let sum = BigInt(0);
    // console.log({max_bit})
    if (a.length == 1) {
      console.log(0);
    } else if (a.includes(0)) {
      console.log("-1");
    } else {
      for (let k = 0; k < max_bit; k++) {
        // console.log({factor})
        let count = 0;
        let b = [],
          x = 0;
        for (let i = 0; i < a.length; i++) {
          if (a[i] & factor) {
            count++;
            x |= a[i];
          } else {
            b.push(a[i]);
          }
        }
        if (x > 0) {
          b.push(x);
          sum += BigInt(factor) * BigInt(count - 1);
        }
        a = [...b];
        if (a.length < 2) {
          break;
        }
        factor <<= 1;
      }
      if (a.length > 1) {
        console.log("-1");
      } else {
        if (sum == 0) {
          console.log("-1");
        } else {
          console.log(sum.toString());
        }
      }
    }

    t--;
  }
}
