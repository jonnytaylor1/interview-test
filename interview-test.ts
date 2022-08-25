type InputAndArrayOfInputIndexes = {
    [key: string]: number[]
}


 const uniqueValidNumbers = (N: number, inputArray: number[]): number|void => {
     try {
        if (!(Array.isArray(inputArray) && inputArray.length < 50 && inputArray.length > 0)) throw Error('input is not an array with length between 1 and 50')
        const inputAndArrayOfInputIndexes: InputAndArrayOfInputIndexes = {}
        for (let i = 0; i < inputArray.length; i++) {
            const input = inputArray[i]
            if (!inputAndArrayOfInputIndexes[input]) inputAndArrayOfInputIndexes[input] = [i + 1]
            else inputAndArrayOfInputIndexes[input].push(i + 1)
        }
        const uniqueInputs: string[] = []
    
        Object.entries(inputAndArrayOfInputIndexes).forEach(([input, inputIndexes]) => {
            if (inputIndexes.length === 1) return uniqueInputs.push(input)
            let isValid = true
            for (let j = 1; j < inputIndexes.length; j++) {
                const previousIndex = inputIndexes[j-1];
                const currentIndex = inputIndexes[j];
                if (currentIndex % previousIndex !== 0) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) uniqueInputs.push((input))
        })
        return uniqueInputs.length
     } catch (e) {
        console.warn(e)
     }
}

const result1 = uniqueValidNumbers(3, [1,2,3])
const result2 = uniqueValidNumbers(5, [1,2,1,2,2])
console.log({result1, result2})
