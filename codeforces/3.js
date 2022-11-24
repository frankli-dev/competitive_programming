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
        const A = lines[line++].split(' ').map(x => parseInt(x, 10)).reduce((a, b) => {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []).sort((a, b) => a - b);

        if (A.length == 1) {
            console.log(0)
        } else if (A.length == 2) {
            console.log(2 * (A[1] - A[0]))
        } else {
            const p1 = A[A.length - 1] + A[0] - 2 * A[1]
            const p2 = 2 * A[A.length - 1] - A[A.length - 2] - A[0]
            console.log(Math.max(p1, p2))
        }

    }
}
