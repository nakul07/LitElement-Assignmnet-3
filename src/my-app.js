import { LitElement, html, css } from 'lit';
import './components/dialogue-opener';
/**
 * MyApp component for filterable table.
 */
export class MyApp extends LitElement {
  /**
   * Renders html
   *
   * @returns {html component}
   */
  render() {
    return html` <dialog-opener></dialog-opener> `;
  }
}

customElements.define('my-app', MyApp);
