document.addEventListener('DOMContentLoaded', function () {
  var elementsToReveal = document.querySelectorAll('.hidden-element');

  function revealElements() {
      elementsToReveal.forEach(function (element) {
          var elementPosition = element.getBoundingClientRect().top;
          var screenHeight = window.innerHeight;

          if (elementPosition < screenHeight / 1.5) {
              element.classList.add('revealed');
          } else {
              element.classList.remove('revealed');
          }
      });
  }


  revealElements();

  document.addEventListener('scroll', revealElements);
});


document.addEventListener('DOMContentLoaded', function () {
    var options = {
      strings: ["&lt;/Web Developer&gt;"],
      typeSpeed: 100,
      backSpeed: 45,
      loop: true,
    };
  
    var typed = new Typed("#typed-output", options);
  });

  function redirect() {
    window.open('contact-me.html', '_blank');
  }
  
