let quotes =[
    { text: "Its never to late to take the first step", category :"Motivation"},
    { text : "Always try to believe in your self" , category : "Life"},
    { text: "Education is the key to life" , category : "School"},
    { text: "Life always happens and problems never stop coming" , category:"Life"}
];

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = `"${quotes[randomIndex].innerHTML}" - ${quotes[randomIndex].category}`;
}

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value;
  const quoteCategory = document.getElementById("newQuoteCategory").value;

  if (quoteText && quoteCategory) {
    quotes.push({ text: quoteText, category: quoteCategory });
    alert("New quote added!");
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  } else {
    alert("Please fill in both fields!");
  }
}
