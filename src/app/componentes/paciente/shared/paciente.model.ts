export class Paciente {

    public constructor(
        public _id?: string,
        public ativo?: boolean,
        public nome?: string,
        public sexo?: string,
        public cpf?: string,
        public dataNascimento?: Date,
        public estadoCivil?: string,
        public anosEstudo?: number,
        public telefone?: number,
        public profissao?: string,

        public dadosComplementares?: DadosComplementares,
        public habitosVida?: HabitosVida,
        public dadosAntropometricos?: DadosAntropometricos,
        public rotina?: Rotina

    ) {
        this.dadosComplementares = new DadosComplementares()
        this.habitosVida = new HabitosVida()
        this.dadosAntropometricos = new DadosAntropometricos()
        this.rotina = new Rotina()
    }
}

export class DadosComplementares {
    public constructor(
        public informacoesGerais?: string,
        public motivoConsulta?: string,
        public profissionalServico?: string,
        public lugarAtendimento?: string,
        public ubs?: string,
        public acessoServico?: string,
        public endereco?: string,
    ) { }
}

export class HabitosVida {
    public constructor(
        public terapiaAlternativa?: string,
        public alertas?: string,
        public atividadeFisica?: AtividadeFisica,
        public cigarro?: Cigarro,
        public bebidaAlcoolica?: BebidaAlcoolica

    ) {
        this.cigarro = new Cigarro();
        this.bebidaAlcoolica = new BebidaAlcoolica();
        this.atividadeFisica = new AtividadeFisica();
    }
}

export class AtividadeFisica {
    public constructor (
        public pratica?: Boolean,
        public observacaoAtividadeFisica?: string
    ) { }
}

export class Cigarro {
    public constructor(
        public fumante?: Boolean,
        public observacaoCigarro?: string
    ) { }
}

export class BebidaAlcoolica {
    public constructor(
        public consome?: Boolean,
        public observacaoBebidaAlcoolica?: string
    ) { }
}

export class DadosAntropometricos {
    public constructor(
        public peso?: number,
        public altura?: number,
        public imc?: number
    ) { }
}

export class Rotina {
    public constructor(
        public acorda?: String,
        public cafedaManha?: String,
        public lanchedaManha?: String,
        public almoco?: String,
        public lanchedaTarde?: String,
        public jantar?: String,
        public dorme?: String,
        public observacaoRotina?: String
    ) { }
}