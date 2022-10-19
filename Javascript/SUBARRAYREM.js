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

function calcCount(N, A) {
    let count = 0;
    let stack = []
    for (let j = 0; j < N; j++) {
        const current = A[j]
        if (stack.length) {
            let last = stack[stack.length - 1]
            if (last != current) {
                stack.pop()
                count++
            } else {
                stack.push(current)
            }
        } else {
            stack.push(current)
        }
    }
    if (stack.length > 0 && stack[stack.length - 1] == 1) {
        count += parseInt(stack.length / 3)
    }
    return count
}

function start() {
    t = parseInt(lines[0])
    let line = 1
    for (let i = 1; i <= t; i++) {
        const N = parseInt(lines[line++].split(' ')[0], 10)
        const A = lines[line++].split(' ').map(x => parseInt(x, 10))

        console.log(Math.max(calcCount(N, A)))
    }
}
