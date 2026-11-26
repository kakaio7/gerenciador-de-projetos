const Projeto = require("./Projeto")

class ProjetoEscolar extends Projeto {
    constructor(nome) {
        super(nome, "Escolar")
    }

    apresentarProjeto() {
        return `Projeto escolar: ${this.nome}`
    }
}

module.exports = ProjetoEscolar