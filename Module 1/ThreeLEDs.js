var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led3 = new five.Led(3);
  var led4 = new five.Led(4);
  var led5 = new five.Led(5);

  led3.blink(500);
  led4.blink(250);
  led5.blink(1500);

});
