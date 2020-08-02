// If not time, then what?

/**
 * Rather than counting seconds 
 * let's count the number of operations the computer has to perform
*/

// Counting Operations

// First solution
function firstAddUpTo(n) {
  return n * (n + 1) / 2
}

// In this solution we have 3 simple operations
/**
 *  1 multiplication
 *  1 addition
 *  1 division
*/

// Second solution
function secondAddUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// In this solution we have 'n' operations
/**
 * For being in a loop, 
 * the higher the value of N, the greater the number of operations
 * Example: 
 *  if n = 100, then we have:
 *    - 100 additions
 *    - 100 addignments
 *    - 100 comparisons
 *    - ...
*/

/**
 * But regardless of the exact number,
 * the number of operations grows roughly 
 * proportionally with 'n'
*/