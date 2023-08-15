
import { CaixaDaLanchonete } from './caixa-da-lanchonete.js'; 

import readline from 'readline';

function main() {
    const caixa = new CaixaDaLanchonete();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const pedido = [];
    console.log("#CARDAPIO#");
    console.log("");
    console.log("CODIGO  / DESCRICAO  / VALOR ");
    console.log("cafe   /  Café     /  R$ 3,00");
    console.log("chantily / Chantily (extra do Café) / R$ 1,50");
    console.log("suco / Suco Natural / R$ 6,20");
    console.log("sanduiche / Sanduíche / R$ 6,50");
    console.log("queijo / Queijo (extra do Sanduíche)/ R$ 2,00");
    console.log("salgado / Salgado / R$ 7,25");
    console.log("combo1 / 1 Suco e 1 Sanduíche / R$ 9,50");
    console.log("combo2 / 1 Café e 1 Sanduíche / R$ 7,50");
    console.log("");

    console.log("DESCONTOS E TAXAS:");
    console.log("");
    console.log(" *Pagamento em dinheiro tem 5% de desconto");
    console.log(" *Pagamento a crédito tem acréscimo de 3% no valor total");
    console.log("");

    function askPedido() {
        rl.question("Insira seus pedidos (exemplo: cafe,1), 'fim' para finalizar:\n", function(input) {
            if (input.toLowerCase() === "fim") {
                askFormaPagamento();
            } else {
                pedido.push(input);
                askPedido();
            }
        });
    }

    function askFormaPagamento() {
        rl.question("Forma de pagamento (debito, credito, dinheiro): ", function(formaPagamento) {
            const valorTotal = caixa.calcularValorDaCompra(formaPagamento, pedido);
            console.log("Valor total da compra: " + valorTotal);
            rl.close();
        });
    }

    askPedido();
}

main();
