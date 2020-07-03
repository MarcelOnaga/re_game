const {createHero, createVillain} = require('./src/creature');
const {Fight} = require('./src/game');

let hero = createHero();
let villain = createVillain();

let fight = new Fight(hero, villain);
fight.start();