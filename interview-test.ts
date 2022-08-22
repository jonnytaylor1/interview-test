type ValueAndArrayOfValueIndexes = {
    [index: string]: number[]
}



 const uniqueValidNumbers = (N: number, inputArray: number[]): number => {
        const valueAndArrayOfValueIndexes: ValueAndArrayOfValueIndexes = {}
        for (let i = 0; i < inputArray.length; i++) {
            const element = inputArray[i]
            if (!valueAndArrayOfValueIndexes[element]) valueAndArrayOfValueIndexes[element] = [i + 1]
            else valueAndArrayOfValueIndexes[element].push(i + 1)
        }
        const uniqueValues: string[] = []
    
        Object.entries(valueAndArrayOfValueIndexes).forEach(([key, value]) => {
            if (value.length === 1) return uniqueValues.push(key)
            let isValid = true
            for (let j = 1; j < value.length; j++) {
                const previousIndex = value[j-1];
                const currentIndex = value[j];
                if (currentIndex % previousIndex !== 0) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) uniqueValues.push((key))
        })
        return uniqueValues.length
}

const result1 = uniqueValidNumbers(3, [1,2,3])
const result2 = uniqueValidNumbers(5, [1,2,1,2,2])
console.log({result1, result2})
