const mukammal = (n) => {
    let sum = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0){
            sum += i
        }
    }
    return sum === n
}
let n=+prompt("Sonni kiriting: ")
alert(mukammal(n))
