import { ProdutoEcologico } from "./ProdutoEcologico";


class AlimentOrganico implements ProdutoEcologico{
    nomeProduto: String;
    precoProduto: number;
    dataValidade: Date;
    ingredientes: String[];

    constructor(nomeProduto:String,precoProduto:number,dataValidade: Date,ingredientes:String[]){
        this.nomeProduto= nomeProduto;
        this.precoProduto=precoProduto;
        this.dataValidade= dataValidade;
        this.ingredientes= ingredientes;
    
    
    }   
    exibirAlimetoOrganico() {
        console.log(`Nome do produto: ${this.nomeProduto}\nPreço do produto: ${this.precoProduto}\nData da validade: ${this.dataValidade.toLocaleDateString()}\nIngredientes: ${this.ingredientes.join(", ")}`);
    }

    cadastrarAlimetoOrganico() {
        console.log(`Produto cadastrado: ${this.nomeProduto}`);
    }

}
const alimento = new AlimentOrganico("Alface", 5, new Date(2025, 2, 29), ["Verdura"]);

alimento.exibirAlimetoOrganico();
alimento.cadastrarAlimetoOrganico();
