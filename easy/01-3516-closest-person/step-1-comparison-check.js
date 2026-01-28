function compareCheck(x, y, z) {
    let person1 = z - x;
    let person2 = z - y;

    if(person1 < 0) {
        person1 = person1 * -1;
    }

    if(person2 < 0) {
        person2 = person2 * -1;
    }

    if(person1 > person2) {
        return 2;
    } else if (person1 < person2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compareCheck(3, 5, 6));
console.log(compareCheck(10, 1, 5));
console.log(compareCheck(5, 5, 10));
console.log(compareCheck(5, 3, 6));