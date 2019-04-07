export class Paciente {

    public constructor(
        public nome: string,
        public sexo: string,
        public cpf: number,
        public dataNascimento: Date,
        public estadoCivil: string,
        public anosEstudo: number,
        public telefone: string,
        public profissao: string,
        public _id?: string,
    
        // public dadosComplementares: {
        //     profissionalServico: String,
        //     lugarAtendimento: String,
        // },
    
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