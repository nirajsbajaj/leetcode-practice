import { hourChange } from "./step-3-hour-change.js";

function sumOfArr(string) {
    let arr = hourChange(string);
    // console.log(arr);

    let arrSum = [];

    let sum = 0;
    for( let i = 0; i < arr.length; i++) {

        for( let j = 0; j < arr[i].length; j++ ) {
            sum += arr[i][j];
        }
        arrSum.push(sum);
        sum = 0;
    }
    return arrSum;
}

// console.log(sumOfArr("YYNY"));

export { sumOfArr }