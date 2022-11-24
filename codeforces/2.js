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
    const T = parseInt(lines[0])
    let line = 1
    for (let t = 1; t <= T; t++) {
        const n = parseInt(lines[line++].split(' ')[0], 10)
        let sum = 0, max = 0;

        for (let i = 0; i < n; i++) {
            const a = parseInt(lines[line].split(' ')[0], 10)
            const b = parseInt(lines[line++].split(' ')[1], 10)
            sum += Math.min(a, b);
            if (max < Math.max(a, b))
                max = Math.max(a, b)
        }

        sum += max;
        console.log(sum * 2)

    }
}
