const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');


class Turn {
    constructor(attacker, defender, fight){
        this.attacker = attacker;
        this.defender = defender;
        this.fight = fight;
        this.winner = null;
        
        this.lucky_defender = this._defender_gets_lucky();        
        this.damage = this._attack();
        
        if(!this.lucky_defender)
            this.defender.update_health(this.defender.health - this.damage);
        
        this._check_for_winner();
    }
    
    _defender_gets_lucky() {
        if(generate_random_percent_distribution(this.defender.luck)[getRandomIntInclusive(0, 100)])
            return true;
        return false;
    }

    _attack()  {
        this.attack = this.attacker.attack(this);
        this.defence = this.defender.defend(this);
        return this.attack.strength - this.defence.strength;       
    }

    _check_for_winner() {
        if(this.defender.health <= 0)
            this.winner = this.attacker;
    }
}

module.exports = {
    Turn: Turn
}