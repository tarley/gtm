export class Paciente {

    public constructor(
        public nome: string,
        public sexo: string,
        public cpf: number,
        public dataNascimento: string,
        public estadoCivil: string,
        public anosEstudo: number,
        public telefone: string,
        public profissao: string
    ) {}
}