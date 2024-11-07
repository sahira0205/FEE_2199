function generateNumber() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    
    if (min >= max) {
      document.getElementById('result').textContent = 'Please ensure minimum is less than maximum.';
      return;
    }
    
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = `Generated Number: ${randomNumber}`;
  }
  