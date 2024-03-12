
function
    /* function serve p/criar um pequeno código para ser chamado com o comando function */
    algIdade() {
    console.log('teste');

    var /* var é para declarar uma variável de forma global */
        let /* let é para declarar uma variável é a mais usada e com isso  
    criamos espaços na memória pra armazenar informações dessa variável*/

    let nome, idade;
    /* prompt é o comando de entrada utilizado para solicitar informações */
    nome = prompt('Digite seu nome');/* nome " = " o sinal de igual atribui valor   */
    alert(nome);
    /* string = é uma cadeia de caracteres ou seja senquência de texto podendo conter números,letras e caracteres especiais */

    /* Number = converter um valor para número */
    idade = Number(prompt('Digite sua idade')); /* idade " = " o sinal de igual atribui valor */
    /* alert  é o comando de saída e serve para apresetar/mostrar o texto na tela  */
    alert(' Olá ' + nome + ' você tem ' + idade + 'anos');/* o sinal de " + " concatena, a informação junto com a variável. */
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
    alert('Valor total a pagar R$' + total);
}

/* calcGasolina(); */

function calcPao() {
    let paofranc, broa, totalpaofranc, totalbroa, total;
    paofranc = Number(prompt('Digite quantos pães'));
    broa = Number(prompt('Digite a quantas broas'));
    totalpaofranc = paofranc * 0.12;
    totalbroa = broa * 1.50;
    total = totalpaofranc + totalbroa;
    alert('Valor total a pagar? ' + total);
}
/* calcPao(); */

/* aula dia 11/03/24
> maior, >= maior igual , == igual.
< menor, <= menor igual , != diferente

*/
function verHab() {
    let idade;
    idade = Number(prompt('Digite sua idade'));
    if (idade >= 18) {
        alert('você é apto para tirar Habilitação');
    }
    if (idade < 18) {
        alert('você não está apto para tirar Habilitação');
    } else {
        alert
    }
}



/* verHab(); */

function calcfrutas() {
    let macas, total;
    macas = Number(prompt('Digite quantas maçãs deseja'));
    if (macas > 12) {
        total = macas * 1.00
    } else {
        total = macas * 1.30
    }
    alert('A quantidade de maçãs compradas foram de R$' + macas + 'e o total a ser pago será de R$' + total);

}
/* calcfrutas(); */

function calcAnonasc() {
    let anonasc, anoatual, idade;
    anonasc = Number(prompt('Digite o ano que nasceu?'));
    anoatual = 2024;
    idade = anoatual - anonasc;
    alert(' Você tem ' + idade + ' anos ');
    if (idade >= 16) {
        alert('apto para votar');
    } else {
        if (idade < 16) {
            alert('não está apto a votar')
        }
    }
}

/* calcAnonasc(); */

function calcFeira() {
    let macaKg, morangoKg, total, qtdKg;
    macaKg = Number(prompt('Digite qts kilos de maças deseja comprar'));
    morangoKg = Number(prompt('Digite qts kilos de morangos deseja comprar'));
    qtdkg = macaKg + morangoKg;
    /*  if (macaKg > 5) {
        total = macaKg * 1.5
    } else {
        total = macaKg * 1.80
    }
    if (morangoKg > 5) {
        total = morangoKg * 2.20
    } else {
        total = morangoKg * 2.80
    }
     */

    /* "||" esse símbolo referesenta "Ou" 
    "if" a condição "SE" só vai apresentar o resultado ser a condição for verdadeira */
    if (macaKg > 5 || morangoKg > 5) {
        total = (macaKg * 1.50) + (morangoKg * 2.20);
        /* "else" a condição "SE NÂO" só vai apresentar o resultado ser a condição for falsp */ 
    } else {
        total = (macaKg * 1.80) + (morangoKg * 2.50);
    }
    if (qtdkg > 8 || total > 25) {
        totalDesc = (total * 10/100)
    }
    alert('Qtde de Kg comprados de ( ' + qtdkg + ' Kg ) o valor total foi de R$ '  + total);


}


calcFeira()
