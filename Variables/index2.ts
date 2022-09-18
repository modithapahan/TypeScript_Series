let first_no = 12; /* global variable */

class Numbers {
    no_value = 13; /* class variable */

    static n_value = 14; /* static field */

    storeNum(): void {
        let local_val = 15; /* local variable */
    }
}

console.log('First No is', first_no);
console.log(Numbers.n_value);

let obj = new Numbers();
console.log(obj.no_value);


