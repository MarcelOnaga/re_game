const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');
const {CriticalStrikeSkill, ResilienceSkill} = require('./skils');
const {Attack, Defend} = require('./actions');

class Creature {
    constructor(health, strength, defence, speed, luck){
        this.name = '';
        this.health = health;
        this.defence = defence;
        this.strength = strength;
        this.speed = speed;
        this.luck = luck;
        this.skills = [];
    }
    
    attack(turn) {
        return new Attack(this, turn);
    }

    defend(turn) {
        return new Defend(this, turn);
    }

    add_skill(skill){
        this.skills.push(skill);
    }

    update_health(health){
        this.health = Number(health);
    }
}

class Hero extends Creature {
    constructor(){
        super();
    }
    add_skill(skill){
        this.skills.push(skill);
    }
}


function createHero(){
    let hero = new Creature(
        getRandomIntInclusive(70, 100), // health
        getRandomIntInclusive(70, 100), // strength
        getRandomIntInclusive(45, 55), // defence
        getRandomIntInclusive(40, 50), // speed
        getRandomIntInclusive(10, 30)  // luck
    );
    hero.name = 'HERO';
    hero.add_skill(new CriticalStrikeSkill());
    hero.add_skill(new ResilienceSkill());
    return hero;
}

function createVillain(){
    let villain = new Creature(
        getRandomIntInclusive(60, 90), // health
        getRandomIntInclusive(60, 90), // strength
        getRandomIntInclusive(40, 60), // defence
        getRandomIntInclusive(40, 60), // speed
        getRandomIntInclusive(25, 40)  // luck
    );
    villain.name = 'VILLAIN';
    return villain;
}

module.exports = {
    createHero: createHero,
    createVillain: createVillain
}