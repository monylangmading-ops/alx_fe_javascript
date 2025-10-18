const quotes =[
  {text: "Life is full of up and downs" , category: "Motivation"},
   {text: "Always try your best to shoe up", category: "Inspiration"},
   {text: "Education is the key to life" , category: "School"} ,
    {text: "userinput", category: "userinput"}
  
];

function displayRandomQuote(){
   const quoteDisplay = document.getElementById('quoteDisplay');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${randomQuote.text}" — ${randomQuote.category}`;
}


function addQuote(){
 const quoteInput= document.getElementById('newQuoteText').value.trim();
 const categoryInput= document.getElementById('newQuoteCategory').value.trim();

if(quoteInput==="" || categoryInput===""){
alert("Please enter both quote and category!");
quotes.push({ text: quoteInput, category: categoryInput });
alert("Quote added!");

return;
}
quotes.push({ text: quoteInput, category: categoryInput });
alert("Quote added!");

}
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click' , addQuote);
