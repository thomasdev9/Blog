$(document).ready(function(){
    $(".label").click(function(){
      $(".card-body").toggleClass("dark-body");
      $("#cards").toggleClass("dark");
      $("#entry-text").toggleClass("dark-light");
      $(".card-text").toggleClass("light");
      $(".card-title").toggleClass("dark-light");
      $(".btn-outline-dark").toggleClass("light-more");
      $(".hr-style").toggleClass("light-hr");
      $(".page-item a").toggleClass("dark");
    });
});
