document.addEventListener('alpine:init', () => {
    Alpine.data('taxi', () => ({
        qty: 0,
        leaveCount: 0,
        availableTaxi: 5,
        totalfair: 0,
        passengersPerTaxi: 6,
        routes: [
            {
                name: 'Rondebosch',
                fare: 15.5,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                totalFare(){
                    return Number(this.fare) * 10 // Number(this.passengersPerTaxi)
                },
                qtyUpFun() {
                    this.queue++
                },
                qtydownFun() {
                    this.queue--
                },
            },
            {
                name: 'Bellville',
                fare: 23,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                totalFare(){
                    return Number(this.fare) * 10 // Number(this.passengersPerTaxi)
                },
                qtyUpFun() {
                    this.queue++;
                    // console.log(this.queue);
                },
                qtydownFun() {
                    this.queue--
                },

            },
            {
                name: 'Langa',
                fare: 20,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                totalFare(){
                    return Number(this.fare) * 10 // Number(this.passengersPerTaxi)
                },
                qtyUpFun() {
                    this.queue++
                },
                qtydownFun() {
                    this.queue--
                },

            },
            {
                name: 'Mfuleni',
                fare: 22,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                totalFare(){
                    return Number(this.fare) * 10 // Number(this.passengersPerTaxi)
                },
                qtyUpFun() {
                    this.queue++
                },
                qtydownFun() {
                    this.queue--
                },

            }
        ],

        // qtyUpFun(){
        //     this.qty++
        // },
        // qtydownFun(){
        //     this.qty--
        // },
        // leaveCountFun(){
        //     this.leaveCount++
        // },
        // actualTaxisAvailable(){
        //     return this.availableTaxi - this.leaveCount
        // },
        // calculatedTotalFair(){
        //     return this.totalfair+=200
        // },
        takeTripFromPassengers(currentRoute){
           
            currentRoute.trips++;
            currentRoute.queue -= 10;
            currentRoute.availableTaxi -=1;


            // leaveCountFun(); 
            // calculatedTotalFair();
            // return this.qty - this.passengersPerTaxi
        }
    }))
})