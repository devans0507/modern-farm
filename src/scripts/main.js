import { createPlan } from "./plan.js";
import { usePlants } from "./fields.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

console.log("Welcome to the main module");

// get the array of arrays for the planting plan
const yearlyPlan = createPlan();

// plant all of the seeds into the field array
plantSeeds(yearlyPlan);

// get a copy of the plantsInField array from field.js
const plantedPlants = usePlants();

// harvest the planted plants
const harvest = harvestPlants(plantedPlants);

// create the catalog, and put the catalog on the page
const parentHTMLElement = document.querySelector(".container");
parentHTMLElement.innerHTML = Catalog(harvest);
console.log(yearlyPlan)
console.log(usePlants())
console.log(harvestPlants(usePlants()))