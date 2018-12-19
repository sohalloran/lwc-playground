import { LightningElement, api } from 'lwc';

export default class Page extends LightningElement {
    @api flexipageRegionWidth; 
    @api standalone = false;
}