$('#my404').mousemove(function(e){
    var moveX = (e.pageX * -1 / 15);
    var moveY = (e.pageY * -1 / 15);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px');
    console.log(1);
})