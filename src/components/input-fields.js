import { LitElement, html, css } from 'lit';

/**
 * Heading component.
 *
 */
export class InputFields extends LitElement {
  /**
   * Get Styles
   */
  static get styles() {
    return css`
      :host {
        display: block;
      }
      paper-input {
        width: 300px;
        display: inline-block;
      }
      .input-right {
        margin-left: 20px;
      }
      vaadin-date-picker {
        width: 90%;
        margin-bottom: 20px;
      }
    `;
  }

  /**
   * Get properties
   */
  static get properties() {
    return {
      heading: { type: String },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <paper-input label="Name" value="Binding Group 1"></paper-input>
      <paper-input
        class="input-right"
        label="Name"
        value="Binding Group 1"
      ></paper-input>
      <paper-input label="Name" value="Binding Group 1"></paper-input>
      <paper-input
        class="input-right"
        label="Name"
        value="Binding Group 1"
      ></paper-input>
      <vaadin-date-picker label="Date" placeholder="12/5/2019">
      </vaadin-date-picker>
    `;
  }
}

customElements.define('input-field', InputFields);
