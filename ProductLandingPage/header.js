$( document ).ready(function() {
    console.log("ready!");

    $(".menu-container").hide();
    $("#login-panel").hide();

    $(".menu-link").mouseenter(function() {
        console.log("hovered");
        $(".menu-container").show();
    });

    $(".menu-container").mouseleave(function() {
        console.log("hovered out");
        $(".menu-container").hide();
    });

    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    });

    $("#header-login-text").mouseenter(function() {
        $("#login-panel").show();
    });

    $("#login-panel").mouseleave(function() {
        $("#login-panel").hide();
    });

});
