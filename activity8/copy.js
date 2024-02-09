class Counter {
    constructor() {
      this.rootEle = document.getElementById('root'); // Create a dedicated container for each counter
      this.count = 0;
    }
  
    increment = () => {
      this.count++;
      this.updateCount();
    };
  
    decrement = () => {
      this.count--;
      this.updateCount();
    };
  
    updateCount = () => {
      const container = this.rootEle.getElementById(`container${this.count}`);
      container.textContent = this.count;
    };
  
    render = () => {
        this.rootEle.innerHTML = `
          <button id="increment${this.count}" type="button">+</button>
          <span id="container${this.count}">0</span>
          <button id="decrement${this.count}" type="button">-</button>
        `;
      
        const incrementBtn = this.rootEle.querySelector(`#increment${this.count}`);
        incrementBtn.addEventListener('click', this.increment);
      
        const decrementBtn = this.rootEle.querySelector(`#increment${this.count}`);
        decrementBtn.addEventListener('click', this.decrement);
      
      };
  }
  
  const counter1 = new Counter();
  counter1.render();
  
  const counter2 = new Counter();
  counter2.render();
  