var $ = function (selector) {
  var elements = [];
  
  var selectorNew = selector.split(/[#.]/);

  var tagVar = document.getElementsByTagName(selectorNew[0]);
  var idVar = document.getElementById(selectorNew[1]);
  var classVar = document.getElementsByClassName(selectorNew[1]);

  var selectorId = selector.charAt(0) === '#';
  var selectorClass = selector.charAt(0) === '.';
  var selectorTag = !selectorId && !selectorClass;

  var addAllElementsFromArrayToNewArray = function(array) {
    for (var i = 0; i < array.length; i++) {
      elements.push(array[i]);
    }
  }

  var addElementsWithClassOrIdFromArrayToNewArray = function(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].className.includes(selectorNew[1]) || array[i].id.includes(selectorNew[1])){
        elements.push(array[i]);
      }
    } 
  }

  var addElementsWithClassAndIdFromArrayToNewArray = function(array) {
    for (var i = 0; i < array.length; i++) {
      if (selector.includes('.') && selector.includes('#')) {
        attributeId = array[i].getAttribute('id');
        attributeClass = array[i].getAttribute('class');
        if (attributeClass != undefined) {
          attributeClassNew = attributeClass.split(' ');
          if (selector.includes(attributeId) && (selector.includes(attributeClassNew[0]) || selector.includes(attributeClassNew[1]))) {
            elements.push(array[i]);
          }
        }
      }
    }
  }

  if (selectorTag) {
    if (selectorNew.length === 1) {
      addAllElementsFromArrayToNewArray(tagVar);
    }
    else if (selectorNew.length === 2) {
      addElementsWithClassOrIdFromArrayToNewArray(tagVar);
    }
    else if (selectorNew.length === 3) {
      addElementsWithClassAndIdFromArrayToNewArray(tagVar);
    }
  }
  else if (selectorId) {
    if (idVar != undefined) {
      elements.push(idVar);
    }
  }
  else if (selectorClass) {
    addAllElementsFromArrayToNewArray(classVar);
  }
  return elements;
};