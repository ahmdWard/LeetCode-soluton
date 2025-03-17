function groupAnagrams(strs: string[]): string[][] {


    let map = new Map<string, string[]>()

    let result: string[][] = []


    for (let i = 0; i < strs.length; i++) {

        let sortedWord = strs[i].split('').sort().join('')
        if (map.has(sortedWord)) {
            map.get(sortedWord)?.push(strs[i])
        } else {
            map.set(sortedWord, [strs[i]])

        }
    }

    for (const [key, value] of map.entries()) {

        result.push(value)
    }
    return result;
};