import './index.css';
import { Tooltip } from './tooltip';

const button = document.querySelector('.btn');

let errorMessage = new Tooltip();

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!document.querySelector('.form-error')) {
        errorMessage.showTooltip(button);
    } else {
        errorMessage.removeTooltip();
    }
})