// Write your JavaScript code here!

//const { addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

let form = document.querySelector('form');
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
   
   form.addEventListener("submit", function(event){
    event.preventDefault();

    let pilot = document.getElementById('pilotName').value;
    let copilot = document.querySelector('input[name = copilotName]').value;
    let fuelLevel = Number(document.querySelector('input[name = fuelLevel]').value);
    let cargoLevel = Number(document.querySelector('input[name = cargoMass]').value);
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   })
});