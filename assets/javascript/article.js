//reference our URLs with API Key
        //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    //Search specific word
    //return certain amount of articles
//AJAX Call to "GET"
//Then and function for response
//Display response

$("#run-search").on("click", function() {

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&fq={filter}&MAGrWnieaVgAmwWdMRUtgxF9sZeXHeKJ"

$.ajax ({
    url: queryURL,
    method: "GET"
});


.then(function(response){
   console.log(response)
    

});

});
