function randomUniqNum(n) {
    let temp = [];

    function randomNum() {
        return Math.floor(Math.random() * n) + 1;
    } 

    while ( temp.length < n) {
        let num = randomNum();

        let isPresent = true;

        for( let j = 0; j < temp.length; j++) {
            if(temp[j] === num) {
                isPresent = false;
                break;
            }
        }
        
        if(isPresent) {
            temp.push(num);
        }
    }

    return temp;
    }

console.log(randomUniqNum(3));