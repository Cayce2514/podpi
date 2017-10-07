var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var celsius = new five.Sensor('A0');
  var green = new five.Led(3);
  var blue = new five.Led(4);
  var red = new five.Led(5);
  var temp_value = 0;

  celsius.on('change', function() {
    temp_value = this.value;
    console.log('Temperature analog value is: ' + temp_value );
    if (temp_value < 570 ) {
      green.on();
      blue.off();
      red.off();
    } else if (temp_value >= 570 && temp_value < 590 ) {
      green.off();
      blue.on();
      red.off();
    } else if (temp_value >= 590) {
      green.off();
      blue.off();
      red.on();
    };
  });
});

