const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');
const {Attack, Defend} = require('./actions');

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
        return this.big_chance_wheel[getRandomIntInclusive(0, 100)]
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
        if(action instanceof Defend){
            if(this._uses_skill(action)){
                action.strength += action.turn.attacker.strength / 2;
                action.apply_skill(this);
            }
        }
    }
    _uses_skill(action) {
        if(this.chance_wheel[getRandomIntInclusive(0, 100)]){
            let turns = action.turn.fight.turns;
            let last_defance = [...turns][turns.size-2];
            
            if(last_defance.defender.skills.find(skill => skill instanceof ResilienceSkill))
               return false;
            return true; 
        }
    }
}

module.exports = {
    ResilienceSkill: ResilienceSkill,
    CriticalStrikeSkill: CriticalStrikeSkill
}