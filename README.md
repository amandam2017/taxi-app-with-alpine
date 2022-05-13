# taxi-app-with-alpine

Page is still on construction but you can view how does it look and do so far here: https://amandam2017.github.io/taxi-app-with-alpine/

To get it working I have:
Default data: 
-I have 5 taxis available for each day per route,-passengersPerTaxi: 10,
-taxi fare for a specific route


#Logic Summary:

LEAVE/TAKE TRIP: When a taxi leaves(take a trip) the number of available taxis should be updated. In this case since I have 5 taxis available by default...so when the taxi leaves : its gonna be a minus 1 from the available taxi's untill there is 0 available taxis and at that point we cannot tale/make a trip even if we have 100 people on the queue.

PASSENGER ACTIONS: Here its where the passangers can join the queue or leave the queue. When a passenger joins the queue number of the people in a queue will increase and when a passenger leaves the queue a number of passenger will decrease.
