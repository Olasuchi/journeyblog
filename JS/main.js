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
       navText:[$('.owl-navigation .nav-prev'),$('.owl-navigation .nav-next')]
     });


});