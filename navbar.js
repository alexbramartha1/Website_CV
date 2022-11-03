function myFunction() {
  var x = document.getElementById("right-bar");
  if (x.className === "right-bar") {
    x.className += " responsive";
  } else {
    x.className = "right-bar";
  }
}