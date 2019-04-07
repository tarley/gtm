import { Injectable } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { MensagemUtil } from './mensagem-util';

@Injectable({
    providedIn: 'root'
})
export class MessageServiceUtil {

    public constructor(private messageService: MessageService) {}

    public geraMensagensErro(respostaErro: HttpErrorResponse, mensagemPadrao: string) {
        if(respostaErro.error && respostaErro.error.errors) {
            respostaErro.error.errors.forEach(error => {
                this.messageService.add(MensagemUtil.criaMensagemErro(error.msg));
            });
        } else {
            this.messageService.add(MensagemUtil.criaMensagemErro(mensagemPadrao));
        }
    }

    public add(message: Message) {
        this.messageService.add(message);
    }

}