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
    
        // public habitosVida: {
        //     atividadeFisica: String,
        //     terapiaAlternativa: String,
        //     alerta: String,
    
        //     cigarro: {
        //         fumante: Boolean,
        //         observacao: String
        //     },
    

        //     bebidasAlcolicas: {
        //         consume: Boolean,
        //         observacao: String
        //     }        
        // }

    ) {}
}

export class DadosComplementares {
    public constructor(
        public profissionalServico?: String,
        public lugarAtendimento?: String,
    ) {}
}