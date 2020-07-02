const {getRandomIntInclusive, generate_random_percent_distribution} = require('./characters/randomize_helpers.js');
// const creature = require('./characters/creature');
import {createHero, createVillain } from './characters/creature';

let hero = creature.createHero();
console.log(hero)

console.log(generate_random_percent_distribution(78))


fixed_arr = new Proxy([], {
    set: (target, property, value, receiver) => {
        if(target.length > 3)
            return false;
        return Reflect.set(target, property, value, receiver);
    }
})

console.log(fixed_arr);