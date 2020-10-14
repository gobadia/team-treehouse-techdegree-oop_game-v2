/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


 class Phrase{
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay(){
     //get UL in the phrase section
     let phraseSectionUL = document.getElementById('phrase').firstChild;

     //iterate over letters in selected Phrase to display them
    [...this.phrase].forEach(letter => {
       const liElement = document.createElement('li');
       //check for spaces
       if(letter === ' '){
         liElement.className = 'space';
         phraseSectionUL.appendChild(liElement);
       }
       else{
         liElement.className = `hide letter ${letter}`;
         liElement.innerText = `${letter}`;
         phraseSectionUL.appendChild(liElement);
        }
    });
   }

   checkLetter(letter){
     //if letter in phrase, return it's index to be able to show it
     return this.phrase.indexOf(letter);
   }

   showMatchedLetter(letter){
     const matching = document.getElementsByClassName(`hide letter ${letter}`);
     for(let i=matching.length; i>0; i--){
       matching[i-1].className = `draw show letter ${letter} `;

     }
   }


 }
