use std::io::{self, Read, BufRead};
use std::string::String;

fn is_palindrome(S: &str) -> bool {
    S.to_string().eq(&S.chars().rev().collect::<String>())
}

fn palindrome_partition(n: usize, S: &str) {
    let zero_count = S.matches("0").count();
    let one_count = S.matches("1").count();
    let half = S.len() / 2;
    if zero_count == 0 || one_count == 0 {
        println!("-1");
        return;
    }
    if !is_palindrome(S) {
        println!("1");
        println!("{}", S.len());
        return;
    }
    if !is_palindrome(&S[0..half]) {
        println!("2");
        println!("{} {}", half, half);
        return;
    }
    println!("2");
    println!("{} {}", half + 1, half - 1);
}

fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let mut T: i32 = iterator.next().unwrap().unwrap().parse().unwrap();
    
    while T > 0 {
        let n: usize = iterator.next().unwrap().unwrap().parse().unwrap();
        let S = iterator.next().unwrap().unwrap();
        
        palindrome_partition(n, &S);
        
        T = T - 1;
    }
}