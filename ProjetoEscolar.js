const Projeto = require("./Projeto")

class ProjetoEscolar extends Projeto {
    constructor(nome) {
        super(nome)
        this.tipo = "Escolar"
    }

    apresentarProjeto() {
        return `Projeto escolar: ${this.nome}`
    }
}

module.exports = ProjetoEscolar