// Redoing old labs for extra practice. New code below; original code commented out at bottom.

const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = function() {
        return cats.push('Ralph');
};

const destructivelyPrependCat = function() {
        return cats.unshift("Bob");
};

const destructivelyRemoveLastCat = function() {
        return cats.pop();
};

const destructivelyRemoveFirstCat = function() {
        return cats.shift();
};

const appendCat = function(name) {
       let newArray = [...cats, name];
       return newArray;  
};

const prependCat = function(name) {
        let newArray = [name, ...cats];
        return newArray;
};

const removeLastCat = function() {
        let newArray = cats.slice(0, cats.length - 1);
        return newArray;
};

const removeFirstCat = function() {
        let newArray = cats.slice(1);
        return newArray;
};

// let cats = ["Milo", "Otis", "Garfield"];
//     // It's appeneding a cat to the end of an array destructively.
// function destructivelyAppendCat(name) {
//         cats.push(name);
//         console.log("Hello there",name)
//     }
// function destructivelyPrependCat(name) {
//         cats.unshift(name);
// }
// function destructivelyRemoveLastCat(name) {
//         cats.pop(name);
// }
// function destructivelyRemoveFirstCat(name) {
//         cats.shift(name);
// }

// function appendCat(name) {
//         let newArray = [...cats, name];
//         return newArray;
// }

// function prependCat(name) {
//         let newerArray = [name, ...cats];
//         return newerArray;
// }
// function removeLastCat(name) {
//         let newRemove = cats.slice(0, - 1);
//         return newRemove; 
// }   
// function removeLastCat(name) {
//     let newRemove = cats.slice(0, cats.length - 1);
//     return newRemove; 
// }   
// function removeFirstCat(name) {
//     let newerRemove = cats.slice(1);
//     return newerRemove;
// }