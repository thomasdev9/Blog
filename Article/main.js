$(document).ready(function(){
    $(".label").click(function(){
        $("#article").toggleClass("dark");
        $("#article-container").toggleClass("dark-body");
        $("#article-container h2").toggleClass("dark-light");
        $("#article-container p").toggleClass("light");
        $("#line-top").toggleClass("light-top");
        $("#line-bottom").toggleClass("light-top");
        $(".article-details ul li span").toggleClass("light");
    });
});