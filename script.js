
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
        /* "else" a condição "SE NÂO" só vai apresentar o resultado ser a condição for falso */
    } else {
        total = (macaKg * 1.80) + (morangoKg * 2.50);
    }
    if (qtdkg > 8 || total > 25) {
        totalDesc = (total * 10 / 100)
    }
    alert('Qtde de Kg comprados de ( ' + qtdkg + ' Kg ) o valor total foi de R$ ' + total);


}
function escola() {
    let media;

    media = Number(prompt('Digite a média do aluno'));
    /* if= Se */
    if (media < 5) {
        alert('Conceito D')

        /* else if= else:senão if: Se. Usa quando tem mais de duas opçoes a serem verificada */
    } else if (media >= 5 && media < 7) {
        alert('Conceito C')
    }/* && como se fosse "e" */
    if (media >= 7 && media < 9) {
        alert('Conceito B');

    } else if (media >= 9 && media <= 10) {
        alert('Conceito A')
    }

}
/* escola() */

function calcImc() {

    let altura, peso, imc;

    altura = Number(prompt('Digite sua altura'));

    peso = Number(prompt('Digite seu peso'));

    imc = peso / (altura * altura);

    /* só vai entrar no if se for verdeiro se tiver acontecendo, senão entrará no else */
    if (imc < 18.5) {
        alert('Abaixo do peso')
        /* tudo que for falso */
    } else if (imc >= 18.5 && imc < 25) {
        alert('Peso Normal')
        /*  */
    } else if (imc >= 25 && imc < 30) {
        alert('Acima do peso')
        /* }else{
            alert('Obeso')  
        } */
    } else if (imc >= 30) {
        alert('Obeso')
    }
}

/* calcImc() */

function aluguelCarro() {
    let categoria, km, diarias, total;

    categoria = (prompt('Digite a categoria do carro'));

    diarias = Number(prompt('Digite quantos dias o carro foi alugado'));

    km = Number(prompt('Digite quantos km foram percorridos'));

    if (categoria == 'popular') {
        if (km > 100) {
            total = km * 0.1
        } else {
            total = km * 0.2
        }
        total = total + diarias * 90
    } else if (categoria == 'luxo') {
        if (km > 200) {
            total = km * 0.25
        } else {
            total = km * 0.3
        }
        total = total + diarias * 150
    } else {
        alert('Digite a categoria correta');
    }

    alert('O total a ser pago será de ' + total)
}


/* aluguelCarro() */

function atividadeFisica() {
    let pontos, horas, dinheiro;

    horas = Number(prompt('Digite quantas horas você treinou no mês '))

    if (horas < 10) {
        pontos = horas * 2
    } else if (horas >= 10 && horas < 20) {
        pontos = horas * 5
    } else if (horas > 20) {
        pontos = horas * 10
    }
    dinheiro = pontos * 0.05

    alert(dinheiro)

}
/*  atividadeFisica();*/

/* calcFeira() */

function calcIdade() {
    /*Preciso receber idade de 5 pessoas e que seja somado e apresentando o resultado. Crie um algoritimo de repetição */

    let idade, somaIdades, contIdade;

    somaIdades = 0;
    contIdade = 1;

    /* while - é enquanto*/
    while (contIdade < 5) {
        idade = Number(prompt('Digite sua idade: ' + contIdade + '° pessoa'));
        somaIdades = somaIdades + idade;
        contIdade = contIdade + 1;
    }
    alert('A soma das idades é ' + somaIdades);
}
/* calcIdade(); */

function calcMedia() {
    let idade, somaIdades, contIdade, media;
    somaIdades = 0;
    contIdade = 0;
    while (contIdade < 20) {
        idade = Number(prompt('Digite a sua idade :'));
        contIdade = contIdade + 1;
        somaIdades = somaIdades + idade;
    }
    media = somaIdades / 20
    alert('A media é ' + media)

}
/* calcMedia(); */

function idade() {
    let idades, maiorIdade, contPessoas;

    maiorIdade = 0;
    contPessoas = 1;

    while (contPessoas <= 5) {
        idades = Number(prompt('Digite a ' + contPessoas + 'º idade'));
        //if é Se
        if (idades >= 18) {
            //maiorIdade = maiorIdade = 1;
            // maiorIdade+= 1;
            maiorIdade++
        }
        //contPessoas +=1;
        contPessoas++;

    }
    alert('A quantidade de pessoas maiores de idade são' + maiorIdade);
}
/* idade(); */

function menorIdade() {
    let idade, menorIdade, contIdade;

    menorIdade = 0;
    contIdade = 1;

    idade = Number(prompt('Digite a idade' + contIdade + 'º idadde'));
   
    menorIdade = idade;

    while (contIdade <= 4) {
        idade = Number(prompt('Digite a idade' + contIdade + 'º idadde'));

        if (idade < menorIdade) {
            menorIdade = idade;
        }
        contIdade++;
    }
    alert('A menor idade é  ' +menorIdade);
}
menorIdade();








