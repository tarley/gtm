import { Injectable } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { MensagemUtil } from './mensagem-util';

@Injectable({
    providedIn: 'root'
})
export class MessageServiceUtil {

    public constructor(private messageService: MessageService) { }

    public geraMensagensErro(respostaErro: HttpErrorResponse, mensagemPadrao: string) {
        if (respostaErro) {
            if (respostaErro.error.errors) {
                respostaErro.error.errors.forEach(error => {
                    this.messageService.add(MensagemUtil.criaMensagemErro(error.msg));
                });
            } else if (respostaErro.error.code == 11000) {
                const prefixoMsg = '{ : "';
                const sufixoMsg = '" }'
                const erro = respostaErro.error;
                const msgErro: string = erro.errmsg.substring(erro.errmsg.indexOf(prefixoMsg), erro.errmsg.indexOf(sufixoMsg)).replace(prefixoMsg, '');
                this.messageService.add(MensagemUtil.criaMensagemErro(`O valor "${msgErro}" já existe para outro registro`));
            }
        } else {
            this.messageService.add(MensagemUtil.criaMensagemErro(mensagemPadrao));
        }

    }

    public add(message: Message) {
        this.messageService.add(message);
    }

}