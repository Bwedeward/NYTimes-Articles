//reference our URLs with API Key
        //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    //Search specific word
    //return certain amount of articles
//AJAX Call to "GET"
//Then and function for response
//Display response

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=fq&MAGrWnieaVgAmwWdMRUtgxF9sZeXHeKJ"

$.ajax ({
    url: queryURL
    method: "GET"
});

.then(function(response){
   

});
