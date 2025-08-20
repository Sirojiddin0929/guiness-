const maxword = (str) => {
    let words = str.split(" ")
    let c = words[0]
    for (let word of words) {
        if (word.length > c.length) {
            c = word
        }
    }
    return c
}
let str=prompt("Stringni kirit")
alert(maxword(str))

