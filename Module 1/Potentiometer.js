var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pot = new five.Sensor('A0');
  var led = new five.Led(11);
  var value = 0;
  pot.on('change', function() {
    value = this.value;
    console.log('Potentiometer value is; ' + value );
    led.brightness(Math.abs(value/4));
  });
});