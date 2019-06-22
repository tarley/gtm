export class BotaoTabela {

    public constructor(
        public nome: string,
        public icone: string,
        public label?: string,
        public varControlaDisable?: string,
        public inverteVarControlaDisable?: boolean,
        public funcControlaExibicao?: Function,

    ) {}
}