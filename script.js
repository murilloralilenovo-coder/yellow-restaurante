let prato={
    nome:"prato1",
    preco:15
};
function calcutotal(preco, quantidade){
    let total = preco * quantidade
    if(total >= 100){
        total = total * 0.9
    };
    return total
}

console.log(calcutotal(prato.preco, 7), "reais");
