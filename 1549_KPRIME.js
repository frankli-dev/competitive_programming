process.stdin.resume();
process.stdin.setEncoding('utf8');

// declare global variables
var input_stdin = "";
var lines = "";
var input_currentline = 0;

// standard input is stored into input_stdin
process.stdin.on('data', function (data) {
    input_stdin += data;
});

// standard input is done and stored into an array
process.stdin.on('end', function () {
    lines = input_stdin.split("\n");
    start();
});

let count = [], until = [], MAX = 100000

function init() {
    for (let i = 0; i <= MAX; i++) {
        count.push(0)
        until.push(new Array(6).fill(0))
    }

    for (let i = 2; i <= MAX; i++) {
        if (count[i] == 0) {
            for (let j = i; j <= MAX; j += i) {
                count[j]++
            }
        }
    }

    for (let i = 2; i <= MAX; i++) {
        until[i] = [...until[i - 1]];
        if (count[i] <= 5) {
            until[i][count[i]]++;
        }
    }
}

function start() {
    t = parseInt(lines[0])
    let line = 1
    init()

    for (let i = 1; i <= t; i++) {
        const A = parseInt(lines[line].split(' ')[0], 10)
        const B = parseInt(lines[line].split(' ')[1], 10)
        const K = parseInt(lines[line].split(' ')[2], 10)
        line++
        console.log(until[B][K] - until[A - 1][K])
    }
}
