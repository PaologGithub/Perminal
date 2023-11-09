const fsapi = require("./fsapi")

exports.processCommand = function (command, _callback) {
    cmd = command.split(" ")
    if (cmd[0] == "exit") {
        process.exit(0)
        //process.exit(1)
    } else if (cmd[0] == "clear") {
        process.stdout.write("\u001b[3J\u001b[2J\u001b[1J");console.clear();
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
            console.log("Aborted: Please enter a folderName")
        }
    } else if (cmd[0] == "mkfile") {
        if (cmd[1] !=null) {
            if (cmd[2] != null) {
                fsapi.mkfile(cmd[1], cmd[2])
            } else {
                fsapi.mkfile(cmd[1])
            }
        } else {
            console.log("Aborted: Please enter a fileName")
        }
    } else if (cmd[0] == "cd") {
        if (cmd[1] == null) {
            fsapi.cd()
        } else {
            fsapi.cd(cmd[1])
        }
    } else if (cmd[0] == "help") {
        require("./helpapi").help(cmd[1])
    }
    else if (command == "") {
        
    } else {
        console.log("Incorrect Command or File: " + command)
    }
    _callback()
}
