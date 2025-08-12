
function login()
{
    var uid = document.getElementById("username").value;
    var pid = document.getElementById("password").value;

    if (uid === "Satyajit" && pid === "Satyajit123") {
        alert("Login Successful");
        window.location.href = "index.html"; 
    } else {
        alert("Invalid Credentials");
    }
}