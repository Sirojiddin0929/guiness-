function count(n){
    let sum=0
    do {
        let a=n%10
        if(!isNaN(a)){
            sum++

        }
        n=Math.floor(n/10)
    } while (n)
    return sum

}
let n=+prompt("Sonni kiriting: ")
alert(count(n))