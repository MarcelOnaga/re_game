const {Turn} = require('./turn');
const {Readable} = require('stream');

class Game {}

class Fight {
    constructor(hero, villain){
        this.hero = hero;
        this.villain = villain;
        this.turns = new Set();
        this.winner = null;
        
        console.log(this.hero.name + " will fight " + this.villain.name);
        console.log(this.hero.name + "properties: " + JSON.stringify(this.hero));
        console.log(this.villain.name + "properties: " + JSON.stringify(this.villain));
    }

    start(){
        let turn = new Turn(...this._first_turn(), this);
        while (this._add_turn(turn) && !this.winner) {
            turn = new Turn(turn.defender, turn.attacker, this);
            console.log(

            )
            if(turn.defender.health <= 0){
                this.winner = turn.attacker;
                console.log("Winner is: "+ this.winner.name + 
                "\nWinner's heath: " + this.winner.health + 
                "\nLoser's heath: " + turn.defender.health)
            }
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