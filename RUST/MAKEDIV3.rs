use std::io::{self, Read, BufRead};

fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let mut T: i32 = iterator.next().unwrap().unwrap().parse().unwrap();
    
    while T > 0 {
        match iterator.next().unwrap().unwrap().parse().unwrap() {
            1 => println!("3"),
            N => println!("1{}5", "0".repeat(N-2))
        }
        
        T = T - 1;
    }
}