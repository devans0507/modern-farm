export const harvestPlants = (plantsArray) => {
    // make a container to hold harvested plants
    let harvest = [];
    // go through the palnts
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output/2; i++) {
                harvest.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++) {
                harvest.push(plant);
            }
        }


    }
    return harvest

}
