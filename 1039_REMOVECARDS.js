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
        const N = parseInt(lines[line], 10)
        const A = lines[line + 1].split(' ')
        const flag = {}
        let max = 0
        A.forEach(a => {
            const value = parseInt(a, 10)
            flag[value] = flag[value] ? flag[value] + 1 : 1
            if (flag[value] > max)
                max = flag[value]
        })
        console.log(A.length - max)
        line += 2
    }
}
