$(function(){
    $('.navbar-toggler').click(function(){
        $(this).css({
            display: 'none'
        })
        $('header').css({
            filter: 'blur(8px)'
        });
        $('section').css({
            filter: 'blur(8px)'
        });
        $('footer').css({
            filter: 'blur(8px)'
        }); 
        
        $('.header-p1').animate({
            opacity: '1',
            left: '200px'
        }, 300, 'linear');
        $('.header-p2').animate({
            opacity: '1',
            left: '200px'
        }, 500, 'linear');
        $('.header-p3').animate({
            opacity: '1',
            left: '200px'
        }, 700, 'linear');
        $('.header-p4').animate({
            opacity: '1',
            left: '200px'
        }, 900, 'linear');

    })
    $('.btn-close').click(function(){
        $('.navbar-toggler').css({
            display: 'block'
        })
        $('header').css({
            filter: 'blur(0)'
        });
        $('section').css({
            filter: 'blur(0)'
        });
        $('footer').css({
            filter: 'blur(0)'
        });

        $('.header-p').css({
            opacity: '0',
            left: '0'
        })
    })

})