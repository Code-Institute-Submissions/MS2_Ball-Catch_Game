const IS_DEBUG = false; 
function writeToConsole(messageString, status) {
    if (IS_DEBUG) {
        if (status == "Success") {
            console.log(messageString);
        }
        else {
            console.error(messageString);
        }
    }
}