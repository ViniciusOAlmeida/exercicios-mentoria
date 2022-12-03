const btnEnviar = document.querySelector('#btn-send');
const inputProduto = document.querySelector('#input-produto')
//const listaDeCompras = document.getElementById('lista-de-compras')
const btnLimpar = document.querySelector('#btn-clear')

const getInputValue = () => {//função para buscar o valor do input
    return inputProduto.value;
}

const createLi = () => {
    const listaUl = document.querySelector('#lista-de-compras'); //busca a lista de compras, onde serão adicionados os itens
    const itemLista = document.createElement('li'); // cria o elemento Li
    itemLista.innerText = getInputValue(); //adiciona ao Li o valor do input
    listaUl.appendChild(itemLista); // adiciona a lista de compras o elemento Li
    salvarLocalStorageLista(); // chama a função que salva o elemento da na lista    
};

const salvarLocalStorageLista = () => {
    const listaUl = document.querySelector('#lista-de-compras');  //busca a lista de compras com os elementos Li
    localStorage.setItem('lista', listaUl.innerHTML); // salva no localStorage o innerHTML da lista UL (lista de compras)
}; 


const voltarLocalStorage = () => { //recupera a lista
    const listaUl = document.querySelector('#lista-de-compras'); // chama novamente a listaUl, que agora pode estar diferente
    const itensLista = localStorage.getItem('lista'); //chama a lista salva o localStorage
    listaUl.innerHTML = itensLista//não pode chamar como innerText pq a lista é um innerHTML, entao é chamada a listaUL, seta nela um innerHTML e recebe o itensLista
};


const limparTarefas = () => {
    const listaUl = document.querySelector('#lista-de-compras');
    listaUl.innerHTML = '';
    localStorage.removeItem('lista');
};

btnLimpar.addEventListener('click', limparTarefas)
btnEnviar.addEventListener('click', createLi)//executa a creaLi ao clicar no botão
voltarLocalStorage(); 