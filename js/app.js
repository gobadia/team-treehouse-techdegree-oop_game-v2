/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game = new Game();

 document.addEventListener('click', (e)=>{

   if(e.target.id ==='btn__reset'){
     //clear last phrase from phrase board
     clearBoard();
     // re-enable all keys from keyboard
     resetKeyboard();
     // reset live images back to full
     resetLives();
     // Section swaps start button to 3 second countdown
     let timer = 3;
     const gameOver = document.getElementById('game-over-message');
     const resetButton = document.getElementById('btn__reset');
     //Starts countdown right away
     gameOver.innerText = `Starting in ${timer}`;
     resetButton.style.display = 'none';
     timer -=1;
     // continues countdown to 0
     let countdown = setInterval(()=> {
       console.log(`counting down ${timer}`);
       if(timer > 0){
         gameOver.innerText = `Starting in ${timer}`;
         resetButton.style.display = 'none';
         timer --;
       }
       else{
       game.startGame();
       clearInterval(countdown);
      }}, 1000);
      //
   }
   //When a keyboard letter is clicked, handle it
   else if(e.target.type==='submit'){
     //console.log('click');
     game.handleInteraction(e.target);
   }
 });

document.addEventListener('keydown', (e)=>{
  //event listener that listens for keyboard clicks
    let button = document.getElementsByClassName('key');
    for(let i=0;i<button.length; i++){
      if(button[i].innerText === e.key.toLowerCase()){
        game.handleInteraction(button[i]);

      }
    }

});


 function clearBoard(){
   const phraseSection = document.getElementById('phrase');

   //clear last game on start by removing all LI children of phrase section
   while (phraseSection.firstChild) {
     phraseSection.removeChild(phraseSection.firstChild);
   }
   const ul = document.createElement('ul');
   phraseSection.appendChild(ul);
 }

 function resetKeyboard(){
   //iterate over each keyboard key and enable it
   const keyboardKeys = document.getElementsByClassName('key');
   console.log('resetting keyboard');
   for (let i=0; i< keyboardKeys.length; i++){
       keyboardKeys[i].disabled = false;
       keyboardKeys[i].className = 'key';

   }

 }

 function resetLives(){
   //iterate over each image and set it back to a life
   let hearts = document.getElementsByClassName('tries');
   for (let i=0; i< hearts.length; i++){
     hearts[i].children[0].src = 'images/liveHeart.png';
   }

 }
