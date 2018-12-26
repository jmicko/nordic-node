// The dogs have successfully carried the cure to Nome
// The viles are in boxes inside of boxes inside of boxes...
// We need to find the viles and count just how many there are

// each box is represented by an array
// you might get an empty box like: []
// or a box might have things in it like: ['vile', 'sandwich', 'dog food']
// or a box might have boxes in it like [['vile', ['dog food', 'dog food'], 'taco'], 'vile', ['vile', vile, ['vile']]]

// Regardless of where they are burried in our luggage, you must count up all of the viles
// in all of the boxes.
// For example, a box list like this:
// [] should return 0

// a box might have things in it like this:
// ['vile', 'sandwich', 'dog food'] should return 1

// a box might have things in it like this:
// [['vile', ['dog food', 'dog food'], 'taco'], 'vile', ['vile', vile, ['vile']]] should return 5

// start small by handling the first two cases (only worry about an array of strings)
// then move on to boxes in boxes in boxes. Boxes in boxes will be a big stretch.
// You may want to research recursion if you get this far.


module.exports = function (box) {
    // YOUR CODE HERE

}

// Don't forget to write tests!