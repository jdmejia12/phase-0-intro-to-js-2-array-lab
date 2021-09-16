// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
console.log(cats);

console.log(cats.length)
console.log(cats[0])
cats.push('Ralph');
console.log(cats)

function destructivelyAppendCat() {
    cats.push(); 
}
destructivelyAppendCat('tom');
console.log(cats)