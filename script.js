document.addEventListener('keydown', function(event) {
    const keyDetailsElement = document.getElementById('keyDetails');
  
    // Display key details
    keyDetailsElement.innerHTML = `
      <p>Key Code: ${event.code}</p>
      <p>Key: ${event.key}</p>
      <p>Char Code: ${event.charCode}</p>
    `;
  });
  