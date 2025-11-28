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