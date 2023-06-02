document.querySelector('#guessbutton').addEventListener('click',rankidentify);

function rankidentify(){
    robinRank=document.querySelector('#mmrguess').value;
    robinRank.toLowerCase;

    if(robinRank==='immortal'){
        alert("Yes, Robin has a rank of Immortal!!!");
        document.querySelector('.nextQuestion1').classList.toggle('hidden1')
        document.querySelector('.nextQuestionSec1').classList.toggle('hidden1')
        document.querySelector('.nextQuestionSec2').classList.toggle('hidden1')
    }else{
        alert("Wrong answer! Please try again!")
        document.querySelector('.nextQuestion1').classList.add('hidden1')
        document.querySelector('.nextQuestionSec1').classList.add('hidden1')
        document.querySelector('.nextQuestionSec2').classList.add('hidden1')
        document.querySelector('.nextQuestion2').classList.add('hidden2')
        document.querySelector('#sec3').classList.add('hidden3')
        document.querySelector('.ending1').classList.add('hidden3')
        document.querySelector('.ending2').classList.add('hidden3')
        
    }
}

const rankS = document.querySelectorAll('.ranks');

Array.from(rankS).forEach(element => element.addEventListener('click', ranklogocheck))

function ranklogocheck(click){
    if(click.target.classList.contains('correct')){
        alert("You are correct! That is the Immortal Logo!");
        document.querySelector('.nextQuestion2').classList.toggle('hidden2')

        // document.querySelector('#legend').add('.hidden')
    }else{
        alert("Wrong! Please select again!")
        document.querySelector('.nextQuestion2').classList.add('hidden2')
        document.querySelector('#sec3').classList.add('hidden3')
        document.querySelector('.ending1').classList.add('hidden3')
        document.querySelector('.ending2').classList.add('hidden3')
        
    }
}

document.querySelector('#robinHero').addEventListener('click',showheroes);

function showheroes(click){
    document.querySelector('#sec3').classList.toggle('hidden3');
    document.querySelector('.ending1').classList.toggle('hidden3');
    document.querySelector('.ending2').classList.toggle('hidden3');
}