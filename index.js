let p = ["", "", "", ""]
console.log(l)

function randomNumber() {
    return (Math.floor(Math.random() * 10))
}

function randomCletter() {
    let i = Math.floor(Math.random() * 27 + 65)
    return (String.fromCharCode(i))
}

function randomLetter() {
    let i = Math.floor(Math.random() * 27 + 97)
    return (String.fromCharCode(i))
}

function randomSymbol() {
    let i = Math.floor(Math.random() * 16 + 32)
    return (String.fromCharCode(i))
}


function passwordGen() {
    let l = document.getElementById("Length").value
    let password = ""
    for (let counter = 0; counter < l; counter++) {
        let i = Math.floor(Math.random() * 4)
        if (i === 0) {
            p[i] = randomCletter()
            console.log(p[i])
        }
        else if (i === 1) {
            p[i] = randomLetter()
        }
        else if (i === 2) {
            p[i] = randomNumber()
        }

        else {
            p[i] = randomSymbol()
        }

        password = password + p[i]
    }
    return password
}

function result() {
    document.getElementById("first").textContent = passwordGen()
    document.getElementById("second").textContent = passwordGen()
    document.getElementById("third").textContent = passwordGen()
    document.getElementById("fourth").textContent = passwordGen()

}

let empty=8

console.log("We have spared "+8+"spaces")