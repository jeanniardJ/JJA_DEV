import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log('Navigation controller connected');
    }

    toggle(event) {
        event.preventDefault();
        const target = event.currentTarget;
        const submenu = target.nextElementSibling;

        if (submenu) {
            submenu.classList.toggle('d-none');
        }
    }
}
