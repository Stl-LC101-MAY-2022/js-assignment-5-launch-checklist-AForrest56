// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.querySelector('testForm');
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
   form.addEventListener("submit", function(event){
    event.preventDefault();

    let pilot = document.getElementById('pilotName').value;
    let copilot = document.getElementById('copilotName').value;
    let fuelLevel = document.getElementById('fuelLevel').value;
    let cargoLevel = document.getElementById('cargoMass').value;
    
   })
});