import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
    static values = { count: Number }
    static targets = ['output']

    connect() {
        this.outputTarget.textContent = this.countValue
    }
}
