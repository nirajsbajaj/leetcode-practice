function assignRandomNum(n) {
    let temp = [];

    for( let i = 0; i < n; i++ ) {
        temp[i] = Math.floor(Math.random() * n) + 1;
    }

    return temp;
}

console.log(assignRandomNum(3));