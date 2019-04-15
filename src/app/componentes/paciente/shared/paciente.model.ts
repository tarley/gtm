export class Paciente {

    public constructor(
        public _id?: string,
        public nome?: string,
        public sexo?: string,
        public cpf?: number,
        public dataNascimento?: Date,
        public estadoCivil?: string,
        public anosEstudo?: number,
        public telefone?: string,
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
        public profissionalServico?: string,
        public lugarAtendimento?: string,
        public endereco?: String,
        public ubs?: String,
        public acessoServico?: String,
        public motivoConsulta?: String
    ) { }
}

export class HabitosVida {
    public constructor(
        public atividadeFisica?: string,
        public terapiaAlternativa?: string,
        public alerta?: string,
        public cigarro?: Cigarro,
        public bebidaAlcoolica?: BebidaAlcoolica

    ) {
        this.cigarro = new Cigarro();
        this.bebidaAlcoolica = new BebidaAlcoolica();
    }
}

export class Cigarro {
    public constructor(
        public fumante?: Boolean,
        public observacaoCigarro?: String
    ) { }
}

export class BebidaAlcoolica {
    public constructor(
        public consome?: Boolean,
        public observacaoBebidaAlcoolica?: String
    ) { }
}

export class DadosAntropometricos {
    public constructor(
        public peso?: String,
        public altura?: Number,
        public imc?: String
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