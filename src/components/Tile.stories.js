import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tile from './Tile';

export const tile = {
  id: '1',
  state: 'DEFAULT',
};

export const actions = {
  onRevealTile: action('onRevealTile'),
};

storiesOf('Tile', module)
  .add('default', () => <Tile tile={{...tile}} {...actions}/>);
