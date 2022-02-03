async function mostrarJSON(url) {
   
    
    try {
        let promesa = fetch(url)
        console.log(promesa);
        let response = await promesa;
        console.log(response);
        let data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Error:', error.message);
    }


}

  
  const boton = document.getElementById('mostrar');
  boton.addEventListener('click', ()=> mostrarJSO("datos.json"));

  async function mostrarJSO(url) {
    console.log( await mostrarJSON(url))
    let data =  await mostrarJSON(url);
    let resultado = document.getElementById('res');
        resultado.innerHTML = `${data.nombre} nació en ${data.nacimiento} en ${data.pais}`;

  }