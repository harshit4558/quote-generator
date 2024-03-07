const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const loader = document.getElementById("loader");


let apiQuotes = [];

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;

}


function newQuotes() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (quoteText.textContent.length > 2) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote")
    }
    authorText.innerHTML = quote.author;
    
    quoteText.innerHTML = quote.text;
    complete();
}



async function getQuotes() {
    loading();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    } catch (error) {
        // Error
    }
    }

    function tweetQuote() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
        window.open(twitterUrl, "_blank")
    }


    // On Load
getQuotes();
