export class BotaoTabela {

    public constructor(
        public nome: string,
        public icone: string,
        public label?: string,
        public varControlaVisualizacao?: string,
        public inverteVarControlaVisualizacao?: boolean,
        public funcControlaExibicao?: Function,

    ) {}
}