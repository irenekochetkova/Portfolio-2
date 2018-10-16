function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less"; 
    moreText2.style.display = "inline";
  }
}

// ==================================================
// MODAL
// ==================================================

// $(function () {
//   $('.popup-modal').magnificPopup({
//     type: 'inline',
//     preloader: false,
//     focus: '#username',
//     modal: true
//   });
//   $(document).on('click', '.popup-modal-dismiss', function (e) {
//     e.preventDefault();
//     $.magnificPopup.close();
//   });
// });

$(document).ready(function() {

  // for the sticky

  $('.js--section-portfolio').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
  offset: '60px;'
  });

  //hide/show


  $("#show").click(function(){
        $(".section-details-food").toggle(1000);
    });



  $("#show-2").click(function(){
    $(".section-details-food").show(1000);
  });

  $("#hide").click(function(){
        $(".section-details-food").hide(1000);
    });

}); 







