const GRIDSIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random()*GRIDSIZE) + 1,
        y: Math.floor(Math.random()*GRIDSIZE) + 1
    }
}

export function gridWall(position) {
    return(
        position.x < 1 || position.x > GRIDSIZE || 
        position.y < 1 || position.y > GRIDSIZE
    )
}