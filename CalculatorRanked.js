let vitory = 84
let defeat = 71
let rank = ""

function balanceWinLoss(vitory, defeat) {
    result = vitory - defeat
    return result
}

balanceWinLoss(vitory, defeat)

if (vitory<10) {
    rank = "Iron"
} else if(vitory>11&&vitory<=50) {
    rank = "Silver"
}else if(vitory>51&&vitory<=80) {
    rank = "Gold"
}else if(vitory>81&&vitory<=90) {
    rank = "Diamond"
}else if(vitory>91&&vitory<=100) {
    rank = "Legendary"
}else{
    rank = "Immortal"
}

console.log("O Herói tem um saldo de "+ result+ " está no nível de " + rank )