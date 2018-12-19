import { createElement } from 'lwc';
import EasyTest from 'c/easytest';
describe('easytest', () => {
    it('displays expected header text', () => {
        const element = createElement('c-easytest', { is: EasyTest });
        document.body.appendChild(element);
        const header = element.shadowRoot.querySelector('h1');
        //const header = element.querySelector('h1');
        expect(header.textContent).toBe('hello');
        // Available "expect" APIs can be found here: 
        // https://facebook.github.io/jest/docs/en/expect.html
    });
});