class Pessoa {
    #nome

    constructor(nome) {
        this.nome = nome
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        if (typeof nome !== "string" || nome.trim() === "") {
            throw new Error("O nome da pessoa é obrigatório.")
        }

        this.#nome = nome.trim()
    }

    apresentar() {
        return `Pessoa: ${this.nome}`
    }
}

class Lider extends Pessoa {
    apresentar() {
        return `Líder: ${this.nome}`
    }
}

class Integrante extends Pessoa {
    apresentar() {
        return `Integrante: ${this.nome}`
    }
}

module.exports = {
    Pessoa,
    Lider,
    Integrante
}