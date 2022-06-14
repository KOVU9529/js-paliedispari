/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//L'UTENTE SCEGLIE PARI O DISPARI
const userAnswer = prompt('Dimmi se pari o dispari');
console.log('Scelta utente ',userAnswer);

//L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
const userAnswerNumber = parseInt(prompt('Dimmi un numero da 1 a 5'));
console.log('Scelta numero utente ',userAnswerNumber);

//GENERIAMO UN NUMERO RANDOM (SEMPRE DA 1 A 5) PER IL COMPUTER USANDO UNA FUNZIONE
let pcNumber;

//IMPOSTO IL CICLO FOR
//GENERIAMO UN NUMERO RANDOM (SEMPRE DA 1 A 5) PER IL COMPURETER USANDO UNA FUNZIONE
for(let i=4; i<5; i++){
    pcNumber=getRndInteger(1,5);
    console.log('Scelta random computer ',pcNumber)
}

//FUNZIONE CHE GENERA UN NUMERO RANDOM
//min -> NUMERO, CHE INDICA IL VALORE MINIMO DA GENERARE
//MAX -> NUMERO, CHE INDICA IL VALORE MASSIMO DA GENERARE
//RETURN: NUMERO RANDOM COMPRESO TRA min E MAX
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }

 //FUNZIONE CHE SOMMA I DUE NUMERI
 //NUMERI DA SOMMARE (userAnswerNumber, pcNumber)
 //RETURN: SOMMA
 const sum = sumTwoNumber(userAnswerNumber, pcNumber);
 console.log('Somma numeri ',sum);

 //IMPOSTO LA FUNZIONE
 function sumTwoNumber(num1, num2){
     const sum = num1 + num2 ;
     return sum;
 }

 //FUNZIONE CHE VERIFICA SE LA SOMMA SIA PARI O DISPARI
 // SUM -> NUMERO DA VALUTARE
 //RETURN:'PARI' O 'DISPARI'
function isEvenOrOdd(sum){
    let sumEvenOrOdd;

    //IMPOSTO I PARAMETRI:PARI O DISPARI
    if(sum % 2 === 0){
        sumEvenOrOdd = 'pari';
    }else{
        sumEvenOrOdd = 'dispari';
    }
    console.log('SOMMA NUMERI:PARI/DISPARI ',sumEvenOrOdd )
    return sumEvenOrOdd;
}

//DICHIARIAMO VITTORIA O SCONFITTA
const sumEvenOrOdd = isEvenOrOdd(sum);

//IMPOSTO LE CONDIZIONI
if(sumEvenOrOdd === userAnswer){
    alert('YOU WIN');
}else{
    alert('YOU LOSE');
}
