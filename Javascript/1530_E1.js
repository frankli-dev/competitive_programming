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
        const board = [], flag = []
        let sx = 0, sy = 0
        const f = []
        for (let j = 0; j < N; j++) {
            const row = lines[line++]
            board.push(row)
            const frow = []
            for (let k = 0; k < N; k++) {
                frow.push(0)
            }
            f.push(frow)
            const flagrow = []
            for (let k = 0; k < N; k++) {
                flagrow.push(0)
            }
            flag.push(flagrow)
            if (row.indexOf('K') >= 0) {
                sx = j
                sy = row.indexOf('K')
            }
        }
        flag[sx][sy] = 1
        const delta = [[-2, -1], [-1, -2], [1, -2], [2, -1]]
        for (let y = sy + 1; y < N; y++) {
            for (let x = 0; x < N; x++) {
                let max = 0
                delta.forEach(([dx, dy]) => {
                    const px = x + dx
                    const py = y + dy
                    const pawn = board[x][y] == 'P'
                    if (px >= 0 && px < N && py >= 0 && py < N && flag[px][py] == 1) {
                        if (max < f[px][py] + (pawn ? 1 : 0))
                            max = f[px][py] + (pawn ? 1 : 0)
                        flag[x][y] = 1
                    }
                })
                if (f[x][y] < max)
                    f[x][y] = max
            }
        }
        let max = 0
        for (let x = 0; x < N; x++) {
            if (max < f[x][N - 1])
                max = f[x][N - 1]
        }
        console.log(max)
    }
}
