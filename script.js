const quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "Life always happens and problems never stop coming", category: "Life" },
  { text: "Be yourself; everyone else is already taken", category: "Inspiration" },
  { text: "Success is not final, failure is not fatal", category: "Motivation" }
];

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `"${quotes[randomIndex].text}" — ${quotes[randomIndex].category}`;
}

function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (!text || !category) {
    alert("Please enter both quote and category!");
    return;
  }

  quotes.push({ text, category });
  saveQuotes(); 
  textInput.value = "";
  categoryInput.value = "";
  alert("Quote added successfully!");
}

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

displayRandomQuote();
