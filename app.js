function gamestart(){
    let player1=100
    let player2=100
    var player1_score = 0
    var player2_score = 0
    for (let i = 0;i < 6;i++){
        if (player1>0 || player2>0){
            let player1_pow = Math.floor(Math.random())
            player2 = player2-player1_pow
            let player2_pow = Math.floor(Math.random())
            player1 = player1-player2_pow
    if (player1_score<=0){
        player1_score++
    }
    else if(player2_score<=0){
        player2_score++
    }
}
console.log(player1_score,player2_score)
}
}
gamestart()