/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit-element';
import ArrowRight20 from 'carbon-web-components/es/icons/arrow--right/20.js';
import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
import readme from './README.stories.mdx';
import textNullable from '../../../../.storybook/knob-text-nullable';
import '../feature-card';
import '../feature-card-footer';

export const Default = ({ parameters }) => {
  const { heading, defaultSrc, alt, href } = parameters?.props?.['dds-feature-card'] ?? {};
  return html`
    <dds-feature-card href=${ifNonNull(href || undefined)}>
      <dds-image slot="image" alt="${ifNonNull(alt)}" default-src="${ifNonNull(defaultSrc)}"></dds-image>
      <span slot="heading">${heading}</span>
      <dds-feature-card-footer>
        ${ArrowRight20({ slot: 'icon' })}
      </dds-feature-card-footer>
    </dds-feature-card>
  `;
};

export default {
  title: 'Components/Feature Card',
  decorators: [
    story => html`
      <div class="bx--grid dds-ce-demo-devenv--grid--stretch">
        <div class="bx--row dds-ce-demo-devenv--grid-row">
          <div class="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4">
            ${story()}
          </div>
        </div>
      </div>
    `,
  ],
  parameters: {
    ...readme.parameters,
    hasGrid: true,
    knobs: {
      'dds-feature-card': () => ({
        heading: textNullable('Card Heading (heading):', 'Explore AI use cases in all industries'),
        defaultSrc: textNullable(
          'Image src (defaultSrc):',
          'https://fpoimg.com/672x672?text=1:1&bg_color=ee5396&text_color=161616'
        ),
        alt: textNullable('Image alt text (alt):', 'Image alt text'),
        href: textNullable('Card Href (href):', 'https://example.com'),
      }),
    },
  },
};
