from requests_html import HTMLSession

session = HTMLSession()
url = "https://www.google.it/search?q=extract+metadata+indesign+script&sca_esv=6cf9c2b9fed3aa1b&sca_upv=1&sxsrf=ADLYWIKL4l-sdVIBkCtrjBTduVjZO05HPw%3A1726155181060&source=hp&ei=rQnjZuN1oZbFzw-pud-YCg&iflsig=AL9hbdgAAAAAZuMXvYT2C2hxeQi4y-hmcb1n9OmjaUwO&ved=0ahUKEwijgJGT3b2IAxUhS_EDHancF6MQ4dUDCBg&uact=5&oq=extract+metadata+indesign+script&gs_lp=Egdnd3Mtd2l6IiBleHRyYWN0IG1ldGFkYXRhIGluZGVzaWduIHNjcmlwdDIFECEYoAFIugNQAFgAcAB4AJABAJgBfaABfaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACgQGYAwCSBwMwLjGgB9kB&sclient=gws-wiz"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

response = session.get(url, headers=headers)

# Trova il tag con la classe specifica
tag_class = response.html.find('.YmvwI', first=True)
if tag_class:
    print("Il tag con la classe specifica è:", tag_class.text)
else:
    print("Nessun tag con la classe specifica trovato.")
