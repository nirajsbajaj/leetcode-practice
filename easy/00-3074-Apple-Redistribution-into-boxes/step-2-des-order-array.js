function orderArray(inputArr) {
    let a = inputArr;
    let temp = [];

    for( let i = 0; i < a.length; i ++ ) {
        temp.push(a[i]);
    }

    let desOrder = [];

    while ( temp.length > 0 ) {

        let maxIndex = 0;

        for ( let i = 1; i < temp.length; i++ ) {
            if( temp[i] > temp[maxIndex]) {
                maxIndex = i;
            }
        }

        desOrder.push(temp[maxIndex]);
        temp.splice(maxIndex, 1);
    
    }
    return desOrder;
}

export { orderArray }