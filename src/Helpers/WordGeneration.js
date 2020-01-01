import wordPairsCategorized from './WordPairs';

function shuffle(array) {
  const _array = array.slice(0);
  for(let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
}

const allWords = [].concat.apply([], wordPairsCategorized);

function generateWords(quantity) {
  let words = allWords.slice(0, quantity);
  let id = 0;
  const newWords = words.reduce((acc, value) => {
    acc.push({
      id: id++,
      value: value.deutsch,
      translationId: value.translationId
    });

    acc.push({
      id: id++,
      value: value.english,
      translationId: value.translationId
    });

    return acc;
  }, [])

  return shuffle(newWords);
}

export default generateWords;
