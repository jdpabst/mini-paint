$(document).ready(function(event) {
    var color = 'white';
    var colors = 'red green blue yellow white';
    var clickity = false;

    $('.box').on('mousedown', function(){
        clickity = !clickity;
    })
    // $('.box').on('mouseup', function(){
    //     clickity = true;
    // })

    $('.box').on('mouseover', function(event) {
        if(clickity) {
           $(this).addClass(color);
        }

    });

$('.box').dblclick(function(event) {
    $(this).removeClass(colors);
});

$('#reset').click(function(event){
    $('.box').removeClass(colors);

});


$('#red').click(function(event){
    color = 'red';
});
$('#blue').click(function(event){
    color = 'blue';
});
$('#green').click(function(event){
    color = 'green';
});
$('#yellow').click(function(event){
    color = 'yellow';
});
$('#white').click(function(event){
    color = 'white';
});


})