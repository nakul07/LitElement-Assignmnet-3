import { LitElement, html, css } from 'lit';

/**
 * Heading component.
 *
 */
export class HeaderComponent extends LitElement {
  /**
   * Get Styles
   */
  static get styles() {
    return css`
      h1 {
       
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
    this.heading = '';
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html` <h1>${this.heading}</h1> `;
  }
}

customElements.define('header-component', HeaderComponent);
