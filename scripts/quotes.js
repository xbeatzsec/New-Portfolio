(function(){
    var quotes = [
		  {text:"Mudar aqui depois"}
		  ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = '<aside>'+quote.text+'</aside>';
})();
