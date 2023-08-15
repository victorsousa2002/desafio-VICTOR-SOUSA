class CaixaDaLanchonete {

    constructor() {
        this.menu = {
            "cafe": 3.00,
            "chantily": 1.50,
            "suco": 6.20,
            "sanduiche": 6.50,
            "queijo": 2.00,
            "salgado": 7.25,
            "combo1": 9.50,
            "combo2": 7.50
        };
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        let extras = [];

        for (let item of itens) {
            let partes = item.split(",");
            if (partes.length !== 2) {
                return "Quantidade inválida!";
            }

            let codigo = partes[0];
            let quantidade = parseInt(partes[1]);

            if (!this.menu.hasOwnProperty(codigo)) {
                return "Item inválido!";
            }

            if (codigo === "chantily" && !extras.includes("cafe," + quantidade)) {
                return "Item extra não pode ser pedido sem o principal";
            }
            
            total += this.menu[codigo] * quantidade;

            if (codigo === "cafe") {
                extras.push("chantily," + quantidade);
            }

            extras.push(codigo + "," + quantidade);
        }

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        if (metodoDePagamento === "dinheiro") {
            total *= 0.95; // Desconto de 5% para pagamento em dinheiro
        } else if (metodoDePagamento === "credito") {
            total *= 1.03; // Acréscimo de 3% para pagamento a crédito
        } else if (metodoDePagamento !== "debito") {
            return "Forma de pagamento inválida!";
        }

        if (total === 0) {
            return "Quantidade inválida!";
        }

        return "R$ " + total.toFixed(2).replace(".", ",");
    }
}

export { CaixaDaLanchonete };
