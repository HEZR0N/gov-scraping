#Imports
import os
import requests
import datetime

from bs4 import BeautifulSoup
from googlesearch import search

# Press the green button to run the Web-Scraper
if __name__ == '__main__':
    # Open corresponding Keywords file.
    keywords_file = open("OAC_Award_keywords.txt", "r")

    # Read data into variable, split based on delimited to form list.
    keywords = keywords_file.read()
    keywords_list = keywords.split("\n")

    # Output keywords lsit and length.
    print(keywords_list)
    print(len(keywords_list))

    # Using file object, clean & declare filename
    filename = keywords_file.name
    filename = filename.strip('keywords.txt')
    filename = filename.replace('_', ' ')

    # Query Google for query.
    url_set = set()
    url_list = list()

    # For each keyword, query google.
    for key in keywords_list[13:]:
        query = filename + key
        print(query)
        # for j in search(query, tld="com", num=50, stop=50, pause=5):
        try:
            searches = search(query, num=100, start=0, stop=500, pause=5)
        except: print("Search query failure.")

        for j in searches:
            if j[-4:] != '.pdf':
                url_list.append(j)

        # Create directory with current keywords filename & date
        x = datetime.datetime.now()
        y = os.getcwd()
        control = 0

        try:
            dname = str(y) + '/' + filename + str(x.date())
            os.mkdir(dname)
        except:
            pass

        # Url/link control structures
        url_set.clear()
        print(len(url_list))

        # For each google search link, scrape page and retrieve HTML file.
        if url_list != None:
            # Verify we haven't scraped this link before
            for u in url_list:
                if u not in url_set:
                    # Create query
                    fname = query + '_' + str(control) + '.html'
                    try:
                        control += 1
                        print(u)
                        url_set.add(u)
                        # Request call
                        try:
                            r = requests.get(u, timeout=30)
                        except: print("Request failure.")
                        # Soup Call
                        try:
                            soup = BeautifulSoup(r.text, 'html.parser')
                        except: print('Soup failure!')
                        # File I/O
                        try:
                            with open(dname + '/' + fname, "w") as file:
                                file.write(soup.text)
                        except: print('Could not open new filepath.')
                    except:
                        print('Error: ' + str(u) + str(key))
                else:
                    pass

# Completion Verification
print('Done!')