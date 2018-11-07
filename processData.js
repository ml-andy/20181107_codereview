/**
 * Just a simple data processing flow
 */

const data = [
  { name: 'jack', score: 87 },
  { name: 'arthur', score: 101 },
  { name: 'phyllis', score: Math.random() * 100 },
];

const sortByScore = (data) => {
  return data.sort((a, b) => a.score - b.score);
}

const excludeContinousCharsInName = (data) => {
  return data.filter(({ name }) => {
    const chars = name.split('');

    for (let i = 1; i < chars.length; i += 1) {
      if (chars[i] === chars[i - 1]) {
        return false;
      }
    }

    return true;
  })
};

const appendIsAwesome = (data) => {
  const jack = data.find(item => item.name === 'jack');

  jack.isAwesome = true;

  return data;
};

const ans = [
  sortByScore,
  excludeContinousCharsInName,
  appendIsAwesome,
].reduce((result, fn) => fn(result), data);

console.log(ans);