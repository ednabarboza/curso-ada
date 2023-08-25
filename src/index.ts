//questão 1
console.log('-----------> Questão 1 <-----------')

class Alunos {
    matricula:number
    nome:string
    nota_prova1:number
    nota_prova2:number
    nota_trabalho: number

    constructor(matricula:number, nome:string, nota_prova1:number, nota_prova2:number, nota_trabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.nota_prova1 = nota_prova1
        this.nota_prova2 = nota_prova2
        this.nota_trabalho = nota_trabalho
    }

    media(){
        const media = (this.nota_prova1 * 2.5 + this.nota_prova2 * 2.5 + this.nota_trabalho * 2)/ 7
        console.log(`${this.nome} sua média é ${media}`)
    }

    final(){
        const nota_para_passar = 7
        const media = (this.nota_prova1 * 2.5 + this.nota_prova2 * 2.5 + this.nota_trabalho * 2)/ 7
        if(media > 3 && media < nota_para_passar){
            const falta_para_passar = (nota_para_passar - media) + nota_para_passar
            console.log(`${this.nome} você precisa tirar ${falta_para_passar} para passar na final ` )
        }else if (media >= 7){
            console.log(0)
        }else{
            console.log('Reprovado(a)')
        }
    }
}  

const aluno_matriculado = new Alunos (2420, 'Ana', 7, 7, 7)

aluno_matriculado.media()
aluno_matriculado.final()

//questão 2
console.log('-----------> Questão 2 <-----------')

class Data {
    private data:string
    private dia:string = ''
    private mes:string = ''
    private ano:string = ''

    constructor(data:string){
        this.data = this.validar(data)
    }


    private validar(data:string):string {
        const data_result = data.split('/')
        
        this.dia = data_result[0]
        this.mes = data_result[1]
        this.ano = data_result[2]
        const dia = Number(data_result[0])
        const mes = Number(data_result[1])
        const ano = Number(data_result[2])

        if((dia <= 0 || dia>31) || (mes <= 0 || mes>12) || (ano <= 1970 || ano>2050)){
            return '01/01/2001'
        }

        return data
    }

    get obterData(){
        return this.data
    }

    get obterDia(){
        return this.dia
    }

    get obterMes(){
        return this.mes
    }

    get obterAno(){
        return this.ano
    }


    compara(data_estrang:Data){
        return this.data === data_estrang.obterData
    }

    getMesEstenso(){
        const mes = this.mes

        switch(mes){
            case '01': 
                return('janeiro')
            case '02':
                return('fevereiro')
            case '03':
                return('março')
            case '04':
                return('abril')
            case '05':
                return('maio')
            case '06':
                return('junho')
            case '07':
                return('julho')
            case '08':
                return('agosto')
            case '09':
                return('setembro')
            case '10':
                return('outubro')
            case '11':
                return('novembro')
            case '12':
                return('dezembro')
            default:
                console.log('Mês inexistente')
                break
        }
    }
 }

const resultado = new Data('30/12/2023')
const resultado2 = new Data('31/08/2023')
console.log(resultado.compara(resultado2))
console.log(resultado.obterData)
console.log(resultado.obterDia)
console.log(resultado.obterMes)
console.log(resultado.obterAno)
console.log(resultado.getMesEstenso())


//questão 3

console.log('-----------> Questão 3 <-----------')

class Voo {
    numero_do_voo: number;
    data: Data;

    constructor(numero_do_voo: number, data: Data) {
        this.numero_do_voo = numero_do_voo;
        this.data = data;
    }

    verifica(seOcupada:number){
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];
        
        // Verifica se o número da cadeira está na lista de cadeiras ocupadas
        if (cadeirasOcupadas.includes(seOcupada)) {
            console.log(`A cadeira ${seOcupada} já está ocupada, procure outro assento`)
        } else {
            console.log(`A cadeira ${seOcupada} está livre e pode ser utilizada`)
        }
    }

    ocupa(numeroCadeira: number) {
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];
        
        // Verifica se o número da cadeira está na lista de cadeiras ocupadas
        if (cadeirasOcupadas.includes(numeroCadeira)) {
            return false; // Cadeira está ocupada
        } else {
            return true; // Cadeira não está ocupada
        }
    }

    proximoLivre() {
        const totalCadeiras = 100;
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];

        for (let i = 1; i <= totalCadeiras; i++) { //  itera através dos números de cadeira de 1 a 100
            if (!cadeirasOcupadas.includes(i)) {
                return i; // Retorna o número da próxima cadeira livre
            }
        }

        return null; // Retorna null se não houver cadeiras livres
    }

    vagas() {
        const totalCadeiras = 100;
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];
        
        let cadeirasVagas = 0;
        for (let i = 1; i <= totalCadeiras; i++) {
            if (!cadeirasOcupadas.includes(i)) {
                cadeirasVagas++;
            }
        }

        console.log(`Há um total de ${cadeirasVagas} cadeiras vagas no voo`)
    }

    getVoo() {
        return this.numero_do_voo;
    }
}

const voo = new Voo(123, resultado);
console.log('metodo verifica ----->')
voo.verifica(2)
console.log('metodo ocupa ----->')
console.log(voo.ocupa(11))
console.log('metodo proximoLivre ----->')
console.log(voo.proximoLivre())
console.log('metodo vagas ----->')
voo.vagas()

//questão 4

console.log('-----------> Questão 4 <-----------')

