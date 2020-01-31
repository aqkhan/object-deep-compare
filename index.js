
const equal = require('./lib/index');

const obj1 = {
    id: 1, 
    meta: {
        name: 'Mela babu', 
        designation: '1'
    }
}

const obj2 = {
    meta: {
        designation: '1',
        name: 'Mela babu'
    },
    id: 1
}

console.log(equal(obj1, obj2));