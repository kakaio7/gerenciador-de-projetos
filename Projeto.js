const { Pessoa } = require("./Pessoa")
const Tarefa = require("./Tarefa")

class Projeto {
    static quantidadeProjetos = 0

    #nome
    #tipo
    #integrantes
    #tarefas

    constructor(nome, tipo) {
        this.nome = nome
        this.tipo = tipo
        this.#integrantes = []
        this.#tarefas = []

        Projeto.quantidadeProjetos++
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        if (typeof nome !== "string" || nome.trim() === "") {
            throw new Error("O nome do projeto é obrigatório.")
        }

        this.#nome = nome.trim()
    }

    get tipo() {
        return this.#tipo
    }

    set tipo(tipo) {
        if (typeof tipo !== "string" || tipo.trim() === "") {
            throw new Error("O tipo do projeto é obrigatório.")
        }

        this.#tipo = tipo.trim()
    }

    get integrantes() {
        return [...this.#integrantes]
    }

    get tarefas() {
        return [...this.#tarefas]
    }

    adicionarIntegrante(pessoa) {
        if (!(pessoa instanceof Pessoa)) {
            throw new TypeError("O integrante deve ser uma pessoa.")
        }

        this.#integrantes.push(pessoa)

        return `${pessoa.nome} foi adicionado ao projeto.`
    }

    adicionarTarefa(tarefa) {
        if (!(tarefa instanceof Tarefa)) {
            throw new TypeError("A tarefa deve ser uma instância de Tarefa.")
        }

        this.#tarefas.push(tarefa)

        return `Tarefa "${tarefa.titulo}" adicionada ao projeto.`
    }

    atribuirTarefa(numero, nomePessoa) {
        if (!Number.isInteger(numero) || numero < 1) {
            return "Tarefa não encontrada."
        }

        const tarefa = this.#tarefas[numero - 1]
        if (!tarefa) {
            return "Tarefa não encontrada."
        }

        const pessoa = this.#integrantes.find(
            integrante => integrante.nome === nomePessoa
        )

        if (!pessoa) {
            return "Integrante não encontrado."
        }

        tarefa.atribuir(pessoa)

        return `Tarefa atribuída para ${pessoa.nome}.`
    }

    concluirTarefa(numero) {
        if (!Number.isInteger(numero) || numero < 1) {
            return "Tarefa não encontrada."
        }
        const tarefa = this.#tarefas[numero - 1]

        if (!tarefa) {
            return "Tarefa não encontrada."
        }

        tarefa.concluir()

        return `Tarefa "${tarefa.titulo}" concluída.`
    }

    listarIntegrantes() {

        if (this.#integrantes.length === 0) {
            console.log("\nNenhum integrante cadastrado.")
            return
        }

        console.log("\n--- INTEGRANTES ---")

        this.#integrantes.forEach((pessoa, index) => {
            console.log(
                `${index + 1} - ${pessoa.apresentar()}`
            )
        })
    }

    listarTarefas() {

        if (this.#tarefas.length === 0) {
            console.log("\nNenhuma tarefa cadastrada.")
            return
        }

        console.log("\n--- TAREFAS ---")

        this.#tarefas.forEach((tarefa, index) => {
            console.log(
                `${index + 1} - ${tarefa.apresentar()}`
            )
        })
    }

    apresentarProjeto() {
        return `Projeto: ${this.nome} | Tipo: ${this.tipo}`
    }

    static consultarQuantidadeProjetos() {
        return Projeto.quantidadeProjetos
    }
}

module.exports = Projeto