class AlasVoo extends Voo {
    numeroDeVagas: number
    numeroCadeirasFumantes:number 

    constructor(numero_do_voo: number, data: Data, numeroDeVagas: number, cadeirasFumantes:number){
        super(numero_do_voo, data)
        this.numeroDeVagas = numeroDeVagas
        this.numeroCadeirasFumantes = cadeirasFumantes
    }

    maxVagas(){
        return this.numeroDeVagas
    }

    cadeirasFumantes(){
        return this.numeroCadeirasFumantes
    }

    tipo(cadeira:number){
        if(cadeira > 0 && cadeira <= 70){
            console.log('N')
        }else if(cadeira > 70 && cadeira<=100){
            console.log('F')
        }
    }
}


const vooPorAlas = new AlasVoo(123, resultado, 100, 30)
console.log('metodo maxVagas -----> Mostra o número máximo de cadeiras noo voo')
console.log(vooPorAlas.maxVagas())
console.log('metodo cadeirasFumantes -----> Mostra o número de cadeiras reservadas para fumantes')
console.log(vooPorAlas.cadeirasFumantes())
console.log('metodo tipo -----> ')
vooPorAlas.tipo(85)


//questão 5

 console.log('-----------> Questão 5 <-----------')

 var prompt_ = require('prompt-sync')();

function exibirMenu() {
    console.log("Este é o menu de opções disponível: ")
    console.log("1. Adicionar produto");
    console.log("2. Remover produto");
    console.log("3. Alterar produto");
    console.log("4. Buscar produto");
    console.log("5. Listar produtos");
    console.log("6. Calcular valor total do estoque");
    console.log("0. Sair");
  }

  function main() {
    let choice = -1;
    while (choice !== 0) { 
      exibirMenu();
      choice = parseInt(prompt_("Escolha uma opção:"));
      switch (choice) {
        case 1:
          // Adicionar produto
          const codigo = parseInt(prompt_("Digite o código do produto:"));
          const nome = prompt_("Digite o nome do produto:");
          const preco = parseFloat(prompt_("Digite o preço do produto:"));
          const quantidade = parseInt(prompt_("Digite a quantidade do produto:"));
          const novoProduto = new Produtos(codigo, nome, preco, quantidade);
          estoque.adicionarProduto(novoProduto);
          break;
        case 2:
          // Remover produto
          const codigoRemover = parseInt(prompt_("Digite o código do produto a ser removido:"));
          estoque.removerProduto(codigoRemover);
          break;
        case 3:
          // Alterar produto
          const codigoAlterar = parseInt(prompt_("Digite o código do produto a ser alterado:"));
          const produtoExistente = estoque.buscarProduto(codigoAlterar);
          if (produtoExistente) {
            const novoNome = prompt_("Digite o novo nome do produto:");
            const novoPreco = parseFloat(prompt_("Digite o novo preço do produto:"));
            const novaQuantidade = parseInt(prompt_("Digite a nova quantidade do produto:"));
            const novoProdutoAlterado = new Produtos(codigoAlterar, novoNome, novoPreco, novaQuantidade);
            estoque.alterarProduto(codigoAlterar, novoProdutoAlterado);
          } else {
            console.log("Produto não encontrado.");
          }
          break;
        case 4:
          // Buscar produto
          const codigoBuscar = parseInt(prompt_("Digite o código do produto a ser buscado:"));
          const produtoBuscado = estoque.buscarProduto(codigoBuscar);
          if (produtoBuscado) {
            console.log("Produto encontrado:", produtoBuscado);
          } else {
            console.log("Produto não encontrado.");
          }
          break;
        case 5:
          // Listar produtos
          const listaProdutos = estoque.listarProdutos();
          console.log("Lista de produtos no estoque:");
          listaProdutos.forEach(produto => {
            console.log(produto);
          });
          break;
        case 6:
          // Calcular valor total do estoque
          const valorTotal = estoque.calculoValorTotal();
          console.log("Valor total do estoque:", valorTotal.toFixed(2));
          break;
        case 0:
          // Sair
          console.log("Encerrando o programa.");
          break;
        default:
          console.log("Opção inválida. Digite um número válido.");
      }
    }
  }

class Produtos {
    codigo:number
    nome:string
    preco:number
    quantidade:number

    //const produtos = ['camisa', 'casaco', 'saia']

    constructor(codigo:number, nome:string, preco:number, quantidade:number){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }
}

class Estoque {
    produtos:Array<Produtos>

    constructor(){
        this.produtos = [];
    }

    adicionarProduto(produto:Produtos) {
        this.produtos.push(produto);
    }

    removerProduto(codigo:number){
        const index = this.produtos.findIndex(produto => produto.codigo === codigo);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        }
    }

   alterarProduto(codigo:number, novoProduto:Produtos){
        const index = this.produtos.findIndex(produto => produto.codigo === codigo);
            if(index !== -1){
                this.produtos[index] = novoProduto
            }
   }

   buscarProduto(codigo:number){
        return this.produtos.find(produto => produto.codigo === codigo)
    }

    listarProdutos(){
        return this.produtos
    }

    calculoValorTotal(){
        return this.produtos.reduce((total, produto) => total + produto.preco, 0)
    }

}

const estoque = new Estoque()
const produto1 = new Produtos(1, "Vestido", 100, 2)
const produto2 = new Produtos(2, "saia", 60, 3)

estoque.adicionarProduto(produto1)
estoque.adicionarProduto(produto2)

main()



