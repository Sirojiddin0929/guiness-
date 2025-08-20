let b=function(a){
    let c=String(a)
    
    if(a===Number(c.split('').reverse().join(""))){
        return "True"

    }
    else{
        return "False"
    }

}
let a=+prompt("Sonni kiriting")
alert(b(a))