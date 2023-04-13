import { update as updateSnake, draw as drawSnake, snakespeed,
getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { gridWall} from './grid.js'
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost, Press Enter to Restart')) {
            window.location = '/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
    if (secSinceLastRenderTime < 1/snakespeed) return
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update( ) {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(  ) {
    gameBoard.innerHTML = ' '
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = gridWall(getSnakeHead()) || snakeIntersection()
}