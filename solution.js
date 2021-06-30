function queensAttack(boardSize, k, queenX, queenY, obstacles) {
    let bottom = queenY - 1;
    let left = queenX - 1;
    let right = boardSize - queenX;
    let top = boardSize - queenY;
    
    let topLeft = Math.min(top, left);
    let topRight = Math.min(top, right);
    let bottomRight = Math.min(bottom, right);
    let bottomLeft = Math.min(bottom, left);
    
    for (const [pawnX, pawnY] of obstacles){
        if (pawnX === queenX && pawnY < queenY){
            bottom =  Math.min(bottom, queenY - pawnY - 1);
        }
        
        if (pawnY === queenY && pawnX > queenX){
            right = Math.min(right, pawnX - queenX - 1);
        }
        
        if (pawnX === queenX && pawnY > queenY){
            top = Math.min(top, pawnY - queenY - 1);
        }
        
        if (pawnY === queenY && pawnX < queenX){
            left = Math.min(left, queenX - pawnX -1);
        }
        
        if (pawnX < queenX && pawnY < queenY && queenX - pawnX === queenY - pawnY){
            bottomLeft = Math.min(bottomLeft, queenX - pawnX - 1);
        }
        
        if (pawnX > queenX && pawnY < queenY && pawnX - queenX === queenY - pawnY){
            bottomRight = Math.min(bottomRight, pawnX - queenX - 1);
        }
        
        if (pawnX > queenX && pawnY > queenY && pawnX - queenX === pawnY - queenY){
            topRight = Math.min(topRight, pawnY - queenY - 1);
        }
        
        if (pawnX < queenX && pawnY > queenY && queenX - pawnX === pawnY - queenY){
            topLeft = Math.min(topLeft, queenX - pawnX - 1);
        }
    }
    return (top + right + bottom + left + topLeft + topRight + bottomLeft + bottomRight);
}