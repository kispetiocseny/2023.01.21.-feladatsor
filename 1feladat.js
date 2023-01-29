
//4. feladat a tesztben, életkor
let eletkor= Number(prompt("Adj meg egy életkort"))
if(eletkor<=0 || eletkor>120){
	document.write(`Hibás adat`);
}
else if(eletkor>=0 && eletkor<6){
	document.write(`Kisgyermekkor:0-6 év`);
}
else if(eletkor>=6 && eletkor<=12){
	document.write(`Gyermekkor: 6-12 év`);
}
else if(eletkor>=12 && eletkor<16){
	document.write(`Serdülőkor: 12-16 év`);
}
else if(eletkor>=16 && eletkor<20){
	document.write(`Ifjúkor: 16-20 év`);
}
else if(eletkor>=20 && eletkor<30){
	document.write(`Fiatal felnőttkor: 20-30 év`);
}
else if(eletkor>=30 && eletkor<60){
	document.write(`Felnőttkor: 30-60`);
}
else {
	document.write(`Aggkor: 60-tól`);
}
