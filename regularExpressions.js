/*crie uma função que recebe como parametro uma determinada frase e uma letra. A função deve retornar o
número de vezes que aquela letra se repetiu na frase.
obs. deve-se calcular a repetição da letra independente se apareceu como maiúscula ou minúscula.*/

const countLetter = (phrase, letter) => { //cria a função, os parametros sao a frase e a letra aser buscada
    const regex = new RegExp(letter, 'gi'); // crria uma conts que vai armazenar os resquisitos do regex, oq ele faz é isso: /a/gi (busca o caracter a, na frase toda repeditas vezes, e cas) g global i case insensitive
    return phrase.match(regex).length;
};

const frase = 'Uma frase qualquer';
const letra = 'a';

console.log(countLetter(frase, letra));
