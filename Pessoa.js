class Pessoa {
    #nome

    constructor(nome) {
        this.nome = nome
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    apresentar() {
        return `Pessoa: ${this.nome}`
    }
}

class Lider extends Pessoa {
    constructor(nome) {
        super(nome)
    }

    apresentar() {
        return `Líder: ${this.nome}`
    }
}

class Integrante extends Pessoa {
    constructor(nome) {
        super(nome)
    }

    apresentar() {
        return `Integrante: ${this.nome}`
    }
}

module.exports = {
    Pessoa,
    Lider,
    Integrante
}