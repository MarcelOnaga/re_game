const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');

class Skill {
}

class CriticalStrikeSkill extends Skill {
    constructor() {
        super();
        this.big_chance_wheel = generate_random_percent_distribution(10);
        this.small_chance_wheel = generate_random_percent_distribution(1);
    }
    influence(action) {
        if(action instanceof Attack){
            if(this._uses_skill()){
                action.strength += action.attacker.strength;
                if(this._strike_three_times())
                    action.strength += action.attacker.strength;
                action.apply_skill(this);
            }
        }
    }
    _uses_skill() {
        return this.chance_wheel[getRandomIntInclusive(0, 100)]
    }
    _strike_three_times(){
        return this.small_chance_wheel[getRandomIntInclusive(0,100)];
    }
}

class ResilienceSkill extends Skill {
    constructor() {
        super();
        this.chance_wheel = generate_random_percent_distribution(20);
    }
    influence(action) {
        if(action instanceof Defence){
            if(this._uses_skill()){
                action.strength += action.attacker.strength;
                action.apply_skill(this);
            }
        }
    }
    _uses_skill() {
        if(this.chance_wheel[getRandomIntInclusive(0, 100)]){
            let turns = this.action.turn.fight.turns;
            let last_defance = [...turns][turns.size-2];
            
            if(!last_defance.defance.skills.find(skill => skill instanceof Resilience))
                action.strength += this.action.turn.attacker.strength / 2;
                action.apply_skill(this);
        }
    }
}