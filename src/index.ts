
import assert from 'assert';

const compare = (obj1: Object, obj2: Object) => {
    try {
        assert.deepStrictEqual(obj1, obj2);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = compare;