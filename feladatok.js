export function egyedi_betuk(szoveg = "") {
  // ide kell írni a megoldást ciklussal és elágazással
  const lista = [];
  let maszk = /^[a-záéíóöőúüű]$/;

  for (let i = 0; i < szoveg.length; i++) {
    let betu = szoveg[i].toLocaleLowerCase();
    if (maszk.test(betu) && !lista.includes(betu)) {
      lista.push(betu);
    }
  }
  lista.sort();
 /*  console.log(lista); */
  return lista;
}
