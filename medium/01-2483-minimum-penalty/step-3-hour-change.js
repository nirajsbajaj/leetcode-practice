import { makeCopiesOf } from "./step-2-array-copies.js";

function hourChange(string) {

    let arrCopies = makeCopiesOf(string);
    
    for ( let closingHour = 0; closingHour < string.length; closingHour++) {

        for ( let hour = 0; hour < arrCopies[closingHour].length; hour++) {
            
            if ( hour < closingHour) {
                if (arrCopies[closingHour][hour] == "N") {
                    arrCopies[closingHour][hour] = 1;
                } else {
                    arrCopies[closingHour][hour] = 0;
                }
            } else {
                if (arrCopies[closingHour][hour] == "Y") {
                    arrCopies[closingHour][hour] = 1;
                } else {
                    arrCopies[closingHour][hour] = 0;
                }

            }

        }

    }
    return arrCopies;
}

// console.log(hourChange("YYNY"));

export{ hourChange }