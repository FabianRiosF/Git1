$(document).ready(main);

var contador = 1;

function main(){
    $('.menu-bar').click(function(){
        //$('nav').toggle();

        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
        }
    });


    $('.cierra-izquierda').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    $('.cierra-derecha').click(function(){
        if(contador == 1){
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};