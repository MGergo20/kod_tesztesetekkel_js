# 🧩 Feladat: Egyedi betűk gyűjtése

Írj egy `egyedi_betuk(szoveg)` nevű függvényt, amely egy tetszőleges szöveget kap paraméterként,  
és visszaadja a szövegben található **betűket (a–z, A–Z)** egyszer, **ábécé sorrendben**, **kisbetűs formában**.

A nem betű karaktereket (szám, írásjel, szóköz stb.) figyelmen kívül kell hagyni.

---

## 🔍 Elvárások

- A függvényt **ciklus** és **elágazások** segítségével oldd meg. 
- A függvény ne írjon ki semmit, hanem **visszatérési értéke** legyen a lista.  
- Minden betű **csak egyszer** szerepeljen az eredményben.  
- Az eredmény **ábécé sorrendben** legyen rendezve.   

---

## ✳️ Segítség

- Nézz utána w3shools oldalán a szövegkezelő és a listakezelő függvényeknek!

- Listakezelő függvények: <a href="https://www.w3schools.com/js/js_array_methods.asp">JS Array</a> (push(), indexOf(), sort(),  )
- Szövegkezelő függvények: kisbetűssé alakítás
- Reguláris kifejezések: <a href="https://www.w3schools.com/jsref/jsref_regexp_test.asp">Illesztés reguláris kifejezéshez</a>  /^[a-záéíóöőúüű]$/.test(szoveg)

---

## ✳️ Példák

```python
>>> egyedi_betuk("Helo, Világ!")
['e', 'g', 'h', 'i', 'l', 'v', 'á', 'ó']

>>> egyedi_betuk("Python 3.12")
['h', 'n', 'o', 'p', 't', 'y']

>>> egyedi_betuk("Árvíztűrő tükörfúrógép")
['f', 'g', 'k', 'p', 'r', 't', 'v', 'z', 'á', 'é', 'í', 'ó', 'ö', 'ú', 'ü', 'ő', 'ű']


