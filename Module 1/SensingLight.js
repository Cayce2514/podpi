var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var lumina = new five.Sensor('A0');
  var led = new five.Led(3);
  lumina.on('change', function() {
    console.log('light sensed =' + this.value);
    if (this.value < 350) {
      led.on();
    } else {
      led.off();
    }
  });
});