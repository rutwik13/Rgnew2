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