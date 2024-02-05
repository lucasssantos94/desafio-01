// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

console.log(`-----------------------------\nEXERCICIO 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'`)

let period = 'dia';

switch (period) {
    case 'dia':
        console.log('está claro');
        break
    case 'noite':
        console.log('Está de noite');
        break;
    default:
        console.log('valor inválido')
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
console.log(`-----------------------------\nEXERCICIO 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()`)
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 03 - crie uma função que exiba uma mensagem no console
console.log(`-----------------------------\nEXERCICIO 03 - crie uma função que exiba uma mensagem no console`)

let message = 'Boa tarde';
function showMessage(msg) {
    console.log(msg)
};

showMessage(message);

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
console.log(`-----------------------------\nEXERCICIO 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console`)

let name = 'Lucas';
function showName(name) {
    console.log(`Meu nome é ${name}`)
};

showName(name);

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
console.log(`-----------------------------\nEXERCICIO 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console`)


function showInfo(name, age, musicalStyle) {
    console.log(`nome: ${name} \nidade: ${age}\nestilo musical preferido: ${musicalStyle}
    `)
}
showInfo('Lucas', 29, 'RAP');

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
console.log(`-----------------------------\nEXERCICIO 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console`)

function showMedia(movie, music) {
    console.log(`Filme: ${movie} \nMusica: ${music}`)
};

showMedia('O protetor', 'Dear Mama')


// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

console.log(`-----------------------------\nEXERCICIO 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função`)
function tripleValue(number = 0) {
    return number * 3
};
console.log(tripleValue(9));


// 08 - crie uma função que  verifique se uma  variável é true ou false

console.log(`-----------------------------\nEXERCICIO 08 - crie uma função que  verifique se uma  variável é true ou false`)

let value = true;

function checkValue(variavel) {
    if (variavel) {
        console.log(true)
    } else {
        console.log(false)
    }
};
checkValue(value);


// 09 - Crie um array que receba 5 itens e exiba no console.
console.log(`-----------------------------\nEXERCICIO 09 - Crie um array que receba 5 itens e exiba no console.`)
let arr = [1, 2, 3, 4, 5];
console.log(arr)


// 10 - Utilize um método para adicionar um nome ao inicio do array.
console.log(`-----------------------------\nEXERCICIO 10 - Utilize um método para adicionar um nome ao inicio do array.`)
arr.unshift(0)
console.log(arr)

// 11 - Utilize um método para remover o último nome do array.
console.log(`-----------------------------\nEXERCICIO 11 - Utilize um método para remover o último nome do array.`)
arr.pop()
console.log(arr)

let nomes = ["João", "Maria", "Jose", "Pedro"];

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
console.log(`-----------------------------\nEXERCICIO 12 - Utilize um método para adicionar dois nomes ao fim do array.`)
nomes.splice(4, 0, 'Vinicius', 'Fernanda')
console.log(nomes)

// 13 - Utilize um método para remover o primeiro nome do array.
console.log(`-----------------------------\nEXERCICIO 13 - Utilize um método para remover o primeiro nome do array.`)
nomes.shift()
console.log(nomes)

// 14 - Utilize um método para adicionar no meio deste array.
console.log(`-----------------------------\nEXERCICIO 14 - Utilize um método para adicionar no meio deste array.`)

nomes.splice(2, 0, 'Lucas');
console.log(nomes)

// 15 - Utilize um método para organizar em ordem crescente o seguinte array:
console.log(`-----------------------------\nEXERCICIO 15 - Utilize um método para organizar em ordem crescente o seguinte array:`)

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort();
console.log(numbers)
