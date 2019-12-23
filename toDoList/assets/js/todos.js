$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keydown(function(e){
    // If enter pressed, create a new ToDo
    if(e.keyCode == 13) { 
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>  " + $(this).val() + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type=text]").fadeToggle(500);
});