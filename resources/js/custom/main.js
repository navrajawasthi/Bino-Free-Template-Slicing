(function ($) {

  var COMMON = {
    init: function () {
      this.cacheDOM();

      $(window).on('resize', this.reCalcOnResize.bind(this))
    },
    cacheDOM: function () {
      this.$body = $('body');
      this.windowWidth = $(window).width();
    },
    reCalcOnResize: function () {
      this.windowWidth = $(window).width();
    }
  };

  var mainNavigation = {
    init: function () {
      this.$mainNavContainer = $('#site-navigation');
      this.$menuToggler = this.$mainNavContainer.find('.menu-toggle');
      this.$mainMenuContainer = this.$mainNavContainer.find('.menu-primary-container');
      this.$mainMenu = this.$mainNavContainer.find('#primary-menu');
      console.log(this.$menuToggler);
      this.$menuToggler.on('click', this.toggleMenu.bind(this));
    },
    toggleMenu: function (e) {
      e.preventDefault();
      this.$mainMenuContainer.toggleClass('shown');
    }
  };

  $(function () {
    COMMON.init();
    mainNavigation.init();
  });


  //menu toggle
  $('.menu-toggle').on('click', function (e) {
    $('body').toggleClass("active-responsive-menu");
  });

  //sticky
  $(document).on("scroll", function () {
    if ($(document).scrollTop()) {
      $('.header-wrapper').addClass('active_sticky');
    }
    else {
      $('.header-wrapper').removeClass('active_sticky');
    }
  })


  // Hide header on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header-wrapper').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 0);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > 0) {
      // Scroll Down
      $('.header-wrapper').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.header-wrapper').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }


  // Slick Slider for banner
  $('.hero-slider-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: true,
  });

  // Slick Slider for Research Wrapper 
  $('.hero-slider-wrap').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
  });

   $('.grid').imagesLoaded( function() { // it will load the image of isotope 
  //isotope

  var $grid = $('.grid');
  $grid.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
    }
  });

  $('.filter button').click(function () {
    var value = $(this).attr('data-name');
    $grid.isotope({
      filter: value
    });
  });
  });

  //isotope filtering button active
$('.filter-active button').click(function () {
  $('.filter-active button').removeClass('active-filter');
  $(this).addClass('active-filter');
});


  //match height to equal all content height
  $('.match-height').matchHeight({
    // byRow: false
  });

   //counter 
  var counted = 0;
  $(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      counted = 1;
    }

  });

  //footer active
  $('.footer-active a').click(function () {
    $('.footer-active a').removeClass('active-footer');
    $(this).addClass('active-footer');
  });

  //back-to-top
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.back-top-arrow').fadeIn();
      $(".back-top-arrow").css("opacity", "9999999");
      $(".back-top-arrow").css("visibility", "visible");
    } else {
      $('.back-top-arrow').fadeOut();
    }
  });





  
//spinner loader
$(window).on('load', function () {
  $(".preloader-wrapper").css("opacity", "0");
  $(".preloader-wrapper").css("transition", "0.5s ease");
  $(".preloader-wrapper").css("z-index", "-1");

  //gsap trigger animation after windows preloader load
gsap.from('.banner-content', { scrollTrigger: '.banner-content', opacity: 0, y: "50px", duration: 1, ease: "power1.out", stagger: 1 })
  
});
  
 
  
  //gsap animation
  gsap.from('.supply-content', { scrollTrigger: '.supply-content', y: "100px",opacity:0, duration: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.history-image', { scrollTrigger: '.history-image',opacity:0, x: "-100px", duration: 1, ease: "power1.out"})
  gsap.from('.history-content', { scrollTrigger: '.history-content', opacity: 0, x: "100px", duration: 1, delay: 1, ease: "power1.out" })
  gsap.from('.services-heading', { scrollTrigger: '.services-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.tab-text', { scrollTrigger: '.tab-text', opacity: 0, x: "-100px", duration: 1, delay: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.tab-icon', { scrollTrigger: '.tab-icon', opacity: 0, x: "100px", duration: 1, delay: 1.5, ease: "power1.out", stagger: 0.3 })
  gsap.from('.portfolio-heading', { scrollTrigger: '.portfolio-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.filter', { scrollTrigger: '.filter', opacity: 0, x: "-100px", duration: 1, delay: 0.5, ease: "power1.out", stagger: 0.3 })
  gsap.from('.grid-item', { scrollTrigger: '.grid-item', y: "100px", duration: 1,opacity:0, delay: 0.5, ease: "power1.out", stagger: 0.3 })
  gsap.from('.research-heading', { scrollTrigger: '.research-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.research-hero-slider', { scrollTrigger: '.research-hero-slider', opacity: 0, x: "-100px", duration: 1, ease: "power1.out"})
  gsap.from('.research-image', { scrollTrigger: '.research-image', opacity: 0, x: "100px", duration: 1, delay: 1, ease: "power1.out" })
  gsap.from('.counter-text', { scrollTrigger: '.counter-text', y: "100px",opacity:0, duration: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.rate-heading', { scrollTrigger: '.rate-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.rate-content', { scrollTrigger: '.rate-content', y: "100px",opacity:0, duration: 1, delay: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.team-heading', { scrollTrigger: '.team-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.member-detail', { scrollTrigger: '.member-detail', y: "100px",opacity:0, duration: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.client-heading', { scrollTrigger: '.client-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.company-logo', { scrollTrigger: '.company-logo', y: "100px", opacity: 0, duration: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.blog-heading', { scrollTrigger: '.blog-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.list-item', { scrollTrigger: '.list-item', y: "100px", opacity: 0, duration: 1, delay: 1, ease: "power1.out", stagger: 0.3 })
  gsap.from('.contact-heading', { scrollTrigger: '.contact-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.contact-detail', { scrollTrigger: '.contact-detail', opacity: 0, x: "-100px", duration: 1, ease: "power1.out"})
  gsap.from('.contact-form', { scrollTrigger: '.contact-form', opacity: 0, x: "100px", duration: 1, delay: 1, ease: "power1.out" })
  gsap.from('.trial-heading', { scrollTrigger: '.trial-heading', opacity: 0, y: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.footer-social-icon', { scrollTrigger: '.footer-social-icon', opacity: 0, x: "-100px", duration: 1, ease: "power1.out" })
  gsap.from('.footer-copyright', { scrollTrigger: '.footer-copyright', opacity: 0, x: "100px", duration: 1, ease: "power1.out" })
  
 

  
 
})(jQuery);