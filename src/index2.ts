//questão 1
console.log('-----------> Questão 1 <-----------')

class Alunos_ {
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

const aluno_matriculado_ = new Alunos_ (2420, 'Ana', 7, 7, 7)

aluno_matriculado_.media()
aluno_matriculado_.final()

//questão 2
console.log('-----------> Questão 2 <-----------')

class Data_ {
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


    compara(data_estrang:Data_){
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

const resultado_ = new Data_('30/12/2023')
const resultado2_ = new Data_('31/08/2023')
console.log(resultado_.compara(resultado2_))
console.log(resultado_.obterData)
console.log(resultado_.obterDia)
console.log(resultado_.obterMes)
console.log(resultado_.obterAno)
console.log(resultado_.getMesEstenso())

//questão 3

console.log('-----------> Questão 3 <-----------')

class Flight {
          
    private flight_date:Data_; 
    private flight_number:string;
    seats: any[];

    constructor(flight_number:string, flight_date:Data_) {
        this.flight_number = flight_number;
        this.flight_date = flight_date;
        // Fazendo um array cheios de true, quando o assento for ocupado ai vira false
        this.seats = new Array(100).fill(true);
    }

    // Retorna próximo assento livre 
    proximoLivre(){
        const seat = this.seats;
        for (let i = 0; i < seat.length; i++) {
            if (seat[i]) {
                return `O próximo assento livre é o número ${i + 1}`;
            }
        }
        return 'Não há assentos disponíveis';
    }
    

    // Verifica se assento está livre
    verifica(number_seat:number){
        const seat = this.seats;
        const resposta = seat[number_seat-1] ? `O assento ${number_seat} está ocupado.` : `O assento ${number_seat} está livre.`;
        return resposta
    }

    // Ocupa próximo assento 
    ocupa(number_seat:number){
        const num_seat = number_seat-1;
        const seat = this.seats;
        if (seat[num_seat]) {
            // fica false pq está ocupado agora
            seat[num_seat] = false; 
            return `O assento ${num_seat+1} foi ocupado com sucesso.`; 
        }  
        return `O assento ${num_seat+1} não pôde ser ocupado.`;
    }

    // Retorna assentos livres do voo
    vagas(){
        const seat = this.seats;
        let vagas_disp = 0;

        for (let i = 0; i < seat.length; i++) {
            if (seat[i]) {
                vagas_disp++;
            }
        }
    return vagas_disp;
    }    

    // Retorna número de voo
    getVoo(){
        return this.flight_number;
    }
}

//Testes

const data = new Data_('07/02/2002');

const flight = new Flight('SNF9256', data);

console.log(flight.getVoo());  
console.log(flight.proximoLivre()); 
console.log(flight.vagas());  
console.log(flight.ocupa(15));  
console.log(flight.vagas());  
console.log(flight.verifica(15));  

//questão 4

console.log('-----------> Questão 4 <-----------')

class SmokingFlight extends Flight {
    private total_seats:number;
    private smoking_seats:number;

    // Constructor que herda o número e a data do voo
    constructor(flight_number:string, flight_date:Data_, total_seats:number, smoking_seats:number) {
        super(flight_number, flight_date);
        this.total_seats = total_seats;
        this.smoking_seats = smoking_seats;
    }

    // Retorna número de vagas no voo
    maxVagas(){
        return this.total_seats;
    }

    // Retorna cadeiras para fumantes
    cadeiras_Fumantes(){
        return this.smoking_seats;
    }

    // Diz se cadeira é de fumante ou n 
    tipo(seat:number){
        const smoking_seats = this.smoking_seats;
        // pega totalseats - o number que veio do input e compara se é maior que o numero do assento de fumantes, pois o numero de fumantes é no fim do voo, ou seja, no fim do array.
        const diff_seats = this.total_seats - seat;
        const resposta = diff_seats > smoking_seats ? 'Não fumante' : 'Fumante';
        return resposta;
    }

    // Retorna próxima cadeira livre, vem da super classe Flight
    proximoLivre(){
        const seats = this.seats;
        for (let i = 0; i < this.total_seats; i++) {
            // se for true
            if (this.seats[i]) {
                // retorna indice + 1
                return `O próximo assento livre é o número ${i+1}.`;
            }
        }
        return 'Não há assentos disponíveis';
    }


    // Verifica se o assento está livre
    verifica(seat_number:number){
        const seat = this.seats;
        const new_seat_number = seat_number - 1;
        const resposta = new_seat_number ? `O assento ${seat_number} está ocupado.` : `O assento ${seat_number} está livre.`;
        return resposta;
    }

    // Ocupa o assento escolhido
    ocupa(seat_number: number) {
        const seat = this.seats;
        const new_seat_number = seat_number - 1;
        if (seat[new_seat_number]) {
            seat[new_seat_number] = false;
            return `O assento ${new_seat_number+1} foi ocupado com sucesso.`;
        }
        return `O assento ${new_seat_number+1} não pôde ser ocupado.`;
    }
}

//Testes 

const data_ = new Data_('07/02/2002');

const flight_ = new Flight('SNF9256', data);

const smoking_flight = new SmokingFlight('SNF9256', data, 100, 30);


console.log(smoking_flight.ocupa(3));
console.log(smoking_flight.proximoLivre());
console.log(smoking_flight.maxVagas());
console.log(smoking_flight.cadeiras_Fumantes());
console.log(smoking_flight.verifica(3));
console.log(smoking_flight.tipo(80));

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
         const novoProduto = new Produtos_(codigo, nome, preco, quantidade);
         estoque_.adicionarProduto(novoProduto);
         break;
       case 2:
         // Remover produto
         const codigoRemover = parseInt(prompt_("Digite o código do produto a ser removido:"));
         estoque_.removerProduto(codigoRemover);
         break;
       case 3:
         // Alterar produto
         const codigoAlterar = parseInt(prompt_("Digite o código do produto a ser alterado:"));
         const produtoExistente = estoque_.buscarProduto(codigoAlterar);
         if (produtoExistente) {
           const novoNome = prompt_("Digite o novo nome do produto:");
           const novoPreco = parseFloat(prompt_("Digite o novo preço do produto:"));
           const novaQuantidade = parseInt(prompt_("Digite a nova quantidade do produto:"));
           const novoProdutoAlterado = new Produtos_(codigoAlterar, novoNome, novoPreco, novaQuantidade);
           estoque_.alterarProduto(codigoAlterar, novoProdutoAlterado);
         } else {
           console.log("Produto não encontrado.");
         }
         break;
       case 4:
         // Buscar produto
         const codigoBuscar = parseInt(prompt_("Digite o código do produto a ser buscado:"));
         const produtoBuscado = estoque_.buscarProduto(codigoBuscar);
         if (produtoBuscado) {
           console.log("Produto encontrado:", produtoBuscado);
         } else {
           console.log("Produto não encontrado.");
         }
         break;
       case 5:
         // Listar produtos
         const listaProdutos = estoque_.listarProdutos();
         console.log("Lista de produtos no estoque:");
         listaProdutos.forEach(produto => {
           console.log(produto);
         });
         break;
       case 6:
         // Calcular valor total do estoque
         const valorTotal = estoque_.calculoValorTotal();
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

class Produtos_ {
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

class Estoque_ {
   produtos:Array<Produtos_>

   constructor(){
       this.produtos = [];
   }

   adicionarProduto(produto:Produtos_) {
       this.produtos.push(produto);
   }

   removerProduto(codigo:number){
       const index = this.produtos.findIndex(produto => produto.codigo === codigo);
       if (index !== -1) {
           this.produtos.splice(index, 1);
       }
   }

  alterarProduto(codigo:number, novoProduto:Produtos_){
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

const estoque_ = new Estoque_()
const produto1_ = new Produtos_(1, "Vestido", 100, 2)
const produto2_ = new Produtos_(2, "saia", 60, 3)

estoque_.adicionarProduto(produto1_)
estoque_.adicionarProduto(produto2_)

main()