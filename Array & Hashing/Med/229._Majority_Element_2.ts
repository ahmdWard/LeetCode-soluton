function majorityElement(nums: number[]): number[] {
    
    let map = new Map<number, number>();
    let arr: number[] = [];
    let n = nums.length
   for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for(let [key, value] of map.entries()){
        if(value > n/3)
         arr.push(key)
    }
    return arr
};

//it's an easy problem and the flow up is hard so i will get back to it again 