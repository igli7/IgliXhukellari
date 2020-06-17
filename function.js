$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navigation>nav>.menu-wrap>.menu>div>div>ul>li>a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navigation>nav>.menu-wrap>.menu>div>div>ul>li>a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });

}
$(document).ready(function () {
    $("#click1").click(function () {
        $("#toggler").prop("checked", false);
    });
    $("#click2").click(function () {
        $("#toggler").prop("checked", false);

    });
    $("#click3").click(function () {
        $("#toggler").prop("checked", false);

    });
    $("#click4").click(function () {
        $("#toggler").prop("checked", false);

    });
    $("#click5").click(function () {
        $("#toggler").prop("checked", false);

    });
    $("#click6").click(function () {
        $("#toggler").prop("checked", false);

    });

});



// Show on scroll

$(document).ready(function () {
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

});