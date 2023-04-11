var attempts = 5;
var lastAttemptTime = null;

function checkPincode() {
    var now = new Date().getTime();
    if (lastAttemptTime && now - lastAttemptTime < 300000) {
        var remainingTime = Math.ceil((300000 - (now - lastAttemptTime)) / 1000);
        alert("You have exceeded the maximum number of attempts. Please try again in " + remainingTime + " seconds.");
        return;
    }
    var pincode = document.getElementById("pincode").value;
    if (pincode == "1234") {
        window.location.href = "https://www.linkedin.com/in/touhidul77/";
    } else {
        attempts--;
        lastAttemptTime = now;
        alert("Incorrect pincode! You have " + attempts + " attempts remaining.");
        if (attempts == 0) {
            alert("You have exceeded the maximum number of attempts. Please try again later.");
            document.getElementById("pincode").disabled = true;
            setTimeout(function() {
                attempts = 5;
                document.getElementById("pincode").disabled = false;
            }, 300000);
        }
    }
}