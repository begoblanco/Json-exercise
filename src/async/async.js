fetch("toDos.json")

  .then((response) => response.json())

  .then((data) => {
    data.results.forEach((todo) => {
      console.log(todo.title);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
