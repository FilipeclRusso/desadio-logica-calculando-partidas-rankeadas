function calcularVitorias (vitorias, derrotas){
    return vitorias - derrotas;
    
};


function rankingVitorias(saldoVitorias){

    if (saldoVitorias <= 10){
        return "Ferro";
    } 
    else if (saldoVitorias <= 20){
        return "Bronze";
    }
    else if (saldoVitorias <= 50){
        return "Prata";
    }
    else if (saldoVitorias <= 80){
        return "Ouro";
    }
    else if (saldoVitorias <= 90){
        return "Diamante";
    }
    else if (saldoVitorias <= 100){
        return "Lendário";
    }
    else {
        return "Imortal";
    }

};

// Testando a função com parâmetros
let saldo = calcularVitorias(135,125);
let nivel = rankingVitorias(saldo)
console.log(`O herói tem saldo de ${saldo} vitórias e está no nível ${nivel}`)
