// TODO: write your code here
export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (name.length < 2 || name.length > 10 || typeof type !== "string") {
      throw new Error("Неверные данные");
    }
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.health = health;
    this.level = level;

    if (type === "Bowman") {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === "Swordsman") {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === "Magician") {
      this.attack = 10;
      this.defence = 40;
    }
    if (type === "Undead") {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === "Zombie") {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === "Daemon") {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    } else throw new Error("Нельзя повысить уровень");
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error("Персонаж уже умер");
  }
}
