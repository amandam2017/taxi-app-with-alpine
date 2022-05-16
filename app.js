document.addEventListener('alpine:init', () => {
    Alpine.data('taxi', () => ({
        qty: 0,
        leaveCount: 0,
        availableTaxi: 5,
        // totalfair: 0,
        passengersPerTaxi: 3,
        
        routes: [
            {
                name: 'Rondebosch',
                fare: 15.5,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                costPerTrip:0,
                totalFare(){
                    return Number(this.fare) * 3//Number(this.passengersPerTaxi)
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
                costPerTrip:0,
                totalFare(){
                    return Number(this.fare) * 10//Number(this.passengersPerTaxi)
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
                costPerTrip:0,
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
                costPerTrip:0,
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
        
        takeTripFromPassengers(currentRoute){
            // console.log(currentRoute);
            currentRoute.costPerTrip += currentRoute.totalFare();
           
            currentRoute.trips++;
            currentRoute.queue -= 3;
            currentRoute.availableTaxi -=1;
            // total+=10


            // leaveCountFun(); 
            // calculatedTotalFair();
            // return this.qty - this.passengersPerTaxi
        },

        addToRoute(currentRoute){
            // console.log(currentRoute);

            currentRoute.push({
                name: document.getElementById('destination').value,
                fare: document.getElementById('fareForDestination').value,
                availableTaxi:5,
                costPerTrip:0
                
            })
            console.log(name);

        }
        
    }))
})