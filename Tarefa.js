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
        this.#titulo = titulo
    }

    get concluida() {
        return this.#concluida
    }

    get responsavel() {
        return this.#responsavel
    }

    atribuir(pessoa) {
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