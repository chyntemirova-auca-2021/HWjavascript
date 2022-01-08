
let m = [23, 72, 35, 62, 75, 25]
let a = Number(prompt())


while ( a !== 0) {
    let found = false

    for (let i = 0; i < m.length; i++) {
        if ( a === m[i]) {
            found = true
        }
    }
    if (found ) console.log.prompt("yes")
 else console.log("no")
}
