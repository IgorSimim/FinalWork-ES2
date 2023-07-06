abstract class Personagem {
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

class Arqueiro extends Personagem {
  ataque(): string {
    return "Disparou flechas corrosivas!";
  }
}

class Guerreiro extends Personagem {
  ataque(): string {
    return "Golpeou com sua espada longa!";
  }
}

class Mago extends Personagem {
  ataque(): string {
    return "Lançou esferas de fogo!";
  }
}

// Criando a interface para a fábrica
interface PersonagemFactory {
  criarPersonagem(nome: string): Personagem;
}

// Implementando fábricas para cada tipo de personagem
class ArqueiroFactory implements PersonagemFactory {
  criarPersonagem(nome: string): Personagem {
    return new Arqueiro(nome);
  }
}

class GuerreiroFactory implements PersonagemFactory {
  criarPersonagem(nome: string): Personagem {
    return new Guerreiro(nome);
  }
}

class MagoFactory implements PersonagemFactory {
  criarPersonagem(nome: string): Personagem {
    return new Mago(nome);
  }
}

// Usando a fábrica para criar instâncias das subclasses
const arqueiroFactory: PersonagemFactory = new ArqueiroFactory();
const guerreiroFactory: PersonagemFactory = new GuerreiroFactory();
const magoFactory: PersonagemFactory = new MagoFactory();

const arqueiro: Personagem = arqueiroFactory.criarPersonagem("Gavião arqueiro");
const guerreiro: Personagem = guerreiroFactory.criarPersonagem("Thor");
const mago: Personagem = magoFactory.criarPersonagem("Mestre dos magos");

// Chamando o método ataque de cada Personagem
console.log(`${arqueiro._nome}: ${arqueiro.ataque()}`);  // Saída: Gavião arqueiro: Disparou flechas corrosivas!
console.log(`${guerreiro._nome}: ${guerreiro.ataque()}`);  // Saída: Thor: Golpeou com sua espada longa!
console.log(`${mago._nome}: ${mago.ataque()}`);  // Saída: Mestre dos magos: Lançou esferas de fogo!