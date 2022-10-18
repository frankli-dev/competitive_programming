use std::io::{self, BufRead};
fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let mut T: i32 = iterator.next().unwrap().unwrap().parse().unwrap();
    
    while T > 0 {
        match iterator.next().unwrap().unwrap().parse().unwrap() {
            2 => println!("2 1"),
            N => {
                for i in 2..=N {
                    print!("{} ", i);
                }
                println!("1");
            }
        }
        
        T = T - 1;
    }
}