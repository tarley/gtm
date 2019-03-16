export class MensagemUtil {

    public static REGISTRO_SALVO = 'Registro Salvo!';
    public static ERRO_SALVAR = 'Erro ao Salvar Registro!';
    public static FORMULARIO_INVALIDO = 'O Formulário Está Inválido!';

    public static criaMensagemSucesso(mensagem: string) {
        return {severity:'success', summary:'Sucesso!', detail: mensagem};
    }

    public static criaMensagemAviso(mensagem: string) {
        return {severity:'warn', summary:'Atenção!', detail: mensagem};
    }

    public static criaMensagemErro(mensagem: string) {
        return {severity:'error', summary:'Ocorreu um erro!', detail: mensagem};
    }
}