export class MensagemUtil {

    public static REGISTRO_SALVO = 'Registro Salvo!';
    public static ERRO_SALVAR = 'Erro ao Salvar Registro!';
    public static FORMULARIO_INVALIDO = 'O Formulário Está Inválido!';
    public static ERRO_BUSCAR = 'Erro ao Buscar Registro!';
    public static EXCLUIR_SUCESSO = 'Registro excluído com sucesso!';
    public static EXCLUIR_ERRO = 'Erro ao Excluir Registro!';
    public static CONFIRMA_EXCLUIR_REGISTRO = 'Deseja realmente excluir o registro?';
    public static CONFIRMA_FINALIZAR_ATENDIMENTO = 'Deseja realmente finalizar o atendimento?';
    public static CARREGANDO_REGISTRO = 'Carregando Registros...';
    public static SALVANDO_REGISTRO = 'Salvando Registro...';
    public static FILTRANDO_REGISTRO = 'Filtrando Registros...';
    public static FINALIZANDO_ATENDIMENTO = 'Finalizando atendimento...';
    public static ERRO_FILTRAR = 'Erro ao Filtrar Registros!';
    public static ATENDIMENTO_FINALIZADO = 'Atendimento Finalizado com Sucesso!';
    public static ERRO_FINALIZAR_ATENDIMENTO = 'Erro ao finalizar atendimento!';
    public static CONF_SENHA_INVALIDA = 'Por favor, verifique se a senha e confimação são iguais.';

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