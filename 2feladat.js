
//2. feladat a tesztben, hatványozás
let szam= prompt("Adj meg egy számot")
let hatvany= prompt("Add meg a hatványozás mértékét")
let eredmeny=Math.pow(szam, hatvany);
document.write(`A ${szam} <sup>${hatvany}</sup> = ${eredmeny}`);
