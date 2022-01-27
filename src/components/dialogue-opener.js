/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, html, css } from 'lit';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/iron-icon/iron-icon.js';
import './dialogue-component';

/**
 * MyApp component for filterable table.
 */
export class DialogOpener extends LitElement {
  static get properties() {
    return {
      heading: { type: String },
      options: { type: Array },
    };
  }

  /**
   * Constructor function.
   */
  constructor() {
    super();
    this.heading = 'Creating Binding Group';
    this.options = [
      {
        value: 1,
        label: 'Item 1',
        checked: true,
      },
      {
        value: 2,
        label: 'Item 2',
        checked: false,
      },
      {
        value: 3,
        label: 'Item 3',
        checked: true,
      },
      {
        value: 4,
        label: 'Item 4',
        checked: false,
      },
    ];
  }

  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        main {
          margin: 50px;
        }
        .cross-icon {
          color: red;
        }
        .cross-button {
          position: absolute;
          right: 40px;
          top: 5px;
          z-index: 1;
          width: 10px;
        }
        #dialog {
          border-radius: 5px;
        }
      `,
    ];
  }

  /**
   * Opens the dialog
   *
   */
  openDialog() {
    this.shadowRoot.querySelector('#dialog').toggle();
  }

  /**
   * Renders html
   *
   * @returns {html components}
   */
  render() {
    return html`<main>
      <paper-button raised @click=${this.openDialog}>Open Box</paper-button>
      <paper-dialog id="dialog" modal>
        <div class="cross-button">
          <paper-button dialog-confirm>
            <iron-icon src="../images/close.png" class="cross-icon"></iron-icon>
          </paper-button>
        </div>

        <dialog-component
          .heading="${this.heading}"
          .options="${this.options}"
        ></dialog-component>
      </paper-dialog>
    </main>`;
  }
}

customElements.define('dialog-opener', DialogOpener);
