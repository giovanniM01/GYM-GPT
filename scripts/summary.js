document.addEventListener('DOMContentLoaded', () => {
    // Obtener los datos almacenados en el navegador
    const time = localStorage.getItem('time');
    const goal = localStorage.getItem('goal');
    const muscles = JSON.parse(localStorage.getItem('muscles'));
  
    // Mostrar los datos en la página
    document.getElementById('summary-time').textContent = time || 'No especificado';
    document.getElementById('summary-goal').textContent = goal || 'No especificado';
  
    const musclesList = document.getElementById('summary-muscles');
    if (muscles && muscles.length > 0) {
      muscles.forEach(muscle => {
        const listItem = document.createElement('li');
        listItem.textContent = muscle;
        musclesList.appendChild(listItem);
      });
    } else {
      musclesList.innerHTML = '<li>No seleccionaste músculos</li>';
    }
  
    // Botón confirmar
    document.getElementById('confirm-button').addEventListener('click', () => {
      alert('Rutina confirmada. ¡A entrenar!');
      // Aquí podrías redirigir o enviar la información al backend
    });
  });
  