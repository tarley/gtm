export class MensagemUtil {

    public static REGISTRO_SALVO = 'Registro Salvo!';
    public static ERRO_SALVAR = 'Erro ao Salvar Registro!';
    public static FORMULARIO_INVALIDO = 'O Formulário Está Inválido!';
    public static ERRO_BUSCAR = 'Erro ao Buscar Registro!';
    public static EXCLUIR_SUCESSO = 'Registro excluído com sucesso!';
    public static EXCLUIR_ERRO = 'Erro ao Excluir Registro!';
    public static CONFIRMA_EXCLUIR_REGISTRO = 'Deseja realmente excluir o registro?';
    public static CARREGANDO_REGISTRO = 'Carregando registros...';
    public static SALVANDO_REGISTRO = 'Salvando registro...';

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