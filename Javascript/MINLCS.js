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
        const N = parseInt(lines[line++].split(' ')[0], 10)
        const A = lines[line++]
        const B = lines[line++]
        let fa = {}, fb = {}
        A.split('').forEach(ch => {
            if (fa[ch]) fa[ch]++
            else fa[ch] = 1
        })
        B.split('').forEach(ch => {
            if (fb[ch]) fb[ch]++
            else fb[ch] = 1
        })
        let max = 0
        "abcdefghijklmnopqrstuvwxyz".split("").forEach((j) => {
            if (max < Math.min(fa[j] || 0, fb[j] || 0))
                max = Math.min(fa[j] || 0, fb[j] || 0)
        })
        console.log(max)
    }
}
