


function obtenerPaginas(){

    axios.get("http://localhost:3001/paginas")
  .then((response) => {
    console.log(response.data);
    
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });


}

obtenerPaginas()