class Tarefa {
    #titulo
    #responsavel
    #concluida

    constructor(titulo) {
        this.titulo = titulo
        this.#responsavel = null
        this.#concluida = false
    }

    get titulo() {
        return this.#titulo
    }

    set titulo(titulo) {
        if (!titulo || titulo.trim() === "") {
            throw new Error("O título da tarefa não pode ser vazio.")
        }

        this.#titulo = titulo.trim()
    }

    get responsavel() {
        return this.#responsavel
    }

    set responsavel(pessoa) {
        this.#responsavel = pessoa
    }

    get concluida() {
        return this.#concluida
    }

    atribuirResponsavel(pessoa) {
        this.responsavel = pessoa

        return `Tarefa "${this.titulo}" atribuída para ${pessoa.nome}.`
    }

    concluir() {
        if (this.#concluida) {
            return `A tarefa "${this.titulo}" já está concluída.`
        }

        this.#concluida = true

        return `Tarefa "${this.titulo}" concluída!`
    }

    consultarStatus() {
        return this.#concluida
            ? "Concluída"
            : "Pendente"
    }
}

module.exports = Tarefa