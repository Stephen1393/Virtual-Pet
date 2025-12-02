function Pet(name) {
    this.name = name
    this.age = 0
    this.hunger = 0
    this.fitness = 10
    this.children = []
}

Object.defineProperty(Pet.prototype, 'isAlive', {
    get: function () {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
  }
    });


Pet.prototype.growUp = function () {

    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive:(");
    } 
    
    this.age += 1
    this.hunger += 5
    this.fitness -= 3
}

Pet.prototype.walk = function () {

    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive:(");
    }
    

    const increase = 4
    const maxFitness = 10

    this.fitness = Math.min(this.fitness + increase, maxFitness)
    
}

Pet.prototype.feed = function () {

    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive:(");
    }
    

    const min = 0
    const food = 3

    this.hunger = Math.max(this.hunger - food, min)
}

Pet.prototype.checkUp = function () {

    if (!this.isAlive) {
        return "Your pet is no longer alive :(";
    }
    
    if (this.fitness >= 3 && this.hunger >= 5) {
        return "I'm hungry AND I need a walk!"
    }
    if (this.fitness < 3 && this.hunger < 5) {
        return "I feel great!"
    }
    if (this.fitness >= 3) {
        return "I need a walk!"
    }
    if (this.hunger >= 5) {
        return "I'm hungry!"
    }
}

    Pet.prototype.haveChild = function (babyName) {
        this.children.push(babyName)

    }




module.exports = Pet;

