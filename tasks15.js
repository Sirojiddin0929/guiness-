function disgusting(son){
    let a=String(son)
    let sum=0
    for (i=0;i<a.length;i++){
        sum+=Number(a[i])

    }
    
    if(sum<10){
        return "Kichik"

    }
    else if(sum>=10 && sum<=20){
        return "O'rtacha"
    }
    else{
        return "katta"
    }

}
let son=+prompt("Sonni kiriting")
alert(disgusting(son))