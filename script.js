fetch('https://api-tuboleto.cultura.pe/reserva/consulta-fechas-disponibles?nidruta=7')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Aquí el array con las fechas disponibles
  })
  .catch(error => {
    console.error('Error:', error);
  });
