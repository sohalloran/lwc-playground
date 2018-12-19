import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Pubsubleft extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    @track num_left = 0;
    inc = () => {
        ++this.num_left;
        fireEvent(this.pageRef, 'numChange', this.num_left);
    }
}