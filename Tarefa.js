const { Pessoa } = require("./Pessoa")

class Tarefa {
    #titulo
    #concluida
    #responsavel

    constructor(titulo) {
        this.titulo = titulo
        this.#concluida = false
        this.#responsavel = null
    }

    get titulo() {
        return this.#titulo
    }

    set titulo(titulo) {
        if (typeof titulo !== "string" || titulo.trim() === "") {
            throw new Error("O título da tarefa é obrigatório.")
        }

        this.#titulo = titulo.trim()
    }

    get concluida() {
        return this.#concluida
    }

    get responsavel() {
        return this.#responsavel
    }

    atribuir(pessoa) {
        if (!(pessoa instanceof Pessoa)) {
            throw new TypeError("O responsável deve ser uma pessoa.")
        }

        this.#responsavel = pessoa
    }

    concluir() {
        this.#concluida = true
    }

    apresentar() {
        let estado = "Pendente"

        if (this.#concluida) {
            estado = "Concluída"
        }

        let responsavel = "Sem responsável"

        if (this.#responsavel) {
            responsavel = this.#responsavel.nome
        }

        return `Tarefa: ${this.titulo} | Estado: ${estado} | Responsável: ${responsavel}`
    }
}

module.exports = Tarefa