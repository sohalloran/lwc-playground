import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord, updateRecord, deleteRecord } from 'lightning/uiRecordApi';
import { getListUi } from 'lightning/uiListApi';
import { refreshApex, getSObjectValue } from '@salesforce/apex';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class Account extends LightningElement {

    form = {};
    @track accounts;
    @track error;

    wiredAccounts;

    @wire(getAccounts) 
    wiredItems(value) {
        this.wiredAccounts = value;
        if (value.error) {
            this.error = value.error;
        } else if (value.data) {
            this.setAccounts(value.data);
        }
    }

    setAccounts(value){
        this.accounts = value;
    }
    
    handleFormChange(e) {
        const field = e.target.dataset.fieldName;
        let value = e.detail.value.trim();
        this.form[field] = value;
    }
    
    add() {
        const fields = this.form;
        const record = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields,
        };
        createRecord(record).then(()=>{
            return refreshApex(this.wiredAccounts);
        }).catch(()=>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'An error has occurred',
                        message: "Couldn't add account",
                        variant: 'error',
                    }),
                );
        });
    }  

    del(e) {
        e.preventDefault();
        const id = e.target.dataset.key;  
        deleteRecord(id).then(()=>{
            return refreshApex(this.wiredAccounts);
        }).catch(()=>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'An error has occurred',
                        message: "Couldn't delete account",
                        variant: 'error',
                    }),
                );
        });        
    } 
}