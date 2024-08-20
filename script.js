// Write your JavaScript code here!

// const { formSubmission, myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let pilot = document.querySelector('input[name="pilotName"]').value;
        let copilot = document.querySelector('input[name="copilotName"]').value;
        let fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
        let cargoLevel = document.querySelector('input[name="cargoMass"]').value;
        let list = document.getElementById("faultyItems");

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
            validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert(`All fields are required`);
            pilotStatus.innerHTML = "Enter a valid pilot name.";
            copilotStatus.innerHTML = "Enter a valid co-pilot name.";
            fuelStatus.innerHTML = "Enter a valid fuel level.";
            cargoStatus.innerHTML = "Enter a valid cargo mass.";
            isValid = false;

        }

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);


        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const selectedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(
            document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.image
        );
    })

});