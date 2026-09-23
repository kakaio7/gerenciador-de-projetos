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
        this.#nome = nome
    }

    get tipo() {
        return this.#tipo
    }

    set tipo(tipo) {
        this.#tipo = tipo
    }

    get integrantes() {
        return this.#integrantes
    }

    get tarefas() {
        return this.#tarefas
    }

    adicionarIntegrante(pessoa) {
        this.#integrantes.push(pessoa)

        return `${pessoa.nome} foi adicionado ao projeto.`
    }

    adicionarTarefa(tarefa) {
        this.#tarefas.push(tarefa)

        return `Tarefa "${tarefa.titulo}" adicionada ao projeto.`
    }

    atribuirTarefa(numero, nomePessoa) {

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