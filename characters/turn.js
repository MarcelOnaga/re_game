const {getRandomIntInclusive, generate_random_percent_distribution} = require('./randomize_helpers.js');


class Turn {
    constructor(attacker, defender, fight){
        this.attacker = attacker;
        this.defender = defender;
        this.fight = fight;
        
        console.log("\nNew Attack!")
        console.log(attacker.name + " attacks " + defender.name);
        
        this.lucky_defender = this._defender_gets_lucky();        
        this.damage = this._attack();
        
        if(!this.lucky_defender){
            this.defender.update_health(this.defender.health - this.damage);
            console.log("Attack's damage: " + this.damage);
        }
    }
    
    _defender_gets_lucky() {
        if(generate_random_percent_distribution(this.defender.luck)[getRandomIntInclusive(0, 100)]){
            console.log(this.defender.name + " was lucky this turn. He will not be attacked.");
            return true;
        }
        return false;
    }

    _attack()  {
        this.attack = this.attacker.attack(this);
        this.defence = this.defender.defend(this);
        
        console.log("Attack's strength: " + this.attack.strength);
        console.log("Attack's used skils: ",  this.attack.skills);
        console.log("Defence's strength: " + this.defence.strength);
        console.log("Defence's used skils: ", this.defence.skills);
        return this.attack.strength - this.defence.strength;       
    }
}

module.exports = {
    Turn: Turn
}