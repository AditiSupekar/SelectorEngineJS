# JavaScript Selector Engine

## Task

Create a JavaScript selector engine (i.e. a JavaScript function that will return DOM elements given a CSS selector).
- You cannot use JavaScript libraries or document.querySelector/document.querySelectorAll.
- You should only modify and submit Answer.js file.
- Your function should return an array of DOM elements that match the CSS selector.

The following calls to your function will be made:
- $("div") - Should return 2 DIVs 
- $("img.some_class") - Should return 1 IMG 
- $("#some_id") - Should return 1 DIV 
- $(".some_class") - Should return 1 DIV and 1 IMG 
- $("input#some_id") - Should return an empty array 
- $("div#some_id.some_class") - Should return 1 DIV 
- $("div.some_class#some_id") - Should return 1 DIV

## Running the test

1. Open Test.html in a web browser.
2. Inspect Element.
3. Check the developer console for the test results. The results should show 1 of 7 tests passed (as one of the answers should be an empty array).

## My approach to solving the test

I have approach this test by making the following baby steps:

1. Write an individual solution to each single call.
2. Write a function that includes all the individual solutions.
3. Refactor and fix bugs.
