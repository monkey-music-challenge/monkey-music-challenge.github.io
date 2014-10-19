(function() {

var isTouch = function() {
  var platform = navigator.platform.toLowerCase()
  return platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1
}

var parallax = function(val, layer0, layer1, layer2, layer3, layer4) {
  var offset4 = -(val * 1.0),
      offset3 = -(val * 0.2),
      offset2 = -(val * 0.5),
      offset1 = -(val * 0.2),
      offset0 = -(val * 0.1),
      opacity = (1 - (val / 1500))

  layer3.style.opacity = opacity

  layer0.style.webkitTransform = "translate3d(0, " + offset0 + "px, 0)";
  layer0.style.MozTransform = "translate3d(0, " + offset0 + "px, 0)";
  layer0.style.msTransform = "translateY(" + offset0 + "px)";
  layer0.style.OTransform = "translate3d(0, " + offset0 + "px, 0)";
  layer0.style.transform = "translate3d(0, " + offset0 + "px, 0)";

  layer1.style.webkitTransform = "translate3d(0, " + offset1 + "px, 0)";
  layer1.style.MozTransform = "translate3d(0, " + offset1 + "px, 0)";
  layer1.style.msTransform = "translateY(" + offset1 + "px)";
  layer1.style.OTransform = "translate3d(0, " + offset1 + "px, 0)";
  layer1.style.transform = "translate3d(0, " + offset1 + "px, 0)";

  layer2.style.webkitTransform = "translate3d(0, " + offset2 + "px, 0)";
  layer2.style.MozTransform = "translate3d(0, " + offset2 + "px, 0)";
  layer2.style.msTransform = "translateY(" + offset2 + "px)";
  layer2.style.OTransform = "translate3d(0, " + offset2 + "px, 0)";
  layer2.style.transform = "translate3d(0, " + offset2 + "px, 0)";

  layer3.style.webkitTransform = "translate3d(0, " + offset3 + "px, 0)";
  layer3.style.MozTransform = "translate3d(0, " + offset3 + "px, 0)";
  layer3.style.msTransform = "translateY(" + offset3 + "px)";
  layer3.style.OTransform = "translate3d(0, " + offset3 + "px, 0)";
  layer3.style.transform = "translate3d(0, " + offset3 + "px, 0)";

  layer4.style.webkitTransform = "translate3d(0, " + offset4 + "px, 0)";
  layer4.style.MozTransform = "translate3d(0, " + offset4 + "px, 0)";
  layer4.style.msTransform = "translateY(" + offset4 + "px)";
  layer4.style.OTransform = "translate3d(0, " + offset4 + "px, 0)";
  layer4.style.transform = "translate3d(0, " + offset4 + "px, 0)";
}

var initParallax = function() {
  var layer0 = document.querySelector(".layer5"),
      layer1 = document.querySelector(".layer4"),
      layer2 = document.querySelector(".layer3"),
      layer3 = document.querySelector(".layer2"),
      layer4 = document.querySelector(".layer1")

  var scrollHandler = function(e) {
    var scrollVal = Math.max(window.pageYOffset, 0)
    parallax(scrollVal, layer0, layer1, layer2, layer3, layer4)
  }

  document.addEventListener('scroll', scrollHandler, false)
}

var init = function(){
  if(!isTouch()) {
    document.body.classList.add('no-touch');
    initParallax()
  }
  else {
    document.body.classList.add('touch');
  }

}


document.addEventListener('DOMContentLoaded', init)

})();
