import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModalComponent } from './ui/modals/message-modal/message-modal.component';
import { QuestionModalComponent } from './ui/modals/question-modal/question-modal.component';

import { EqualValidator } from './ui/validators/equal-validator.directive';
import { LoadingComponent } from './ui/loading/loading.component';
import { LoadingDirective } from './ui/loading/loading.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents:[
       MessageModalComponent, QuestionModalComponent, LoadingComponent
   ],
  declarations: [MessageModalComponent, QuestionModalComponent, EqualValidator, LoadingComponent, LoadingDirective],
  exports: [EqualValidator, LoadingDirective]
})
export class SharedModule { }
