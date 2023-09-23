document.addEventListener("DOMContentLoaded", function () {
    var wordList = document.getElementById("wordList");
    var searchInput = document.getElementById("searchInput");
    var showDefinitionButton = document.getElementById("showDefinitionButton");
    var definitionText = document.getElementById("definition");

    // Definir el diccionario con palabras y definiciones
    var dictionary = {
        'Aerobic': 'Definición de Aerobic...',
        'Ajedrez': 'Definición de Ajedrez...',
        'Atletismo': 'Definición de Atletismo...',
        // Agrega más palabras y definiciones aquí...
    };

    // Cargar las palabras en el cuadro de lista
    for (var word in dictionary) {
        wordList.options[wordList.options.length] = new Option(word);
    }

    // Función para mostrar la definición al hacer doble clic en una palabra
    wordList.addEventListener("dblclick", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    showDefinitionButton.addEventListener("click", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    searchInput.addEventListener("keyup", function () {
        var searchText = searchInput.value.trim().toLowerCase();

        wordList.options.length = 0; // Limpiar la lista

        if (searchText === "") {
            for (var word in dictionary) {
                wordList.options[wordList.options.length] = new Option(word);
            }
        } else {
            for (var word in dictionary) {
                if (word.toLowerCase().includes(searchText)) {
                    wordList.options[wordList.options.length] = new Option(word);
                }
            }
        }
    });
});

