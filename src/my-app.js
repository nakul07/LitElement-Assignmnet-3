/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement, html, css } from 'lit';
import '@polymer/paper-dialog/paper-dialog.js';
import './components/input-fields';
import './components/heading-components';
import './components/options-components';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/checkbox';
import '@vaadin/checkbox-group';
import '@polymer/paper-button/paper-button.js';

/**
 * MyApp component for filterable table.
 */
export class MyApp extends LitElement {
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
      <header-component .heading="${this.heading}"></header-component>
      <input-field></input-field>

      <options-components .options=${this.options}></options-components>

      <paper-textarea label="Comments" value=" " rows="3"></paper-textarea>
      <paper-button class="submit" raised>Submit</paper-button>
      <paper-button noink>Cancel</paper-button>
    </main>`;
  }
}

customElements.define('my-app', MyApp);
