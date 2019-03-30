jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>1){
            $('#container_menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<1){
            $('#container_menu').removeClass('fixed');
        }
    });
});