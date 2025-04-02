import { ProdutoEcologico } from "./ProdutoEcologico";


class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nomeProduto: String;
    precoProduto: number;
     volume: number;

constructor(nomeProduto:String,precoProduto:number,volume:number){
    this.nomeProduto= nomeProduto;
    this.precoProduto=precoProduto;
    this.volume=volume;


}  
exibirProdutoOrganico() {
    console.log(`Nome do produto: ${this.nomeProduto}\nPreço do produto: ${this.precoProduto}\nVolume: ${this.volume}ml`);
}

cadastrarProdutoOrganico() {
    console.log(`Produto cadastrado: ${this.nomeProduto}`);
}
}


const produto = new ProdutoLimpezaBiodegradavel("sabão", 15, 500);


produto.exibirProdutoOrganico();
produto.cadastrarProdutoOrganico();
   
