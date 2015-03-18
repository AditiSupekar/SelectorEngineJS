// Answer A $("div") - Should return 2 DIVs
// var $ = function (selector) {
//   var elements = [];

//   var answerA = document.getElementsByTagName(selector);
//   for (var i = 0; i < answerA.length; i++) {
//     elements.push(answerA[i]);
//   };

//   return elements;
// }


// Answer E $("input#some_id") - Should return an empty array
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