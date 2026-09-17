class Projeto {
    static quantidadeProjetos = 0

    #nome
    #tarefas
    #integrantes

    constructor(nome) {
        this.nome = nome
        this.#tarefas = []
        this.#integrantes = []

        Projeto.quantidadeProjetos++
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        if (!nome || nome.trim() === "") {
            throw new Error("O nome do projeto não pode ser vazio.")
        }

        this.#nome = nome.trim()
    }

    get tarefas() {
        return this.#tarefas
    }

    get integrantes() {
        return this.#integrantes
    }

    adicionarIntegrante(pessoa) {
        this.#integrantes.push(pessoa)

        return `${pessoa.nome} foi adicionado ao projeto.`
    }

    adicionarTarefa(tarefa) {
        this.#tarefas.push(tarefa)

        return `Tarefa "${tarefa.titulo}" adicionada ao projeto.`
    }

    atribuirTarefa(numeroTarefa, nomePessoa) {
        const tarefa = this.#tarefas[numeroTarefa - 1]

        if (!tarefa) {
            return "Tarefa não encontrada."
        }

        const pessoa = this.#integrantes.find(
            integrante =>
                integrante.nome.toLowerCase() === nomePessoa.toLowerCase()
        )

        if (!pessoa) {
            return "Integrante não encontrado."
        }

        return tarefa.atribuirResponsavel(pessoa)
    }

    concluirTarefa(numero) {
        const indice = numero - 1
        const tarefa = this.#tarefas[indice]

        if (!tarefa) {
            return "Tarefa não encontrada."
        }

        const nomeTarefa = tarefa.titulo

        this.#tarefas.splice(indice, 1)

        return `Tarefa "${nomeTarefa}" concluída e removida da lista.`
    }

    listarIntegrantes() {
        console.log("\n--- INTEGRANTES ---")

        if (this.#integrantes.length === 0) {
            console.log("Nenhum integrante cadastrado.")
            return
        }

        this.#integrantes.forEach((integrante, index) => {
            console.log(
                `${index + 1}. ${integrante.apresentar()}`
            )
        })
    }

    listarTarefas() {
        console.log("\n--- TAREFAS ---")

        if (this.#tarefas.length === 0) {
            console.log("Nenhuma tarefa cadastrada.")
            return
        }

        this.#tarefas.forEach((tarefa, index) => {
            const responsavel =
                tarefa.responsavel
                    ? tarefa.responsavel.nome
                    : "Sem responsável"

            console.log(
                `${index + 1}. ${tarefa.titulo} | ` +
                `Responsável: ${responsavel} | ` +
                `Status: ${tarefa.consultarStatus()}`
            )
        })
    }

    static consultarQuantidadeProjetos() {
        return Projeto.quantidadeProjetos
    }
}

module.exports = Projeto