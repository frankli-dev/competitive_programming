use std::io::{self, Read, BufRead};
fn print_type_of<T>(_: &T) {
    println!("{}", std::any::type_name::<T>())
}
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
          
        let first = numbers.first().unwrap();
        let second = numbers[1];
        
        if first < &second {
            println!("FIRST");
        } else if first > &second {
            println!("SECOND");
        } else {
            println!("ANY");
        }
        
        T = T - 1;
    }
}