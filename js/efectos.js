$(document).ready(function () {
    //El index seria el primer elemento a
    $('.menu a').each(function(index){
        $(this).css({
            top: '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });



    if( $(window).width() > 800){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //SCROLL DE LOS ELEMENTOS
    var acercaDe = $('#acerca-de').offset().top;
    var menu = $('#carta').offset().top;
    var galeria = $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe - 200
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu + 500
        }, 500)
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500)
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion + 200
        }, 500)
    });

});