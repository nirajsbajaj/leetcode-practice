function sumArray (inputArr) {
    let sum = 0;

    for ( let i = 0; i < inputArr.length; i++ ) {
        sum += inputArr[i];
    }

    return sum;
}

export { sumArray };