$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web-Developer", "Competitive Coder", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web-Developer", "Competitive Coder", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //animate at time of veiw



  // form submission
  var form = document.getElementById("my-form");

   async function handleSubmit(event) {
     event.preventDefault();
     var status = document.getElementById("status");
     var data = new FormData(event.target);
     fetch(event.target.action, {
       method: form.method,
       body: data,
       headers: {
           'Accept': 'application/json'
       }
     }).then(response => {
       status.classList.add('success');
       status.innerHTML = "Thanks...";
       form.reset()
     }).catch(error => {
       status.classList.add('error');
       status.innerHTML = "Oops! There was a problem..."


     });
   }
   form.addEventListener("submit", handleSubmit)

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
