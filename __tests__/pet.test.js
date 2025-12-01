const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Stanley')).toBeInstanceOf(Object);
  });

  it('returns the name', () =>  {
      const pet = new Pet("Stanley");
      expect(pet.name).toBe("Stanley");
    });
  });

    describe('growUp', () => {
      it('Increments age by 1', () => {
        const pet = new Pet("Stanley")

        pet.growUp()

        expect(pet.age).toEqual(1)
      });

      it("Increments hunger by 5", () => {
        const pet = new Pet("Stanley")

        pet.growUp()

        expect(pet.hunger).toEqual(5)
      });

      it("Decreases fitness by 3", () => {
        const pet = new Pet("Stanley")

        pet.growUp()

        expect(pet.fitness).toEqual(7)
      });
    });

    describe('walkFitness', () => {
      it('Increase fitness by 4 if fitness is equal to or less than 6', () => {
        const pet = new Pet("Stanley")

        pet.fitness = 6

        pet.walkFitness()

        expect(pet.fitness).toEqual(10)
      });

      it('It will always stay at maxFitness if greater than 6', () => {
        const pet = new Pet("Stanley")

        pet.fitness = 7

        pet.walkFitness()

        expect(pet.fitness).toEqual(10)

        pet.fitness = 9

        pet.walkFitness()

        expect(pet.fitness).toEqual(10)
      });

      it("Expect maxFitness to stay at maxFitness", () => {
        const pet = new Pet("Stanley")
        maxFitness = 10

        pet.fitness = maxFitness

        pet.walkFitness()

        expect(pet.fitness).toEqual(10)
      });
    });

    describe('feed', () => {
      it('expect food to decrease hunger by 3', () => {
         const pet = new Pet("Stanley")

         pet.hunger = 4

         pet.feed()

         expect(pet.hunger).toEqual(1)

      });
    });

    it('If hunger is less than 3, hunger will stay at 0', () => {
       const pet = new Pet("Stanley")

       pet.hunger = 2

       pet.feed()

       expect(pet.hunger).toEqual(0)
    });

    it('If hunger is already 0, expect hunger to stay at 0', () => {
       const pet = new Pet("Stanley")

       pet.hunger = 0

       pet.feed()

       expect(pet.hunger).toEqual(0)
    });

    describe('checkUp', () => {
      it('If fitness is greater than or equal to 3, return string', () => {
        const pet = new Pet("Stanley")

        pet.fitness = 3


        expect(pet.checkUp()).toBe("I need a walk!")
      });

         it('If hunger is greater than or equal to 5, return string', () => {
        const pet = new Pet("Stanley")

        pet.hunger = 6
        pet.fitness = 2


        expect(pet.checkUp()).toBe("I'm hungry!")
      });

       it('If fitness is equal to or more than than 3 and hunger equal to or more than 5, return string', () => {
        const pet = new Pet("Stanley")

        pet.fitness = 4

        pet.hunger = 6


        expect(pet.checkUp()).toBe("I'm hungry AND I need a walk!")
      });

       it('If fitness is less than 3 AND hunger is less than 5, return string', () => {
        const pet = new Pet("Stanley")

        pet.fitness = 2

        pet.hunger = 4

        expect(pet.checkUp()).toBe("I feel great!")
      });
    });;
