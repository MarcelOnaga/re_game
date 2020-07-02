const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');


class Turn {
    constructor(attacker, defender, fight){
        this.attacker = attacker;
        this.defender = defender;
        this.fight = fight;
        this.lucky_defender = this._defender_gets_lucky;
        this.winner = null;
        this._attack();
    }
    _defender_gets_lucky() {
        if(generate_random_percent_distribution(this.defender.luck)[getRandomIntInclusive(0, 100)])
            return true;
        return false;
    }

    _attack()  {
        this.attack = this.attacker.attack(this);
        this.defence = this.defender.defend(this);
        let damage = this.attack.strength - this.defence.strength;
        
        console.log('Attack:'+this.attack.strength);
        console.log('Defence:'+this.defence.strength);
        console.log('Damage:'+damage);
        
        if(!this.lucky_defender)
            this.defender.health -= damage;
        
    }

    _check_for_winner() {
        if(this.defender.health <= 0)
            this.winner = this.attacker;
    }
}

module.exports = {
    Turn: Turn
}