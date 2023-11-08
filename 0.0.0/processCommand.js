const fsapi = require("./fsapi")

exports.processCommand = function (command, _callback) {
    cmd = command.split(" ")
    if (cmd[0] == "exit") {
        process.exit(0)
        //process.exit(1)
    } else if (cmd[0] == "clear") {
        console.clear()
    } else if (cmd[0] == "dir") {
        if (cmd[1] != null) {
            fsapi.dir(cmd[1])
        } else {
            fsapi.dir()
        }
    } else if (cmd[0] == "mkdir") {
        if (cmd[1] !=null) {
            if (cmd[2] != null) {
                fsapi.mkdir(cmd[1], cmd[2])
            } else {
                fsapi.mkdir(cmd[1])
            }
        } else {
            console.log("Aborted: Please enter an folderName")
        }
    }
    else if (command == "") {
        
    } else {
        console.log("Incorrect Command or File: " + command)
    }
    _callback()
}
