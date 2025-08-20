function tobinary(son){
    let str=''
    while(son){
        str+=String(son%2)
        son=Math.floor(son/2)
    }
    return str.split("").reverse().join("")

}
let son=+prompt("Sonni kiriting: ")
alert(tobinary(son))



