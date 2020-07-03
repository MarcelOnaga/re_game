const {createHero, createVillain} = require('./characters/creature');
const {Fight} = require('./characters/game');

let hero = createHero();
let villain = createVillain();

let fight = new Fight(hero, villain);
fight.start();