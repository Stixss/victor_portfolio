$(document).ready(function(){

    close_menu()

});

function close_menu(){
    $(".closecontact").on("click",function(){
        $("#contact").animate({height: "0px"},500)
    })
}