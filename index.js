// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"] //good

function destructivelyAppendCat(cat) {  //good
    cats.push(cat); 
}

function destructivelyPrependCat(cat){  //good
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(){  //good
    cats.pop();
}

function destructivelyRemoveFirstCat(){ //good
    cats.shift();
}

function appendCat(name){
    return [...cats, name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat(){
    return cats.slice(1, cats.length);
}