export {Clock, addClock}

class Clock {
    constructor() {
      let date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
      this.initialSeconds = this.seconds;
      this.initialMinutes = this.minutes;
      this.initialHours = this.hours;
      this.printTime();
      setInterval(this._tick.bind(this), 1000);
    };
  
     printTime() {
      this.timeString = (this.hours + ':'+ this.minutes + ':' + this.seconds);
      return this.timeString;
    };
  
    _tick() {
      this.seconds += 1;
  
      if (this.seconds === 60) {
          this.minutes += 1;
          this.seconds = 0;
      };
  
      if (this.minutes === 60) {
          this.hours += 1;
          this.minutes = 0;
      };

      this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
      this.printTime();
    };
  };

  const addClock = function(newElement, parentElement, className, tagName) {
    const newPTag = document.createElement(`${tagName}`);
    newPTag.innerText = newElement;
    newPTag.classList.add(`${className}`);
    if (parentElement.children.length > 0) {
        parentElement.removeChild(parentElement.children[0]);
        parentElement.appendChild(newPTag);
    } else {
      parentElement.appendChild(newPTag);
    }
  };


  
  