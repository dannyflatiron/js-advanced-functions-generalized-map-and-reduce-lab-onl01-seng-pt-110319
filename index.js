// Add your functions here

let map = function(array, codeBlock) {
    let m = []

    for (let i = 0; i < array.length; i++) {
        let d = array[i]
        m.push(codeBlock(d))
    }
    return m 
}

let reduce = function(array, codeBlock, startingPoint) {
    // reduce(a, b)
    let sp = (startingPoint) ? startingPoint : array[0]
    let i = (startingPoint) ? 0 : 1

    let m 
    for(; i < array.length; i++){
        sp = codeBlock(array[i], sp)
    }
    return sp 
}