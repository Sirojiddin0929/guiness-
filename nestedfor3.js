function stars(n){
    let str=''
    for(let i=0;i<n;i++){
        
        for(let j=0;j<=i;j++){
            str+='* '



        }
        str+="\n"
        
    }
    return str
}
let n=+prompt("Sonni kiriting: ")
alert(stars(n))