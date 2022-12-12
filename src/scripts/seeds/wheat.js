const wheat = {

    id: 6,
    type: "Wheat",
    height: 230,
    output: 6
}

export const createWheat = () => {
    return { ...wheat }
}