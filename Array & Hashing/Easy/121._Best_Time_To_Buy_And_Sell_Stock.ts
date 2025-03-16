function maxProfit(prices: number[]): number {
    
    const n = prices.length;
    let max = 0 , min = Number.MAX_SAFE_INTEGER + 1;

    for(let i=0 ; i<n ; i++ ) {
        if(min > prices[i]){
            min = prices[i];
        }else{
            max=Math.max(max,prices[i]-min);
        }
    }
    return max;
};

// basic solutoin there is another one in sliding window section 