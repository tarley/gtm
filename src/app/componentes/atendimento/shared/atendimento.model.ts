export class Atendimento {
    constructor(
        public idPaciente?: string,
        public nomePaciente?: string,
        public dataAtendimento?: Date,
        public quadroGeral?: string,
        public doencas?: Doenca[],
        public planoCuidado?: PlanoCuidado
    ) {
        this.doencas = new Array<Doenca>();
        this.planoCuidado = new PlanoCuidado();
    }
}

export class Doenca {
    constructor(
        public nome: string,
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
        public prm?: PRM,
        public causaPrm?: string,
    ) {}
}

export class PlanoCuidado {
    public constructor(
        public objetivoTerapeutico?: string,
        public conduta?: string,
        public condutas?: Conduta[],
        public scf?: string,
        public dataResultado?: Date,
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

// Prm 1

// "Ausência de indicação clínica no momento"
// "Uso de múltiplos med quando apenas um (ns) resolveria (m)"
// "Medicamento não é efetivo para a condição "
// "Terapia não medicamentosa mais apropriada"
// "Tratamento de reação que poderia ter sido prevenida"
// "Uso recreacional"
        
// Prm 2

// "Presença de uma condição clínica que requer o uso de meds"
// "Tratamento profilático necessário para reduzir risco de outro problema"
// "Tratamento adicional/sinérgico necessário para obter efeito desejado"
        
// Prm 3

// "O medicamento usado não é o mais efetivo para a condição tratada"
// "A condição tratada é refratária ao medicamento usado"
// "O medicamento não efetivo para o transtorno"
// "A forma farmacêutica/produto é inadequada"
// "Presença de contra indicação"

// Prm4
        
// "A dose é muito baixa para  produzir a resposta desejada"
// "Intervalo entre doses maior que o necessário para se alcançar objetivos"
//  "Uma interação reduz a quantidade disponível do fármaco"
// "Duração do trat. menor que necessário para se obter o efeito desejado"
// "Administração incorreta"
// "Armazenamento incorreto"

// Prm5
        
// "O medicamento produz efeito indesejável que não é relacionado com a dose"
// "O medicamento produz uma reação alérgica"
// "O medicamento não é  seguro (presença de fatores risco/contra indicação)"
// "Interação causa uma reação que não é dose relacionada"
// "Administração incorreta (dose administrada ou alterada muito rapidamente"
        
// Prm6

// "A dose é muito alta"
// "O intervalo entre as doses é menor que o recomendado"
// "A duração do tratamento é maior que o necessário"
// "A interação causa uma reação dose relacionada"
// "A dose do med foi administrada muito rapidamente"

// Prm7
        
// "O paciente não compreendeu as instruções"
// "O paciente prefere não utilizar o medicamento"
// "O paciente esquece de utilizar o medicamento"
// "O medicamento é muito caro para o paciente"
// "O paciente não consegue engolir/administrar o med adequadamente"
// "O produto não está disponível para o paciente"

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

