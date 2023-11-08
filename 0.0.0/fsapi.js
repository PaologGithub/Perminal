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
exports.mkfile =function mkfile(nameFile, dir=".") {
    const file = fs.createWriteStream(dir + "/" + nameFile)
    file.close()
}
exports.cd = function cd(dir=".") {
    
}