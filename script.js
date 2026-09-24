let prato={
    nome:"prato1",
    preco:15
};
let resultado = calcutotal(prato.preco, 0)
let saida = document.querySelector("#total-pedido");
saida.textContent = "total: "+resultado + " reais";
function calcutotal(preco, quantidade){
    let total = preco * quantidade
    if(total >= 100){
        total = total * 0.9
    };
    return total
}
