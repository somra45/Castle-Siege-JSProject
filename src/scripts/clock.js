export {Clock, addClock}

class Clock {
    constructor() {
      // 1. Create a Date object.
      let date = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`
      // 3. Call printTime.
      this.printTime();
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this), 1000);
    };
  
     printTime() {
      // Format the time in HH:MM:SS
      this.timeString = (this.hours + ':'+ this.minutes + ':' + this.seconds);
      return this.timeString;
    };
  
    _tick() {
      // 1. Increment the time by one second.
      this.seconds += 1;
  
      if (this.seconds === 60) {
          this.minutes += 1;
          this.seconds = 0;
      };
  
      if (this.minutes === 60) {
          this.hours += 1;
          this.minutes = 0;
      };
      // 2. Call printTime.
      this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`
      this.printTime();
    };
  };

  const addClock = function(newElement, parentElement) {
    const newPTag = document.createElement("p")
    newPTag.innerText = newElement
    newPTag.classList.add("siege-clock")
    if (parentElement.children.length > 0) {
        parentElement.removeChild(parentElement.children[0]);
        parentElement.appendChild(newPTag);
    } else {
      parentElement.appendChild(newPTag);
    }
};


  
  