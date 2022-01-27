import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@vaadin/checkbox';
import '@vaadin/checkbox-group';

/**
 * Options component.
 *
 */
export class OptionComponents extends LitElement {
  /**
   * Get Styles
   */
  static get styles() {
    return css`
      :host {
        display: block;
      }

      vaadin-checkbox {
        width: 610px;
        border-bottom: none;
        border-radius: 2px;
        margin-bottom: 3px;
      }
      div {
        padding: 5px;
        height: 100px;
        width: 90%;
        overflow: auto;
        margin-bottom: 20px;
        border: 1px solid grey;
        border-radius: 4px;
      }
      p {
        color: grey;
        font-size: 15px;
      }
    `;
  }

  /**
   * Get properties
   */
  static get properties() {
    return {
      heading: { type: String },
      options: { type: Array },
      checked: { type: Boolean },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    this.options = [];
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`
      <p>Binding Group</p>
      <div>
        ${this.options.map((items) => {
          let checkboxStyle = {
            backgroundColor: items.checked ? 'lightgrey' : 'white',
          };
          return html` <vaadin-checkbox
            ?checked="${items.checked}"
            value="${items.value}"
            label="${items.label}"
            style="${styleMap(checkboxStyle)}"
            @change=${(e) => {
              items.checked = e.target.checked;
            }}
          ></vaadin-checkbox>`;
        })}
      </div>
    `;
  }
}

customElements.define('options-components', OptionComponents);
