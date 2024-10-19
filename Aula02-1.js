const user = {
    nome: "Samuel",
    idade: 15,

}

const listaProdutos = [
    //dentro dessa chaves está um objeto
    {
        nome: "Nescau",
        maiorDeIdade: false
    },
    {
        nome: "Cachaça",
        maiorDeIdade: true
    },
    {
        nome: "Suco",
        maiorDeIdade: false
    },
    {
        nome: "Skol",
        maiorDeIdade: true
    }
]

if(user.idade >= 18){
    console.log(listaProdutos)
}
else{
    const produtosPermitidos = listaProdutos.filter(produto => produto.maiorDeIdade === false)
    console.log(produtosPermitidos)
    //produto é uma variável temporária para filtrar os produtos falta dentro do objeto
}





// console.log(user)
// console.log(user.nome)
// console.log(user.idade)