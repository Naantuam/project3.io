import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let food = randomGridPosition()
const EXPANSIONRATE = 1

export function update() {
    if (onSnake(food)){
        expandSnake(EXPANSIONRATE)
        food = randomGridPosition()
    }
}

export function draw(gameBoard) {
    const foodElement  = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function randomFoodPosition(params) {
    let newfoodPosition
    while (newfoodPosition == null || onSnake(newfoodPosition)) {
        newfoodPosition = randomGridPosition()
    }
    return newfoodPosition
}
