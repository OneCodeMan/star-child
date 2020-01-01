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

const words = [
  {
    'deutsch': 'heiß',
    'english': 'hot'
  },
  {
    'deutsch': 'kalt',
    'english': 'cold'
  },
  {
    'deutsch': 'höflich',
    'english': 'polite'
  },
  {
    'deutsch': 'reif',
    'english': 'mature'
  },
  {
    'deutsch': 'niedlich',
    'english': 'cute'
  },
];

function generateWords() {
  let id = 0;
  const newWords = words.reduce((acc, value) => {
    acc.push({
      id: id++,
      value: value.deutsch,
    });

    acc.push({
      id: id++,
      value: value.english,
    });
    
    return acc;
  }, [])

  return shuffle(newWords);
}

export default generateWords;
