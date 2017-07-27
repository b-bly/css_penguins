$(document).ready( function() {
    console.log('jqeury sourced');
    //This code will run after your page loads
    var penguinClass = '.penguin';
    penguinClass += Math.floor(Math.random()*8);
    var randPenguin = $(penguinClass);

    var yeti = $('.yeti');

    //insert yeti before randPenguin
    yeti.insertBefore(randPenguin);
    //remove yeti
    yeti.remove;

    $(".yeti").mousedown(function() {
        alert("Yaaaarrrr!");
    });

});