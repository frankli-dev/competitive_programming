use std::io::{self, BufRead};
use std::cmp;
fn add(u: usize, i: i32) -> usize {
    if i.is_negative() {
        u - i.wrapping_abs() as u32 as usize
    } else {
        u + i as usize
    }
}
fn main() {
    let stdin = io::stdin();
    let mut iterator = stdin.lock().lines();
    let n: usize = iterator.next().unwrap().unwrap().parse().unwrap();
    let mut inputs = vec![vec![false; n+2]; n+2];
    let mut cross = vec![vec![vec![0; 8]; n+2]; n+2];
    const delta: [(i32, i32); 8] = [(0, -1), (-1, -1), (-1, 0), (-1, 1), (0, 1), (1, 1), (1, 0), (1 ,-1)];

    for i in 0..n {
        let line = iterator.next().unwrap().unwrap();
        for (j, c) in line.chars().enumerate() {
            if c == 'X' {
                inputs[i+1][j+1] = true;
            }
        }
    }
    
    for i in 1..=n {
        for j in 1..=n {
            if inputs[i][j] {
                for k in 0..3 {
                    let x = add(i, delta[k].0);
                    let y = add(j, delta[k].1);
                    cross[i][j][k] = cross[x][y][k] + inputs[i][j] as i32;
                }   
            }
        }
    }
    
    for i in 1..=n {
        for j in (1..=n).rev() {
            if inputs[i][j] {
                let x = add(i, delta[3].0);
                let y = add(j, delta[3].1);
                cross[i][j][3] = cross[x][y][3] + inputs[i][j] as i32;
            }
        }
    }
    
    for i in (1..=n).rev() {
        for j in (1..=n).rev() {
            if inputs[i][j] {
                for k in 4..7 {
                    let x = add(i, delta[k].0);
                    let y = add(j, delta[k].1);
                    cross[i][j][k] = cross[x][y][k] + inputs[i][j] as i32;
                }    
            }
        }
    }
    
    for i in (1..=n).rev() {
        for j in 1..=n {
            if inputs[i][j] {
                let x = add(i, delta[7].0);
                let y = add(j, delta[7].1);
                cross[i][j][7] = cross[x][y][7] + inputs[i][j] as i32;
            }
        }
    }
    
    
    for i in 1..=n {
        for j in 1..=n {
            let mut max = 0;
            for k in 0..4 {
                max = cmp::max(max, cross[i][j][k] + cross[i][j][k+4] - 1);
            }
            print!("{} ", max);
        }
        println!("");
    }
}