import {strToArr} from "./step-1-string-to-array.js"

function makeCopiesOf(string) {

    let toArr = strToArr(string); 

    let copiesArray = [];

    for (let i = 0; i < toArr.length; i++ ) {
        let temp = [];

        for (let j = 0; j < toArr.length; j++ ) {
            temp.push(toArr[j]);
        }

        // console.log(`for round ${i} temp is ${temp}`);
        copiesArray.push(temp);
    }

    return copiesArray;

}

// console.log(makeCopiesOf("YYNY"));

export { makeCopiesOf }