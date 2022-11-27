const users = [
    {firstName: 'Homer', lastName: 'Simpson', isDriver: true, items: ['casa', 'carro']},
    {firstName: 'Marge', lastName: 'Simpson', isDriver: true, items: ['casa', 'carro']},
    {firstName: 'Bart', lastName: 'Simpson', isDriver: false, items: ['skate']},
    {firstName: 'Lisa', lastName: 'Simpson', isDriver: false, items: ['saxofone']},
    {firstName: 'Maggie', lastName: 'Simpson', isDriver: true, items: ['mamadeira']},
]; 


naoDirige = (people) => {//cria função para buscar chave firstName que possuí isDriver: false
  const semCarteira = []; //cria uma const para armazenar em array o isDriver: false
  for (let index = 0; index < people.length; index += 1) { //for para iterar o array de objeto
    const element = people[index]; //cria uma const para que em toda a iteração ele armazene o item que está sendo iterado
    //console.log(element);//mostra no console o elemento atual
    if (element.isDriver === false) { //se isDriver for exatamente igual a false, vai para a linha de baixo
      semCarteira.push(element); // se a condicional anterior for atendida, da um push do element no array semCarteira
    }
  }
  return semCarteira; //retorna o array criado para armazenar o isDriver false
};

console.log(naoDirige(users));

/*ownHouse = (people) => { // primeira alternativa de como encontrar o firstName e lastName de quem tem item: casa
    const temCasa = []; //cria uma const que vai receber quem tem casa
    for (const person of people){ //for of para iterar e voltar a chave
        const elementoItem = person.items.includes('casa') //cria uma const para armezenar a cada iteração o item, o includes tem um for interno que busca a palavra do parametro e retorna true ou false
        if (elementoItem === true){ //  se o includes retornar true, vai para proxima linha
            temCasa.push (`${person.firstName} ${person.lastName}`) //se a condição do if fpr atendida, da um push no array temCasa
        }
    }   
    return temCasa;
}  

console.log(ownHouse(users));
*/

ownHouse = (people) => {
  const temCasa = [];
  for (let index = 0; index < people.length; index += 1) { // itera no array e adiciona ao elementPerson a chave 
    const elementPerson = people[index];
    for (let index2 = 0; index2 < elementPerson.items.length; index2 += 1) { // ao chegar na chave items itera novamente no array dentro do objeto
      if (elementPerson.items[index2] === "casa") { // checa se a chave arazenada no elementPerson possui casa
        temCasa.push(`${elementPerson.firstName} ${elementPerson.lastName}`); // se o if for atendido da um push no array temCasa
      }
    }
  }
  return temCasa;
};
console.log(ownHouse(users));

