(function(){
    var quotes = [
		  {text:"UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity"}
		  ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = '<aside>'+quote.text+'</aside>';
})();
