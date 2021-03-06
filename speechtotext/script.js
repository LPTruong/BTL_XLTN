var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();
var textbox = $("#text-box");

var instructions = $("#instructions");

var content = "";
recognition.continuous = true;

recognition.onstart = function () {
  instructions.text("Voice Recognition is ON ");
};
recognition.stop = function () {
  instructions.text("Press a start button");
};
recognition.onspeechend = function () {
  instructions.text("No activity");
};

recognition.onerror = function () {
  instructions.text("Try Again");
};

recognition.onresult = function (event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;

  content += transcript;

  textbox.val(content);
};

$("#start-btn").click(function (event) {
  if (content.length) {
    content += "";
  }
  recognition.start();
});

textbox.on("input", function () {
  content = $(this).val;
});
