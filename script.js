

function
    /* function serve p/criar um pequeno código para ser chamado com o comando function */
    algIdade() {
    console.log('teste');

    var /* var para declarar uma variável de forma global */
        let /* let para declarar uma variável é a mais usada 
    criamos espaços na memória pra armazenar informações dessa variável*/

    let nome, idade;
    /* prompt comando utilizado para solicitar informações */
    nome = prompt('Digite seu nome');
    alert(nome);
    /* string = é uma cadeia de caracteres ou seja senquência de texto podendo conter números,letras e caracteres especiais */

    /* Number = converter um valor para número */
    idade = Number(prompt('Digite sua idade'));
    /* alert serve para apresetar/mostrar o texto na tela  */
    alert(' Olá ' + nome + ' você tem ' + idade + 'anos');
}
/* camelcase só lembrar do camelo a 1ª letra minúcula e a 2ª sempre Maícula  */
function calcTerreno() {
    let largura, comprimento, area;
    largura = Number(prompt('Digite a largura do terreno'));
    comprimento = Number(prompt('Digite a comprimento do terreno'));
    area = largura * comprimento;
    alert('A área do terreno é' + area)


}
/* calcTerreno(); */

function calcHaras() {
    let cavalos, total;
    cavalos = Number(prompt('Digite a quantidade de cavalos'));
    total = cavalos * 4;
    alert('A quantidade de ferraduras necessárias são' + total);
}

/* calcHaras()*/

function calcGasolina() {
    let litros, valcomb, total;
    litros = Number(prompt('Digite a quantidade em litros'));
    valcomb = Number(prompt('digite o valor da gasolina'));
    total = litros * valcomb;
    alert('Valor total a pagar ' + total);
}

/* calcGasolina(); */

function calcPao() {
    let paofranc, broa, totalpaofranc, totalbroa, total;
    paofranc = Number(prompt('Digite quantos pães'));
    broa = Number(prompt('Digite a quantas broas'));
    totalpaofranc = paofranc * 0.12;
    totalbroa = broa * 1.50;
    total = totalpaofranc + totalbroa;
    alert('Valor total a pagar? '+ total);
}

calcPao();



