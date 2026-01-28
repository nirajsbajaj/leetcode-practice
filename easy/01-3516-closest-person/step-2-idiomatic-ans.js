function compareCheck(x, y, z) {
    let person1 = Math.abs(z - x);
    let person2 = Math.abs(z - y);

    if(person1 < person2) {
        return 1;
    } else if(person1 > person2) {
        return 2;
    }else {
        return 0;
    }
}

console.log(compareCheck(3, 5, 10));
console.log(compareCheck(5, 3, 10));
console.log(compareCheck(5, 5, 10));
console.log(compareCheck(10, 5, 3));