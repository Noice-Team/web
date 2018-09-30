import { Component } from '@angular/core';

import {SuiModal} from "ng2-semantic-ui"

export interface IMessageModalContext {
    title:string;
    message:string;
}

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {

  constructor(public modal:SuiModal<IMessageModalContext, void, void>) {}
}
