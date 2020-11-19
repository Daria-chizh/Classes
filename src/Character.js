export default class Character {
  constructor(name, type, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Неверное значение');
    }

    const typeStringNames = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!typeStringNames.includes(type)) {
      throw new Error('Строка не соответствует образцу');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health !== 0) {
      this.health = 100;
      this.level += 1;

      this.attack = ((this.attack / 100) * 20) + this.attack;
      this.defence = ((this.defence / 100) * 20) + this.defence;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
