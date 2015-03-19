var $ = function (selector) {
  var elements = [];
  
  var selectorNew = selector.split(/[#.]/);

  var tagVar = document.getElementsByTagName(selectorNew[0]);
  var idVar = document.getElementById(selectorNew[1]);
  var classVar = document.getElementsByClassName(selectorNew[1]);

  var selectorParts = selector.split(/(?=[#\.])/);

  var selectorId = selector.charAt(0) === '#';
  var selectorClass = selector.charAt(0) === '.';
  var selectorTag = !selectorId && !selectorClass;

  var getSelectorId = function() {
    for (var i = 0; i < selectorParts.length; i++) {
      if (selectorParts[i].charAt(0) === '#') {
        return selectorParts[i].substring(1, selectorParts[i].length);
      }
    }
  }

  var getSelectorClass = function() {
    for (var i = 0; i < selectorParts.length; i++) {
      if (selectorParts[i].charAt(0) === '.') {
        return selectorParts[i].substring(1, selectorParts[i].length);
      }
    }
  }

  var addAllElementsFromArrayToNewArray = function(array) {
    for (var i = 0; i < array.length; i++) {
      elements.push(array[i]);
    }
  }

  var selectByClassAndOrId = function(sid, sclass, array, match_both) {
    for (var i = 0; i < array.length; i++) {
      classParts = array[i].className.split(" ");
      id_matches = sid != undefined && array[i].id === sid;
      class_matches = classParts != undefined && classParts.indexOf(sclass) !== -1;
      if ((match_both && id_matches && class_matches) ||
          (!match_both && (id_matches || class_matches))) {
        elements.push(array[i]);
      }
    }
  }

  var sid = getSelectorId(); // may be undefined
  var sclass = getSelectorClass(); // may be undefined

  if (selectorTag) {
    if (selectorNew.length === 1) { addAllElementsFromArrayToNewArray(tagVar); }
    else if (selectorNew.length === 2) { selectByClassAndOrId(sid, sclass, tagVar, false); }
    else if (selectorNew.length === 3) { selectByClassAndOrId(sid, sclass, tagVar, true); }
  }
  else if (selectorId) {
    if (idVar != undefined) { elements.push(idVar); }
  }
  else if (selectorClass) { addAllElementsFromArrayToNewArray(classVar); }

  return elements;
};