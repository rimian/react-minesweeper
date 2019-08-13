import React from 'react';
import { storiesOf } from '@storybook/react';

import Tile from './Tile';

storiesOf('Tile', module)
  .add('Default', () => <Tile value="DEFAULT"/>)
  .add('Blank', () => <Tile value="BLANK"/>)
  .add('Exploded!', () => <Tile value="EXPLODED"/>)
  .add('1', () => <Tile value="1"/>);
