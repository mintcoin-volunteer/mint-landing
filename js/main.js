
$(document).ready(function(){
    $(".huh").click(function(){
        $(".text-wrap-description").toggleClass("no-show");
        $(".text-wrap-description .text-wrap-inner").toggleClass("fade-in fade-out");
        $(".bottom-1").toggleClass("fade-in-social fade-out-social");
        $(".bottom-1").removeClass("animate-first");
    });
    $(".join").click(function(){
        $(".text-wrap-join").toggleClass("no-show");
        $(".text-wrap-join .text-wrap-inner").toggleClass("fade-in fade-out");
        $(".bottom-1").toggleClass("fade-in-social fade-out-social");
        $(".bottom-1").removeClass("animate-first");
    });
})
