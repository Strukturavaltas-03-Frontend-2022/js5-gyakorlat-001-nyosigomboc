/*
const Walker = {
  name: 'John Doe',
  state: 'dead',
  walk(speedInMph) {
    return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
  },
  eat(foodName) {
    return `${this.name} the ${this.state} eats ${foodName}!`;
  },
  speak(sound) {
    return `${this.name} the ${this.state} says ${sound}!`;
  },
};
*/

// using classes
class Walker {
  constructor(name = 'John Doe', state = 'dead') {
    this.name = name;
    this.state = state;
  }

  walk(speedInMph = 10) {
    return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
  }

  eat(foodName = 'meat') {
    return `${this.name} the ${this.state} eats ${foodName}!`;
  }

  speak(sound = 'grrrrrr') {
    return `${this.name} the ${this.state} says ${sound}!`;
  }

  get firstName() {
    return this.name.split(' ')[0];
  }

  set firstName(fn) {
    this.name = `${fn} ${this.lastName}`;
  }

  get lastName() {
    return this.name.split(' ')[1];
  }

  set lastName(ln) {
    this.name = `${this.firstName} ${ln}`;
  }
}

export default Walker;
