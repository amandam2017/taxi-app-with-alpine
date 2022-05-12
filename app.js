document.addEventListener('alpine:init', () => {
    Alpine.data('taxi', () => ({
        qty: 0,
        leaveCount: 0,
        availableTaxi:5,
        totalfair:0,
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
        },
        calculatedTotalFair(){
            return this.totalfair+=200
        }        
}))
})