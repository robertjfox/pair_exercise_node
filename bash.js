const pwd = require("./pwd.js")
const ls = require("./ls.js")
const cat = require("./cat.js")

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ')
    
    
    if (cmd[0] === "pwd") {
        pwd()
    }
    
    if (cmd[0] === "ls") {
        ls()
    }

    if (cmd[0] === "cat") {
        let filename = cmd[1]
        cat(filename)
    }
    
    process.stdout.write('\nprompt > ')
})

