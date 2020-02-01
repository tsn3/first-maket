
jQuery(document).ready(function() {
          
    var btn = $('#top_button');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 900) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '900');
    });

});


// Switching between adding and removing a “responsive” class in the menu when the user clicks on the icon 
    
function myFunction() {
  var x = document.getElementById("menu_item");
  if (x.className === "menu") {
    x.className += "responsive";
    } else {
    x.className = "menu";
  }
}
    
