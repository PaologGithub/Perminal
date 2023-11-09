exports.help = function help(hlp=null) {
    if (hlp == null) {
        process.stdout
    } else {
        console.log(hlp)
    }
}
