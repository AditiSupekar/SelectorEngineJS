var $ = function (selector) {
  var elements = [];
  
  var selectorArray = selector.split(/[#.]/); // selector parts without delimiters
  var selectorParts = selector.split(/(?=[#\.])/); // selector parts with delimiters

  var selectorId = getSelectorId(selectorParts); // may be undefined
  var selectorClass = getSelectorClass(selectorParts); // may be undefined

  if (selectorHasOnlyId(selector)) {
    var tag = document.getElementById(selectorArray[1]);
    if (tag !== undefined) { elements.push(tag); }
  }
  else if (selectorHasOnlyClass(selector)) { 
    var tags = document.getElementsByClassName(selectorArray[1]);
    selectAllElements(tags, elements); 
  }
  else {
    var tags = document.getElementsByTagName(selectorArray[0]);
    if (selectorArray.length === 1) { selectAllElements(tags, elements); }
    else if (selectorArray.length === 2) { selectByClassAndOrId(selectorId, selectorClass, tags, false, elements); }
    else if (selectorArray.length === 3) { selectByClassAndOrId(selectorId, selectorClass, tags, true, elements); }
  }
  return elements;
};

var selectorHasOnlyId = function(selector) {
  return selector.charAt(0) === '#';
};

var selectorHasOnlyClass = function(selector) {
  return selector.charAt(0) === '.';
};

var getSelectorId = function(selectorParts) {
  for (var i = 0; i < selectorParts.length; i++) {
    if (selectorParts[i].charAt(0) === '#') {
      return selectorParts[i].substring(1, selectorParts[i].length);
    }
  }
};

var getSelectorClass = function(selectorParts) {
  for (var i = 0; i < selectorParts.length; i++) {
    if (selectorParts[i].charAt(0) === '.') {
      return selectorParts[i].substring(1, selectorParts[i].length);
    }
  }
};

var selectAllElements = function(array, elements) {
  for (var i = 0; i < array.length; i++) {
    elements.push(array[i]);
  }
};

var matchesIdClass = function(idMatches, classMatches, matchBoth) {
  return (matchBoth && idMatches && classMatches) ||
         (!matchBoth && (idMatches || classMatches));
};

var selectByClassAndOrId = function(selectorId, selectorClass, array, matchBoth, elements) {
  for (var i = 0; i < array.length; i++) {
    var classParts = array[i].className.split(" ");
    var idMatches = selectorId !== undefined && array[i].id === selectorId;
    var classMatches = classParts !== undefined && classParts.indexOf(selectorClass) !== -1;
    if (matchesIdClass(idMatches, classMatches, matchBoth)) {
      elements.push(array[i]);
    }
  }
};