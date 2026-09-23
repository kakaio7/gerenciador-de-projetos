const prompt = require("prompt-sync")()

const { Lider, Integrante } = require("./Pessoa")
const Tarefa = require("./Tarefa")
const ProjetoFactory = require("./ProjetoFactory")
const Projeto = require("./Projeto")

console.log("=================================")
console.log("     GERENCIADOR DE PROJETOS")
console.log("=================================")

function criarProjeto() {

    const nome = prompt("Digite o nome do projeto: ")

    console.log("\nTipos de projeto:")
    console.log("1 - Trabalho")
    console.log("2 - Projeto escolar")

    const tipo = prompt("Escolha o tipo: ")

    let tipoProjeto

    if (tipo === "1") {
        tipoProjeto = "trabalho"
    } else if (tipo === "2") {
        tipoProjeto = "escolar"
    } else {
        console.log("Tipo de projeto inválido.")
        return null
    }

    const projeto = ProjetoFactory.criarProjeto(
        tipoProjeto,
        nome
    )

    if (!projeto) {
        console.log("Não foi possível criar o projeto.")
        return null
    }

    console.log("\nProjeto criado com sucesso!")
    console.log(`Nome: ${projeto.nome}`)
    console.log(`Tipo: ${projeto.tipo}`)

    return projeto
}

function adicionarIntegrante(projeto) {

    console.log("\n1 - Líder")
    console.log("2 - Integrante")

    const tipo = prompt("Escolha o tipo: ")
    const nome = prompt("Digite o nome: ")

    let pessoa

    if (tipo === "1") {
        pessoa = new Lider(nome)
    } else if (tipo === "2") {
        pessoa = new Integrante(nome)
    } else {
        console.log("Tipo inválido.")
        return
    }

    console.log(
        projeto.adicionarIntegrante(pessoa)
    )
}

function adicionarTarefa(projeto) {

    const titulo = prompt(
        "Digite o título da tarefa: "
    )

    const tarefa = new Tarefa(titulo)

    console.log(
        projeto.adicionarTarefa(tarefa)
    )
}

function verificarProjeto(projeto) {

    if (!projeto) {
        console.log("\nNenhum projeto ativo.")
        return false
    }

    return true
}

function mostrarMenu() {

    console.log("\n=================================")
    console.log("              MENU")
    console.log("=================================")

    console.log("1 - Adicionar projeto")
    console.log("2 - Adicionar integrante")
    console.log("3 - Adicionar tarefa")
    console.log("4 - Atribuir tarefa")
    console.log("5 - Concluir tarefa")
    console.log("6 - Listar integrantes")
    console.log("7 - Listar tarefas")
    console.log("8 - Concluir projeto")
    console.log("9 - Ver quantidade de projetos")
    console.log("10 - Informações do projeto")
    console.log("0 - Sair")
}

let projeto = criarProjeto()

if (!projeto) {
    process.exit()
}

let opcao = ""

while (opcao !== "0") {

    mostrarMenu()

    opcao = prompt("\nEscolha uma opção: ")

    if (opcao === "1") {

        const novoProjeto = criarProjeto()

        if (novoProjeto) {
            projeto = novoProjeto
        }

    } else if (opcao === "2") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        adicionarIntegrante(projeto)

    } else if (opcao === "3") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        adicionarTarefa(projeto)

    } else if (opcao === "4") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        projeto.listarTarefas()

        if (projeto.tarefas.length === 0) {
            continue
        }

        const numero = Number(
            prompt("\nDigite o número da tarefa: ")
        )

        projeto.listarIntegrantes()

        if (projeto.integrantes.length === 0) {
            continue
        }

        const nome = prompt(
            "\nDigite o nome do responsável: "
        )

        console.log(
            projeto.atribuirTarefa(numero, nome)
        )

    } else if (opcao === "5") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        projeto.listarTarefas()

        if (projeto.tarefas.length === 0) {
            continue
        }

        const numero = Number(
            prompt("\nDigite o número da tarefa concluída: ")
        )

        console.log(
            projeto.concluirTarefa(numero)
        )

    } else if (opcao === "6") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        projeto.listarIntegrantes()

    } else if (opcao === "7") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        projeto.listarTarefas()

    } else if (opcao === "8") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        const nome = projeto.nome

        projeto = null

        console.log(
            `\nProjeto "${nome}" concluído com sucesso!`
        )

    } else if (opcao === "9") {

        console.log(
            `\nQuantidade de projetos criados: ` +
            `${Projeto.consultarQuantidadeProjetos()}`
        )

    } else if (opcao === "10") {

        if (!verificarProjeto(projeto)) {
            continue
        }

        console.log("\n--- INFORMAÇÕES DO PROJETO ---")
        console.log(`Nome: ${projeto.nome}`)
        console.log(`Tipo: ${projeto.tipo}`)
        console.log(
            `Integrantes: ${projeto.integrantes.length}`
        )
        console.log(
            `Tarefas: ${projeto.tarefas.length}`
        )

        console.log(
            projeto.apresentarProjeto()
        )

    } else if (opcao !== "0") {

        console.log("\nOpção inválida.")
    }
}

console.log("\n=================================")
console.log("      SISTEMA ENCERRADO")
console.log("=================================")