// $(window).scroll(function(){
//     parallax();
// })

// function parallax(){

//     var wScroll = $(window).scrollTop();
//     console.log(wScroll)
//     $('.parallax--bg').css('background-position', 
//     'center '+(wScroll*0.75)+'px') 

//     $('.bigImg').css('top', wScroll)
//     $('.rolo').css('top', -8 + (wScroll*.005)+'em')
// }



$(window).scroll(function(){
    
    var wScroll = $(window).scrollTop();
    console.log(wScroll)

    // moving background
    $('.parallax--bg').css('background-position', 
    'center '+(wScroll*0.75)+'px') 

    // $('.bigImg').css('top', wScroll)
    $('.rolo').css('top', -8 + (wScroll*.005)+'em')


    // sideways scroll parallax
    var scroll_position = $(window).scrollTop()*2.5;
    $('.container-fluid').css({
        'background-position-x' : - scroll_position + 'px'
    })
})


// $(window).scroll(function(){
//     var scroll_position = $(window).scrollTop()*1;
//     $('.container-fluid').css({
//         'background-position-y' : - scroll_position + 'px'
//     })
// })

