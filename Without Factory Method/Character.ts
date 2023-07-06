abstract class Character {
  _nome: string;
  _classe: string;
  _nivel: number;
  _vida: number;
  _armadura: number;
  _forca: number;
  _destreza: number;
  _mana: number;
  _energia: number;

  constructor(nome: string) {
    this._nome = nome;
  }

  abstract ataque(): string;
}

class Archer extends Character {
  ataque(): string {
    return "Disparou flechas corrosivas!";
  }
}

class Warrior extends Character {
  ataque(): string {
    return "Golpeou com sua espada longa!";
  }
}

class Mage extends Character {
  ataque(): string {
    return "Lançou esferas de fogo!";
  }
}

// Criando instâncias das subclasses diretamente
const archer: Archer = new Archer("Gavião arqueiro");
const warrior: Warrior = new Warrior("Thor");
const mage: Mage = new Mage("Mestre dos magos");

// Chamando o método ataque de cada Personagem
console.log(`${archer._nome}: ${archer.ataque()}`);  // Saída: Gavião arqueiro: Disparou flechas corrosivas!
console.log(`${warrior._nome}: ${warrior.ataque()}`);  // Saída: Thor: Golpeou com sua espada longa!
console.log(`${mage._nome}: ${mage.ataque()}`);  // Saída: Mestre dos magos: Lançou esferas de fogo!