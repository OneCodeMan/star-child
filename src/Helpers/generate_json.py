# https://stackoverflow.com/questions/18337407/saving-utf-8-texts-in-json-dumps-as-utf8-not-as-u-escape-sequence

import json

json_words = [] # the main output
deutsch_words = [] # array to check for duplicates. add each word here. check if every preceding word exists here

data = {}
filename = 'words.txt'
json_filename = 'words.json'
with open(filename) as f:
    content = f.readlines()

id = 0
for word_raw in content:
    if not word_raw.startswith('#'):
        word_raw = word_raw.rstrip()
        word_values = word_raw.split('|')

        if word_values[0] not in deutsch_words:
            deutsch_words.append(word_values[0])
            data['deutsch'] = word_values[0]
            data['english'] = word_values[1]
            data['type'] = word_values[2] if len(word_values) > 2 else 'other'
            data['category'] = word_values[3] if len(word_values) > 3 else 'none'
            data['translationId'] = id
            id += 1

            # necessary encoding is for umlauts
            json_data = json.dumps(data, ensure_ascii=False).encode('utf8')
            json_words.append(json_data.decode())


# print(json_words)

with open(json_filename, 'w', encoding='utf8') as json_file:
    json.dump(json_words, json_file, ensure_ascii=False)
