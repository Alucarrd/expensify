//object destructing

// const person = {
//   name: 'Peter',
//   age: 40,
//   location: {
//     city: 'Irvine',
//     temp: 70
//   }
// };
//
//
// //const { temp, city } = person.location;
//
// //this is to rename temp to temperature
// const { temp: temperature, city} = person.location
//
// //you can also setup default value
//
// const { name = 'Anonymous', age } = person;
// console.log(`${person.name} is ${person.age}.`);
//
//
//
// if (city && temperature){
//   console.log(`It's ${temperature} in ${city}`);
//
// }
//
//

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

//
const { name: publisherName = 'Self-Published'} = book.publisher;
//if no name, default to Self-Publish
console.log(publisherName)

//array destructing

const address = ['1299 s Jupiter st.', 'Irvine', 'CA', '92603'];
//leave empty if you dun want to destructure that item
//const [, city, state, zip] = address;

//you can also set default value
const [, city, state = 'New York', zip] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
