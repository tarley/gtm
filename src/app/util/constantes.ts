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
}