import wordsJSONString from './words.json';

const wordsJSON = wordsJSONString.map(word => JSON.parse(word));
const adjectives = wordsJSON.filter(word => word.type === 'adjective');
const verbs = wordsJSON.filter(word => word.type === 'verb');
const conjunctions = wordsJSON.filter(word => word.type === 'conjunction');

const wordPairsCategorized =  {
  'adjectives': adjectives,
  'verbs': verbs,
  'conjunctions': conjunctions
};

export default wordPairsCategorized;
