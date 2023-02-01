#[allow(unused_imports)]
use std::cmp::{min,max};
use std::io::{BufWriter, stdin, stdout, Write};
use std::collections::HashMap;
const MAX_X: usize = 500_000;
 
#[derive(Default)]
struct Scanner {
    buffer: Vec<String>
}
impl Scanner {
    fn next<T: std::str::FromStr>(&mut self) -> T {
        loop {
            if let Some(token) = self.buffer.pop() {
                return token.parse().ok().expect("Failed parse");
            }
            let mut input = String::new();
            stdin().read_line(&mut input).expect("Failed read");
            self.buffer = input.split_whitespace().rev().map(String::from).collect();
        }
    }
}
 
fn main() {
    let mut scan = Scanner::default();
    let out = &mut BufWriter::new(stdout());
    
    let n = scan.next::<usize>();
    let x = scan.next::<usize>();
    
    let mut cnt = HashMap::new();
    for _ in 0..n {
        let elem = scan.next::<usize>();
        cnt.entry(elem).and_modify(|count| *count += 1).or_insert(1);
    }
    
    let mut overflow = 0;
    let mut possible = true;
    for k in 1..x {
        let count = cnt.get(&k).unwrap_or(&0);
        if (count + overflow) % (k + 1) > 0 {
            possible = false;
            break;
        }
        overflow = (count + overflow) / (k + 1);
    }
    writeln!(out, "{}", if possible { "Yes" } else { "No" }).ok();
}
