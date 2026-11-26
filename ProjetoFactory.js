const ProjetoEscolar = require("./ProjetoEscolar")
const ProjetoTrabalho = require("./ProjetoTrabalho")

class ProjetoFactory {
    static criarProjeto(tipo, nome) {
        if (typeof tipo !== "string") {
            return null
        }

        const tipos = {
            trabalho: ProjetoTrabalho,
            escolar: ProjetoEscolar
        }
        const chaveTipo = tipo.trim().toLowerCase()

        if (!Object.prototype.hasOwnProperty.call(tipos, chaveTipo)) {
            return null
        }

        const ClasseProjeto = tipos[chaveTipo]
        return ClasseProjeto ? new ClasseProjeto(nome) : null
    }
}

module.exports = ProjetoFactory