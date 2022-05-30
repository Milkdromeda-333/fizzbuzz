function fizzbuzz() {
    let [fizz, buzz, fizzbuzz] = [0, 0, 0];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
            fizzbuzz++
        } else if (i % 3 === 0) {
            console.log("Fizz")
            fizz++
        } else if (i % 5 === 0) {
            console.log("Buzz")
            buzz++
        } else {
            console.log(i)
        }
    }
    console.log(`Fizz: ${fizz} Buzz: ${buzz} FizzBuzz: ${fizzbuzz}`)
}
fizzbuzz();