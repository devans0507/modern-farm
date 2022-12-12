const potato = {

    id: 3,
    type: "Potato",
    height: 32,
    output: 2
}

export const createPotato = () => {
    return { ...potato }
}