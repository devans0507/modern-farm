const sunflower = {

    id: 5,
    type: "Sunflower",
    height: 380,
    output: 3
}

export const createSunflower = () => {
    return { ...sunflower }
}