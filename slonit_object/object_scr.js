let object = {name: 'Vasya', friends: 5, likes: 19, projects: 7};
var counter = 0;

for (var key in object) {
  if (typeof object[key] === 'number') {
    counter ++;
  } else {

  }
  
}
console.log( "Всего свойств: " + counter );



// Задание со звездочкой

let objectPlus = {name: 'Vasya', friends: 5, likes: 19, projects: 7};
let newMus = [];

for (var key in objectPlus) {
  if (typeof objectPlus[key] === 'number') {
    newMus.push(key)
  }
}

newMus.sort(function (a, b) {
  return objectPlus[b] - objectPlus[a];
});

console.log( "Свойства в порядке убывания их значений: " + newMus );

