console.log("Hello World");

// I need to connect the elements from the index.html page to "actions" withing javascript.

// Define & assign the elements so that I can work with them in js.
var generate = linkedListGenerator();
var save = document.getElementById("save");
var dump = document.getElementById("dump");
var textbox = document.getElementById("text-box");
var display = document.getElementById("display");

console.log(generate);
console.log(save);
console.log(dump);
console.log(textbox);
console.log(display);

// If #save has a value && text box has a value, add the value the link-list
  save.addEventListener("click", createList);
  dump.addEventListener("click", dumpList);


  function createList(){
    var data;
    var value = textbox.value;// ** need to figure out how to access the value of the the textbox.
    generate.add(value);
    data = (value);
    console.log(data);
    display.innerHTML = data;
    return data;

    }



// If #dump is clicked, 'remove' / or clear the entire link list
  function dumpList(){
    var data = createList.data;

  }
// Add another button to html,

  function showList(){

  }







