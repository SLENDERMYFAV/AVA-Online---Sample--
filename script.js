$(document).ready(function (){
    var scrollPosition = 0
    $(window).scroll(function (){
        scrollPosition = $(this).scrollTop()
        if(scrollPosition > 100){
            $('nav').css('background-color', '#13151a')
            $('#NASA').css('visibility','visible')
            $('nav').css('margin-top', '0px')
            $('nav').css('transition', 'all .4s ease-in-out,background-color .4s ease-in-out .4s')
            $('nav').css('position', 'fixed')
            $('#color').css('width', '150px')
        }

        else {
            $('nav').css('background-color', '')
            $('#NASA').css('visibility','hidden')
            $('nav').css('margin-top', '10px')
            $('nav').css('transition', 'all .4s ease-in-out,background-color .4s ease-in-out .4s')
            $('nav').css('position', 'initial')
            $('#color').css('width', '180px')
        }
        console.log(scrollPosition)
    })
})
