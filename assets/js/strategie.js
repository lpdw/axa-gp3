window.onload = function() {
  var circles = document.getElementsByClassName("circle");
  //console.log(circles);
  for (var i = 0; i< circles.length; i++)
  {
    console.log("circle="+circles[i]);
    console.log(circles[i].dataset.value);
      circles[i].style.width = circles[i].dataset.value *10 + "%";
  }

}
