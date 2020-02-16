/* 
Kyle Stout
kstout_a08b.js
INFO_2124_WW
Thoendel
02/16/2020 
*/


console.log("The number of <p> tags in this document is: " + document.getElementsByTagName("P").length + ".");
//Output to the web console the length(count) of <p> tags. 
console.log("The number of <div> tags in this document is: " + document.getElementsByTagName("DIV").length + ".");
//Output to the web console the length(count) of <div> tags.
console.log("The number of paragraph clased elements in this document is: " + document.getElementsByClassName("paragraph").length + ".");
//Output to the web console the length(count) of elements with the class of "paragraph" excluding the ones that were misspelled.
console.log("The number of block-text classed elements in this document is: " + document.getElementsByClassName("block-text").length + ".");
//Output to the web console the length(count) of elements with the class of "block-text".
console.log("The element with the ID attribute value of b001 is: " + document.getElementById("b001") + ".");
//Not really sure about this one. I output the HTML object with the ID of b001 which is a div. And its listing [object HTMLDivElement] I guess just listing what HTML tag has that ID. 

