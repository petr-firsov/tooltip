export class Tooltip {
    showTooltip(element) {
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('form-error');
        document.body.appendChild(tooltipElement);

        tooltipElement.insertAdjacentHTML('afterbegin', "<div class='tooltip-title'>Popover title</div><div class='tooltip-text'>And here's some amazing content. It's very engaging. Right?</div>");

        const { left, top } = element.getBoundingClientRect();

        tooltipElement.style.left = left;
        tooltipElement.style.bottom = top + 60 + 'px';
    }

    removeTooltip() {
        const tooltipElement = document.querySelector('.form-error');
        tooltipElement.remove();
    }
}