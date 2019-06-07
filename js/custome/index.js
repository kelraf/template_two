$(document).ready(function() {
    $("#click-icon-box").click(function() {
        $("#remove-me").toggleClass("remove-me");
        $("#animate-line-one").toggleClass("animate-line-one");
        $("#animate-line-three").toggleClass("animate-line-three");

 
        // show-nav hide-nav
        $("#header-cont").toggleClass("temp-show");
        $("#nav-bar").toggleClass("show-nav");
        $(".logo-box-top").toggleClass("logo-box-top-hide");

    });

    $("#btn-one").click(function() {

        $(".nav-items-box").find(".current-btn").removeClass("current-btn");
        $(this).addClass("current-btn");

        $(".gallary-cont").find(".enabled-item").removeClass("enabled-item").addClass("disabled-item");

        $(".gallary-cont").find(".current-row").slideUp(400, function(){
            $(".gallary-one").slideDown(400, function() {
                $(".gallary-one").children().removeClass("disabled-item").addClass("enabled-item");
            }).addClass("current-row"); 
        }).removeClass("current-row");  
                     
    });

    $("#btn-two").click(function() {

        $(".nav-items-box").find(".current-btn").removeClass("current-btn");
        $(this).addClass("current-btn");

        $(".gallary-cont").find(".enabled-item").removeClass("enabled-item").addClass("disabled-item");

        $(".gallary-cont").find(".current-row").slideUp(400, function(){
            $(".gallary-two").slideDown(400, function() {
                $(".gallary-two").children().removeClass("disabled-item").addClass("enabled-item");
            }).addClass("current-row"); 
        }).removeClass("current-row");  
                     
    });


    $("#btn-three").click(function() {

        $(".nav-items-box").find(".current-btn").removeClass("current-btn");
        $(this).addClass("current-btn");

        $(".gallary-cont").find(".enabled-item").removeClass("enabled-item").addClass("disabled-item");

        $(".gallary-cont").find(".current-row").slideUp(400, function(){
            $(".gallary-three").slideDown(400, function() {
                $(".gallary-three").children().removeClass("disabled-item").addClass("enabled-item");
            }).addClass("current-row"); 
        }).removeClass("current-row");             
    });


    $("#btn-four").click(function() {

        $(".nav-items-box").find(".current-btn").removeClass("current-btn");
        $(this).addClass("current-btn");

        $(".gallary-cont").find(".enabled-item").removeClass("enabled-item").addClass("disabled-item");

        $(".gallary-cont").find(".current-row").slideUp(400, function(){
            $(".gallary-four").slideDown(400, function() {
                $(".gallary-four").children().removeClass("disabled-item").addClass("enabled-item");
            }).addClass("current-row"); 
        }).removeClass("current-row");             
    });
});