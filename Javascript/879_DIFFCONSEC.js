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
        const N = parseInt(lines[line++], 10)
        const S = lines[line++].split('').map(x => parseInt(x, 10))
        let count = 0
        for (let j = 1; j < N; j++) {
            if (S[j] == S[j - 1])
                count++
        }
        console.log(count)
    }
}
