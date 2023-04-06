//Object
let input = 'age';

let person = {
    name: 'Kitty',
    age: 30,
    laptop: {
        cpu: '17',
        ram: 4,
        brand: 'Asus'
    }
};

console.log(person.name);
console.log(person[input]);
console.log(person.laptop.brand.length);
console.log(person.laptop.brand1?.length);

delete person.age;
console.log(person);

// reverse number
let num = 123456;
let num2 = 0;
while(num>0){
    q = num / 10;
    r = num % 10;
    num = parseInt(q);
    num2 = (num2*10) + r;
}
console.log(num2)

