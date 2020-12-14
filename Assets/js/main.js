

$(document).ready(function () {
  // Awesome Tooltip needed for Slick (Slideshow) and Dot Navigation
  $('.awesome-tooltip').tooltip({
    placement: 'left'
    });


    /*
    ==============================================
    Make entire project tile clickable
    ==============================================
    */
  
    $("#projectOne").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });

    $("#projectTwo").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
    });

    $("#projectThree").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });



    /*
    ==============================================
    Make the navigation bar menu work
    ==============================================
    */
  
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
    

    /*
    ==============================================
    Logic for Hover Words
    ==============================================
    */

    var specialWords = document.getElementsByClassName("hoverWord");
    for(let word of specialWords){
        word.addEventListener('mouseenter', function(){
            this.innerHTML = this.getAttribute('data-words').split("|")[1];
        });
        word.addEventListener('mouseleave', function(){
            this.innerHTML = this.getAttribute('data-words').split("|")[0];
        });
    }

    /*
    ==============================================
    Dot Navigation (https://codepen.io/evleen13/pen/ZMzPOP)
    ==============================================
    */

    function dotnavigation() {

        var numSections = $('section').length;
    
        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');
        $('section').each(function (i, item) {
          var ele = $(item),nextTop;
    
          //console.log(ele.next().html());
    
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          } else
          {
            nextTop = $(document).height();
          }
    
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - (nextTop - ele.offset().top) / numSections;
          } else
          {
            thisTop = 0;
          }
    
          var docTop = $(document).scrollTop();
    
          if (docTop >= thisTop && docTop < nextTop) {
            $('#dot-nav li').eq(i).addClass('active');
          }
        });
      }
    
      /* get clicks working */
      $('#dot-nav li').click(function () {
    
        var id = $(this).find('a').attr("href"),
        posi,
        ele,
        padding = 0;
    
        ele = $(id);
        posi = ($(ele).offset() || 0).top - padding;
    
        $('html, body').animate({ scrollTop: posi }, 'slow');
    
        return false;
      });


    /*
    ==============================================
    Slick Slideshow Clicking (https://codepen.io/evleen13/pen/ZMzPOP)
    ==============================================
    */

    $('.solutionDescription').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.solutionVisuals'
      });
      $('.solutionVisuals').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.solutionDescription',
        dots: true,
        focusOnSelect: true
      });
 

    $(window).bind('scroll',function(e){
      dotnavigation();
    });
  });


  
  