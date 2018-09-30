import {ComponentModalConfig, ModalSize} from "ng2-semantic-ui"

import {QuestionModalComponent, IQuestionModalContext} from './question-modal.component';

export class QuestionModal extends ComponentModalConfig<IQuestionModalContext, void, void> {
    constructor(title:string, question:string, size = ModalSize.Small) {
        super(QuestionModalComponent, { title, question });

        this.isClosable = true;
        this.transitionDuration = 200;
        this.size = size;
    }
}
