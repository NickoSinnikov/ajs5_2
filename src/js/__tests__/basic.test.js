import Character from "../app";
import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("should error if wrong name", () => {
  expect(() => {
    new Character("a");
  }).toThrow();
});

test("should error if wrong type", () => {
  expect(() => {
    new Character("Alex", 15);
  }).toThrow();
});

test("should prop for characters", () => {
  let playerBowman = {
    name: "Alex",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Bowman("Alex")).toEqual(playerBowman);
});

test("should prop for characters", () => {
  let playerSwordsman = {
    name: "Alex",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Swordsman("Alex")).toEqual(playerSwordsman);
});

test("should prop for characters", () => {
  let playerMagician = {
    name: "Alex",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Magician("Alex")).toEqual(playerMagician);
});

test("should prop for characters", () => {
  let playerUndead = {
    name: "Alex",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(new Undead("Alex")).toEqual(playerUndead);
});

test("should prop for characters", () => {
  let playerZombie = {
    name: "Alex",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Zombie("Alex")).toEqual(playerZombie);
});

test("should prop for characters", () => {
  let playerDaemon = {
    name: "Alex",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(new Daemon("Alex")).toEqual(playerDaemon);
});
