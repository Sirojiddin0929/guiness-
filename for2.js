function kvadrat(n) {
    let lst = []
    for (let i = 1; i * i <= n; i++) {
        lst.push(i * i)
    }
    return lst
}
let n = +prompt("Sonni kiriting: ")
alert(kvadrat(n))