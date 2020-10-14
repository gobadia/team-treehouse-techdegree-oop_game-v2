/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game = new Game();

 document.addEventListener('click', (e)=>{

   if(e.target.id ==='btn__reset'){
     //clear last phrase from board
     clearBoard();
     resetKeyboard();
     resetLives();
     let timer = 3;
     const gameOver = document.getElementById('game-over-message');
     const resetButton = document.getElementById('btn__reset');
     gameOver.innerText = `Starting in ${timer}`;
     resetButton.style.display = 'none';
     timer -=1;
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
   }
   else if(e.target.type==='submit'){
     //console.log('click');
     game.handleInteraction(e.target);
   }
 });

document.addEventListener('keydown', (e)=>{
    let button = document.getElementsByClassName('key');
    console.log(`Clicked ${e.key.toLowerCase()}`);
    for(let i=0;i<button.length; i++){
      if(button[i].innerText === e.key.toLowerCase()){
        console.log(button[i].innerText);
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
   const keyboardKeys = document.getElementsByClassName('key');
   console.log('resetting keyboard');
   for (let i=0; i< keyboardKeys.length; i++){
       keyboardKeys[i].disabled = false;
       keyboardKeys[i].className = 'key';

   }

 }

 function resetLives(){
   let hearts = document.getElementsByClassName('tries');
   for (let i=0; i< hearts.length; i++){
     hearts[i].children[0].src = 'images/liveHeart.png';
   }

 }
