export class Usuario {

    public constructor(
        public _id?: string,
        public nome?: string,
        public email?: string,
        public perfil?: string,
        public senha?: string,
        public confSenha?: string,
    ) {}
}