const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');

class Creature {
    constructor(health, strength, defense, speed, luck){
        this.health = health;
        this.defense = defense;
        this.strength = strength;
        this.speed = speed;
        this.luck = luck;
        this.skills = [];
        this.fight = null;
    }
    
    attack(turn) {
        return new Attack(this, turn);
    }

    defend(turn) {
        return new Defend(this, turn);
    }

    enter_fight(fight){
        this.fight = fight;
    }
    add_skill(skill){
        this.skills.push(skill);
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
        getRandomIntInclusive(70, 100), // defence
        getRandomIntInclusive(70, 100), // speed
        getRandomIntInclusive(70, 100)  // luck
    )
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
    )
    return villain;
}

exports { createHero, createVillain }