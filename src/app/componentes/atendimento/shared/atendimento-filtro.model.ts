export class AtendimentoFiltro {

    public constructor(
        public criterioBusca?: string,
        public cpf?: string,
        public nomePaciente?: string,
        public dataInicial?: Date,
        public dataFinal?: Date 
    ) {}
}