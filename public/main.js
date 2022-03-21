// Calendar functions
function Event (start, end) {
    this.start = start;
    this.end = end;
    this.width = null;
    this.height = null;
}
  
var eventList = [
    {start: 30, end: 150},
    {start: 540, end: 600},
    {start: 560, end: 620},
    {start: 610, end: 670}
];
  
function layOutDay(events) {
    var calendar = document.getElementById('calendar-view');
    
    for(var i = 0; i < events.length; i++) {
      drawEvent(calendar, events[i].start, events[i].end, 'Sample Item', 'Sample Location');
    }
}
  
function drawEvent(view, start, end, title, location) {
    var newEvent = document.createElement('div');
    newEvent.className = 'event';
    newEvent.style.top = start + "px";
    newEvent.style.height = (end - start) + "px";
    newEvent.style.width = "600px";
    
    var eventTitle = document.createElement('div');
    eventTitle.className = 'event-title';
    eventTitle.innerHTML = title;
    
    var eventLocation = document.createElement('span');
    eventLocation.className = 'event-location';
    eventLocation.innerHTML = location;
    
    newEvent.appendChild(eventTitle);
    newEvent.appendChild(eventLocation);
    
    view.appendChild(newEvent);
}

// Removing Popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBTN");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
modal.style.display = "none";

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal();
}

function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Switching sections
function switchSection(selector){
    var table = document.querySelector('#schedule');
    var currentIndexes = {};

    for (let i in table.rows) {
        let row = table.rows[i]
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        for (let j in row.cells) {
          let col = row.cells[j]
          //iterate through columns
          //columns would be accessed using the "col" variable assigned in the for loop
          if(col.className == null){
              currentIndexes.appendChild()
          }
        }  
     }
}
  