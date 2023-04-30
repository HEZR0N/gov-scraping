import json
import os
from bs4 import BeautifulSoup

# Initialize essential tools/variables
count = 0
from_file = 'F:\WebScrapper\OAC Award 2023-04-30'
to_file = 'F:\WebScrapper\OAC Award Json 2023-04-18'
dname = 'OAC Award Json 2023-04-18'

# For loop. Cycles through html files, converts them to json.
for filename in os.listdir(from_file+'\\'):
    if filename[-5:] == '.html':
      # If HTML file, create path/award/keyword variables
      path = filename.split(' ', 2)
      award = path[0] + " " + path[1]
      keyword = path[2].split('_')

      # Soup call on html file.
      soup = BeautifulSoup(open(os.path.join(from_file, filename), "r", encoding="latin-1"), features="html.parser")

      # Json dictionary for formatting new file
      json_dict = {
      'Award': str(award),
      'keyword': str(keyword[0]),
      'title': str(soup.title),
      'text': str(soup.p),
      'raw html': soup.get_text()}

      # Count increment, json dump, file output
      count += 1
      json_object = json.dumps(json_dict, indent=5)
      fname = '\award_{keyword[0]}_{count}.json'
      #dname = 'CICI Award Json 2023-04-10'
      with open(to_file + f'\{award}_{keyword[0]}_{count}.json', "w") as outfile:
        outfile.write(json_object)

# Print line for verifications
print(str(count))
print('Done!')