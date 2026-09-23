const Projeto = require("./Projeto")

class ProjetoFactory {

    static criarProjeto(tipo, nome) {

        if (tipo === "trabalho") {
            return new Projeto(nome, "Trabalho")
        }

        if (tipo === "escolar") {
            return new Projeto(nome, "Projeto Escolar")
        }

        return null
    }
}

module.exports = ProjetoFactory