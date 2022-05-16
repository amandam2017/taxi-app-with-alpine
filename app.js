document.addEventListener('alpine:init', () => {
    Alpine.data('taxi', () => ({
        qty: 0,
        leaveCount: 0,
        availableTaxi: 5,
        // fare: 0,
        passengersPerTaxi: 3,
        queue: 0,
         
        // $persist(routes)
        routes: [
            {
                name: 'Rondebosch',
                fare: 15.5,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                costPerTrip:0,
            },
            {
                name: 'Bellville',
                fare: 23,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                costPerTrip:0,
            },
            {
                name: 'Langa',
                fare: 20,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                costPerTrip:0,
            },
            {
                name: 'Mfuleni',
                fare: 22,
                trips: 0,
                queue: 0,
                availableTaxi:5,
                costPerTrip:0,
               
            }
        ],

        buttonEnable(route){
            if(this.route.availableTaxi > 0){
                return 'null'
            }
        },

        totalFare(route){
            return Number(this.route.fare) * 3 // Number(this.passengersPerTaxi)
        },
        
        takeTripFromPassengers(currentRoute){
            let tripFare = this.totalFare(currentRoute)
            console.log(Number(tripFare));
            currentRoute.costPerTrip += tripFare;
            // console.log(currentRoute.totalFare(currentRoute));
           
            currentRoute.trips++;
            currentRoute.queue -= 3;
            currentRoute.availableTaxi -=1;
        },

        addToRoute(currentRoute){
            // console.log(currentRoute);
            currentRoute.push({
                name: document.getElementById('destination').value,
                fare: document.getElementById('fareForDestination').value,
                availableTaxi:5,
                costPerTrip:0, 
                queue: 0,
                trips: 0,
                
            })

        },

        qtyUpFun(route) {
            this.route.queue++
        },
        qtydownFun(route) {
            this.route.queue--
        },

        addTaxi(){

        }
        
    }))
})