function check(n){
    let sum=0
    do {
        
        sum+=n%10
        n=Math.floor(n/10)
    } while (n)
    if (sum%2===0){
        return "Juft"
    }
    else{
        return "Toq"
    }

}
let n=+prompt("Sonni kiriting: ")
alert(check(n))