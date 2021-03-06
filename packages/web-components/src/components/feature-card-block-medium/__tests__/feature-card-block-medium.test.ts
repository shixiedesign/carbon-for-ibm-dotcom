/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from 'lit-html';
import '../feature-card-block-medium';
import { Default } from '../__stories__/feature-card-block-medium.stories';

const template = (props?) =>
  Default({
    parameters: {
      props: {
        'dds-feature-card-block-medium': props,
      },
    },
  });

describe('dds-feature-card-block-medium', function() {
  describe('Misc attributes', function() {
    it('should render with minimum attributes', async function() {
      render(template(), document.body);
      await Promise.resolve(); // Update cycle for `<dds-feature-card-block-medium>`
      expect(document.body.querySelector('dds-feature-card-block-medium')).toMatchSnapshot({ mode: 'shadow' });
    });

    it('should render with various attributes', async function() {
      render(
        template({
          heading: 'Explore AI use cases in all industries',
          defaultSrc: 'https://fpoimg.com/672x672?text=1:1&bg_color=ee5396&text_color=161616',
          alt: 'Image alt text',
          href: 'https://example.com',
        }),
        document.body
      );
      await Promise.resolve(); // Update cycle for `<dds-feature-card-block-medium>`
      expect(document.body.querySelector('dds-feature-card-block-medium')).toMatchSnapshot({ mode: 'shadow' });
    });
  });

  afterEach(async function() {
    await render(undefined!, document.body);
  });
});
