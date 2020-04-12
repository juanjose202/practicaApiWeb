


//array de paginas
let paginas = [];

//pagina temporal para funcion de actualizar
let paginaTemporal = null

/**
 * metodo para obtener todas las paginas
 */
function obtenerPaginas() {

  axios.get("http://localhost:3001/paginas").then((response) => {

    let lista = document.getElementById("listaPaginas")
    paginas = response.data.info;
    let data = ""

    for (let i = 0; i < paginas.length; i++) {
      let miPagina = paginas[i];
      data += "<tr>"
      data += `<td>${miPagina.id}</td>`
      data += `<td>${miPagina.url}</td>`
      data += `<td>${miPagina.nombre}</td>`
      data += `<td>${miPagina.descripcion}</td>`
      data += `<td><button type="button" onclick="cargarInformacion(${miPagina.id})" class="btn btn-primary btn-sm">Editar</button> </td>`
      data += '<td><button type="button" onclick="eliminarPagina(' + miPagina.id + ')" class="btn btn-primary btn-sm">Eliminar</button> </td>'
      data += "</tr>"
    }

    lista.innerHTML = data;

  })
    .catch((error) => {
      console.log(error);
    });


}

/**
 * metodo para crear una pagina y agregarla a la base de datos
 */
function crearPagina() {

  let pagina = obtenerValores()

  axios
    .post("http://localhost:3001/paginas", pagina)
    .then((response) => {
      obtenerPaginas()
      limpiarForm()
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });


}


/**
 * metodo que obtiene los valores desde los campos de text llenados por el usuario 
 */
function obtenerValores() {
  let url = document.getElementById("link").value
  let nombre = document.getElementById("nombre").value
  let descripcion = document.getElementById("descripcion").value

  let miPagina = { url, nombre, descripcion }
  return miPagina

}

/**
 * metodo que limpia los campos una vez que fue creada y agregada la nueva pagina
 */
function limpiarForm() {

  document.getElementById("link").value = ""
  document.getElementById("nombre").value = ""
  document.getElementById("descripcion").value = ""
  document.getElementById("btnCrearPagina").style.display = "inline"
  document.getElementById("btnEditarPagina").style.display = "none"

}

/**
 * metodo para eliminar una pagina
 * @param {*} id  id de la pagina en la base de datos
 */
function eliminarPagina(id) {

  axios.delete(`http://localhost:3001/paginas/${id}`)
    .then((response) => {
      obtenerPaginas()
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

}

/**
 * metodo para llenar los campos de texto con los datos de una pagina seleccionada para editar
 * @param {*} index  id de la pagina en la base de datos
 */
function cargarInformacion(index) {

  for (let i = 0; i < paginas.length; i++) {

    let pagina = paginas[i]

    if (pagina.id == index) {
      paginaTemporal = index
      document.getElementById("link").value = pagina.url
      document.getElementById("nombre").value = pagina.nombre
      document.getElementById("descripcion").value = pagina.descripcion
      document.getElementById("btnCrearPagina").style.display = "none"
      document.getElementById("btnEditarPagina").style.display = "inline"
      return;
    }
  }
}


/**
 * metodo para actualizar la pagina
 */
function actualizarPagina() {

  let pagina = obtenerValores();

  console.log(paginaTemporal
  )

  axios
    .put(`http://localhost:3001/paginas/${paginaTemporal}`, pagina)
    .then((response) => {
      obtenerPaginas()
      limpiarForm()
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

}


//llamado de la funcion obtenerPaginas para que cargue todas las paginas cada que se inicie la pagina principal
obtenerPaginas()