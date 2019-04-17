export class Atendimento {
    constructor(
        public _id?: string,
        public idPaciente?: string,
        public nomePaciente?: string,
        public dataAtendimento?: Date,
        public quadroGeral?: string,
        public doencas?: Doenca[],
        public planoCuidado?: PlanoCuidado,
        public dataResultado?: Date,
    ) {
        this.doencas = new Array<Doenca>();
        this.planoCuidado = new PlanoCuidado();
    }
}

export class Doenca {
    constructor(
        public nome?: string,
        public descricao?: string,
        public farmacoterapias?: Farmacoterapia[],
    ) {
        this.farmacoterapias = new Array<Farmacoterapia>();
    }
}

export class Farmacoterapia {
    public constructor(
        public medicamento?: string,
        public posologia?: string,
        public efetividade?: string,
        public tempoUso?: string,
        public seguranca?: string,
        public dificuldadeUso?: string,
        public prm?: string,
        public causaPrm?: string,
        public conduta?: string
    ) {}
}

export class PlanoCuidado {
    public constructor(
        public objetivoTerapeutico?: string,
        public condutas?: Conduta[],
        public scf?: string,
        public outrasCondutas?: string
    ) {
        this.condutas = new Array<Conduta>();
    }
}

export class Conduta {
    public constructor(
        public medicamento?: string,
        public conduta?: string,
    ) {}
}
