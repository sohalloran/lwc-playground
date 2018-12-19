import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Pubsubright extends LightningElement {
    @wire(CurrentPageReference) pageRef;
    @track num_right=0;
    dec = () => --this.num_right;

    connectedCallback() {
        registerListener('numChange', this.handleNumChange, this);
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    handleNumChange(num) {
        this.num_right = num;
    }
}