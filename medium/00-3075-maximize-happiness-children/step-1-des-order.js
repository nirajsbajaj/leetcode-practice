function desOrder(inputArr) {
    let desOrdArr = [];

    let temp = [];

    for( let i = 0; i < inputArr.length; i++ ) {
        temp.push(inputArr[i]);
    }

    while ( temp.length > 0 ) {

        let maxIndex = 0;

        for( let i = 1; i < temp.length; i++ ) {

            if (temp[i] > temp[maxIndex]) {
            maxIndex = i;
            }
        }

        desOrdArr.push(temp[maxIndex]);
        temp.splice(maxIndex, 1);
    }

    return desOrdArr;
}

// console.log(desOrder([22, 3, 35, 18]));

export { desOrder };