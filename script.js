'use strict'

const playerPickEl = document.querySelector('.player-pick')
const computerPickEl = document.querySelector('.computer-pick')
const scoreEl = document.querySelector('.score')
const resetBtn = document.querySelector('.reset')
const winEl = document.querySelector('.win')
const lossEl = document.querySelector('.loss')
const tieEl = document.querySelector('.tie')

let pickEl = document.querySelectorAll('.pick')
//When ever you use a query selectorall make sure you loop over it, so as to include all the items you want to loop over

//Starting Conditions
let win = 0
let loss = 0
let tie = 0

const won = function () {
  win += 1
  winEl.textContent = win
  scoreEl.textContent = 'WON!'
}
const tied = function () {
  tie += 1
  tieEl.textContent = tie
  scoreEl.textContent = 'TIED!'
}
const lost = function () {
  loss += 1
  lossEl.textContent = loss
  scoreEl.textContent = 'LOST!'
}

for (let i = 0; i < pickEl.length; i++)
  pickEl[i].addEventListener('click', function () {
    playerPickEl.src = `img--0${i}.png`
    const computer = Math.trunc(Math.random() * 3)
    computerPickEl.src = `img--0${computer}.png`

    if (i === 0) {
      if (computer === 0) {
        tied()
      } else if (computer === 1) {
        lost()
      } else if (computer === 2) {
        won()
      }
    } else if (i === 1) {
      if (computer === 0) {
        won()
      } else if (computer === 1) {
        tied()
      } else if (computer === 2) {
        lost()
      }
    } else if (i === 2) {
      if (computer === 0) {
        lost()
      } else if (computer === 1) {
        won()
      } else if (computer === 2) {
        tied()
      }
    }
  })
resetBtn.addEventListener('click', function () {
  win = 0
  loss = 0
  tie = 0
  winEl.textContent = win
  lossEl.textContent = loss
  tieEl.textContent = tie
  scoreEl.textContent = 'START!'
  playerPickEl.src = 'img--01.png'
  computerPickEl.src = 'img--02.png'
})
