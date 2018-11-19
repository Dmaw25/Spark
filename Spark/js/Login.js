function checkURL() {
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
        return (false);
    }
    var message = getQueryVariable("message");
    switch (message) {
        case "unsuccessful":
            {
                message = "Internal Server Error. Try Again Later.";
            }
            break;
        case "emailalreadyexists":
            {
                message = "This Email/Phone Already Exists. Try Different One.";
            }
            break;
        case "passwordmismatch":
            {
                message = "Password Didn't Match.";
            }
            break;
        case "upwrong":
            {
                message = "either username or password is wrong.";
            }
            break;
        case "insufficient":
            {
                message = "Any Of The Field Is Missing";
            }
            break;
        case "unauthorised":
            {
                message = "You Need To Login First To See This Page.";
            }
            break;
        case "verificationSuccessful":
            {
                message = "You Have Successfully Verified Your Email Address";
            }
            break;
        case "verificationAlreadyDone":
            {
                message = "Your already have verified your email address.";
            }
            break;

        case "loginAgainWithNewPassword":
            {
                message = "Login again with new password";
            }
            break;

        default:
            {
                document.getElementById('alert').style.display = "none";
                message = ""
            }
    }
}