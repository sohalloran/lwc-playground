import { LightningElement, wire, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class nav extends NavigationMixin(LightningElement) {
    @track url;
    connectedCallback() {
        this.accountHomePageRef = {
            type: "standard__objectPage",
            attributes: {
                "objectApiName": "Account",
                "actionName": "home"
            }
        };
        this[NavigationMixin.GenerateUrl](this.accountHomePageRef)
            .then(url => this.url = url);
    }  
    handleClick(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this[NavigationMixin.Navigate](this.accountHomePageRef);
    }      
    go() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home',
            },
        });
    }
}