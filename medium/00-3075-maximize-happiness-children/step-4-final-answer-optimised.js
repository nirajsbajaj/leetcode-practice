function maxHappiness(happiness, k) {
    happiness.sort((a, b) => b - a);

    let sum = 0;

    k = Math.min(k, happiness.length);

    for( let i = 0; i < k; i++ ) {
        sum += Math.max(happiness[i] - i, 0);
    }

    return sum;
}


console.log(maxHappiness([22, 1, 1, 1], 3));