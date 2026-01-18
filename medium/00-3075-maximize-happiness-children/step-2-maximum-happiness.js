import { desOrder } from "./step-1-des-order.js"

function maxHappiness (inputArr, k) {
    let arr = desOrder(inputArr);
    let selectedChildren = [];
    

    for ( let i = 0; i < k; i++ ) {
        selectedChildren.push(arr[0]);
        arr.splice(0, 1);
        console.log(arr)
            for ( let j = 0; j < arr.length; j++ ) {
                if ( arr[j] > 0 ) {
                    arr[j] = arr[j] - 1;
                    console.log(`nested array: ${arr}`)
                }
            }
    }

    function sumArr(n) {
        let sum = 0;
        for ( let i = 0; i < n.length; i++) {
            sum += n[i];
        }
        return sum;
    }

    return sumArr(selectedChildren);
}


console.log(maxHappiness([22, 1, 1, 1], 3));