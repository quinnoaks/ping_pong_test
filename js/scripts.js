$(function() {

    var number = prompt("What is your number?");

    for (var index = 1; index < number; index += 1) {
      if (index % 3 === 0 && index % 5 === 0) {
        $("ul").append("<li>ping-pong</li>");
      } else if (index % 5 === 0) {
        $("ul").append("<li>pong</li>");
      } else if (index % 3 === 0) {
        $("ul").append("<li>ping</li>");
      } else {
        $("ul").append("<li>" + index + "</li>");
      }
    }
});
