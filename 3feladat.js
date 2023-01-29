//3. feladat a tesztben random páros szám generálás
let also= Number(prompt("Adj meg egy alsó határértéket"));
let felso= Number(prompt("Adj meg egy felső határértéket"));
let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
if(generaltParosSzam%2==0){
	document.write(`Generált Páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam}`);
}    
    else if(generaltParosSzam!=felso){
    document.write(`Generált Páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam+1}`);
    }
    else{
    document.write(`Generált Páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam-1}`);
   }