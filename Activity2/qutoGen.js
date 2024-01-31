const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ];
  
  const button = document.getElementById("generateButton")

  button.addEventListener('click',(e)=>{
    const randomIndex = Math.floor(Math.random()*quotes.length);
     const display = document.getElementById("quote")
     display.textContent = quotes[randomIndex]
  })
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote;
  }
  