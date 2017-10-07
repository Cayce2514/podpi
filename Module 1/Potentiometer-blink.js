var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pot = new five.Sensor('A0');
  var led = new five.Led(11);
  var value = 0;
  pot.on('change', function() {
    value = this.value;
    console.log('Potentiometer value is; ' + value );

    // changed the method to blink and reduced the value
    // so that the blink rate is between 0ms and 1024ms.
    led.blink(Math.abs(value/2));
  });
});