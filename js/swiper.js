    function myFunction() {
              document.getElementById(".myDiv").style.flexGrow = "5";
          }
  
                  var swiper = new Swiper('.swiper-container', {
              effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
                      coverflowEffect: {
              rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      },
      // If we need pagination
                      pagination: {
              el: '.swiper-pagination',
      },
  
      // Navigation arrows
                      navigation: {
              nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
                      scrollbar: {
              el: '.swiper-scrollbar',
      },
  });
