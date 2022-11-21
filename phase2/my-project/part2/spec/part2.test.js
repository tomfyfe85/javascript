const searchCandies = require('../programs/searchCandies')


describe('searchCandies() searches the array Candies', () => {
  it('gives a new array, ["Mars", "Maltesers"]',
  () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Malteasers'])
  });
  
  it('gives new array, ["Mars"]',
  () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });

  it('gives new array, ["Skitties", "Skittles", "Starburst"]',
  () => {
    expect(searchCandies('S', 10)).toEqual(['Skittles', 'Skittles', 'Starburst'])
  });

  it('gives new array, ["Skitties", "Skittles"]',
  () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles'])
  });

});