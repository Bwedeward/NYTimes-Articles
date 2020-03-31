//reference our URLs with API Key
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
//Search specific word
//return certain amount of articles
//AJAX Call to "GET"
//Then and function for response
//Display response

var article = "";

$("#run-search").on("click", function() {
  event.preventDefault();
  console.log("hi");

  var article = $(".form-control")
    .val()
    .trim();
  console.log(article);

  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    article +
    "&api-key=MAGrWnieaVgAmwWdMRUtgxF9sZeXHeKJ";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res) {
    console.log(res.response.docs[0]);


    for (var i = 0; i < res.response.docs.length; i++){
    var paragraph = $("<p>");
    paragraph.text(res.response.docs[i].abstract);
    $(".card-info").append(paragraph);}
  })
});
