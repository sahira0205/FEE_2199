async function compileCode() {
    const code = document.getElementById('code').value;
    const languageId = document.getElementById('language').value;
    
    const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',  // Replace with your Judge0 API key
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({
        source_code: code,
        language_id: languageId
      })
    });
  
    const result = await response.json();
    document.getElementById('output').textContent = result.stdout || result.stderr || "Error: No output";
  }
  