/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveTopNav() {
    var x = document.getElementById("topnavA");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }