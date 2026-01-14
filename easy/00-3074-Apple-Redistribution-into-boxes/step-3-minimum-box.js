import { sumArray } from "./step-1-sum-array.js"
import { orderArray } from "./step-2-des-order-array.js"

function minBox(apples, capacity) {

    if(!Array.isArray(apples) || !Array.isArray(capacity)) {
        return "provide valid input!"
    }

    let totalApples = sumArray(apples);
    /*console.log(totalApples);*/
    let totalCapacity = sumArray(capacity);
    /*console.log(totalCapacity);*/
    
    if ( totalApples > totalCapacity ) {
        return "storage capacity is not sufficient.";
    }

    let desOrderCapacity = orderArray(capacity);

    let minimumBox;

    let sum = 0;

    for ( let h = 0; h < desOrderCapacity.length; h++ ) {


        sum += desOrderCapacity[h];
        minimumBox = h;
        console.log(sum);
        console.log(h);

        if ( sum >= totalApples ) {
            minimumBox += 1;
            break;
        }
    }

    return minimumBox;
}




console.log(minBox([9, 6, 1, 2, 5], [10, 3, 8, 10]));