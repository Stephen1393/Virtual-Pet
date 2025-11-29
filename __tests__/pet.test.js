const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Stanley')).toBeInstanceOf(Object);

  });

    it('returns the name', () =>  {
      const pet = new Pet("Stanley");
      expect(pet.name).toBe("Stanley");
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
  });