import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModalComponent } from './ui/modals/message-modal/message-modal.component';
import { QuestionModalComponent } from './ui/modals/question-modal/question-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents:[
       MessageModalComponent, QuestionModalComponent
   ],
  declarations: [MessageModalComponent, QuestionModalComponent]
})
export class SharedModule { }
