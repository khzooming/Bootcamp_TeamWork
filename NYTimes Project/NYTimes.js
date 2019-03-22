


var searchT = $("#searchTerm").val()
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchT + "&api-key=0LT6UlwJdwLccdA9JRXOaX8ONwZkWR33"






$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function (response) {
    console.log(response)
  })
  
  


    
    
    
    
    
    
    
    