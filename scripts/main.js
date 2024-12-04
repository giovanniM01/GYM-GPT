document.getElementById('routine-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const muscleGroup = document.getElementById('muscle-group').value;
    const time = document.getElementById('time').value;
    const goal = document.getElementById('goal').value;
  
    // Simular datos generados (ejemplo estático)
    const exercises = [
      { name: 'Sentadilla', gif: 'assets/gifs/squat.gif', description: 'Haz sentadillas profundas.' },
      { name: 'Flexiones', gif: 'assets/gifs/pushup.gif', description: 'Haz flexiones de brazo.' }
    ];
  
    // Mostrar los ejercicios en la página
    const container = document.getElementById('routine-container');
    container.innerHTML = exercises.map(exercise => `
      <div class="exercise-card">
        <img src="${exercise.gif}" alt="${exercise.name}">
        <div>
          <h3>${exercise.name}</h3>
          <p>${exercise.description}</p>
        </div>
      </div>
    `).join('');
  });
  