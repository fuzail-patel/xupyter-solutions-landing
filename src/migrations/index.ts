import * as migration_20260321_175752 from './20260321_175752';
import * as migration_20260331_150114 from './20260331_150114';
import * as migration_20260331_195544 from './20260331_195544';

export const migrations = [
  {
    up: migration_20260321_175752.up,
    down: migration_20260321_175752.down,
    name: '20260321_175752',
  },
  {
    up: migration_20260331_150114.up,
    down: migration_20260331_150114.down,
    name: '20260331_150114',
  },
  {
    up: migration_20260331_195544.up,
    down: migration_20260331_195544.down,
    name: '20260331_195544'
  },
];
