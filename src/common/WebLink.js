/* @flow strict-local */

import React from 'react';
import type { Node } from 'react';

import ZulipTextIntl from './ZulipTextIntl';
import { openLinkEmbedded } from '../utils/openLink';
import { BRAND_COLOR, createStyleSheet } from '../styles';

type Props = $ReadOnly<{|
  label: string,
  url: URL,
|}>;

const componentStyles = createStyleSheet({
  link: {
    color: BRAND_COLOR,
  },
});

/**
 * A button styled like a web link.
 */
export default function WebLink(props: Props): Node {
  return (
    <ZulipTextIntl
      style={componentStyles.link}
      text={props.label}
      onPress={() => {
        openLinkEmbedded(props.url.toString());
      }}
    />
  );
}
