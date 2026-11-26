const Projeto = require("./Projeto")

class ProjetoTrabalho extends Projeto {
    constructor(nome) {
        super(nome, "Trabalho")
    }

    apresentarProjeto() {
        return `Projeto de trabalho: ${this.nome}`
    }
}

module.exports = ProjetoTrabalho