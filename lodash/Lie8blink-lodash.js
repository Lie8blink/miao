var lie8blink = {
    chunk: function (array, size = 1) {
        const left = []
        const right = []
        const len = array.length
        if (len < size) {
            for (let i = 0; i < len; i++) {
                if (i < size) {
                    left.push(array[i])
                } else {
                    right.push(array[i])
                }
            }
            return [left, right]
        } else {
            return []
        }
    },

    compact: function (array) {
        const result = []
        for (let i in array) {
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

    fill:function(array, value, start=0, end=array.length){
        for(start;start<end;start++){
            array[start]=value
        }
        return array
    },

    drop:function(array, n=1){
        const len=array.length
        const result=[]
        for(n;n<len;n++){
            result.push(array[n])
        }
        return result
    },

    findIndex:function(array, predicate=_.identity, fromIndex=0){

    },

    findLastIndex: function() {},

    flatten: function() {},

    flattenDeep: function() {},

    flattenDepth: function() {},

    fromPairs: function() {},

    head: function() {},

    indexOf: function() {},

    lastIndexOf: function() {},

    initial: function() {},

    join: function() {},

    last: function() {},

    pull: function() {},

    reverse: function() {},

    every: function() {},

    some: function() {},
}
