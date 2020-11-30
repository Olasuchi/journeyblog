const responsive = {
  0  : {
    items:1
  },
  320 : {
    items:1
  },
  560: {
    items:2
  },
  960: {
    items:3
  }
}

$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');


    /**click event on toggle menu */
     $toggleCollapse.click(function(){
       $nav.toggleClass('collapse');
        
     })

     /**owl carousel navtext for settin arrow(setting the blog post to slideshow automaticaly every 3sec and to design the navigation pane)*/

     $('.owl-carousel').owlCarousel({
       loop:true,
       autoplay:true,
       autoplayTimeout:3000,
       dots:false,
       nav:true,
       navText:[$('.owl-navigation .nav-prev'),$('.owl-navigation .nav-next')],
       responsive: responsive
     });


     //click to scroll to the top move up arrow bottom right corner
     $('.move-up span').click(function(){
       $('html,body').animate({
         scrollTop:0
       },1000);
     })

// AOS instance 
AOS.init();
});