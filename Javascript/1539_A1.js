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
        const M = parseInt(lines[line++].split(' ')[1], 10)
        const B = []
        let max = 0
        for (let j = 0; j < N; j++) {
            B.push(parseInt(lines[line], 10))
            max += parseInt(lines[line++], 10)
        }
        let flag = []
        for (let j = 0; j <= max; j++) {
            flag.push(false)
        }
        flag[0] = true
        let found = false
        for (let j = 0; j < N; j++) {
            let k = 0;
            for (k = max; k >= 0; k--) {
                if (flag[k] != false && (k + B[j] <= max)) {
                    flag[k + B[j]] = true
                    if (k + B[j] == M) {
                        found = true
                        break
                    }
                }
            }
            if (k != -1)
                break
        }
        console.log(found ? "Yes" : "No")
    }
}
