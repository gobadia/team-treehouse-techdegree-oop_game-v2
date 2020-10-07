/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 class Phrase{
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay(){
     let phraseSection = document.getElementById('phrase');

     [...this.phrase].forEach(letter => {
       const liElement = document.createElement('li');
       if(letter === ' '){
         liElement.className = 'space';
         phraseSection.appendChild(liElement);
        // list+= 'li class="space"> </li>';
       }
       else{
         liElement.className = `hide letter ${letter}`;
         liElement.innerText = `${letter}`;
         phraseSection.appendChild(liElement);
         //list+=`<li class="hide letter ${letter}">${letter}</li>`;
        }
    });
    //return list;
   }

   checkLetter(letter){
     console.log('checkingLetter ' + this.phrase.indexOf(letter));
     return this.phrase.indexOf(letter);
   }

   showMatchedLetter(letter){
     const matching = document.getElementsByClassName(`hide letter ${letter}`);
     console.log(matching.length);
     for(let i=matching.length; i>0; i--){
       console.log('loop ' + i);
       matching[i-1].className = `show letter ${letter}`;

     }
   }

 }
