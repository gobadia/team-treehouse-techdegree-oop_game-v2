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
     document.getElementById('overlay').style.display ='none';
     const phrase = new Phrase(this.getRandomPhrase());
     this.activePhrase = phrase;
     console.log('Phrase: ' + phrase.phrase);
     phrase.addPhraseToDisplay();
   }

   getRandomPhrase(){
     return this.phrases[Math.floor(Math.random() * this.phrases.length)];
   }

   handleInteraction(button){
     const selectedLetter = button.innerText;

     button.disabled = true;
     console.log('checking letter ' + selectedLetter);
     if(this.activePhrase.checkLetter(selectedLetter) === -1){
       console.log('wrong letter');
       button.classList.add('wrong');
       this.removeLife();
     }
     else{
       button.classList.add('chosen');
       this.activePhrase.showMatchedLetter(selectedLetter);

       const win = this.checkForWin();
       if(win){
         console.log('game over');
         this.gameOver('win');
       }

     }
   }
   removeLife(){

     let hearts = document.getElementsByClassName('tries');

       if(hearts[this.missed].children[0].src = 'images/liveHeart.png'){
         hearts[this.missed].children[0].src = 'images/lostHeart.png';
       }
       this.missed +=1;
       if(this.missed >=5){
         this.gameOver('lost');
       }
   }
   checkForWin(){
     const remainingLetters = document.getElementsByClassName('hide');
     if(remainingLetters.length>0){
       return false;
     }
     else{
       return true;
     }
   }
   gameOver(outcome){
     let text = 'Sorry, you lost. Try again!';
     if(outcome ==='win'){
       text = 'Congrats, you won! Keep on playing!';
     }
     document.getElementById('overlay').style.display = 'block';
     document.getElementById('game-over-message').innerText = text;
  }

}


let game = new Game();
game.startGame();

document.addEventListener('click', (e)=>{
  if(e.target.type==='submit'){
    //console.log('click');
    game.handleInteraction(e.target);
  }
});
