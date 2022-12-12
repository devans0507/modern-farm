const soybean = {

    id: 4,
    type: "Soybean",
    height: 20,
    output: 4
}

export const createSoybean = () => {
    return { ...soybean }
}