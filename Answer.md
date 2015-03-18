Answer A $("div") - Should return 2 DIVs
var $ = function (selector) {
  var elements = [];

  var answerA = document.getElementsByTagName(selector);
  for (var i = 0; i < answerA.length; i++) {
    elements.push(answerA[i]);
  };

  return elements;
}

Answer B $("img.some_class") - Should return 1 IMG
var $ = function (selector) {
  var elements = [];

  var str = selector;
  var res = str.split(".");

  var x = document.getElementsByTagName(res[0]);
  if (res.length > 1) {
    for (var i = 0; i < x.length; i++) {
      if ( x[i].className.includes(res[1]) ){
        elements.push(x[i]);
      }
    } 
  }
  return elements;
}

Answer C ("#some_id") - Should return 1 DIV
var $ = function (selector) {
  var elements = [];
 
  if (selector.charAt(0) === '#') {

    res = selector.split('#')

    var x = document.getElementById(res[1]);
    elements.push(x);
  }
  return elements;
}

Answer D $(".some_class") - Should return 1 DIV and 1 IMG

var $ = function (selector) {

  var elements = [];

  if (selector.charAt(0) === '.') {
    res = selector.split('.')
    var x = document.getElementsByClassName(res[1]);
    for (var i = 0; i < x.length; i++) {
      elements.push(x[i]);
    }
  }
  return elements;
}

Answer E $("input#some_id") - Should return an empty array
var $ = function (selector) {
  var elements = [];

  var str = selector;
  var res = str.split("#");

  var x = document.getElementsByTagName(res[0]);
  if (res.length > 1) {
    for (var i = 0; i < x.length; i++) {
      if ( x[i].getAttribute('id') === res[1] ){
        elements.push(x[i]);
      }
    } 
  }

  return elements;
}

Answer F $("div#some_id.some_class") - Should return 1 DIV

var $ = function (selector) {

  var elements = [];

  if (selector.includes('#') && selector.includes('.')) {
    res = selector.split(/[#.]/);
    x = document.getElementsByTagName(res[0]);
    for (var i = 0; i < x.length; i++) {
      if (x[i].className.includes(res[2])) {
        elements.push(x[i]);
      }
    }
  }
  return elements;
}