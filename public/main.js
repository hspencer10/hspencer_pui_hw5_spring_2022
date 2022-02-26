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

  
  