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

const MIN = -1e9
function solve(N, S) {
    const f = []
    for (let i = 0; i <= N; i++) {
        f.push(new Array(N + 1).fill(MIN))
    }
    f[1][0] = 0
    f[0][1] = 0
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            f[i][j] = Math.max(f[i - 1][j] + S[i - 1][j - 1], f[i][j - 1] + S[i - 1][j - 1])
        }
    }
    if (f[N][N] < 0) {
        return 'Bad Judges'
    } else {
        return (1.0 * f[N][N] / (2 * N - 3)).toFixed(6)
    }
}

function start() {
    T = parseInt(lines[0])
    let line = 1
    for (let t = 1; t <= T; t++) {
        const N = parseInt(lines[line++].split(' ')[0], 10)
        const S = []
        for (let i = 0; i < N; i++) {
            const row = lines[line++].split(' ').map(x => parseInt(x, 10));
            S.push(row)
        }
        console.log(solve(N, S))
    }
}

console.log(solve(2, [[0, -4], [8, 0]]))
console.log(solve(2, [[0, -45], [-8, 0]]))