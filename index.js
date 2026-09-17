const prompt = require("prompt-sync")()

const { Lider, Integrante } = require("./Pessoa")
const Tarefa = require("./Tarefa")
const ProjetoFactory = require("./ProjetoFactory")
const Projeto = require("./Projeto")

console.log("=================================")
console.log("     GERENCIADOR DE PROJETOS")
console.log("=================================")

const nomeProjeto = prompt("Digite o nome do projeto: ")

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
    process.exit()
}

let projeto

try {
    projeto = ProjetoFactory.criarProjeto(
        tipoProjeto,
        nomeProjeto
    )
} catch (erro) {
    console.log(`Erro: ${erro.message}`)
    process.exit()
}

console.log("\nProjeto criado com sucesso!")
console.log(`Nome: ${projeto.nome}`)
console.log(`Tipo: ${projeto.tipo}`)

let opcao = ""

while (opcao !== "0") {

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

    opcao = prompt("\nEscolha uma opção: ")

    if (opcao === "1") {

        const novoNome = prompt(
            "\nDigite o nome do novo projeto: "
        )

        console.log("\nTipos de projeto:")
        console.log("1 - Trabalho")
        console.log("2 - Projeto escolar")

        const novoTipo = prompt("Escolha o tipo: ")

        let novoTipoProjeto

        if (novoTipo === "1") {
            novoTipoProjeto = "trabalho"
        } else if (novoTipo === "2") {
            novoTipoProjeto = "escolar"
        } else {
            console.log("Tipo de projeto inválido.")
            continue
        }

        try {

            projeto = ProjetoFactory.criarProjeto(
                novoTipoProjeto,
                novoNome
            )

            console.log("\nNovo projeto criado com sucesso!")
            console.log(`Nome: ${projeto.nome}`)
            console.log(`Tipo: ${projeto.tipo}`)

        } catch (erro) {
            console.log(`Erro: ${erro.message}`)
        }
    }

    else if (opcao === "2") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        console.log("\n1 - Líder")
        console.log("2 - Integrante")

        const tipoPessoa = prompt("Escolha o tipo: ")
        const nome = prompt("Digite o nome: ")

        let pessoa

        try {

            if (tipoPessoa === "1") {
                pessoa = new Lider(nome)
            } else if (tipoPessoa === "2") {
                pessoa = new Integrante(nome)
            } else {
                console.log("Tipo de pessoa inválido.")
                continue
            }

            console.log(
                projeto.adicionarIntegrante(pessoa)
            )

        } catch (erro) {
            console.log(`Erro: ${erro.message}`)
        }
    }

    else if (opcao === "3") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        const titulo = prompt(
            "Digite o título da tarefa: "
        )

        try {

            const tarefa = new Tarefa(titulo)

            console.log(
                projeto.adicionarTarefa(tarefa)
            )

        } catch (erro) {
            console.log(`Erro: ${erro.message}`)
        }
    }

    else if (opcao === "4") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        projeto.listarTarefas()

        if (projeto.tarefas.length === 0) {
            continue
        }

        const numeroTarefa = Number(
            prompt("\nDigite o número da tarefa: ")
        )

        projeto.listarIntegrantes()

        if (projeto.integrantes.length === 0) {
            continue
        }

        const nomePessoa = prompt(
            "\nDigite o nome do responsável: "
        )

        console.log(
            projeto.atribuirTarefa(
                numeroTarefa,
                nomePessoa
            )
        )
    }

    else if (opcao === "5") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        projeto.listarTarefas()

        if (projeto.tarefas.length === 0) {
            continue
        }

        const numero = Number(
            prompt(
                "\nDigite o número da tarefa concluída: "
            )
        )

        console.log(
            projeto.concluirTarefa(numero)
        )
    }

    else if (opcao === "6") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        projeto.listarIntegrantes()
    }

    else if (opcao === "7") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        projeto.listarTarefas()
    }

    else if (opcao === "8") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
            continue
        }

        const nomeProjetoConcluido = projeto.nome

        projeto = null

        console.log(
            `\nProjeto "${nomeProjetoConcluido}" concluído com sucesso!`
        )
    }

    else if (opcao === "9") {

        console.log(
            `\nQuantidade de projetos criados: ` +
            `${Projeto.consultarQuantidadeProjetos()}`
        )
    }

    else if (opcao === "10") {

        if (!projeto) {
            console.log("\nNenhum projeto ativo.")
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
    }

    else if (opcao !== "0") {

        console.log("\nOpção inválida.")
    }
}

console.log("\n=================================")
console.log("      SISTEMA ENCERRADO")
console.log("=================================")