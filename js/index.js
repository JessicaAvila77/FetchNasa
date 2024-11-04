
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then (nasa => {

    let tabla = `<tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Nombre de la compañia</th>
            <th>Username</th>
          </tr>`

        for (let db of nasa) {
            tabla += `<tr>
            <td>${db.id}</td>
            <td>${db.name}</td>
            <td>${db.company.name}</td>
            <td>${db.username}</td>         
          </tr>`

        }

    document.getElementById("tablaNasa").innerHTML = tabla


})