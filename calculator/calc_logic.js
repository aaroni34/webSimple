var operator = "";
var n = "";

function makeOperation(n1, n2, op){
    switch(op){
        case '+':
            return(+n1 + +n2);
        case '-':
            return(n1 - n2);
        case '*':
            return(n1 * n2);
        case '/':
            if(n2 === '0') return "ERROR: ZERO DIVISON";
            return(n1/n2);
    }
};

$(document).ready(function(){
    // -- Read Only Input Text --
    $('#info').attr('readonly', true);

    // -- Operators --
    $('.sign').click(function(){
        var active = $('.active');
        
        if(active.length === 0 && operator !== "" && n !== ""){
            var result = makeOperation(n, $('#info').val(), operator);
            $('#info').val(result);
        }
        // Turn off if there's another sign active
        $('.active').removeClass('active');  
        // Turn on this button to active (with some delay)
        operator = $(this).val();
        $(this).addClass('active'); 
    });

    // -- +/- --
    $('#changesign').click(function(){
        var info = $('#info').val();
        if(info[0] === '-')     info[0] = '+';
        else                    info[0] = '-'
    });

    // -- Numbers --
    $('.number').click(function(){
        var info = $('#info').val();
        var active = $('.active');

        if(info === "" && active.length > 0){

        }
        // If operator selected and there is some number reset number
        if(active.length > 0 ){
            if(info !== ""){
                n = info;
                $('#info').val($(this).val());
            }
            active.removeClass('active');
        }else{
            $('#info').val($('#info').val() + $(this).val());
        }
    });

    // -- Equal --
    $('#equal').click(function(){
        // -- Calculate and show result on info panel
        var result = makeOperation(n, $('#info').val(), operator);
        $("#info").val(result);
        operator = "";
        n = "";
    });

    // -- C --
    $('#c').click(function(){
        $('#info').val("");
        operator = "";
        n = "";
    });

    // -- Keyboard Events--
    $(document).keyup(function (e) {
        switch(true){
            case(e.key >= '0' && e.key <= '9'):
                $('#'+e.key).click();
                break;
            case(e.key === 'Backspace'):
                if($('#info').val() === "")     $('#c').click();
                else                            $('#info').val($('#info').val().slice(0, -1));
                break;
            case(e.key === '*'):
                $('#mult').click();
                break;
            case(e.key === '/'):
                $('#div').click();
                break;
            case(e.key === '+'):
                $('#plus').click();
                break;
            case(e.key === '-'):
                $('#minus').click();
                break;
            case(e.key === '=' || e.key === 'Enter'):
                $('#equal').click();
                break;
            case(e.key === 'c'):
                $('#c').click();
                break;
        }
    });
});