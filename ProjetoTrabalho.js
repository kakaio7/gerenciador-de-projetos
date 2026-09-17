const Projeto = require("./Projeto")

class ProjetoTrabalho extends Projeto {
    constructor(nome) {
        super(nome)
        this.tipo = "Trabalho"
    }

    apresentarProjeto() {
        return `Projeto de trabalho: ${this.nome}`
    }
}

module.exports = ProjetoTrabalho