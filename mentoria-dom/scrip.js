const btnSend = document.querySelector('#btn-send');
const inputProduto = document.querySelector('#input-produto')
const listaDeCompras = document.getElementById('lista-de-compras')

const criarItem = (texto) => { //essa função sozinha, sem a função colocarItemLista, ira apenas adicionar o texto de paramentro em baixo do botao enviar, ignorando oq foi colocado no input
    const createLi = document.createElement('li'); //cria uma Li
    createLi.classList.add('item-lista')//adiciona uma classe à Li
    createLi.innerText = texto //edita o texto da Li
    listaDeCompras.appendChild(createLi)//adiciona a Li como filha da listaDeCompras
};

const colocarItemLista = () => { // essa função vai buscar oq foi escrito no input e adicionar como innerText da Li
    const inputValue = inputProduto.value // busca o valor dentro do inputProduto
    criarItem(inputValue); // coloca o value do input no elemento Li criado pelo createItem
    inputProduto.value = "" //limpa o valor do input
    adicionaItemStorage() // chama essa função quando termina de colocar os itens na lista
}

btnSend.addEventListener('click', colocarItemLista ) //adiciona um evento de click no botão enviar, que executa a função colocar item na lista

const addStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

/* como eu posso colocar os itens em um localStorage
o localStorage salva apenas strings, então é preciso pegar de alguma forma
os meus itens e coloca-los no localstorage e depois recuperalos.
o localStorage salva no html collection, que é uma array
*/
const adicionaItemStorage = () => { 
    const itens = document.getElementsByClassName('item-lista'); // traz todos os itens da lista buscando pello className
    console.log(itens);
    let arrayItens = [];//adiciona os items da lista nesse array
    for (const item of itens) { // usa um for of para iterar entre os itens do html collection
        arrayItens.push(item.innerText) //adiciona no arrayItens o texto dos itens da lista
    }
   addStorage('itensLista', arrayItens);
};


const retornaStorage = () => {
    if(localStorage.itensLista) {//verifica antes se tem o itensLista
        const arrItens = JSON.parse(localStorage.getItem('itensLista'))
        for (let index = 0; index < arrItens.length; index++) {
            criarItem(arrItens[index])
        }
    }
};


window.onload = () => {
    retornaStorage();
};

