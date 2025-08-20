function maxNumber(a){
    let lst=[]
    let i=0
    while(i<a.length){
        lst.push(Number(a[i]))
        i++

    }
    return Math.max(...lst)
    
}
let b=+prompt("Sonni kiriting: ")
let a=b.toString()
alert(maxNumber(a))
