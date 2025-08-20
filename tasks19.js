const myfunction = (n) => {
    let a = 1
    while (n > 0) {
        a *= n % 10
        n = Math.floor(n / 10)
    }
    return a
}
let n=+prompt("Sonni kiriting: ")
alert(myfunction(n))
