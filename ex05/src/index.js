var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"
    },
    {
        animalType: "Bird",
        name: "Tweety"
    },
];

function myPetsFunction(pets) {
    
    var petName = pets[1].name;
    return petName;
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;