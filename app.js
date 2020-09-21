var quotes = [
    "Java is to JavaScript what Car is to Carpet",
    "Sometimes it pays to stay in bed  on Monday, rather than spending the rest of the week debugging Monday's code.",
    "Controlling complexity is the essence of computer programming.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Code never lies, comments sometimes do."
         ]

var btn = document.getElementById('button');
function getQuote() {
      	var randomNumber = Math.floor(Math.random() * quotes.length)
      	document.querySelector('#newQuoteSection').innerHTML = quotes[randomNumber]
      }    

btn.addEventListener('click', getQuote);

