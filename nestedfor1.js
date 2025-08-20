function paskalYokitepakal(n){
    // let str=''
    for(let i=0;i<n;i++){
        let c=1
        let row=' '
        for(let j=0; j<=i;j++){
            row+=c+' '
            c=c*((i-j)/(j+1))
        }
        str+=row+"\n"
    }
    return str


}
let n=+prompt("Sonni kiriting")
alert(paskalYokitepakal(n))