let numero:number=10;
console.log(numero);

let nome:string="Edson";
console.log(nome);

const pi: number=3.14;
console.log(pi);

function saudacao(nome:string, idade:number){
    console.log('olá meu nome é ${nome} e tenho ${idade} anos')
}
const nomeUsuario: string="José"
const idade: number=18;

saudacao(nomeUsuario,idade)

const pessoa={
    nome:"Maria",
    idade:17,
    cidade:"ibirama",
    apresentar:function():String{
        return'olá meu nome é ${this.nome} e tenho ${this.idade} anos sou da cidade ${this.cidade}'


    }
}

console.log(pessoa.apresentar);

function somar(a:number, b:number):number{
    return a + b;

}
console.log(somar(3,4))