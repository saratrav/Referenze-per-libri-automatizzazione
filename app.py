import requests
from bs4 import BeautifulSoup

url = 'https://www.shutterstock.com'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    h1_tag = soup.find('h1')

    if h1_tag:
        print('Contenuto del primo tag <h1>:', h1_tag.text)
    else:
        print('Nessun tag <h1> trovato.')
else:
    print(f'Errore durante la richiesta: {response.status_code}')
