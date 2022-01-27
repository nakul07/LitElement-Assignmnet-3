/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, html, css } from 'lit';
import './options-components';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@polymer/paper-button/paper-button.js';

/**
 * MyApp component for filterable table.
 */
export class DialogComponent extends LitElement {
  static get properties() {
    return {
      options: { type: Array },
      heading: { type: String },
    };
  }

  /**
   * Constructor function.
   */
  constructor() {
    super();

    this.options = [];
    this.heading = '';
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
          padding: 0;
          background-color: white;
          width: 700px;
          height: 100%;
          margin: 5px;
          padding-left: 20px;
        }
        paper-input,
        paper-textarea {
          display: block;

          width: 90%;
        }
        .submit {
          background: crimson;
          color: white;
        }
        paper-button {
          margin-bottom: 10px;
          margin-top: 10px;
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
      `,
    ];
  }

  /**
   * Renders html
   *
   * @returns {Array}
   */
  render() {
    return html`<main>
      <h1>${this.heading}</h1>
      <div>
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
      </div>
      <options-components .options=${this.options}></options-components>

      <paper-textarea label="Comments" value=" " rows="3"></paper-textarea>
      <paper-button class="submit" raised>Create</paper-button>
      <paper-button noink>Cancel</paper-button>
    </main>`;
  }
}

customElements.define('dialog-component', DialogComponent);