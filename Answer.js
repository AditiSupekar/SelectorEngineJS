var $ = function (selector) {
  var elements = [];

  var x = document.getElementsByTagName(selector);
  for (var i = 0; i < x.length; i++) {
    elements.push(x[i]);
  };

  return elements;
}