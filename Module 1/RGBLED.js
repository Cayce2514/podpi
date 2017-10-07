var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var red = new five.Led(3);
  var blue = new five.Led(4);
  var green = new five.Led(5);

  red.blink(100);
  blue.blink(200);
  green.blink(300);

});