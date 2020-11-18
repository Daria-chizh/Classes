import Bowman from '../src/Bowman';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Daemon from '../src/Daemon';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';
import Character from '../src/Character';

test('Bowman constructor', () => {
  const hero = new Bowman('Bowman');
  expect(hero.name).toBe('Bowman');
  expect(hero.type).toBe('Bowman');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});

test('Swordsman constructor', () => {
  const hero = new Swordsman('Swordsman');
  expect(hero.name).toBe('Swordsman');
  expect(hero.type).toBe('Swordsman');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(40);
  expect(hero.defence).toBe(10);
});

test('Magician constructor', () => {
  const hero = new Magician('Magician');
  expect(hero.name).toBe('Magician');
  expect(hero.type).toBe('Magician');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(10);
  expect(hero.defence).toBe(40);
});

test('Undead constructor', () => {
  const hero = new Undead('Undead');
  expect(hero.name).toBe('Undead');
  expect(hero.type).toBe('Undead');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(25);
  expect(hero.defence).toBe(25);
});

test('Zombie constructor', () => {
  const hero = new Zombie('Zombie');
  expect(hero.name).toBe('Zombie');
  expect(hero.type).toBe('Zombie');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(40);
  expect(hero.defence).toBe(10);
});

test('Daemon constructor', () => {
  const hero = new Daemon('Daemon');
  expect(hero.name).toBe('Daemon');
  expect(hero.type).toBe('Daemon');
  expect(hero.health).toBe(100);
  expect(hero.level).toBe(1);
  expect(hero.attack).toBe(10);
  expect(hero.defence).toBe(40);
});

test('Character constructor1', () => {
  expect(() => new Character('jjjjjjjjjjjjjj')).toThrowError('Неверное значение');
});

test('Character constructor2', () => {
  expect(() => new Character('Mag')).toThrowError('Строка не соответствует образцу');
});
