import { LightningElement, api, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import UserName from '@salesforce/schema/User.Name';
import AccountNameField from '@salesforce/schema/Account.Name';
export default class Hello extends LightningElement {
    @api recordId;
    userId = Id;
    //userName = UserName;
    get aId() {
        return '$recordId';
    }
    //@wire(getRecord, { recordId: '$recordId', fields: [AccountNameField] }) record;
    @wire(getRecord, { recordId: '$userId', fields: [UserName] }) record;
    
}