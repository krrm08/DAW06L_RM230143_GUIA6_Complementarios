document.addEventListener("DOMContentLoaded", function () {
    var fileInput = document.getElementById("fileInput");
    var validateButton = document.getElementById("validateButton");
    var resultMessage = document.getElementById("result");

    validateButton.addEventListener("click", function () {
        var fileName = fileInput.value;
        var fileExtension = fileName.split('.').pop().toLowerCase();

        // Expresión regular para validar las extensiones de archivo permitidas
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(fileName)) {
            resultMessage.textContent = "Error: El archivo seleccionado no es una imagen válida.";
            resultMessage.style.color = "red";
        } else {
            resultMessage.textContent = "El archivo seleccionado es una imagen válida.";
            resultMessage.style.color = "green";
        }
    });
});
