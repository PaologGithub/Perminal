const fsapi = require("./fsapi")

exports.processCommand = function (command, _callback) {
    cmd = command.split(" ")
    if (cmd[0] == "exit") {
        process.exit(0)
        //process.exit(1)
    } else if (cmd[0] == "clear") {
        console.clear()
    } else if (cmd[0] == "dir") {
        fsapi.dir("C:\\")
    }
    else if (command == "") {
        
    } else {
        console.log("Incorrect Command or File: " + command)
    }
    _callback()
}
