// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById('missionTarget') 
    missionTarget.innerHTML= `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}" >`
   
};

function validateInput(testInput) {
   if (typeof testInput === "string") {
    return "Not a number";
   } else if (typeof testInput === "number"){
    return "Is a number";
   }else if (testInput === "") {
    return "Empty";
   }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields are required!");
    } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number"){
        alert("Make sure to enter valid information for each field!");
    }else {

    let launchStatus = document.getElementById('launchStatus');
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    

    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch. `;
    document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready for launch.`;

    let list = document.getElementById('faultyItems');
    list.style.visibility = 'visible';

    if (fuelLevel < 10000) {
        
        fuelStatus.innerHTML = "Not enough fuel for the journey.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }

    if (cargoLevel > 10000) {

        cargoStatus.innerHTML = "Shuttle too heavy for take off.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }

    if (fuelLevel > 10000 && cargoLevel < 10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
    
    }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
};

function pickPlanet(planets) {
    let randomPlanetSelection = Math.floor(Math.random() * planets.length);
    return planets[randomPlanetSelection]
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
