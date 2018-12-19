import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Toast extends LightningElement {

    showNotification() {
        const evt = new ShowToastEvent({
            title: 'toast example',
            message: 'some message!',
            mode: 'sticky',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

}