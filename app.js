// const _ = require('lodash');
document.addEventListener('alpine:init', () => {
    
    Alpine.data('taxi', () => ({
        qty: 0,
        leaveCount: 0,
        availableTaxi: 5,
        // fare: 0,
        passengersPerTaxi: 3,
        queue: 0,
        numberOfQues:0,
        costPerTripGrand:Alpine.$persist(0),
        
        routes: Alpine.$persist([
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
            },

        ]),

        numberOfQuesFun(routes){
            console.log(routes);
            let nuM = Object.keys(routes).length;
            console.log(nuM);

            numberOfQues = nuM;
            console.log(numberOfQues);

            return numberOfQues;
        },

        buttonEnable(route){
            if(this.route.availableTaxi > 0){
                return 'still taxis available'
            }
        },

        addTaxi(route){
            
            if(this.route.availableTaxi == 0){
                return this.route.availableTaxi++
            }
        },

        grandTotal(route){
            return this.costPerTrip //+ Number(this.mediumTotalPrice) + Number(this.largeTotalPrice)
        },

        // _.sumBy(routes, function(route){return route.costPerTrip})

        totalFare(route){
            return Number(this.route.fare) * 3 // Number(this.passengersPerTaxi)
        },

        // subTotalPerDay(){
        //     let all = this.routes;
        //     console.log(all);

        //    _.sumBy(all, route => {
        //         return route.costPerTrip;
        //     })
        // },
        
        takeTripFromPassengers(currentRoute){
            // let all = currentRoute;
            // console.log(all);
            // let profit = this.subTotalPerDay();
            // console.log(profit);
            
            let tripFare = this.totalFare(currentRoute)
            
            currentRoute.costPerTrip += tripFare;
            
            // currentRoute.costPerTripGrand += tripFare;
                       
            currentRoute.trips++;
            currentRoute.queue -= 3;
            currentRoute.availableTaxi -=1;
        },

        addToRoute(currentRoute){
            console.log(currentRoute);
            
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
            if(this.route.queue>0){
                this.route.queue--
            }
        },
        
    }))
})