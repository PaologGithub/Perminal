const fs = require("fs")

exports.dir = function dir(dir=".", _callback) {
    fs.readdir(dir,function (err, files) {
        if (err) throw err
        files.forEach((file)=>{
            process.stdout.write(file + "\n")
        })
    })
}
exports.mkdir = function mkdir(nameDir, dir=".") {
    fs.mkdirSync(dir + "/" + nameDir)
}