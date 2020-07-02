const {getRandomIntInclusive, generate_random_percent_distribution} = require('./characters/randomize_helpers.js');


class Turn {
    constructor(attacker, defender, fight){
        this.attacker = attacker;
        this.defender = defender;
        this.fight = fight;
        this.lucky_defender = this._defender_gets_lucky;
        this.winner = null;
    }
    _defender_gets_lucky() {
        if(generate_random_percent_distribution(this.defender.luck)[getRandomIntInclusive(0, 100)])
            return true;
        return false;
    }

    _attack()  {

        this.attack = this.attacker.attack(this);
        this.defence = this.defender.defend(this);
        damage = this.attack.strength - this.defence.strength;
    }

}

class TurnAction {
    constructor(turn){
        this.turn = turn;
        this.skills = new Set();
        this.strength = 0;
    }
    apply_skill(skill) {
        this.skills.add(skill);
    }
}

class Defend extends TurnAction{
    constructor(defender, turn){
        super(turn);
        this.defender = defender;
        this._execute();
    }
    _execute(){
        this.strength = this.defender.defence;
        this.defender.skills.forEach(skill => {
            skill.influence(this);
        });
    }
}
class Attack extends TurnAction {
    constructor(attacker, turn){
        super(turn);
        this.attacker = attacker;
        this._execute();
    }
    _execute(){
        this.strength = this.attacker.strength;
        this.attacker.skills.forEach(skill => {
            skill.influence(this);
        });
    }
}
