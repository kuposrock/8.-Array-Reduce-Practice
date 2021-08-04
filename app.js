//1.Turn an array of numbers into a total of all the numbers
var arr = [1, 3, 5, 2, 90, 20];
var total = arr.reduce((a, b) => a + b);
console.log(total);
console.log("<br>");

//2) Turn an array of numbers into a long string of all those numbers.

function concat(a, b) {
  return a + b.toString();
}
var arr = [1, 3, 5, 2, 90, 20];
var totalString = arr.reduce(concat);
console.log(totalString);
console.log("<br>");

//3) Turn an array of voter objects into a count of how many people voted
var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];
var voted = voters.filter(name => name.voted).length;
console.log(voted);
console.log("<br>");

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];
var price = wishlist.reduce((a, b) => a + b.price, 0);
console.log(price);
console.log("<br>");
// 5) Given an array of arrays, flatten them into a single array

var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];
var condenced = arrays.reduce((a, b) => a.concat(b));
console.log(condenced);
console.log("<br>");

//6) Given an array of potential voters, return an object representing the results of the vote

var voterObject = {};

var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted: true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

voterObject.numYoungVotes = voters.reduce((accum,curval)=>(curval.age >= 18 && curval.age<=25 && curval.voted)? accum+1:accum,0);
voterObject.numYoungPeople = voters.reduce((accum,curval)=>(curval.age >= 18 && curval.age<=25)? accum+1:accum,0);
voterObject.numMidYoungVotes = voters.reduce((accum,curval)=>(curval.age >= 26 && curval.age<=35 && curval.voted)? accum+1:accum,0);
voterObject.numMidYoungPeople = voters.reduce((accum,curval)=>(curval.age >= 26 && curval.age<=35)? accum+1:accum,0);
voterObject.numOldYoungVotes = voters.reduce((accum,curval)=>(curval.age >= 36 && curval.age<=55 && curval.voted)? accum+1:accum,0);
voterObject.numOldYoungPeople = voters.reduce((accum,curval)=>(curval.age >= 36 && curval.age<=55)? accum+1:accum,0);

console.log(voterObject);

// numYoungVotes: 1,
// numYoungPeople: 4,
// numMidVotesPeople: 3,
// numMidsPeople: 4,
// numOldVotesPeople: 3,
// numOldsPeople: 4