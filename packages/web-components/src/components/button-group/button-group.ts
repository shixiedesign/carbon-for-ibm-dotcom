/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { customElement, html, LitElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import styles from './button-group.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

export enum BUTTON_TYPES {
  /**
   * Default / Primary
   */
  DEFAULT = 'primary',

  /**
   * Alternate / Tertiary
   */
  ALTERNATE = 'tertiary',
}

/**
 * Button group.
 *
 * @element dds-button-group
 */
@customElement(`${ddsPrefix}-button-group`)
class DDSButtonGroup extends LitElement {
  /**
   * Handler for @slotchange, set the first button-group-item to kind tertiary and primary for the remaining ones
   *
   * @private
   */
  private _handleSlotChange(event: Event) {
    const childItems = (event.target as HTMLSlotElement)
      .assignedNodes()
      .filter(elem =>
        (elem as HTMLElement).matches !== undefined
          ? (elem as HTMLElement).matches((this.constructor as typeof DDSButtonGroup).selectorItem)
          : false
      );

    childItems.forEach((elem, index) => {
      (elem as HTMLElement).setAttribute('kind', index !== childItems.length - 1 ? BUTTON_TYPES.ALTERNATE : BUTTON_TYPES.DEFAULT);
    });

    const { customPropertyItemCount } = this.constructor as typeof DDSButtonGroup;
    this.style.setProperty(customPropertyItemCount, String(childItems.length));
  }

  render() {
    return html`
      <slot @slotchange="${this._handleSlotChange}"></slot>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'list');
  }

  /**
   * The CSS custom property name for the live button group item cout.
   */
  static get customPropertyItemCount() {
    return `--${ddsPrefix}--button-group--item-count`;
  }

  /**
   * A selector that will return the child items.
   */
  static get selectorItem() {
    return `${ddsPrefix}-button-group-item`;
  }

  static get stableSelector() {
    return `${ddsPrefix}--button-group`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSButtonGroup;
