$(document).ready(() => {
let btnRoll = document.getElementById('dice')
let btnHold = document.getElementById('hold')

var roundScore, globalScore, activePlayer, isPLaying = true

function initialisation() {
  roundScore = 0;
  globalScore = [0,0];
  activePlayer = 0;
  isPLaying = true;

  document.getElementById('roundP0').textContent = '0';
  document.getElementById('globalP0').textContent = '0';
  document.getElementById('roundP1').textContent = '0';
  document.getElementById('globalP1').textContent = '0';
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  $('.win').hide().removeAttr('style')
  $('#infoW').hide()
  console.log('initialisé')
}

initialisation();

btnRoll.addEventListener('click', function() {

  if (isPLaying) {

    let dice = Math.floor(Math.random()*6) +1
    let diceImg = document.querySelector('.dice')
    diceImg.src = 'Images/dice-' + dice + '.png'

    if (dice !== 1)
    {
      roundScore += dice;
      document.getElementById('roundP' + activePlayer).textContent = roundScore
  
    } else {
      nextPlayer();
    }
  }
})

btnHold.addEventListener('click', function() {
  if (isPLaying)
  {
    globalScore[activePlayer] += roundScore;
    document.getElementById('globalP' + activePlayer).textContent = globalScore[activePlayer]

    if (globalScore[activePlayer] >= 100)
    {
      console.log(globalScore[activePlayer])
      document.getElementById('winner').textContent = document.getElementById('name-' + activePlayer).textContent
      $('.win').show().animate({width:'500px'}, 600).animate({height:'350px'}, 400)
      $('#infoW').delay(1000).fadeIn(1000)
      isPLaying = false;
    } else {
      nextPlayer();
    }
  }
})
  
function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('roundP0').textContent = '0';
  document.getElementById('roundP1').textContent = '0';
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

document.getElementById('btnNew').addEventListener('click', initialisation)
});
