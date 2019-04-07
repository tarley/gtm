export class Atendimento {
    constructor(
        public idPaciente?: string,
        public nomePaciente?: string,
        public dataAtendimento?: Date,
        public quadroGeral?: string,
        public doencas?: Doenca[],
    ) {
        doencas = [];
    }
}

export class Doenca {
    constructor(
        public nome: string,
        public descricao?: string,
        public farmacoterapias?: Farmacoterapia[],
        public planoCuidado?: PlanoCuidado
    ) {
        farmacoterapias = [];
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
    ) {}
}

export class PlanoCuidado {
    public constructor(
        public objetivoTerapeutico?: string,
        public prm ?: PRM,
        public causaPrm?: string,
        public condutas?: Conduta[],
        public scf?: string,
        public dataResultado?: Date,
        public outrasCondutas?: string
    ) {
        condutas = [];
    }
}

export class Conduta {
    public constructor(
        public medicamento?: string,
        public conduta?: string,
    ) {}
}

export class PRM {
    public static prms = [
        {label: 'PRM 1 - Medicamento desnecessário', value: 'PRM1', causas: []},
        {label: 'PRM 2 - Necessidade de medicamento', value: 'PRM2', causas: []},
        {label: 'PRM 3 - Medicamento não é efetivo para a condição', value: 'PRM3', causas: []},
        {label: 'PRM 4 – Dose', value: 'PRM4', causas: []},
        {label: 'PRM 5 - Reação adversa ao medicamento', value: 'PRM5', causas: []},
        {label: 'PRM 6 - Dose alta', value: 'PRM6', causas: []},
        {label: 'PRM 7 - Não adesão', value: 'PRM7', causas: []},
    ]
}

export class SCF {
    public static scf = [
        {label: 'Estável', value: 'Estável'},
        {label: 'Falha', value: 'Falha'},
        {label: 'Inicial', value: 'Inicial'},
        {label: 'Melhora', value: 'Melhora'},
        {label: 'Melhora Parcial', value: 'Melhora Parcial'},
        {label: 'Morte', value: 'Morte'},
        {label: 'Piora', value: 'Piora'},
        {label: 'Resolvido', value: 'Resolvido'},
        {label: 'Sem Melhora', value: 'Sem Melhora'},
        {label: 'Sem Condições de Avaliar', value: 'Sem Condições de Avaliar'},
    ]
    
}

