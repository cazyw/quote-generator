function getQuote(){
    //https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?
    //http://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
        var html = "";
        var quote = json["quoteText"];
        var author = json["quoteAuthor"];

        if (author == "") {
            author = "Anonymous"
        }
        html += "<div class = 'quote-text text-center'><i class='fa fa-quote-left'></i> " + quote + " <i class='fa fa-quote-right'></i></div></span>";
        html += "<div class = 'quote-author text-center'> - " + author + " - </div>";
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text=' + encodeURIComponent('"' + quote  + '"\n - ' +  author))
        $('#tweet').attr('data-text', encodeURIComponent('"' + quote  + '"\n - ' +  author))
        $("#quote-container").removeClass("hidden");
        $("#quote-animated").html(html).fadeIn();
        $("#quote-container").height($("#quote-animated").height());
        $("#quoteButton").html("<i class='fa fa-refresh'></i> Get New Quote");
        
        
    });
}

$(document).ready(function(){
    $("#quoteButton").html("<i class='fa fa-refresh fa-spin'></i> Getting Quote");
    getQuote();

    $("#quoteButton").on("click", function(){
        $("#quote-animated").fadeOut();
        $("#quoteButton").html("<i class='fa fa-refresh fa-spin'></i> Getting Quote");
        getQuote();
    });

});