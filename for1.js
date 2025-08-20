function armstrongNumbers(n) {
    let lst = []
    for (let i = 1; i <= n; i++) {
        let kaskad = i
        let count = i.toString().length
        let sum = 0

        while (kaskad) {
            let digit = kaskad % 10
            sum += Math.pow(digit, count)
            kaskad = Math.floor(kaskad / 10)
        }

        if (sum === i) {
            lst.push(i)
        }
    }

    return lst
}

let n = +prompt("Sonni kiriting: ")
alert(armstrongNumbers(n))
