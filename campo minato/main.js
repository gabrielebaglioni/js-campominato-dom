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