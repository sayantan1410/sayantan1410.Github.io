(function($) {
  // Start of use strict
  //The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
  //With strict mode, you can not, for example, use undeclared variables (lessprone to errors)
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ?
        target :
        $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });
  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict
//dark mode
function make_me_dark() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

window.addEventListener("load", function() {
  var summary = document.querySelector("#header1");
  var social_icons =  document.querySelector(".top-img");
  var sub_heading = document.querySelector("#subheading1");
  summary.classList.add("typing-animation");
  social_icons.classList.add("fade-animation");
  sub_heading.classList.add("dropin-animation");
});


window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  var first_text = document.getElementsByClassName("initial-state");
  var second_text = document.getElementsByClassName("initial-state-div");
  var social_icons =  document.querySelector("#social-icons");
  var experience_paragraph =  document.querySelectorAll(".experience-paragraph");
  var exp_block = document.querySelector(".exp-block");
  var ed_fade_1 = document.querySelector("#ed-fade-1");
  var ed_fade_2 = document.querySelector("#ed-fade-2");
  var ed_fade_3 = document.querySelector("#ed-fade-3");
  var ed_1 = document.querySelector("#ed-1");
  var ed_2 = document.querySelector("#ed-2");
  var ed_3 = document.querySelector("#ed-3");
  const progressBars = document.querySelectorAll('.progress-bar');

  // scroll position greater than one
  if (scrollPosition > 1) {
      first_text[0].classList.add("showup-animation");
      second_text[0].classList.add("reveal-animation");
      second_text[0].classList.add("slidein-animation");
      social_icons.classList.add("fade-animation");
  } 
  else {
    first_text[0].classList.remove("showup-animation");
    second_text[0].classList.remove("reveal-animation");
    second_text[0].classList.remove("slidein-animation");
    social_icons.classList.remove("fade-animation");
  }

  //scroll position greater 450

  if (scrollPosition > 600){
    experience_paragraph[0].classList.add("hide-block-animation");
    experience_paragraph[1].classList.add("hide-block-animation");

  }
  else{
    experience_paragraph[0].classList.remove("hide-block-animation");
    experience_paragraph[1].classList.remove("hide-block-animation");


  }

  if (scrollPosition >1200){
    experience_paragraph[2].classList.add("hide-block-animation");
  }
  else{
    experience_paragraph[2].classList.remove("hide-block-animation");
  }

  if (scrollPosition >1600){
    experience_paragraph[3].classList.add("hide-block-animation");
  }
  else{
    experience_paragraph[3].classList.remove("hide-block-animation");
  }

  if (scrollPosition >1900){
    experience_paragraph[4].classList.add("hide-block-animation");
  }
  else{
    experience_paragraph[4].classList.remove("hide-block-animation");
  }

  if (scrollPosition >2900){
    ed_fade_1.classList.add("block-left-slide-animation");
    ed_1.classList.add("fade-animation");
  }
  else{
    ed_fade_1.classList.remove("block-left-slide-animation");
    ed_1.classList.remove("fade-animation");
  }

  if (scrollPosition >3100){
    ed_fade_2.classList.add("block-left-slide-animation");
    ed_2.classList.add("fade-animation");
  }
  else{
    ed_fade_2.classList.remove("block-left-slide-animation");
    ed_2.classList.remove("fade-animation");
  }

  if (scrollPosition > 3200){
    ed_fade_3.classList.add("block-left-slide-animation");
    ed_3.classList.add("fade-animation");
  }
  else{
    ed_fade_3.classList.remove("block-left-slide-animation");
    ed_3.classList.remove("fade-animation");
  }
  if (scrollPosition >4000){
    progressBars.forEach(function(progressBar) {
      const targetWidth = progressBar.getAttribute('data-target-width');
      progressBar.style.width = targetWidth;
    })
  }
  else{
    progressBars.forEach(function(progressBar) {
      progressBar.style.width = '0%';
    })
  }

});
