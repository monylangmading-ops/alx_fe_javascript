const quotes = [
  { text: "Life always happens and problems never stop coming", category: "Life" },
  { text: "Be yourself; everyone else is already taken", category: "Inspiration" },
  { text: "Success is not final, failure is not fatal", category: "Motivation" }
];


function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `"${quotes[randomIndex].text}" — ${quotes[randomIndex].category}`;
};

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);


function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (quoteText !== "" && quoteCategory !== "") {
    quotes.push({ text: quoteText, category: quoteCategory });


    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    displayRandomQuote();
  } else {
    alert("Please enter both quote and category!");
  }
};
localStorage.setItem('quotes' , 'text');

function saveQuotes(){
  localStorage.setItem('quotes' , JSON.stringify('quotes'));
}
function loadQuotes(){
   const storedQuotes = localStorage.getItem("quotes");
   if(storedQuotes){
    const parsedQuotes = JSON.parse("quotes");
    quotes.push(...parsedQuotes);
   }
}
function addQuote(text , category){
quotes.push({text, category});
saveQuotes();
}