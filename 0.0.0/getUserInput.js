const processCommand = require("./processCommand").processCommand

var inputText = "> "

exports.getUserInput = function () {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function startInput() {
        rl.question(inputText, async (input) => {
            processCommand(input, function() {
                startInput();
            })
        });
    }
    startInput()
}

exports.setInputText = function (newInputText) {
    inputText = newInputText
}