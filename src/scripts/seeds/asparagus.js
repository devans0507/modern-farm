
const asparagus = {
    id: 1,
    type: "Asparagus",
    height: 24,
    output: 4
}

export const createAsparagus = () => {
    return { ...asparagus }
}
