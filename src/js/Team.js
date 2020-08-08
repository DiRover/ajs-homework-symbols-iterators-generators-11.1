/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
class Team { // создаём класс команды
  constructor(...chars) { // кол-во персонажей может быть разным
    this.members = chars; // массив с персонажами
  }
}

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Мечник',
  type: 'Swordman',
  health: 150,
  level: 2,
  attack: 80,
  defence: 30,
};

const char3 = {
  name: 'Демон',
  type: 'Deamon',
  health: 110,
  level: 2,
  attack: 60,
  defence: 20,
};

const Person = new Team(char1, char2, char3);
console.log(Person);
Person[Symbol.iterator] = function () { // добавляем итерацию объекту с персонажами
  const obj = this.members; // создаём массив с персонажами, чтобы увидеть его ниже
  let current = 0;
  const last = this.members.length - 1;
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: obj[current++], // this.members в этой строчке не видно, undefined
          // поэтому использую obj
        };
      }
      return {
        done: true,
      };
    },
  };
};
export default Person;

// для оталдки в консоле
for (const i of Person) {
  console.log(i);
}
