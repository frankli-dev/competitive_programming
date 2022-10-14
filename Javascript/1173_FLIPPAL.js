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
		const S = lines[line + 1]
		line += 2
		let zero = 0, one = 0
		for (let j = 0; j < N; j++) {
			if (S[j] == '0')
				zero++
			if (S[j] == '1')
				one++
		}
		console.log((zero % 2 == 0) || (one % 2 == 0) ? "YES" : "NO")
	}
}
