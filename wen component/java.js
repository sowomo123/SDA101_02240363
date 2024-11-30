class CustomCard extends HTMLElement {
    constructor() {
      super();
      
      // Attach a shadow DOM for style encapsulation
      this.attachShadow({ mode: 'open' });
  
      // Template for the card component
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          :host {
            display: block;
            background-color: var(--card-bg-color, white);
            border: 1px solid var(--card-border-color, #ccc);
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            padding: 16px;
            font-family: Arial, sans-serif;
            color: var(--card-text-color, #333);
            max-width: 300px;
          }
  
          ::slotted([slot="header"]) {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 8px;
          }
  
          ::slotted([slot="content"]) {
            font-size: 1em;
            margin-bottom: 12px;
          }
  
          ::slotted([slot="footer"]) {
            font-size: 0.9em;
            color: var(--footer-text-color, #777);
            text-align: right;
          }
        </style>
        <div class="card-header">
          <slot name="header">${this.getAttribute('data-title') || ''}</slot>
        </div>
        <div class="card-content">
          <slot name="content">Default content</slot>
        </div>
        <div class="card-footer">
          <slot name="footer">${this.getAttribute('data-footer') || ''}</slot>
        </div>
      `;
  
      // Append the template content to the shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['data-title', 'data-footer'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'data-title') {
        this.shadowRoot.querySelector('.card-header slot').textContent = newValue;
      } else if (name === 'data-footer') {
        this.shadowRoot.querySelector('.card-footer slot').textContent = newValue;
      }
    }
  }
  
  // Define the custom element
  customElements.define('custom-card', CustomCard);
  