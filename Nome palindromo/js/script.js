/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//INSERISCI UNA PAROLA
const userWord= prompt('Dimmi una parola');
const backWord = reverseBackWord(userWord);

//IMPOSTO LE CONDIZIONI
if(userWord === backWord){
    console.log('La parola è palindroma');
}else{
    console.log('La parola non è palindroma');
}


//POSIZIONO LA FUNZIONE ALLA FINE
function reverseBackWord(word){
    const reverseWord = word.split('').reverse().join('');
    return reverseWord;
}