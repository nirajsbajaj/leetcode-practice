function zeroSum(n) {
    let temp = [];

    while(temp.length < n) {

        for( let j = 1; j <= Math.floor(n/2); j++ ) {
            temp.push(j);
            temp.push(-j);
        }

        if(n % 2 === 1){
            temp.push(0);
        }
    }

    return temp;
}


console.log(zeroSum(3));