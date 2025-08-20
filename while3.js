function tubSon(n){
    let lst=[]
    let i=2
    while(i<=n){
        let j=2
        let tub=true
        
        while(j<=Math.floor(i/2)){
            if(i%j===0){
                tub=false
                break
            }
            j++


        }
        if (tub){
            lst.push(i)
        }
        i++


    }
    return lst

}
let n=+prompt("Sonni kiriting")
alert(tubSon(n))