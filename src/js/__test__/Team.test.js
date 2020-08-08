/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import Person from '../Team.js';

test('check iteraton', () => {
  const expected = {
    name: 'Демон',
    type: 'Deamon',
    health: 110,
    level: 2,
    attack: 60,
    defence: 20,
  };
  let received;
  for (const pers of Person) {
    received = pers;
  }

  expect(received).toEqual(expected);
});
