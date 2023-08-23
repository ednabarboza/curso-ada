"use strict";
console.log('-----------> Questão 2 <-----------');
class Data {
    constructor(data) {
        this.dia = '';
        this.mes = '';
        this.ano = '';
        this.data = this.validar(data);
    }
    validar(data) {
        const data_result = data.split('/');
        this.dia = data_result[0];
        this.mes = data_result[1];
        this.ano = data_result[2];
        const dia = Number(data_result[0]);
        const mes = Number(data_result[1]);
        const ano = Number(data_result[2]);
        if ((dia <= 0 || dia > 31) || (mes <= 0 || mes > 12) || (ano <= 1970 || ano > 2050)) {
            return '01/01/2001';
        }
        return data;
    }
    get obterData() {
        return this.data;
    }
    get obterDia() {
        return this.dia;
    }
    get obterMes() {
        return this.mes;
    }
    get obterAno() {
        return this.ano;
    }
    compara(data_estrang) {
        return this.data === data_estrang.obterData;
    }
    getMesEstenso() {
        const mes = this.mes;
        switch (mes) {
            case '01':
                return ('janeiro');
            case '02':
                return ('fevereiro');
            case '03':
                return ('março');
            case '04':
                return ('abril');
            case '05':
                return ('maio');
            case '06':
                return ('junho');
            case '07':
                return ('julho');
            case '08':
                return ('agosto');
            case '09':
                return ('setembro');
            case '10':
                return ('outubro');
            case '11':
                return ('novembro');
            case '12':
                return ('dezembro');
            default:
                console.log('Mês inexistente');
                break;
        }
    }
}
const resultado = new Data('30/12/2023');
const resultado2 = new Data('31/08/2023');
console.log(resultado.compara(resultado2));
console.log(resultado.obterData);
console.log(resultado.obterDia);
console.log(resultado.obterMes);
console.log(resultado.obterAno);
console.log(resultado.getMesEstenso());
console.log('-----------> Questão 3 <-----------');
class Voo {
    constructor(numero_do_voo, data) {
        this.numero_do_voo = numero_do_voo;
        this.data = data;
    }
    verifica(seOcupada) {
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];
        if (cadeirasOcupadas.includes(seOcupada)) {
            console.log(`A cadeira ${seOcupada} já está ocupada, procure outro assento`);
        }
        else {
            console.log(`A cadeira ${seOcupada} está livre e pode ser utilizada`);
        }
    }
    ocupa(numeroCadeira) {
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];
        if (cadeirasOcupadas.includes(numeroCadeira)) {
            return false;
        }
        else {
            return true;
        }
    }
    proximoLivre() {
        const totalCadeiras = 100;
        const cadeirasOcupadas = [1, 2, 5, 7, 10, 15, 22, 34, 46, 58, 61, 74, 89, 92];
        for (let i = 1; i <= totalCadeiras; i++) {
            if (!cadeirasOcupadas.includes(i)) {
                return i;
            }
        }
        return null;
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
        console.log(`Há um total de ${cadeirasVagas} cadeiras vagas no voo`);
    }
    getVoo() {
        return this.numero_do_voo;
    }
}
const voo = new Voo(123, resultado);
console.log('metodo verifica ----->');
voo.verifica(2);
console.log('metodo ocupa ----->');
console.log(voo.ocupa(11));
console.log('metodo proximoLivre ----->');
console.log(voo.proximoLivre());
console.log('metodo vagas ----->');
voo.vagas();
console.log('-----------> Questão 4 <-----------');
class AlasVoo extends Voo {
    constructor(numero_do_voo, data, numeroDeVagas, cadeirasFumantes) {
        super(numero_do_voo, data);
        this.numeroDeVagas = numeroDeVagas;
        this.numeroCadeirasFumantes = cadeirasFumantes;
    }
    maxVagas() {
        return this.numeroDeVagas;
    }
    cadeirasFumantes() {
        return this.numeroCadeirasFumantes;
    }
    tipo(cadeira) {
        if (cadeira > 0 && cadeira <= 70) {
            console.log('N');
        }
        else if (cadeira > 70 && cadeira <= 100) {
            console.log('F');
        }
    }
}
const vooPorAlas = new AlasVoo(123, resultado, 100, 30);
console.log('metodo maxVagas -----> Mostra o número máximo de cadeiras noo voo');
console.log(vooPorAlas.maxVagas());
console.log('metodo cadeirasFumantes -----> Mostra o número de cadeiras reservadas para fumantes');
console.log(vooPorAlas.cadeirasFumantes());
console.log('metodo tipo -----> ');
vooPorAlas.tipo(85);
