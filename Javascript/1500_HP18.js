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

function who(a, b, A) {
    let na = 0, nb = 0, nab = 0
    A.forEach(value => {
        if (value % a == 0) na++
        else if (value % b == 0) nb++
    })
    if (na == 0) return 'ALICE'
    if (na <= nb) return 'ALICE'
    return 'BOB'
}

function start() {
    t = parseInt(lines[0])
    let line = 1
    for (let i = 1; i <= t; i++) {
        const N = parseInt(lines[line].split(' ')[0], 10)
        const a = parseInt(lines[line].split(' ')[1], 10) // bob
        const b = parseInt(lines[line].split(' ')[2], 10) // alice
        const A = lines[line + 1].split(' ').map(v => parseInt(v, 10))
        line += 2
        console.log(who(a, b, A))
    }
}
