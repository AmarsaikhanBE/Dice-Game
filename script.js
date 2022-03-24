const dice = ['images/dice-1.png', 'images/dice-2.png', 'images/dice-3.png', 'images/dice-4.png', 'images/dice-5.png', 'images/dice-6.png']
const diceImg = document.querySelector('img.dice')
const clickButton = (x) => {
    i = Math.floor(Math.random() * 6)
    diceImg.src = dice[i]
    x.textContent = Number(x.textContent) + i + 1
}
const saveScore = () => {
    localStorage.setItem('round', round)
    localStorage.setItem('playerScore', humanScore.textContent)
    localStorage.setItem('cpuScore', cpuScore.textContent)
}
humanScore.textContent = localStorage.getItem('playerScore')
cpuScore.textContent = localStorage.getItem('cpuScore')
let round = localStorage.getItem('round')
if (round == 'player') {
    humanName.style.fontWeight = '900'
    computer.style.fontWeight = '100'
} else {
    humanName.style.fontWeight = '100'
    computer.style.fontWeight = '900'
}
const x = Math.floor(Math.random() * 6)
diceImg.src = dice[x]
const restartGame = () => {
    humanScore.textContent = 0
    cpuScore.textContent = 0
    saveScore()
}
playDice.addEventListener('click', () => {
    if (round == 'player') {
        clickButton(humanScore)
        round = 'cpu'
        humanName.style.fontWeight = '900'
        computer.style.fontWeight = '100'
        if (Number(humanScore.textContent) >= 100) {
            alert('You win!')
            restartGame()
        }
    } else {
        clickButton(cpuScore)
        round = 'player'
        humanName.style.fontWeight = '100'
        computer.style.fontWeight = '900'
        if (Number(cpuScore.textContent) >= 100) {
            alert('You lose!')
            restartGame()
        }
    }
    saveScore()
})
newGame.addEventListener('click', () => {
    restartGame()
})