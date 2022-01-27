import { LitElement, html, css } from 'lit';
import './components/dialogue-opener';
/**
 * MyApp component for dialog box.
 */
export class MyApp extends LitElement {
  /**
   *
   * @returns {TemplateResult}
   */
  render() {
    return html` <dialog-opener></dialog-opener> `;
  }
}

/**
 * Defines the element `my-app`.
 */
customElements.define('my-app', MyApp);
