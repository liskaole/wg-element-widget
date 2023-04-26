import { uuidv4 } from "./uuidv4";

export const generateElementArray = (length: number, defaultSelectedItems: number[]) => {
    return [...Array(length)].map((v, k) => 
        ({
            id: uuidv4(),
            name: 'Element',
            elementNumber: k,
            preSelected: defaultSelectedItems.includes(k),
            selected: defaultSelectedItems.includes(k)
        })
    )
}

export const getRandomNumbers = (quantity: number, max: number) => {
    const arr = []
    while (arr.length < quantity) {
        var candidateInt = Math.floor(Math.random() * max) + 1
        if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
    }
    return (arr)
}