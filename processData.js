/**
 * Just a simple data processing flow
 */

/**
  * Feedback:
  * We can use pipe function to make flow more flexible.
  * appendIsAwesome should use .map to aviod side effect
  * excludeContinousCharsInName's name should add initial value to aviod the data without name key
  * and use .reduce to make code better.
 */

const data = [
  { name: 'jack', score: 87 },
  { name: 'arthur', score: 101 },
  { name: 'phyllis', score: Math.random() * 100 },
];

const sortByScore = data => data.sort((a, b) => a.score - b.score);

const excludeContinousCharsInName = data => (
  data.filter(({ name = '' }) => (
    name.split('')
      .reduce((res,_,idx,ary) => (
        res ? !(ary[idx] === ary[idx - 1]) : false
      ), true)
  ))
);

const appendIsAwesome = data => (
  data.map(item => (
    item.name === 'jack'
      ? { ...item, isAwesome: true }
      : item
  ))
);

const pipe = (firstFn, ...moreFn) =>
    moreFn.reduce((acc,curr) => (...arg) => curr(acc(...arg)), firstFn);

const ans = pipe(
  sortByScore,
  excludeContinousCharsInName,
  appendIsAwesome,
)(data);

console.log(ans);