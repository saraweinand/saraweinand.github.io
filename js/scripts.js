 $(document).ready(function() {
            $('.menu-link').bigSlide();
        });


        $(document).ready( function() {
    $('.img-title').ready(function(){
        $('.img-title').hide()
});

    $('.projects').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
    
});


//lightbox

(function($) {
  
  // Build lightbox
  $('.open-lightbox').on('click', function(e) {
    e.preventDefault();
    var image = $(this).attr('href');
    $('html').addClass('no-scroll');
    $('body').append('<div class="lightbox"><img src="' + image + '">');
  });
  
  // Close lightbox
    $('body').on('click', '.lightbox', function() {
    $('html').removeClass('no-scroll');
    $('.lightbox').remove();
  });
  
})(jQuery);









