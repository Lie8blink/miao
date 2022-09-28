var lie8blink = {
    chunk(array, size = 1) {
        if (size < 1) {
            return 'Size must be greater than 0';
        }
        const length = array.length;
        const result = [];
        for (let i = 0; i < length; i += size) {
            result.push(
                array.slice(i, i + size)
            )

            if (length - i <= size) break;
        }
        return result;
    },

    compact: function (array) {
        const result = []
        for (let i of array) {
            if (i) {
                result.push(i)
            }
        }
        return result
    },

    difference: function (array, ...values) {
        var ary = [];
        for (var i = 0; i < array.length; i++) {
            var item = array[i];
            var ins = false;
            for (var j = 0; j < values.length; j++) {
                for (var k = 0; k < values[j].length; k++) {
                    if (item == values[j][k]) {
                        ins = true;
                    }
                }
            }
            if (!ins) {
                ary.push(item);
            }
        }
        return ary;
    },

    fill: function (array, value, start = 0, end = array.length) {
        for (start; start < end; start++) {
            array[start] = value
        }
        return array
    },

    drop: function (array, n = 1) {
        const len = array.length
        const result = []
        for (n; n < len; n++) {
            result.push(array[n])
        }
        return result
    },

    dropRight: function (array, n = 1) {
        const result = [];
        for (let i = 0; i < array.length - n; i++) {
            result.push(array[i]);
        }
        return result;
    },

    findIndex: function (array, predicate = _.identity, fromIndex = 0) {

    },

    findLastIndex: function () { },

    flatten: function (array) {
        const result = []
        for (let i = 0; i < array.length; i++) {
            let x = array[i]
            if (typeof x === "object") {
                for (let j = 0; j < x.length; j++) {
                    result.push(x[j])
                }
            } else {
                result.push(x)
            }
        }
        return result
    },

    flattenDeep: function (array) {
        const queue = array.slice();
        const result = [];

        while (queue.length) {
            let curr = queue.shift();

            if (Array.isArray(curr)) {
                queue.unshift(...curr);
            } else result.push(curr);
        }

        return result;
    },

    flattenDepth: function (array, depth = 1) {
        const queue = array.slice();
        const result = [];

        while (queue.length) {
            let curr = queue.shift();

            if (Array.isArray(curr) && depth) {
                queue.unshift(...curr);
                depth--;
            } else result.push(curr);
        }

        return result;
    },

    fromPairs: function (pairs) {
        const result = {}
        for (let i of pairs) {
            result[i[0]] = i[i]
        }
        return result
    },

    head: function (array) {
        return array[0]
    },

    indexOf: function (array, value, fromIndex = 0) {
        for (let i = fromIndex; i < array.length; i++) {
            if (array[i] === value) {
                return i
            }
        }
        return -1
    },

    lastIndexOf: function (array, value, fromIndex = array.length - 1) {
        for (let i = fromIndex; i >= 0; i--) {
            if (array[i] === value) {
                return i
            }
        }
        return -1
    },

    initial: function (array) {
        let result = array
        if (result.length >= 1) result.length -= 1;
        return result
    },

    join: function (array, separator = ',') {
        let resultStr = ""
        for (var i = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                resultStr += String(array[i])
                break
            } else {
                resultStr += (String(array[i]) + separator)
            }
        }
        return resultStr
    },

    last: function (array) {
        return array[array.length - 1]
    },

    pull: function (array, ...values) {
        const result = []
        for (let i of array) {
            if (!values.includes(i)) {
                result.push(i)
            }
        }
        return result
    },

    pullAll: function (array, values) {
        const result = []
        for (let i of array) {
            if (!values.includes(i)) {
                result.push(i)
            }
        }
        return result
    },

    reverse: function (array) {
        let result = []
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i])
        }
        return result
    },

    sortedIndex: function (array, value) {
        let left = 0
        let right = array.length - 1
        for (left, right; left < right;) {
            mid = Math.floor(right - left) / 2 + left
            if (array[mid] === value) {
                return mid
            } else if (array[mid] > value) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return right
    },

    every: function (collection, predicate = identity) {

    },

    some: function () {

    },

    countBy: function (collection, iteratee) {
        const map = new Map()
        for (let i = 0; i < collection.length; i++) {
            let j = iteratee(collection[i])
            map.has(j) ? map[j]++ : map.set(j, 1)
        }
        return map
    },

    groupBy: function () {

    },

    keyBy: function () {

    },

    forEach: function () {

    },

    map: function () {

    },

    filter: function () {

    },

    reduce: function () {

    },

    reduceRight: function () {

    },

    size: function (collection) {
        return Object.keys(collection).length
    },

    sortBy: function () {

    },

    sample: function () {

    },

    isUndefined: function () {

    },

    isNull: function () {

    },

    isNil: function () {

    },

    max: function () {

    },

    min: function () {

    },

    maxBy: function () {

    },

    minBy: function () {

    },

    round: function () {

    },

    sumBy: function () {

    },

    flagMap: function () {

    },

    flatMapDepth: function () {

    },

    get: function () {

    },

    has: function () {

    },

    mapKeys: function () {

    },

    mapValues: function () {

    },

    range: function () {

    },

    stringifyJSON: function () {

    },

    concat: function () {

    },

    isEqual: function () {

    },
    
    repeat: function () {

    },

    padStart: function () {

    },

    padEnd: function () {

    },

    pad: function () {

    },

    keys: function () {

    },

    random: function () {

    },

    round: function (number, precision=0) {

    },

    ceil: function (number, precision=0) {

    },

    floor: function (number, precision=0) {

    },

    cloneDeep: function () {

    },

    trim: function () {

    },

    trimStart: function () {

    },

    trimEnd: function () {

    },

    concat: function (array, values) {
        const result = []
        for (let key in array) {
            result.push(key)
        }
        for (let i = 0; i < values.length; i++) {
            if (Array.isArray(values[j])) {
                for (var k = 0; k < values[j].length; k++) {
                    result.push(values[j][k])
                }
            } else {
                result.push(values[j])
            }
        }
        return result
    }


}
