function sendMail(gamerContact) {
    emailjs.send("gmail","gamer", {
        "from_name": gamerContact.name.value,
        "from_email": gamerContact.email.value,
        "gamer_request": gamerContact.message.value
    })
   .then(
        function (response) {
            writeToConsole(response, "Success");
        },
        function (error) {
            writeToConsole(error, "Failed");
        })
    .then(function () {
        gamerContact.reset();
    });
    return false;
}