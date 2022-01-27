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
  /**
   * Gets properties.
   *
   * @returns {Array}
   */
  static get properties() {
    return {
      /**
       * Heading for the component.
       *
       * @type {String}
       */
      heading: { type: String },

      /**
       * Options for the component.
       *
       * @type {Array}
       */
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
        label: 'BRD2 Affinity_High_Affinity',
        checked: true,
      },
      {
        value: 2,
        label: 'BRD2 AMP_PNP_competitive',
        checked: false,
      },
      {
        value: 3,
        label: 'BRD2 NRX-0459676 non-competitive',
        checked: true,
      },
      {
        value: 4,
        label: 'Item 4',
        checked: false,
      },
    ];
    this.fieldItems = [
      { label: 'Name', value: 'Binding Group 1' },
      { label: 'Ligands Promoted', value: '24' },
      { label: 'Description', value: 'Promising Ligands' },
      { label: 'Total Ligands in Binding Group', value: '100' },
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
   *
   * @returns {TemplateResult}
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
          .fieldItems="${this.fieldItems}"
        ></dialog-component>
      </paper-dialog>
    </main>`;
  }
}

/**
 * Defines the element `dialog-opener`.
 */
customElements.define('dialog-opener', DialogOpener);
