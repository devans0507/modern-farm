import { addPlant } from "./fields.js";

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlanArray) => {
    // define a variable to hold seed
    //seed = null
    for (const row of plantingPlanArray) {
        //within each row go through each plant
        //call the function for that palnt
        for (const plant of row) {
            if (plant === "Asparagus") {
                addPlant(createAsparagus());
            }
            else if (plant === "Corn") {
                addPlant(createCorn());
            }
            else if (plant === "Potato") {
                addPlant(createPotato());
            }
            else if (plant === "Soybean") {
                addPlant(createSoybean());
            }
            else if (plant === "Sunflower") {
                addPlant(createSunflower());
            }
            else if (plant === "Wheat") {
                addPlant(createWheat());
            }
            
        }
    }
}

// if (plant === "Asparagus") {
//  seed = createAsparagus();}
//addPlant(createAsparagus())}