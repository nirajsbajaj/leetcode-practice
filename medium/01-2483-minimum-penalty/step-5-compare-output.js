import { sumOfArr } from "./step-4-penalty-sum.js"

function compareEle(string) {

    let arr = sumOfArr(string);
    let minPenalty = 0;


    for( let i = 1; i <= arr.length; i++ ) {
        if (arr[i] < arr[minPenalty]) {
            minPenalty = i;
        }
    }

    console.log(arr);
    return minPenalty;
}

console.log(compareEle("YYNY"));