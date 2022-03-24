let player1Name = localStorage.getItem('p1Name')
let player2Name = localStorage.getItem('p2Name')
if (player1Name == '') {
    humanName.textContent = 'Player 1'
} else {
    humanName.textContent = player1Name
}
if (player2Name == '') {
    computer.textContent = 'Player 2'
} else {
    computer.textContent = player2Name
}
let humanWin
humanWin = Number(localStorage.getItem('humanWinNum'))
let cpuWin
cpuWin = Number(localStorage.getItem('cpuWinNum'))
humanWinCounter.textContent = humanWin
cpuWinCounter.textContent = cpuWin
const dice = [
    'images/dice-1.png',
    'images/dice-2.png',
    'images/dice-3.png',
    'images/dice-4.png',
    'images/dice-5.png',
    'images/dice-6.png'
]
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
    localStorage.setItem('humanWinNum', humanWin)
    localStorage.setItem('cpuWinNum', cpuWin)
    localStorage.setItem('p1Name', player1Name)
    localStorage.setItem('p2Name', player2Name)
}
humanScore.textContent = localStorage.getItem('playerScore')
cpuScore.textContent = localStorage.getItem('cpuScore')
let round = localStorage.getItem('round')
if (round == 'cpu') {
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
            alert('Winner is: Player 1')
            restartGame()
            humanWin++
            humanWinCounter.textContent = humanWin
        }
    } else {
        clickButton(cpuScore)
        round = 'player'
        humanName.style.fontWeight = '100'
        computer.style.fontWeight = '900'
        if (Number(cpuScore.textContent) >= 100) {
            alert('Winner is: Player 2')
            restartGame()
            cpuWin++
            cpuWinCounter.textContent = cpuWin
        }
    }
    saveScore()
})
newGame.addEventListener('click', () => {
    humanWin = 0
    cpuWin = 0
    humanWinCounter.textContent = humanWin
    cpuWinCounter.textContent = cpuWin
    player1Name = prompt("Player 1")
    player2Name = prompt('Player 2')
    if (player1Name == '') {
        humanName.textContent = 'Player 1'
    } else {
        humanName.textContent = player1Name
    }
    if (player2Name == '') {
        computer.textContent = 'Player 2'
    } else {
        computer.textContent = player2Name
    }
    restartGame()
})