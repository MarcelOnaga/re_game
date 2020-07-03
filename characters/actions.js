
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

module.exports = {
    Defend: Defend,
    Attack: Attack
}