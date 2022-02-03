function temporizador(milisegundos) {
    const promesa = new Promise((resolver, rechazar) => {
        const temp = setTimeout(() => {
          resolver('Tiempo Concluido');
          // clearTimeout(temp2); // Realmente no hace falta pq al resolverse la promesa, se finaliza y no se ejecuta reject
        }, milisegundos*2);
    
        setTimeout(() => {
          rechazar(Error('El tiempo no va bien'));
          clearTimeout(temp);
        }, milisegundos );
      });
      
      console.log(promesa);
      return promesa;
      
  }
  
  async function iniciar() {
    try {
        const ms = prompt('¿Cuántos milisegundos quieres contabilizar?');
        const promesa = await temporizador(ms);
        document.getElementById('resultado').innerHTML = promesa;
    } catch (error) {
       console.log(error) 
    }
    
  
    
}
    
  
  
  document.getElementById('boton').addEventListener('click', iniciar);