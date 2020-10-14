/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
   constructor(missed, phrases, activePhrase){
     this.missed = 0;
     this.phrases = ['Elon Musk', 'Sergey Brin', 'Larry Page', 'Mark Zuckerberg', 'Susan Wojcicki'];
     this.activePhrase = null;
   }

   startGame(){
     //start game by hiding overlay, setting the phrase, resetting misses to 0 and adding the phrase to the display
     document.getElementById('overlay').style.display ='none';
     const phrase = new Phrase(this.getRandomPhrase());
     this.activePhrase = phrase;
     this.missed = 0;
     phrase.addPhraseToDisplay();
   }
   //selects a phrase from the list of phrases in constructor
   getRandomPhrase(){
     return this.phrases[Math.floor(Math.random() * this.phrases.length)];
   }
   // handles letter submissions and checks the phrase for the characters
   handleInteraction(button){
     const selectedLetter = button.innerText;
     //disable the letter in the keyboard after it's selected
     button.disabled = true;
     //if letter is not in phrase, remove a life
     if(this.activePhrase.checkLetter(selectedLetter) === -1){
       console.log('wrong letter');
       button.classList.add('wrong');
       this.removeLife();
     }
     else{
       //if letter is in phrase, show it in phrase board
       button.classList.add('chosen');
       this.activePhrase.showMatchedLetter(selectedLetter);
       // for every correct letter, check if leads to win
       const win = this.checkForWin();
       if(win){
         //if they won, give the letter time to finish flashing, then show win screen
         setTimeout(()=>this.gameOver('win'), 500);
       }

     }
   }

   removeLife(){

     let hearts = document.getElementsByClassName('tries');
     //using the # of misses, change that corresponding life's image
       if(hearts[this.missed].children[0].src = 'images/liveHeart.png'){
         hearts[this.missed].children[0].src = 'images/lostHeart.png';
       }
       // add to the number of misses
       this.missed +=1;
       // check if user has missed 5 times, and show them the loss screen
       if(this.missed >=5){
         this.gameOver('lost');
       }
   }
   checkForWin(){
     //get the number of letters in phrase with class hide since those are remaining
     const remainingLetters = document.getElementsByClassName('hide');
     // if letters are still remaining in phrase, game isn't over
     if(remainingLetters.length>0){
       return false;
     }

     // if no letters are remaining, game is won
     else{
       return true;
     }
   }
   gameOver(outcome){
     let text = 'Sorry, you lost. Try again!';
     if(outcome === 'win'){
       text = `Congrats, you won with only ${this.missed} wrong guess.
       Keep on playing to beat that score`;
     }
     //show win/lose message on overlay after game over
     document.getElementById('overlay').style.display = 'block';
     document.getElementById('game-over-message').innerText = text;
  }

}
