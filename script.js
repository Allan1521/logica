
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
    alert('A menor idade é  ' + menorIdade);
}
/* menorIdade(); */

function calcRacao() {
    let pesoRacao, qtdeGatos, qtdeGramas, qtdeDias, total;
    pesoRacao = Number(prompt('Digite quantos kilos de ração deseja comprar'));
    qtdeGatos = Number(prompt('Digite quantos gatos vc quer alimentar'));
    qtdeGramas = Number(prompt('Digite quantas gramas de ração'));
    qtdeDias = Number(prompt('Digite quantos dias vc quer alimentar'));
    total = pesoRacao - ((qtdeGramas * qtdeGatos) / 1000) * qtdeDias;
    alert('A quantidade de ração por gatos são  ' + total);
}
/* calcRacao(); */

function calcIdadeatual() {
    let anonasc, anoatual, total, meses, qtdemeses;
    anonasc = Number(prompt('Digite o ano que vc nasceu '));
    anoatual = Number(prompt('Digite o ano atual'));
    total = (anoatual - anonasc);
    meses = 12
    qtdemeses = total * meses

    alert('vc tem ' + total + ' anos  ' + qtdemeses + ' meses');
}
//calcIdadeatual();//


function calcIdades() {
    let question, idade = 0, contIdade = 0, somaIdade = 0, media = 0, contMaior = 0;
        question = prompt('Deseja digitar informações de usuários ? Sim para continuar ou Não para parar');
        while ( question == "sim"){
            idade = Number(prompt("Digite uma idade"));
            contIdade++
            somaIdade += idade
            if( idade >=21){
                contMaior ++
            }
            question = prompt('Deseja digitar informações de usuários ? Sim para continuar ou Não para parar');        
        }
        media = somaIdade / contIdade;        
        alert("Foram digitadas " +contIdade+ " idades, a média das idades digitadas é " +media+ " e " +contMaior+ " possuem 21 anos ou mais ");
    }    
//calcIdades();//

function calcValue(){
    let question, values, contValues, somaValues, medValues, menorValue
    contValues = 0
    somaValues = 0
    menorValue = 0
    question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar')
    while(question=='sim'){
        values = Number(prompt('Digite aqui seu valor:'))
        contValues++
        somaValues += values
        if(values<menorValue || menorValue==0){
            menorValue = values
        }
        question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar')
    }
    medValues = somaValues/contValues
    alert('O somatório final dos valores foi '+somaValues+', enquanto sua média é de '+medValues+' E o menor valor foi '+menorValue)
}
//calcValue()//



function formulario(){
    let nome, idade, genero, idMaior = 0, idMenor = 0, pjov , pve, media = 0, somaid = 0, contid = 0, qtdHomens = 0;
    question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar');

    while (question == "sim"){
        nome = prompt("digite seu nome");
        idade = Number(prompt( "digite sua idade"));
        genero =prompt("digite seu genero");
            /* verificar qual o mais velho */
        if(idade>idMaior){
            idMaior = idade;
            pve = nome;
        }
        /* verificar a mulher mais jovem e mostrar */
        if(idade<idMenor || idMenor == 0 && genero == 'f'){
            idMenor = idade;
            pjov = nome;
        } /* quantos homens maiores que 30 */
        if(idade > 30 && genero == "h"){
            qtdHomens ++;
        }
        /* quantas mulheres */
        if(idade<18 && genero =="f"){
            qtdMulheresMenor++;
        }
        count ++;
        soma += nome


        question = prompt('Deseja digitar valores? sim-para continuar e não-para continuar');
    }
    alert("O nome da pessoa mais velha é " +pve);
    alert("O nome da mulher mais jovem é " +pjov);


    
}

//formulario();//



function lerIdades() {
    let nome, idade = 0, genero, idMaior = 0, menor = 0, maisVelha =0 , mulherNova = 0, count = 0, soma = 0, qtdHomens = 0, qtdMulherMenor = 0;
    let op = prompt('deseja cadastrar um usário? (s/n)');
/* variáveis que tem que ser zeradas todas que vão receber resultados de operções matemáticas. Ex: números, quantidades, somatórias, acumalativas */

    while (op == 's' && op != 'n') {
        /* cadastro de dados */
        nome = prompt('Nome: ');
        idade = Number (prompt('digite a idade: '));
        genero = prompt('Gênero (h - homem / m - mulher): ');

        /* verificar qual o mais velho */
        if (idade > idMaior) {
            idMaior = idade;
            maisVelha = nome;
        }
        /* verificar a mulher mais jovem e mostrar */
        if (idade < menor || menor == 0 && genero == 'm') {
            menor = idade;
            mulherNova = nome;
        }
        /* Quantos homens maiores que 30  */
        if (idade > 30 && genero == 'h'){
            qtdHomens++;
        
        }
        /* Quantas mulheres */
        if(idade < 18 || qtdMulherMenor == 0 && genero == 'm' ){
            qtdMulherMenor++;
        }
        /* contador p/média de idades */
        count++;
        soma+=idade;

        op = prompt('deseja cadastrar um usário?(s/n)');
    }
    /* média */

    let media = soma / count;

    alert('O nome da pessoa mais velha é: ' + maisVelha);
    alert('O nome da pessoa mulher mais jovem é: ' + mulherNova);
    alert('A média das pessoas:' + media.toFixed(2));
    alert('Quantos homems com mais 30 ' + qtdHomens);
    alert('Quantas mulheres tem menos de 18 anos: ' + qtdMulherMenor);
}   
/* lerIdades(); */













