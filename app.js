var start = new Date().getTime();
document.getElementById('shape').addEventListener('click', function () {
  var end = new Date().getTime();

  var time = (end - start) / 1000;
  document.getElementById('shape').style.display = 'none';
  document.getElementById('time').innerHTML = time + "s";
  appearAfterDelay();
});

function makeShape() {

  var top = Math.random() * 600;
  var left = Math.random() * 400;
  var width = Math.random() * 400;

  var letters = '0123456789ABCDEF'.split('');
  var color = '#';

  for (var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (Math.random() >= 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0%";
  }

  document.getElementById("shape").style.backgroundColor = color;
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width + "px";
  //document.getElementById('shape').style.left = Math.random() * 100;
  document.getElementById('shape').style.display = 'block';
  start = new Date().getTime();
};


var letters = '0123456789ABCDEF'.split('');




function appearAfterDelay() {
  setTimeout(makeShape, Math.random() * 5000);

}

appearAfterDelay();
