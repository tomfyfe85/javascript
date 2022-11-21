const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];


// const searchCandies(candy, max) = candies.filter(
//   sweet => if (sweet.name.includes(candy) && sweet.price < max) {
//     return sweet.name
//   }



class searchCandies {
  constructor(sweet, max){
   this.sweet = sweet
   this.max = max
  }

  getSweet(array) {2
    if(array.name.includes(this.sweet) &&
      array.price < this.max) {
        return array;
      }
  }
  
  newArray = candies.filter(getSweet(array));
  
  returner() {
    finalArray = this.newArray.map(x => x.this.sweet);
    return finalArray
  }
};


//   const searchCandies = (ob) => {
//   if (ob.name.includes(sweet) && object.price < max) {
//     return object.name;
//   }
// }

// const searchCandies = candies.map(x => 
//   if () )
// const foundSweets = candies.filter(searchCandies(sweet, max))
// var array => candies.filter(searchCandies(candy, max_price)) 


module.exports = searchCandies