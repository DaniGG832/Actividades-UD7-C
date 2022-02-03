async function cambiarContenido() {
    

    try {

        let promesa = fetch('./holamundo.txt')

        console.log(await (await promesa).text())
         
        
    } catch (error) {
        console.log("error " + error);
        
    }
    

}


const boton = document.getElementById('cambiaContenido');
boton.addEventListener('click', cambiarContenido);