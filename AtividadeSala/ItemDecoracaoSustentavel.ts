import { ProdutoEcologico } from "./ProdutoEcologico";

class itemDecoracaoSustentavel implements ProdutoEcologico{
    nomeProduto: String;
    precoProduto: number;
    material: String;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    }

    constructor(nomeProduto:string,precoProduto:number, material: String, dimensoes :{largura: number,altura: number,profundidade: number}){
        this.nomeProduto= nomeProduto;
        this.precoProduto=precoProduto;
        this.material=material;
        this.dimensoes=dimensoes;
    
    
    }  
    exibirItemDecoracaoSustentavel() {
        console.log(`Nome do produto: ${this.nomeProduto}\nPreço do produto: ${this.precoProduto}\nMaterial: ${this.material}\nDimensões: Largura: ${this.dimensoes.largura}cm, Altura: ${this.dimensoes.altura}cm, Profundidade: ${this.dimensoes.profundidade}cm`);
    }

    cadastrarItemDecoracaoSustentavel() {
        console.log(`Produto cadastrado: ${this.nomeProduto}`);
    }
}
const item = new itemDecoracaoSustentavel("Vaso de Bambu", 50, "Bambu", { largura: 20, altura: 30, profundidade: 15 });


item.exibirItemDecoracaoSustentavel();
item.cadastrarItemDecoracaoSustentavel();

