use std::io::{self, Read, BufRead};

fn gcd(a: u32, b: u32) -> u32 {
    if b == 0 {
        return a;
    }
    gcd(b, a % b)
}
fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let mut T: u32 = iterator.next().unwrap().unwrap().parse().unwrap();
    
    while T > 0 {
        let line = iterator.next().unwrap().unwrap();
        let numbers: Vec<u32> = line
          .trim().split(' ')
          .map(|s| s.parse().unwrap())
          .collect(); 
        
        println!("{}", numbers[0] / gcd(numbers[0], numbers[1]));
        
        T = T - 1;
    }
}