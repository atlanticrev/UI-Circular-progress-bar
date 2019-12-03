class UiCircularProgressBar extends HTMLElement {

  connectedCallback() {

    this.init();
    this.render();

  }

  static get observedAttributes() {

    return ['data-percent', 'data-img'];

  }

  attributeChangedCallback(name, oldValue, newValue) {

    if (name === 'data-percent' && oldValue !== newValue) {
      this.init();
      this.render();
    }

    if (name === 'data-img' && oldValue !== newValue) {
      this.init();
      this.render();
    }

  }

  init() {

    this.percent = this.dataset.percent ? +this.dataset.percent : Math.random() * 100 + 1;
    this.avatar = this.dataset.img ? this.dataset.img : '';
    this.style.setProperty('--img', `url("${this.avatar}")`);

  }

  render() {

    this.innerHTML = `
      <div data-name="container" style="--percent: ${this.percent}">
        <div data-name="avatar"></div>
        <div data-name="track"></div>

        <svg>
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" />
              <stop offset="100%" />
            </linearGradient>
          </defs>

          <circle></circle>
        </svg>
      </div>
    `;

  }

}

window.customElements.define('ui-circular-progress-bar', UiCircularProgressBar);
