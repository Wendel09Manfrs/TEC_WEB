//QUESTÃO 1-VERIFICAR SE É ARRAY OU NÃO

console.log('1-VERIFICAR SE É ARRAY OU NÃO')
function verificaSeArray(lista) {
  return Array.isArray(lista);
}
let lista1 = [1,2,4,5];
let nao_lista1 = "kkkkkkkkk";


console.log('O array', lista1, 'é um array?', verificaSeArray(lista1));
console.log('O array', nao_lista1, 'é um array?', verificaSeArray(nao_lista1));




//QUESTÃO 2- CLONAR UM ARRAY

console.log('\n2-CLONAR UM ARRAY');
function clonar(array) {
  return array.slice(0);
}

let Original = [4, 8, 1,4];
let Clone = clonar(Original);


console.log('Array original:',Original); 
console.log('Clone do array original',Clone); 

Original.push(10);

console.log('Array com mais um elemento:',Original); 
console.log('Clone do array ainda permanece o mesmo:',Clone); 

//QUESTÃO 3- o primeiro elemento de um array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do array.

console.log('\n3-O PRIMEIRO ELEMENTO E OS N PRIMEIROS ELEMENTOS DO ARRAY');

function Elemento1(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}
let array1 = [9, 7, 2, 14, 2];
console.log('Array original',array1)

console.log('Primeiro elemento:',Elemento1(array1)); 
console.log('N primeiros elementos:',Elemento1(array1, 3));

//QUESTÃO 4 - Ultimo elemento e os N ultimos elementos
console.log('\n4-O ULTIMO ELEMENTO E OS N ULTIMOS ELEMENTOS DO ARRAY');
function ElementoFinal(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}



let arrayFinal = [5, 9, 1, 16, 29];
console.log('Array original',arrayFinal)

console.log('Ultimo elemento:',ElementoFinal(arrayFinal)); 
console.log('N ultimos elementos:',ElementoFinal(arrayFinal, 3));


//QUESTÃO 5 - Unir elementos de um array

console.log('\n5-UNIR ELEMENTOS DO ARRAY');

let array5 = ["Cuida", " meu colega", "!!!"];
let array55 = [67, 34, 90];

console.log('Array em questão_caracteres:',array5)
console.log('Array em questão_numeros:',array55)

let uniaoString1 = array5.join("");
let uniaoString2 = array55.join("");

console.log(uniaoString1);

console.log(uniaoString2);  

//QUESTÃO 6 - INSERIR TRAÇOS ENTRE DOIS NUMEROS PARES

console.log('\n6-INSERIR TRAÇOS ENTRE DOIS NUMEROS PARES');

function Tracinhos(num) {
  let elementos = num.toString().split("");
  let transformado = "";

  for (let i = 0; i < elementos.length; i++) {
    transformado += elementos[i];

    if (elementos[i] % 2 === 0 && elementos[i + 1] % 2 === 0) {
      transformado += "-";
    }
  }

  return transformado;
}
let originNum = 42556789024;
let numTracos = Tracinhos(originNum);

console.log('Entrada Original:', originNum)
console.log('Com traços:',numTracos);

//QUESTÃO 7 - ENCONTRAR O ELEMENTO MAIS FREQUENTE

console.log('\n7-ENCONTRAR O ELEMENTO MAIS FREQUENTE');

function frequente(array) {
  let apareceMais;
  let frequenciaMaxima = 0;
  let cont = {};
  for (let i = 0; i < array.length; i++) {
    let elemento = array[i];
    if (cont[elemento] === undefined) {
      cont[elemento] = 1;
    } else {
      cont[elemento]++;
    }
    if (cont[elemento] > frequenciaMaxima) {
      frequenciaMaxima = cont[elemento];
      apareceMais = elemento;
    }
  }
  return apareceMais;
}

let Exemplo7 = [5, 5, 3, 2, 5, 5, 5, 2, 4, 2];
let apareceMais = frequente(Exemplo7);
console.log('Entrada Original:',Exemplo7);
console.log('Elemento mais frequente:',apareceMais); 

//QUESTÃO 8 - REMOVER ITENS DUPLICADOS

console.log('\n8-REMOVER ITENS DUPLICADOS');

function remDupla(array) {


  let arrayq8 = [];
 if(Array.isArray(array)){
  for (let i = 0; i < array.length; i++) {
    let elemento = array[i];

    if (typeof elemento === "string") {

    let elemento = array[i].toLowerCase(); 

    }
    if (!arrayq8.includes(elemento)) { 
      arrayq8.push(elemento); 
    }
  }
}
  return arrayq8;
}

let arrayEntra = ["Ana", "Brasil", "gato", "ana", "celular", "orelha"];

let arrayEntra2 = [1,2,3,4,5,6,6,7,8,9,9,1,1,1,1,1,3,3,3,3];


console.log('Array original 1',arrayEntra)
console.log('Array original 2',arrayEntra2)



let SemDuplas = remDupla(arrayEntra);
let SemDuplas2 = remDupla(arrayEntra2);

console.log('Array Sem Duplas 1:',SemDuplas);
console.log('Array Sem Duplas 2:',SemDuplas2);

//QUESTÃO 9 - SOMAR DOIS ARRAYS POR CADA VALOR DE INDICE INDIVIDUAL


console.log('\n9-SOMAR DOIS ARRAYS POR CADA VALOR DE INDICE INDIVIDUAL');

function soma(array1, array2) {
  let somaFinal = [];

  let maior = Math.max(array1.length, array2.length);

  for (let i = 0; i < maior; i++) {
    let valor1 = array1[i] || 0;
    let valor2 = array2[i] || 0;
    let soma = valor1 + valor2;

    somaFinal.push(soma);
  }

  return somaFinal;
}

let array9_1 = [4, 1, 6, 10];
let array9_2 = [8, 0, 3, 34, 1];

console.log('Array 1',array9_1)
console.log('Array 2',array9_2)

let soma9 = soma(array9_1, array9_2);
console.log('A soma eh:',soma9);
// Saída: [6, 8, 10, 12, 9]



//QUESTÃO 10 - ADICIONAR VALOR NUM VETOR PILHA

console.log('\n10-ADICIONAR VALORES NUM VETOR PILHA');
let vetorPilha = [20, 2, 87, 8];
let vetorAdiciona = [6, 7, 8, 9, 10, 'oi','kkkkkk'];

console.log('VetorPilha', vetorPilha)
console.log('VetorAdiciona',vetorAdiciona)

Array.prototype.push.apply(vetorPilha, vetorAdiciona);
console.log('Vetor Pilha Adicionado de elementos do VetorAdiciona:',vetorPilha);

