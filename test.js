const {getRandomIntInclusive, generate_random_percent_distribution} = require('./characters/randomize_helpers.js');
const {createHero, createVillain} = require('./characters/creature');
const {Fight} = require('./characters/game');

let hero = createHero();
// console.log(hero)
let villain = createVillain();
// console.log(villain)

let fight = new Fight(hero, villain);
// console.log(fight);

fight.start();
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
console.log(fight)

// console.log(generate_random_percent_distribution(78))


fixed_arr = new Proxy([], {
    set: (target, property, value, receiver) => {
        if(target.length > 3)
            return false;
        return Reflect.set(target, property, value, receiver);
    }
})

// console.log(fixed_arr);