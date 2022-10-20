use std::io::{self, Read, BufRead};

fn solve(n: usize, R: &Vec<usize>, B: &Vec<usize>) -> i32 {
    let total_sum: usize = R.iter().sum::<usize>();
    let mut f = vec![vec![-1i32; total_sum + 1]; n];
    f[0][0] = B[0] as i32;
    f[0][R[0]] = 0;
    for i in 1..n {
        let sum: usize = R[0..=i].iter().sum();
        for x in 0..=sum {
            if f[i-1][x] > -1 {
                f[i][x] = f[i-1][x] + B[i] as i32;
            }
            if x >= R[i] {
                f[i][x] = std::cmp::max(f[i-1][x-R[i]], f[i][x]);
            }
        }
    }
    let mut result = 0;
    for x in 0..=total_sum {
        let min = std::cmp::min(x as i32, f[n-1][x]);
        if result < min {
            result = min;
        }
    }

    result
}

fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let mut T: i32 = iterator.next().unwrap().unwrap().parse().unwrap();
    
    while T > 0 {
        let n: usize = iterator.next().unwrap().unwrap().parse().unwrap();
        let R: Vec<usize> = iterator.next().unwrap().unwrap()
          .trim().split(' ')
          .map(|s| s.parse().unwrap())
          .collect();
        let B: Vec<usize> = iterator.next().unwrap().unwrap()
          .trim().split(' ')
          .map(|s| s.parse().unwrap())
          .collect();
        
        println!("{:?}", solve(n, &R, &B));
        
        T = T - 1;
    }
    
}