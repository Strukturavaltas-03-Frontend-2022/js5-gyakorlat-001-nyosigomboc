// using classes
/*
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
*/

// using prototypes
function Walker(name = 'John Doe', state = 'dead') {
  this.name = name;
  this.state = state;
  Object.defineProperties(this, {
    firstName: {
      enumerable: true,
      configurable: true,
      get() {
        return this.name.split(' ')[0];
      },
      set(fn) {
        this.name = `${fn} ${this.lastName}`;
      },
    },
    lastName: {
      enumerable: true,
      configurable: true,
      get() {
        return this.name.split(' ')[1];
      },
      set(ln) {
        this.name = `${this.firstName} ${ln}`;
      },
    },
  });
}

Walker.prototype.walk = function walk(speedInMph = 10) {
  return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
};

Walker.prototype.eat = function eat(foodName = 'meat') {
  return `${this.name} the ${this.state} eats ${foodName}!`;
};

Walker.prototype.speak = function speak(sound = 'grrrrrr') {
  return `${this.name} the ${this.state} says ${sound}!`;
};

export default Walker;
