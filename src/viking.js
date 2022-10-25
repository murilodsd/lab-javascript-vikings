// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let saxon = this.randomSaxon();
    let viking = this.randomViking();

    return this.attack(viking,saxon);
  }

  saxonAttack() {
    let saxon = this.randomSaxon();
    let viking = this.randomViking();

    return this.attack(saxon,viking);
  }

  attack(attacker,defender) {
    
    let message = defender.receiveDamage(attacker.strength);
    let attackedArmy = this.vikingArmy.includes(defender)?this.vikingArmy:this.saxonArmy

    if (defender.health <= 0) {
      attackedArmy.splice(attackedArmy.indexOf(defender), 1);
    }

    return message;
  }
  showStatus() {
    if (this.saxonArmy.length == 0)
      return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length == 0)
      return "Saxons have fought for their lives and survived another day...";
    else return "Vikings and Saxons are still in the thick of battle.";
  }

  randomViking() {
    return this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  }
  randomSaxon() {
    return this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  }

  removeSaxon(saxon) {
    console.log(this.saxonArmy.splice(this.saxonArmy[indexOf(saxon)], 1));
    // if (saxon.health <=0)
    // {this.saxonArmy.splice(this.saxonArmy[indexOf(saxon)],1)};
  }
}
