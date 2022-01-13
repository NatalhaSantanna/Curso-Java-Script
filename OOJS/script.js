class ContaBancaria {
    //coloca-se os parametros da classe tudo dentro do "constructor"
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação Negada!"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}
//criando uma classe "filha"
class contaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCred) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCred = cartaoCred;
    }
    get cartaoCred() {
        return this._cartaoCred;
    }
    set cartaoCred(valor) {
        return this._cartaoCred = valor;
    }
}
class contaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }
    sacar(valor) {
        if (valor > 500) {
            return 'Operação Negada!'
        }
        return this._saldo = this._saldo - valor;
    }
}