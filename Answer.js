var $ = function (selector) {
  var elements = [];
  
  selectorNew = selector.split(/[#.]/);
  selectorId = selector.charAt(0) === '#';
  selectorClass = selector.charAt(0) === '.';
  selectorTag = !selectorId && !selectorClass;

  if (selectorTag) {
    var tagVar = document.getElementsByTagName(selectorNew[0]);
    if (selectorNew.length === 1) {
      for (var i = 0; i < tagVar.length; i++) {
        elements.push(tagVar[i]);
      }
    }
    else if (selectorNew.length === 2) {
      for (var i = 0; i < tagVar.length; i++) {
        if (tagVar[i].className.includes(selectorNew[1]) || tagVar[i].id.includes(selectorNew[1])){
          elements.push(tagVar[i]);
        }
      } 
    }
  }
  else if (selectorId) {
    var idVar = document.getElementById(selectorNew[1]);
    if (idVar != undefined) {
      elements.push(idVar);
    }
  }

  else if (selectorClass) {
    var classVar = document.getElementsByClassName(selectorNew[1]);
    for (var i = 0; i < classVar.length; i++) {
      elements.push(classVar[i]);
    }
  }

  return elements;
};