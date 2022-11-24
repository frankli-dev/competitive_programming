use std::io::{self, Read, BufRead};
fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let inputs: Vec<usize> = iterator.next().unwrap().unwrap().trim().split(' ').map(|s| s.parse().unwrap()).collect();
    let t = inputs[0];
    let k = inputs[1];
    const MAX: usize = 100000;
    const MOD: usize = 1000000007;
    let mut f = vec![0; MAX+1];

    f[0] = 1;
    for i in 1..=MAX {
        f[i] = f[i-1];
        if i >= k {
            f[i] = (f[i] + f[i-k]) % MOD;
        }
    }
    
    for i in 1..=MAX {
        f[i] = (f[i] + f[i-1]) % MOD;
    }

    for T in 0..t {
        let line = iterator.next().unwrap().unwrap();
        let numbers: Vec<usize> = line
        .trim().split(' ')
        .map(|s| s.parse().unwrap())
        .collect();
        
      let a = numbers[0];
      let b = numbers[1];
      
      println!("{}", f[b] - f[a-1]);
    }
}