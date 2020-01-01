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
    'english': 'hot',
    'translationId': 0,
  },
  {
    'deutsch': 'kalt',
    'english': 'cold',
    'translationId': 1,
  },
  {
    'deutsch': 'höflich',
    'english': 'polite',
    'translationId': 2,
  },
  {
    'deutsch': 'reif',
    'english': 'mature',
    'translationId': 3,
  },
  {
    'deutsch': 'niedlich',
    'english': 'cute',
    'translationId': 4,
  },
  {
    'deutsch': 'teuer',
    'english': 'expensive',
    'translationId': 5,
  },
  {
    'deutsch': 'breit',
    'english': 'wide',
    'translationId': 6,
  },
  {
    'deutsch': 'besorgt',
    'english': 'worried',
    'translationId': 7,
  },
];

function generateWords() {
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
