const nodeNumbers = require('./challenges/110-node-numbers');
const nodeObjects = require('./challenges/120-node-objects');
const nodeFunction = require('./challenges/130-node-function');
const stretchVialFinder = require('./challenges/140-stretch-vial-finder');

const emptyBox = [];
const singleBox = ['vial', 'sandwich', 'dog food']
const recursiveBox = [['vial', ['dog food', 'dog food'], 'taco'], 'vial', ['vial', 'vial', ['vial']]]


if (nodeNumbers == 20) {
    console.log('Passed nodeNumbers test!');
} else {
    console.log(`
    XXXXXXXXXXX FAILED nodeNumbers XXXXXXXXXXX
    `);
}

if (nodeObjects.mushers == 20) {
    console.log('Passed nodeObjects test!');
} else {
    console.log(`
    XXXXXXXXXXX FAILED nodeObjects XXXXXXXXXXX
    `);
}

if (nodeFunction(16) == 10) {
    console.log('Passed nodeFunction test 1!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 10 when 16 is passed
    XXXXXXXXXXX`);
}

if (nodeFunction(8) == 6) {
    console.log('Passed nodeFunction test 2!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 6 when 8 is passed
    XXXXXXXXXXX`);
}

// duplicate/change test to acount for situations with a fraction of a dog
if (nodeFunction(9) == 7) {
    console.log('Passed nodeFunction test 3!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED nodeFunction
    function should return 7 when 9 is passed
    XXXXXXXXXXX`);
}

if (stretchVialFinder(emptyBox) == 0) {
    console.log('Passed stretchVialFinder stretch goal test 1!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED stretchVialFinder test 1
    function should return 0 when emptybox is passed
    XXXXXXXXXXX`);
}

if (stretchVialFinder(singleBox) == 1) {
    console.log('Passed stretchVialFinder stretchVialFinder test 2!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED stretchVialFinder test 2
    function should return 1 when singleBox is passed
    XXXXXXXXXXX`);
}

if (stretchVialFinder(recursiveBox) == 5) {
    console.log('Passed stretchVialFinder stretch goal test 3!');
} else {
    console.log(`
    XXXXXXXXXXX
    FAILED stretchVialFinder test 3
    function should return 5 when recursiveBox is passed
    XXXXXXXXXXX`);
}

