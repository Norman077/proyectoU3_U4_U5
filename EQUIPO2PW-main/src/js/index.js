document.getElementById('random-button').addEventListener('click', function() {
    // Llamada a la API
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Procesar y mostrar el resultado
            var resultContainer = document.getElementById('result-container');
            resultContainer.innerHTML = '';

            var drink = data.drinks[0];

            // Crear elementos para mostrar la información del coctel
            var nameElement = document.createElement('h2');
            nameElement.textContent = drink.strDrink;

            var categoryElement = document.createElement('p');
            categoryElement.textContent = 'Category: ' + drink.strCategory;

            var instructionsElement = document.createElement('p');
            instructionsElement.textContent = 'Instructions: ' + drink.strInstructions;

            var imageElement = document.createElement('img');
            imageElement.src = drink.strDrinkThumb;

            // Agregar elementos al contenedor de resultados
            resultContainer.appendChild(nameElement);
            resultContainer.appendChild(categoryElement);
            resultContainer.appendChild(instructionsElement);
            resultContainer.appendChild(imageElement);
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
});