let vitory = 84
let defeat = 71
let rank = ""

function balanceWinLoss(vitory, defeat) {
    result = vitory - defeat
    return result
}

balanceWinLoss(vitory, defeat)

if (vitory<10) {
    rank = "Ferro"
} else if(vitory>11&&vitory<=50) {
    rank = "Prata"
}else if(vitory>51&&vitory<=80) {
    rank = "Ouro"
}else if(vitory>81&&vitory<=90) {
    rank = "Diamante"
}else if(vitory>91&&vitory<=100) {
    rank = "Lendário"
}else{
    rank = "Imortal"
}

console.log("O Herói tem um saldo de "+ result+ " está no nível de " + rank )