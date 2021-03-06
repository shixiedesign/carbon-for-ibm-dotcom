/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings';
import {
  formatVideoCaption,
  formatVideoDuration,
} from '@carbon/ibmdotcom-utilities/es/utilities/formatVideoCaption/formatVideoCaption.js';
import DDSFeatureCard from '../feature-card/feature-card';
import CTAMixin from './mixins/cta';
import DDSFeatureCTAFooter from './feature-cta-footer';
import { CTA_TYPE } from './shared-enums';
import styles from './cta.scss';

export { CTA_TYPE };

const { prefix } = settings;
const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Feature CTA.
 *
 * @element dds-feature-cta
 */
@customElement(`${ddsPrefix}-feature-cta`)
class DDSFeatureCTA extends CTAMixin(DDSFeatureCard) {
  protected _renderCopy() {
    const {
      ctaType,
      videoDuration,
      videoName,
      formatVideoCaption: formatCaptionInEffect,
      formatVideoDuration: formatDurationInEffect,
      _hasCopy: hasCopy,
    } = this;
    if (ctaType !== CTA_TYPE.VIDEO) {
      return super._renderCopy();
    }
    const caption = hasCopy
      ? undefined
      : formatCaptionInEffect({
          duration: formatDurationInEffect({ duration: !videoDuration ? videoDuration : videoDuration * 1000 }),
          name: videoName,
        });
    return html`
      <div ?hidden="${!hasCopy && !caption}" class="${prefix}--card__copy">
        <slot @slotchange="${this._handleSlotChange}"></slot>${caption}
      </div>
    `;
  }

  /**
   * The CTA type.
   */
  @property({ reflect: true, attribute: 'cta-type' })
  ctaType = CTA_TYPE.REGULAR;

  /**
   * The formatter for the video caption, composed with the video name and the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoCaption = formatVideoCaption;

  /**
   * The formatter for the video duration.
   * Should be changed upon the locale the UI is rendered with.
   */
  @property({ attribute: false })
  formatVideoDuration = formatVideoDuration;

  /**
   * The video duration.
   */
  @property({ type: Number, attribute: 'video-duration' })
  videoDuration?: number;

  /**
   * The video name.
   */
  @property({ attribute: 'video-name' })
  videoName?: string;

  /**
   * The video thumbnail URL.
   * Feature CTA does not support video thumbnail, and this property should never be set.
   */
  videoThumbnailUrl?: never;

  updated(changedProperties) {
    super.updated(changedProperties);
    const { selectorFooter } = this.constructor as typeof DDSFeatureCTA;
    if (changedProperties.has('ctaType')) {
      const { ctaType } = this;
      const footer = this.querySelector(selectorFooter);
      if (footer) {
        (footer as DDSFeatureCTAFooter).ctaType = ctaType;
      }
    }
  }

  /**
   * A selector that will return the child footer.
   */
  static get selectorFooter() {
    return `${ddsPrefix}-feature-cta-footer`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSFeatureCTA;
