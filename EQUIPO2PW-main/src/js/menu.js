document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  var searchInput = document.getElementById('search-input').value;

  // Llamada a la API de búsqueda de bebidas
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInput)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          // Procesar y mostrar el resultado
          var resultContainer = document.getElementById('result-container');
          resultContainer.innerHTML = '';

          if (data.drinks === null) {
              // Mostrar mensaje si no se encontraron resultados
              var messageElement = document.createElement('p');
              messageElement.textContent = 'No se encontraron bebidas con ese nombre.';
              resultContainer.appendChild(messageElement);
          } else {
              // Recorrer las bebidas encontradas
              data.drinks.forEach(function(drink) {
                  // Crear elementos para mostrar la información de cada bebida
                  var nameElement = document.createElement('h2');
                  nameElement.textContent = drink.strDrink;

                  var categoryElement = document.createElement('p');
                  categoryElement.textContent = 'Categoría: ' + drink.strCategory;

                  var instructionsElement = document.createElement('p');
                  instructionsElement.textContent = 'Instrucciones: ' + drink.strInstructions;

                  var imageElement = document.createElement('img');
                  imageElement.src = drink.strDrinkThumb;

                  // Agregar elementos al contenedor de resultados
                  resultContainer.appendChild(nameElement);
                  resultContainer.appendChild(categoryElement);
                  resultContainer.appendChild(instructionsElement);
                  resultContainer.appendChild(imageElement);
              });
          }
      })
      .catch(function(error) {
          console.log('Error:', error);
      });
});