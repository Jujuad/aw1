/* ===== CALLBACK > PROMISSE > ASYNC/AWAIT ===== */

const { rejects } = require('assert')
const fs = require('fs')

console.log(1)

/* Callback */
/* function */
/* function callback(err, contents) {
    console.log(err, String(contents))
} 
fs.readFile('../TXT/in1.txt', callback)
*/

/* arrow function */
/* const callback = (err, contents) => {
    console.log(err, String(contents))
} 
fs.readFile('../TXT/in1.txt', callback)
*/

/* na própria chamada */
/* fs.readFile('../TXT/in1.txt', (err, contents) => {
    fs.readFile('../TXT/in2.txt', (err2, contents2) => {
        console.log(err, String(contents))
        console.log(err2, String(contents2))
    })
}) */

/* Promises */
/* arrow function */
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

/* readFile('../TXT/in1.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('../TXT/in2.txt')
    })
    .then(contents => {
        console.log(String(contents))
    }) 
*/

/* readFile('../TXT/in1.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('../TXT/in2.txt')
    })
    .then(contents => {
        console.log(String(contents))
    }) 
*/

/* Async/Await - açucar sintático em cima da promise */
const init = async () => {
    try {
        const contents = await readFile('../TXT/in1.txt')
        const contents2 = await readFile('../TXT/in2.txt')
        return String(contents) + '\n' + String(contents2)
    } catch (err) {
        console.log(err)
    }
}
init()
    .then(contents => console.log(contents))

console.log(2)

console.log(3)
