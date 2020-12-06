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
        localStorage.setItem("status-account", JSON.stringify(this.accountValue))  
    }
    loadStatusAccount() {
        const statusAccountJSON = localStorage.getItem("status-account")
        try {
            this.accountValue = (statusAccountJSON ? JSON.parse(statusAccountJSON) : this.accountValue)
            
        } catch (error) {
            this.accountValue
        }
    }
    calculateStatusAccount(transferValue) {
        if (typeof transferValue == "number" && transferValue <= this.accountValue ) {
            this.accountValue -= transferValue
            this.saveStatusAccount()
        } else {
            alert(`Tranfer can not be initialize`)
        }
    }
}
const renderStatusAccount = (accountValue) => {
    document.querySelector("#status-account").textContent = accountValue
}
const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
const setupNewAccount = () => {
    mrLee = new StatusAccount(1000000)
    mrLee.loadStatusAccount()
    renderStatusAccount(mrLee.finalValue)
}
document.querySelector(".account__form").addEventListener("submit", (el) => {
    el.preventDefault()
    mrLee.calculateStatusAccount(Number(el.target.elements.text.value))
    el.target.elements.text.value = ""
    mrLee.saveStatusAccount(mrLee.finalValue)
    renderStatusAccount(mrLee.finalValue)
    window.setTimeout(() => {
        location.assign("index.html")
    },1500)    
})
window.addEventListener("storage", (el) => {
    if (el.key === "status-account") {
        mrLee.loadStatusAccount()
        renderStatusAccount(mrLee.finalValue)
    }
})

setupNewAccount()