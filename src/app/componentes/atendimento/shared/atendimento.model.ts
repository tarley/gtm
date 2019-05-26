export class Atendimento {
    constructor(
        public _id?: string,
        public idPaciente?: string,
        public nomePaciente?: string,
        public dataAtendimento?: Date,
        public quadroGeral?: string,
        public doencas?: Doenca[],
        public finalizado?: Boolean
    ) {
        this.doencas = new Array<Doenca>();
    }
}

export class Doenca {
    constructor(
        public nome?: string,
        public descricao?: string,
        public farmacoterapias?: Farmacoterapia[],
        public planoCuidado?: PlanoCuidado,
        public dataResultado?: Date,
    ) {
        this.farmacoterapias = new Array<Farmacoterapia>();
        this.planoCuidado = new PlanoCuidado();
    }
}

export class Farmacoterapia {
    public constructor(
        public medicamento?: string,
        public posologiaRelatada?: string,
        public posologiaPrescrita?: string,
        public efetividade?: string,
        public tempoUso?: string,
        public seguranca?: string,
        public dificuldadeUso?: string,
        public prm?: Prm,
        public conduta?: string,
        public experienciaSubjetiva?: string 
    ) {
        this.prm = new Prm();
    }
}

export class PlanoCuidado {
    public constructor(
        public objetivoTerapeutico?: string,
        public condutas?: Conduta[],
        public scf?: string,
        public observacaoScf?: string,
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

export class Prm {
    public constructor(
        public prm?: string,
        public causa?: string,
        public resolvido?: string,
    ) {}
}
