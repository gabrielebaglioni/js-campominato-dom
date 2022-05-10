// creo una costante con i numeri "bomba"
// faccio un controllo sui "nmeri bomba" perchè non possono essere ripetuti
// creo un ciclo per chiedere all'utente un numero
// tante volte quante scelte possibili ha (Ntot - Nnumeri bomba)
// e controllo che non inserisca sempre lo stesso numero
// se il numero inserito è presente nell'array bomba la partita è persa 
// altrimenti l'utente continua a giocare
 


// _______________________________________
//               FUNZIONI
//_________________________________________
function iseven(num) {
   if( num % 2 === 0 ) {
       return true;
   }
   return false;
}
/*
   restituisce un numero random in un range min e max
*/
function getrandomumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*
   restituisce una lista di X(numeri) random tra min e max
*/
function getrandomnumberslist(nElements, min, max) {
   let numbers = [];
   for(let i = 0; i < nElements; i++) {
       numbers.push(getRandomNumber(min, max));
   }
   return numbers;
}
// restituisce una lista lista di numeri che non si ripetono
function getnonrepetelistnumber(nElements, min, max){
   let numbers = [];
   while(numbers.length < nElements){
      let numeroRipetuto = getrandomumber(min, max)
      if (!numbers.includes(numeroRipetuto)){
         numbers.push(numeroRipetuto)
      }
   }
   return numbers
}
function numeroutente (){
   let NumeroInserito = 0;
   do{
      NumeroInserito = Number(prompt("inserisci un numero da 1 a 100"));
      if(isNaN(NumeroInserito)){
         alert("puoi inserire solo numeri");
      } if (NumeroGiaInserito.includes(NumeroInserito)){
         alert("hai già inserito questo numero")
      } else(NumeroInserito.push(NumeroGiaInserito));
        
   } while (isNaN(NumeroInserito))  NumeroGiaInserito.includes(NumeroInserito);
   return NumeroInserito;
}
//
//_________________________________________________
//
//                   MAIN
//__________________________________________________

// creo una costante di numenri "bomba" che non si ripetono
// const NumeriBomba = getnonrepetelistnumber(2, 1, 10); // due numeri bomba da 1 a 10
// // console.log(NumeriBomba);
// let NumeroInserito = 0;
// let NumeroGiaInserito =[];

// CREO LE BOMBE
const bombs = [];
let BombExploded = false;
let attemps = [];
const numberBombs = 16;
const totalnumbers = 100;
const numberattemps = totalnumbers - numberBombs;
 while(bombs.length < numberBombs){
    const bomb = getrandomumber(1, totalnumbers);
    if(bombs.includes(bomb) === false){
       bombs.push(bomb);
    }
 }
  console.log(bombs)
// chiedo tante valte il numero alle utente quanti  umeri "sani ci sono" 
// il numero deve essere comprose tra 1 e 100
//l'utente non può inserire lo stesso numero
// fino a qunado il valore booleano è = a falso continuo a ciclare 
// altrimenti hai perso
while(BombExploded === false && attemps.length < numberattemps){ // al posto di "bombExploded === falso "possiamo negare la variabile con il ! quindi in questo caso "!bombsExploded".
    let userNumber;
    do{
       userNumber = Number(prompt("inserisci un numero da 1 a 100"));
    }while(isNaN(userNumber) || userNumber < 1 || userNumber > totalnumbers)

    if(bombs.includes(userNumber)){
       BombExploded = true;
    } else if(attemps.includes(userNumber)){
       alert("il numero lo hai già inserito");
    }else{
       attemps.push(userNumber);
    }
}

// console.log("hai perso")
if(BombExploded){
   alert(`HAI PERSO il tuo punteggio è ${attemps.length}`)
}else{
   alert("hai vinto!!!!!")
}