import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class Wire extends LightningElement {
    @api recordId;
    @track error;
    @track record;
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD] }) wired({error, data}) {
        if(data) {
            this.record = data;
        } else if (error) {
            this.error=error;
        }
    }

    get name() {
        return getFieldValue(this.record, NAME_FIELD);
    }    
}