function fibon(n) {
    let a = 0, b = 1;
    let str = ""
    do {
        if (a > n) break
        str += a + " "
        let c = a + b
        a = b
        b = c
    } while (a <= n)

    return str.trim()
}
let n=+prompt("Sonni kiriting: ")
alert(fibon(n))
