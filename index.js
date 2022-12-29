const url = "https://api.kanye.rest"

function getKanyeQuote() {
    return fetch(url)
    .then((res) => {  
        if (res.ok) return res.json();
        else throw res.status;})
    .then((res) => {console.log(res.quote)});
  }

  getKanyeQuote();