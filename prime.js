function prime(num) {
    if (num < 2) {
        return false;
    }
    
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}
console.log(prime(5));

// output 
// true