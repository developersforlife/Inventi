/*Creates list numbers 1 to 100
Replace all numbers divisible by 3 with “fizz”
Replace all numbers divisible by 5 with “buzz”
Replace all numbers divisible by both 3 and 5 with “fizzbuzz”*/

const fb = (x) => {
  if(x%15 === 0) return 'fizzbuzz';
  if(x%5 === 0) return 'buzz';
  if(x%3 === 0) return 'fizz';
  return x;

}

const fizzbuzz = (start = 1, end = 100) => {
  const a = [];
  for(let x = start; x <= end; a.push(fb(x++)));
  return a;
}
export default fizzbuzz
