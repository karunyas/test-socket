$(document).ready(function(){
    console.log("hi there");
    // $("enter").button();
    //$("enter").css({ width: '3000px', 'padding-top': '10px', 'padding-bottom': '10px' });
});

//sends messages back and forth with server using socket.io
$(function(){
    console.log("socket init");
    var socket = io();
    $('#time').click(function() {
        console.log("time?")
        socket.emit('time', new Date())
    });
    socket.on('message', function(arg){
        console.log("something:", arg);
    });
});

//toggles on click
$(function(){
    $('#panel2').click(function() {
        alert("well, we're done here")
        $('#forest').hide(); // can be done all in one line by using commas???
        $('#nlights').hide();
        $('#mtn').hide();
        $('#norway').hide();
        $('#flip').hide();
        $('#panel').hide();
        $('#flip2').hide();
        $('#flip3').hide();
        $('#panel3').hide();
        $('#panel2').text("Congrats!")
    });
});

//toggles on click
$(function(){
    $('#flip').click(function() {
        $('#panel').hide();
        $('#flip2').hide();
        $('#flip3').hide();
        $('#panel3').hide();
        $('#forest').hide(); // can be done all in one line by using commas???
        $('#nlights').hide();
        $('#mtn').hide();
        $('#norway').hide();
        $('#flip').text("sorry, you lost :(")
    });
});

$(function(){
    $('#flip3').click(function() {
        $('#panel').hide();
        $('#flip2').hide();
        $('#panel2').hide();
        $('#flip').hide();
        $('#panel3').hide();
        $('#flip3').text("you get one more try! choose an adventure")
    });
});


$(function(){
    $('#norway').click(function() {
        alert("oh, let's go on an adventure to the fjords")
        $('#forest').hide();
        $('#nlights').hide();
        $('#mtn').hide();
    });
});

$(function(){
    $('#forest').click(function() {
        alert("oh, let's go on an adventure to the forest")
        $('#norway').hide();
        $('#nlights').hide();
        $('#mtn').hide();
    });
});

$(function(){
    $('#mtn').click(function() {
        alert("oh, let's go on an adventure to the mountain")
        $('#forest').hide();
        $('#nlights').hide();
        $('#norway').hide();
    });
});

$(function(){
    $('#nlights').click(function() {
        alert("oh, let's go on an adventure to see the northern lights")
        $('#forest').hide();
        $('#norway').hide();
        $('#mtn').hide();
    });
});

$(function(){
    $('#enter').click(function(){
        $(this).hide();
        $("#heading").hide()
        $('#forest').show();
        $('#nlights').show();
        $('#mtn').show();
        $('#norway').show();
        $('#flip').show();
        $('#flip2').show();
        $('#flip3').show();
        $('#instr').show();

        alert("Now open whichever drawer you think contains the treasure or choose a place to continue your journey to by clicking on the associated element.");

        //$('#panel3').show();
        //$('#panel2').show();
        //$("#flip").show()
    });
});


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    $("#flip2").click(function(){
        $("#panel2").slideToggle("fast");
        $("#panel2").slideToggle("fast");
        $("#panel2").slideToggle("slow");
    });
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});