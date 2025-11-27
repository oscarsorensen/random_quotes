fetch("data/quotes.json")
  .then(r => r.json())
  .then(quotes => {

    document.querySelector("#knap").onclick = function(){
        let r = Math.floor(Math.random() * quotes.length);
        document.querySelector("#quote").textContent = quotes[r];
    };

  });
