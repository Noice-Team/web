import { Component } from '@angular/core';

import {SuiModal} from "ng2-semantic-ui"

export interface IQuestionModalContext {
    title:string;
    question:string;
}

@Component({
  selector: 'app-message-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent {

  constructor(public modal:SuiModal<IQuestionModalContext, void, void>) {}
}
