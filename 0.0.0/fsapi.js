const fs = require("fs")

exports.dir = function dir(dir, _callback) {
    fs.readdir(dir,function (err, files) {
        if (err) throw err
        files.forEach((file)=>{
            console.log(file)
        })
    })
}