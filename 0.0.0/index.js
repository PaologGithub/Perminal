const getUserInput = require("./getUserInput").getUserInput
const setInputText = require("./getUserInput").setInputText

setInputText(process.cwd() + "> ")
getUserInput(); // Commencez la boucle d'entrée
