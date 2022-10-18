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
        
        let U = numbers[0];
        let V = numbers[1];
        let A = numbers[2];
        let S = numbers[3];
        if (V * V) < (U * U - 2 * A * S) {
            println!("No");
        } else {
            println!("Yes");
        }
        
        T = T - 1;
    }
}