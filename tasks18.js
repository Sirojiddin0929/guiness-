let c=function(arr){
    return (arr.reduce((x,y)=>x+y,0))/arr.length

}
let arr=[]
let n=+prompt("Nechta elementdan iborat")
for(let i=0; i<n; i++){
    let b=+prompt(`${i+1}-elementni kiriting`)
    arr.push(b)
}
alert(c(arr))