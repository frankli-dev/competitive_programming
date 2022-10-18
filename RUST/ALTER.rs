use std::io::{self, Read, BufRead};
fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let mut T: i32 = iterator.next().unwrap().unwrap().parse().unwrap();
    
    while T > 0 {
        let line = iterator.next().unwrap().unwrap();
        let numbers: Vec<i32> = line
          .trim().split(' ')
          .map(|s| s.parse().unwrap())
          .collect();
        
        let A = numbers[0];
        let B = numbers[1];
        let P = numbers[2];
        let Q = numbers[3];
        
        if (P % A == 0) && (Q % B == 0) && ((P / A - Q / B).abs() <= 1) {
            println!("Yes");
        } else {
            println!("No");
        }
        
        T = T - 1;
    }
}