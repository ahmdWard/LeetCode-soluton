class NumArray {
    private prefixSum: number[];
    constructor(nums: number[]) {
        this.prefixSum = new Array()
        this.prefixSum.push(0)
        for(let i =0 ;i<nums.length; i++){
           this.prefixSum[i+1] = this.prefixSum[i]+nums[i]
        }
    }

    sumRange(left: number, right: number): number {
        if(left ==0)
        return this.prefixSum[right+1]

        return this.prefixSum[right+1] - this.prefixSum[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */