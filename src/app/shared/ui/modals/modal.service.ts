import { Injectable } from '@angular/core';

import { SuiModalService, ModalSize } from 'ng2-semantic-ui';

import { MessageModal } from './message-modal/message-modal';
import { QuestionModal } from './question-modal/question-modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private semanticModal:SuiModalService) {}

  public showMessage(title:string, message:string){
    return this.semanticModal.open(new MessageModal(title, message, ModalSize.Normal));
  }
  public showQuestion(title:string, question:string){
    return this.semanticModal.open(new QuestionModal(title, question, ModalSize.Normal));
  }
}
