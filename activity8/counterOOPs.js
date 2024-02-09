class Counter {
    constructor() {
      this.rootEle = document.createElement('div'); // Create a dedicated container for each counter
      this.count = 0;
      this.rootEle.classList.add('counter'); // Add a CSS class for styling
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
      const container = this.rootEle.querySelector('span');
      container.textContent = this.count;
    };
  
    render = () => {
        this.rootEle.innerHTML = `
          <button id="increment" type="button">+</button>
          <span id="container">0</span>
          <button id="decrement" type="button">-</button>
        `;
      
        const incrementBtn = this.rootEle.querySelector('#increment');
        incrementBtn.addEventListener('click', this.increment);
      
        const decrementBtn = this.rootEle.querySelector('#decrement');
        decrementBtn.addEventListener('click', this.decrement);
      
        document.getElementById('root').appendChild(this.rootEle);
      };
  }
  
  const counter1 = new Counter();
  counter1.render();
  
  const counter2 = new Counter();
  counter2.render();
  