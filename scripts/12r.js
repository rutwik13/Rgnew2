// const score = {
//     wins : 0,
//     losses: 0,
//     ties : 0 
// };

let score = JSON.parse(localStorage.getItem('score')) || 
    {
        wins : 0,
        losses: 0,
        ties :0
    };  // json string to js object 
  
// if(!score){
// score= {
//     wins : 0,
//     losses: 0,
//     ties :0
// };
// }

updateScore();

let isAutoPlaying = false;
let intervalId ;

function autoPlay(){
 if(!isAutoPlaying){
 intervalId = setInterval(() =>{
   const playerMove = pickComputerMove();
  playGame(playerMove);
 }, 1000);
 isAutoPlaying = true;

 document.querySelector('.js-auto-play-btn').innerHTML = 'Stop Playing';

 }  else{
  clearInterval(intervalId);
  isAutoPlaying = false;

  document.querySelector('.js-auto-play-btn').innerHTML = 'Auto Play';
 } 
}

document.querySelector('.js-auto-play-btn').addEventListener('click',()=>{

autoPlay();
});

document.querySelector('.js-rock-btn').addEventListener('click', ()=>{
    playGame('rock')
});
document.querySelector('.js-paper-btn').addEventListener('click', ()=>{
    playGame ('Paper');
});
document.querySelector('.js-scissors-btn').addEventListener('click', ()=>{
    playGame('Scissors');
});


function resetScore() {
     score.wins = 0;
     score.ties= 0; 
     score.losses =0; 
     localStorage.removeItem('score');
     updateScore();
}

document.querySelector('.js-reset-btn').addEventListener('click', ()=>{
 // Update the click event listener to
    // show the confirmation message instead
    // of restting the score immediately.
    showResetConfirmation();
});



/*document.body.addEventListener('keydown', (event)=>{
if(event.key === 'a'){
   autoPlay();
}
}); */


document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'r'){
    playGame('rock')
  } else if(event.key === 'p'){
     playGame ('Paper');
  }else if(event.key === 's'){
     playGame('Scissors');
  }else if(event.key === 'a'){
   autoPlay();
  }else if (event.key === 'Backspace') {
     // Update 'Backspace' to show the
    // confirmation message instead of
    // resetting the score immediately.
    showResetConfirmation();
  }
});

function playGame(playerMove){
    const computerMove = pickComputerMove();

    
    let result = '';

if(playerMove === 'Scissors'){

    if (computerMove === 'rock') {
     result = 'You Lose'; 
    }else if(computerMove === 'Paper'){
    result= 'You Win...🥳'; 
    }else if(computerMove === 'Scissors'){
    result= 'Tie';  
    }


      }else if(playerMove === 'Paper'){
            if (computerMove === 'rock') {
                result = 'You Win...🥳'; 
            }else if(computerMove === 'Paper'){
                result= 'Tie'; 
            }else if(computerMove === 'Scissors'){
                result= 'You Lose'; 
            }
    

                } else if(playerMove === 'rock'){
                        if (computerMove === 'rock') {
                        result = 'Tie'; 
                        }else if(computerMove === 'Paper'){
                            result= 'You Lose'; 
                        }else if(computerMove === 'Scissors'){
                            result= 'You Win...🥳'; 
                        }
                }
            
                    if(result === 'You Win...🥳'){
                        score.wins += 1;
                    } else if(result === 'You Lose'){
                        score.losses += 1;
                    }else if(result === 'Tie'){
                        score.ties +=1;
                    }
                        
                    localStorage.setItem('score', JSON.stringify(score));  // js object to json string --- local storage only takes string
                     
                    updateScore();

                    document.querySelector('.js-result')
                    .innerHTML = result;

                    // document.querySelector('.js-moves')
                    // .innerHTML= `You ${playerMove} - ${computerMove} Computer`;
                    
                    document.querySelector('.js-moves')
                    .innerHTML= `  You 
        <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
        <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
        Computer`;

//   alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

}


function updateScore(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}



    
   // let computerMove ='';  //Global Variable


    function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove =''; 

    if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove ='rock';
    } else if(randomNumber>=1/3 && randomNumber < 2/3 ) {
        computerMove ='Paper';
    }else if(randomNumber>=2/3 && randomNumber < 1 ) {
        computerMove ='Scissors';
    }

    return computerMove;
    //return ;
    }



    // Function for showing the confirmation message.
function showResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;
  
  // You could use onclick="..." in the HTML above,
  // but it's recommended to use .addEventListener()
  document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click', () => {
      resetScore();
      hideResetConfirmation();
    });
  
  document.querySelector('.js-reset-confirm-no')
    .addEventListener('click', () => {
      hideResetConfirmation();
    });
}

// A helper function (it helps us reuse the
// code for hiding the confirmation message).
function hideResetConfirmation() {
  document.querySelector('.js-reset-confirmation')
    .innerHTML = '';
}