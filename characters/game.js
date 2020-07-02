const {Turn} = require('./turn');

class Game {}

class Fight {
    constructor(hero, villain){
        this.hero = hero;
        this.villain = villain;
        this.turns = new Set();
        this.winner = null;
    }

    start(){
        let turn = new Turn(...this._first_turn(), this);
        while (this._add_turn(turn) && !this.winner) {
            this.winner = turn.winner;
            turn = new Turn(turn.defender, turn.attacker, this);
        }
    }

    _add_turn(turn) {
        if (this.turns.size>19)
            return false;
        return this.turns.add(turn);
    }

    _first_turn(){
        if(this.hero.speed == this.villain.speed)
            return this.hero.luck > this.villain.luck ? [this.hero, this.villain] : [this.villain, this.hero];
        return this.hero.speed > this.villain.speed ? [this.hero, this.villain] : [this.villain, this.hero];
    }
}

module.exports = {
    Fight: Fight,
}