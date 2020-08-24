const cornSeed = [
    {
        type: "corn",
        height: 180,
        output: 6
    },
    {
        type: "corn",
        height: 180,
        output: 6
    },
]

export const createCorn = () => {
    return cornSeed.slice()
}