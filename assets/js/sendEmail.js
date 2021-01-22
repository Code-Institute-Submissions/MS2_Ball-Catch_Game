function sendMail(gamerContact) {
    emailjs.send("gmail","gamer", {
        "from_name": gamerContact.name.value,
        "from_email": gamerContact.email.value,
        "gamer_request": gamerContact.message.value
    })
   .then(
        function (response) {
            console.log("SUCCESS", response);
        },
        function (error) {
            console.log("FAILED", error);
        })
    .then(function () {
        gamerContact.reset();
    })
    return false;
}