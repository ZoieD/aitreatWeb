$(document).ready(function() {

    var buttons = { previous:$('#jslidernews1 .button-previous') ,
        next:$('#jslidernews1 .button-next') };
    $lof_slider = $('#jslidernews1').lofJSidernews( { interval : 3000,
        easing			: 'easeInOutQuad',
        duration		: 1200,
        auto		 	: true,
        maxItemDisplay  : 3,
        startItem:0,
        navPosition     : 'horizontal',
        navigatorHeight : null,
        navigatorWidth  : null,
        buttons:buttons} );

    //four slide
    $(".four-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,    
      transitionStyle:"fade",
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

    });
    //three slide
    $(".three-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,    
      transitionStyle:"fade",
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

    });
    //six slide
    $(".six-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,    
      nav : true,
      transitionStyle:"fade",
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

    });
    
    //smooth scroll
    $(function() {
      $('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
          }
        }
      });
    });
});    