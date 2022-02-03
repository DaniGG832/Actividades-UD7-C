/* eslint-disable no-use-before-define */
// PARTE PETICIÓN AJAX

 async function peticion(urlServidor) {
    try {
        let promesa = fetch(urlServidor)
        console.log(promesa);
        let response = await promesa;
        console.log(response);
        let data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Error:', error.message);
    }

     /* .then((response) => {
        if (response.ok) { 
          return response.json();
        }
        throw new Error(response.status);
      })
      .then((data) => {
        console.log('Los datos son:', data);
        numeroPaginas(data);
        generarTabla(data);
      })
      .catch((err) => {
        console.error('Error:', err.message);
      }); */
  }

let divVacio = document.querySelector('#resultado');

  async function recojerPromesa(url) {
     
    console.log(await peticion(url));
    let data = await peticion(url);
    divVacio.innerHTML="";
    numeroPaginas(data);
    generarTabla(data);
  }

  document.getElementById('botSolicitud').addEventListener('click', () => {
    recojerPromesa('https://reqres.in/api/users');
  });
  
  // PARTE TRATAMIENTOS DATOS - DOM
  function numeroPaginas(objeto) {
    
    const parrafo = document.createElement('p');
    const numPagina = objeto.page;
    const numPaginas = objeto.total_pages;
    const cadena = `Página ${numPagina} de ${numPaginas}`;
  
    parrafo.innerText = cadena;
    document.getElementById('resultado').appendChild(parrafo);
  }
  
  function generarCabecera(tabla) {
    const cabecera = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    const celdasCabecera = '<th>id</th><th>Nombre</th><th>Apellido</th><th>Email</th>';
    filaCabecera.innerHTML = celdasCabecera;
    cabecera.appendChild(filaCabecera);
    tabla.appendChild(cabecera);
  }
  
  function generarCelda(contenido, fila) {
    const celda = document.createElement('td');
    celda.innerText = contenido;
    fila.appendChild(celda);
  }
  
  function generarFila(usuario) {
    const fila = document.createElement('tr');
    const celdaId = usuario.id;
    const celdaNombre = usuario.first_name;
    const celdaApellido = usuario.last_name;
    const celdaEmail = usuario.email;
  
    generarCelda(celdaId, fila);
    generarCelda(celdaNombre, fila);
    generarCelda(celdaApellido, fila);
    generarCelda(celdaEmail, fila);
  
    return fila;
  }
  
  function generarCuerpo(tabla, objeto) {
    const cuerpo = document.createElement('tbody');
    const usuarios = objeto.data;
  
    usuarios.forEach((usuario) => {
      const fila = generarFila(usuario);
      cuerpo.appendChild(fila);
    });
  
    tabla.appendChild(cuerpo);
  }
  
  function generarTabla(objeto) {
    const tabla = document.createElement('table');
    generarCabecera(tabla);
    generarCuerpo(tabla, objeto);
    document.getElementById('resultado').appendChild(tabla);
  }