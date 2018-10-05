import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModalComponent } from './ui/modals/message-modal/message-modal.component';
import { QuestionModalComponent } from './ui/modals/question-modal/question-modal.component';

import { EqualValidator } from './ui/validators/equal-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents:[
       MessageModalComponent, QuestionModalComponent
   ],
  declarations: [MessageModalComponent, QuestionModalComponent, EqualValidator]
})
export class SharedModule { }
