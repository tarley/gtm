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

    ) {
        dadosComplementares = new DadosComplementares()
        habitosVida = new HabitosVida()
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
    ) {}
}

export class HabitosVida {
    public constructor (
        public atividadeFisica?: string,
        public terapiaAlternativa?: string,
        public alerta?: string,
        public cigarro?: Cigarro,
        public bebidaAlcoolica?: BebidaAlcoolica

    ) {}
}

export class Cigarro {
    public constructor(
        public fumante?: Boolean,
        public observacao?: String
    ) {}
}

export class BebidaAlcoolica {
    public constructor(
        public consume: Boolean,
        public observacao: String
    ) {}
}