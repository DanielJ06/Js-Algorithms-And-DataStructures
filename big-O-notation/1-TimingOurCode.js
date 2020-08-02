// 1 - Solution
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  console.log(total)
}

addUpTo(6)

// 2 - Solution
function anotherAddUpTo(n) {
  console.log( n * (n + 1) / 2 );
}

anotherAddUpTo(6)

// Which one is better?
/**
 * What does better mean? 
 *  - Faster? 
 *  - Less memory-intensive? 
 *  - More readable?
*/

// Which one is faster? The problem with Time
/** 
 * Different machines will record different times
 * The SAME machine will record different times
 * For fast algorithms, speed may not be precise enough
*/