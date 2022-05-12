document.addEventListener('alpine:init', () => {
    Alpine.data('taxi', () => ({
        qty: 0,
        leaveCount: 0,
        availableTaxi:5,
        qtyUpFun(){
            this.qty++
        },
        qtydownFun(){
            this.qty--
        },
        leaveCountFun(){
            this.leaveCount++
        },
        actualTaxisAvailable(){
            return this.availableTaxi - this.leaveCount
        }        
}))
})