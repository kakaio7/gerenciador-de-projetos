const ProjetoTrabalho = require("./ProjetoTrabalho")
const ProjetoEscolar = require("./ProjetoEscolar")

class ProjetoFactory {
    static criarProjeto(tipo, nome) {

        if (tipo === "trabalho") {
            return new ProjetoTrabalho(nome)
        }

        if (tipo === "escolar") {
            return new ProjetoEscolar(nome)
        }

        throw new Error("Tipo de projeto inválido.")
    }
}

module.exports = ProjetoFactory