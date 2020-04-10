let mrLee
class StatusAccount {
    constructor(accountValue) {
        this.accountValue = accountValue
    }
    get finalValue() {
        const finalValue = formatNumber(this.accountValue)
        return ` ${finalValue} ¥ `
    }
    saveStatusAccount() {
        localStorage.setItem('status-account', JSON.stringify(this.accountValue))
    }
    loadStatusAccount() {
        const statusAccountJSON = localStorage.getItem('status-account')
        try {
            this.accountValue = (statusAccountJSON ? JSON.parse(statusAccountJSON) : this.accountValue)
        } catch (error) {
            this.accountValue
        }
    }
    calculateStatusAccount(transferValue) {
        if (typeof transferValue == 'number' && transferValue <= this.accountValue ) {
            this.accountValue -= transferValue
            this.saveStatusAccount()
        } else {
            alert(`Tranfer can not be initialize`)
        }
    }
}

const renderStatusAccount = () => {
    document.querySelector('#status-account').textContent = mrLee.finalValue
}

const setupNewAccount = () => {
    mrLee = new StatusAccount(100000)
    mrLee.loadStatusAccount()
    renderStatusAccount()
}
const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

document.querySelector('.account__form').addEventListener('submit', (el) => {
    mrLee.calculateStatusAccount(Number(el.target.elements.text.value))
    el.target.elements.text.value = ""
    mrLee.saveStatusAccount()
    renderStatusAccount()
})

window.addEventListener('storage', (el) => {
    if (el.key === 'status-account') {
        mrLee.loadStatusAccount()
        renderStatusAccount()
    }
})
setupNewAccount()