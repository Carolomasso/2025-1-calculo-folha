let salarioBruto = 6_000,00; //parseFloat (input ('inInforme o salário bruto'));


let inssFaixa1Inicio = 0;
let inssFaixa1Fim = 1_518.00;
let inssFaixa1Aliquota = 7,5;

deixar faixa1 = {
    inicio: 0,
    fim: 1_518,00,
    aliquota: 0,075
};

deixar faixa2 = {
    inicio: 1_518.00,
    fim: 2_793.88,
    aliquota: 0,09
};

deixar faixa3 = {
    inicio: 2_793.88 ,
    fim: 4_190.83,
    aliquota: 0,12
};


deixar faixa4 = {
    inicio: 4_190.83 ,
    fim: 8_157.81,
    aliquota: 0,14
};


deixar tabelaINSS = [ faixa1,faixa2,
                     faixa3,faixa4];

console.mesa (tabelaINSS);

deixar faixaEncontrada = {};
para (deixar eu = 0; eu < tabelaINSS.comprimento;eu++){
constante faixa = tabelaINSS[eu];
  se salarioBruto >= faixa.inicio &&
    salarioBruto <= faixa.fim) {
    faixaEncontratda = faixa;
    quebrar;
  }
}
console.registro(faixaEncontrada);
   








