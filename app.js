// Assignment # 43-48
// JAVASCRIPT

// EVENTS
// 1. Show an alert box on click on a link.
function hello(){
   alert("Hello everyone!!");
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function buying(){
    alert("Thanku for buying this mobile from us.")
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

   // Function to delete a specific row
   function deleteRow(button) {
    // Get the row of the button clicked
    var row = button.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.



function changeImg(){
    document.getElementById('img').src="car.png"
}
function againChange(){
  document.getElementById('img').src ="car1.png"
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

let counter = 0;
function updateCounter(){
    document.getElementById('counter').innerText = counter;
}
function incrCounter(){
    counter++;
    updateCounter();
}
function dec(){
    counter--;
    updateCounter();
}