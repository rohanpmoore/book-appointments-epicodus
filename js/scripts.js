$(document).ready(function(){
  $("#appointment").submit(function(event) {
    window.location.href = "success.html";
    // $("<a href='../success.html'></a>").click();
    event.preventDefault();
  });
});
