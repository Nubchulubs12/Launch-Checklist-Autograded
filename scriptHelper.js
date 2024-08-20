// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;

}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }


    else if (isNaN(Number(testInput))) {
        return "Not a Number";
    }

    return "Is a Number";
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");


    let isValid = true;



    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
        alert(`Please enter pilot name.`);
        pilotStatus.innerHTML = "Please enter a name."
        isValid = false
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    }
    if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
        alert(`Please enter copilot name.`);
        copilotStatus.innerHTML = "Please enter a name."
        isValid = false
    } else {

        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    }

    if (validateInput(fuelLevel) === "Is a Number" && Number(fuelLevel) < 10000 || validateInput(fuelLevel) <= 0) {
        fuelStatus.innerHTML = "Fuel level too low for launch."
        isValid = false;


    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty") {
        alert("Please enter a valid number for fuel level.");
        fuelStatus.innerHTML = "Enter a valid number.";
        isValid = false;


    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    };

    if (validateInput(cargoLevel) === "Is a Number" && Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        isValid = false;

    } else if (validateInput(cargoLevel) === "Not a Number" || validateInput(cargoLevel) === "Empty") {
        alert("Please enter a valid number for cargo mass.");
        cargoStatus.innerHTML = "Enter a valid number.";
        isValid = false;
    }

    else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (isValid) {
        launchStatus.textContent = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
        list.style.visibility = "visible";
    }

    else {
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        list.style.visibility = "visible";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;