$(function() {

   $('.menuShow').click(function () {
       if ($('.mobile-menu-header').is(':visible'))
           $('.mobile-menu-header').hide('fast');
       else  
           $('.mobile-menu-header').show(500, 'linear');

         $('html').toggleClass('scroll-off')
});


//script кнопки я нашёл в интернете

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

})();


});