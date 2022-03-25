const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);  
}

function destructivelyPrependCat(name) {
    cats.unshift(name);  
}

function destructivelyRemoveLastCat() {
    cats.pop();  
}

function destructivelyRemoveFirstCat() {
    cats.shift();  
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    var newCats = cats.slice(name);
    newCats.unshift(name)
    return newCats
}

function removeFirstCat(){
    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0, -1)
 } 