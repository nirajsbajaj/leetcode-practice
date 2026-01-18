function maxHappiness(happiness, k) {
    let arr = [...happiness];    

    arr.sort((a , b) => b - a);

    let selectedSum = 0;
    k = Math.min(k, arr.length);

    for( let i = 0; i < k; i++ ) {
        selectedSum += arr[0];
        arr.splice(0, 1);

        for ( let j = 0; j < arr.length; j++) {
            arr[j] = Math.max(arr[j] - 1, 0);
        }
    }
    return selectedSum;
}


console.log(maxHappiness([22, 1, 1, 1], 3));