process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here


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

function start() {
    t = parseInt(lines[0])
    let line = 1
    for (let i = 1; i <= t; i++) {
        const N = parseInt(lines[line].split(' ')[0], 10)
        const A = lines[line + 1].split(' ').map(a => parseInt(a, 10))
        line += 2
        let addon = 0
        for (let j = parseInt(N / 2) - 1; j >= 0; j--) {
            let opp = N - j - 1
            if (A[opp] < A[j] + addon) {
                addon = -1
                break
            }
            const temp = A[opp] - A[j] - addon
            addon += temp
        }
        console.log(addon)
    }
}
