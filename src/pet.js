function Pet(name) {
    this.name = name
    this.age = 0
    this.hunger = 0
    this.fitness = 10
}

Pet.prototype.growUp = function () {
    this.age += 1
    this.hunger += 5
    this.fitness -= 3
}

Pet.prototype.walkFitness = function () {
    const increase = 4
    const maxFitness = 10

    this.fitness = Math.min(this.fitness + increase, maxFitness)
    
}

Pet.prototype.feed = function () {
    const min = 0
    const food = 3

    this.hunger = Math.max(this.hunger - food, min)
}

Pet.prototype.checkUp = function () {
    
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

module.exports = Pet;