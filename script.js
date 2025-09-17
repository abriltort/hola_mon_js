javascript
function saluda() {
    console.log("Hola món! Has clicat el botó!");
    //document.write("Hola món! Has clicat el botó!");
    document.getElementById("text").textContent = "Hola món! Has clicat el botó!"
}

function mostrarEdat() {
    let edat = document.getElementById("edat").value;
    document.getElementById("numeroEdat").textContent = "La teva edat és: " + edat;
}

 