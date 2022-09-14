var Lie8blink = {
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
}
