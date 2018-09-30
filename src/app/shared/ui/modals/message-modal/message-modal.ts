import {ComponentModalConfig, ModalSize} from "ng2-semantic-ui"

import {MessageModalComponent, IMessageModalContext} from './message-modal.component';

export class MessageModal extends ComponentModalConfig<IMessageModalContext, void, void> {
    constructor(title:string, message:string, size = ModalSize.Small) {
        super(MessageModalComponent, { title, message });

        this.isClosable = true;
        this.transitionDuration = 200;
        this.size = size;
    }
}
