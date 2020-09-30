$(document).ready(function(){
  // $("#news-articles").hide();
  // $("#articles").hide();
  // $("#name-image").hide();
})

// 83f5e784408070fb58bc521846521f8c
// example&token=API-Token

function displayArticles(celebrity) {

  var queryUrl = `https://gnews.io/api/v4/search?q=${celebrity}&token=83f5e784408070fb58bc521846521f8c`;


    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then (function(response){

      var title1 = response.articles[0].title;

      var articleUrl1 = response.articles[0].url;
      var articleLink1 = $('<a href="' + articleUrl1 + '" target="_blank">' + title1 + '</a>');
      var articleHead1 = $("<h3>");

      articleHead1.addClass("articleHead");
      $(articleHead1).append(articleLink1);
      $("#article1").append(articleHead1);

      var imgUrl1 = response.articles[0].image;
      var articleImg1 = $('<img src="' + imgUrl1 + '">');
      articleImg1.addClass("articleImg");
      $("#article1").append(articleImg1);
    

      var title2 = response.articles[1].title;

      var articleUrl2 = response.articles[1].url;
      var articleLink2 = $('<a href="' + articleUrl2 + '" target="_blank">' + title2 + '</a>');
      var articleHead2 = $("<h3>");
      articleHead2.addClass("articleHead");
      $(articleHead2).append(articleLink2);
      $("#article2").append(articleHead2);

      var imgUrl2 = response.articles[1].image;
      var articleImg2 = $('<img src="' + imgUrl2 + '">');
      articleImg2.addClass("articleImg");
      $("#article2").append(articleImg2);
      

      var title3 = response.articles[2].title;

      var articleUrl3 = response.articles[2].url;
      var articleLink3 = $('<a href="' + articleUrl3 + '" target="_blank">' + title3 + '</a>');
      var articleHead3 = $("<h3>");
      articleHead3.addClass("articleHead");
      $(articleHead3).append(articleLink3);
      $("#article3").append(articleHead3);

      var imgUrl3 = response.articles[2].image;
      var articleImg3 = $('<img src="' + imgUrl3 + '">');
      articleImg3.addClass("articleImg");
      $("#article3").append(articleImg3);
      


    });

  $("#article1").empty(); 
  $("#article2").empty(); 
  $("#article3").empty();

}    

