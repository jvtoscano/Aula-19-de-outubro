const user = {
    nome: "Samuel",
    email: "samuel@gmail.com",
    senha: "123456"
}

//senha correta: acesso permitido, senão: acesso negado

if(user.nome == "Samuel" && user.email == "samuel@gmail.com" && user.senha == "123456"){
    console.log("Acesso permitido!")
}
else{
    console.log("Acesso negado.")
}