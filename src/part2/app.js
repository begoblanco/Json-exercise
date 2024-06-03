fetch("/src/toDos.json")
  .then((response) => response.json())

  .then((data) => {
    const tableBody = document.querySelector("#todo-table tbody");
    data.results.forEach((todo) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.priority}</td>
            <td>${todo.isDone}</td>
        `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
