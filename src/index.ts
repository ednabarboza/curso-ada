//questão 1

// class Alunos {
//     matricula:number
//     nome:string
//     nota_prova1:number
//     nota_prova2:number
//     nota_trabalho: number

//     constructor(matricula:number, nome:string, nota_prova1:number, nota_prova2:number, nota_trabalho: number){
//         this.matricula = matricula
//         this.nome = nome
//         this.nota_prova1 = nota_prova1
//         this.nota_prova2 = nota_prova2
//         this.nota_trabalho = nota_trabalho
//     }

//     media(){
//         const media = (this.nota_prova1 * 2.5 + this.nota_prova2 * 2.5 + this.nota_trabalho * 2)/ 7
//         console.log(`${this.nome} sua média é ${media}`)
//     }

//     final(){
//         const nota_para_passar = 7
//         const media = (this.nota_prova1 * 2.5 + this.nota_prova2 * 2.5 + this.nota_trabalho * 2)/ 7
//         if(media > 3 && media < nota_para_passar){
//             const falta_para_passar = (nota_para_passar - media) + nota_para_passar
//             console.log(`${this.nome} você precisa tirar ${falta_para_passar} para passar na final ` )
//         }else if (media >= 7){
//             console.log(0)
//         }else{
//             console.log('Reprovado(a)')
//         }
//     }
// }  

// const aluno_matriculado = new Alunos (2420, 'Ana', 7, 7, 7)

// aluno_matriculado.media()
// aluno_matriculado.final()

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

// console.log('-----------> Questão 5 <-----------')

// class Produtos {
//     nome:string
//     preco:number
//     codigo:number

//     const produtos = ['camisa', 'casaco', 'saia']
// }

// class Estoque {
//     produtos:Array<Produtos>



// }
