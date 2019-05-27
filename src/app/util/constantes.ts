export class Constantes {

    public static configCalendar = {
        firstDayOfWeek: 0,
        dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: 'Hoje',
        clear: 'Limpar',
        dateFormat: 'dd/mm/yy'
    };

    public static sexo = [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Feminino', value: 'Feminino' },
        { label: 'Outro', value: 'Outro' }
    ]

    public static estadoCivil = [
        { label: 'Solteiro(a)', value: 'Solteiro(a)' },
        { label: 'Casado(a)', value: 'Casado(a)' },
        { label: 'Dirvociado(a)', value: 'Dirvociado(a)' },
        { label: 'Viuvo(a)', value: 'Viuvo(a)' },
    ]

    public static acessoServico = [
        { label: 'Encaminhamento pela Clínica de Odontologia da Newton', value: 'clincaOdontoNewton' },
        { label: 'Encaminhamento pela Clínica de Fisioterapia da Newton', value: 'clincaFisioterapiaNewton' },
        { label: 'Encaminhamento pela Clínica de Psicologia da Newton', value: 'clincaPsicologiaNewton' },
        { label: 'Encaminhamento pela pela UBS,', value: 'clincaUbs' },
        { label: 'Outro Encaminhamento,', value: 'outroEncaminhamento' },
    ]

    public static scf = [
        { label: 'Inicial', value: 'Inicial', descricao: 'Objetivos estabelecidos; início de nova farmacoterapia' },
        { label: 'Resolvido', value: 'Resolvido', descricao: 'Objetivos alcançados, término da farmacoterapia.' },
        { label: 'Estável', value: 'Estável', descricao: 'Objetivos alcançados, manutenção da farmacoterapia.' },
        { label: 'Melhora', value: 'Melhora', descricao: 'Progresso adequado, MANUTENÇÃO da farmacoterapia.' },
        { label: 'Melhora Parcial', value: 'Melhora Parcial', descricao: 'Progresso adequado, mas são necessários AJUSTES na farmacoterapia para alcançar os objetivos terapêuticos.' },
        { label: 'Sem Melhora', value: 'Sem Melhora', descricao: 'Sem progresso evidenciado até o momento, mas deve-se MANTER a mesma farmacoterapia para tentar obter um efeito melhor.' },
        { label: 'Piora', value: 'Piora', descricao: 'Piora da saúde enquanto recebia a farmacoterapia; são necessários AJUSTES na farmacoterapia.' },
        { label: 'Falha', value: 'Falha', descricao: 'Objetivos não alcançados apesar do uso de doses adequadas e pelo tempo adequado. É necessário DESCONTINUAR a farmacoterapia atual e iniciar farmacoterapia diferente.' },
        { label: 'Morte', value: 'Morte', descricao: 'Paciente faleceu durante o acompanhamento.' },
        { label: 'Sem Condições de Avaliar', value: 'Sem Condições de Avaliar', descricao: '' },
    ]

    public static prms = [
        {
            label: 'PRM 1 - Medicamento desnecessário', value: 'PRM 1 - Medicamento desnecessário', causas: [
                { label: 'Ausência de indicação clínica no momento', value: 'Ausência de indicação clínica no momento' },
                { label: 'Uso de múltiplos med quando apenas um(ns) resolveria(m)', value: 'Uso de múltiplos med quando apenas um(ns) resolveria(m)' },
                { label: 'Medicamento não é efetivo para a condição', value: 'Medicamento não é efetivo para a condição' },
                { label: 'Terapia não medicamentosa mais apropriada', value: 'Terapia não medicamentosa mais apropriada' },
                { label: 'Tratamento de reação que poderia ter sido prevenida', value: 'Tratamento de reação que poderia ter sido prevenida' },
                { label: 'Uso recreacional', value: 'Uso recreacional' },
            ]
        },
        {
            label: 'PRM 2 - Necessidade de medicamento', value: 'PRM 2 - Necessidade de medicamento', causas: [
                { label: 'Presença de uma condição clínica que requer o uso de meds', value: 'Presença de uma condição clínica que requer o uso de meds' },
                { label: 'Tratamento profilático necessário para reduzir risco de outro problema', value: 'Tratamento profilático necessário para reduzir risco de outro problema' },
                { label: 'Tratamento adicional/sinérgico necessário para obter efeito desejado', value: 'Tratamento adicional/sinérgico necessário para obter efeito desejado' },
            ]
        },
        {
            label: 'PRM 3 - Medicamento não é efetivo para a condição', value: 'PRM 3 - Medicamento não é efetivo para a condição', causas: [
                { label: 'O medicamento usado não é o mais efetivo para a condição tratada', value: 'O medicamento usado não é o mais efetivo para a condição tratada' },
                { label: 'A condição tratada é refratária ao medicamento usado', value: 'A condição tratada é refratária ao medicamento usado' },
                { label: 'O medicamento não efetivo para o transtorno', value: 'O medicamento não efetivo para o transtorno' },
                { label: 'Presença de contra indicação', value: 'Presença de contra indicação' },
            ]
        },
        {
            label: 'PRM 4 - Dose Baixa', value: 'PRM4 - Dose Baixa', causas: [
                { label: 'A dose é muito baixa para  produzir a resposta desejada', value: 'A dose é muito baixa para  produzir a resposta desejada' },
                { label: 'Intervalo entre doses maior que o necessário para se alcançar objetivos', value: 'Intervalo entre doses maior que o necessário para se alcançar objetivos' },
                { label: 'Uma interação reduz a quantidade disponível do fármaco', value: 'Uma interação reduz a quantidade disponível do fármaco' },
                { label: 'Duração do trat. menor que necessário para se obter o efeito desejado', value: 'Duração do trat. menor que necessário para se obter o efeito desejado' },
                { label: 'Administração incorreta', value: 'Administração incorreta' },
                { label: 'Armazenamento incorreto', value: 'Armazenamento incorreto' },
            ]
        },
        {
            label: 'PRM 5 - Reação adversa ao medicamento', value: 'PRM5 - Reação adversa ao medicamento', causas: [
                { label: 'O medicamento produz efeito indesejável que não é relacionado com a dose', value: 'O medicamento produz efeito indesejável que não é relacionado com a dose' },
                { label: 'O medicamento produz uma reação alérgica', value: 'O medicamento produz uma reação alérgica' },
                { label: 'O medicamento não é seguro (presença de fatores risco/contra indicação)', value: 'O medicamento não é seguro (presença de fatores risco/contra indicação)' },
                { label: 'Interação causa uma reação que não é dose relacionada', value: 'Interação causa uma reação que não é dose relacionada' },
                { label: 'Administração incorreta (dose administrada ou alterada muito rapidamente)', value: 'Administração incorreta (dose administrada ou alterada muito rapidamente)' },
            ]
        },
        {
            label: 'PRM 6 - Dose alta', value: 'PRM6 - Dose alta', causas: [
                { label: 'A dose é muito alta', value: 'A dose é muito alta' },
                { label: 'O intervalo entre as doses é menor que o recomendado', value: 'O intervalo entre as doses é menor que o recomendado' },
                { label: 'A duração do tratamento é maior que o necessário', value: 'A duração do tratamento é maior que o necessário' },
                { label: 'A interação causa uma reação dose relacionada', value: 'A interação causa uma reação dose relacionada' },
                { label: 'A dose do med foi administrada muito rapidamente', value: 'A dose do med foi administrada muito rapidamente' },
            ]
        },
        {
            label: 'PRM 7 - Não adesão', value: 'PRM7 - Não adesão', causas: [
                { label: 'O paciente não compreendeu as instruções', value: 'O paciente não compreendeu as instruções' },
                { label: 'O paciente prefere não utilizar o medicamento', value: 'O paciente prefere não utilizar o medicamento' },
                { label: 'O paciente esquece de utilizar o medicamento', value: 'O paciente esquece de utilizar o medicamento' },
                { label: 'O medicamento é muito caro para o paciente', value: 'O medicamento é muito caro para o paciente' },
                { label: 'O paciente não consegue engolir/administrar o med adequadamente', value: 'O paciente não consegue engolir/administrar o med adequadamente' },
                { label: 'O produto não está disponível para o paciente', value: 'O produto não está disponível para o paciente' },
            ]
        },
        {
            label: 'Sem PRM', value: 'Sem PRM', causas: [
                { label: 'Não se aplica', value: 'Não se aplica' },
            ]
        },
        {
            label: 'Definir no próximo atendimento', value: 'Definir no próximo atendimento', causas: [
                { label: 'Não se aplica', value: 'Não se aplica' },
            ]
        },
    ]

    public static resolvidoPrm = [
        {label: 'Sim', value: 'Sim'},
        {label: 'Não', value: 'Não'},
        {label: 'N/A', value: 'N/A'},
    ]

    public static ubs = [
        { label: 'Centro de Saúde Confisco', value: 'ubsConfisco' },
        { label: 'Centro de Saúde Dom Orione', value: 'ubsDomOrione' },
        { label: 'Centro de Saúde Trevo', value: 'ubsTrevo' },
        { label: 'Centro de Saúde Ouro Preto', value: 'ubsOuroPreto' }
    ]

    public static atividadeFisica = [
        { label: 'Nenhuma', value: 'nenhuma' },
        { label: 'Natação', value: 'natacao' },
        { label: 'Corrida', value: 'corrida' },
        { label: 'Musculação', value: 'musculacao' },
        { label: 'Caminhada', value: 'caminhada' }
    ]

}