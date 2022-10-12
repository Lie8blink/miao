run()

    function 同步滚动条() {
      result.scrollTo(0, stringInput.scrollTop)
    }

    function run() {
      var reStr = regexpInput.value
      var text = stringInput.value
      var flags = getFlags()

      try {
        var re = new RegExp(reStr, flags)
      } catch(e) {
        info.innerHTML = '正则表达式错误:' + e
        return
      }
      info.innerHTML = ''

      var html = ''

      var match = null
      var lastIndex = 0

      var i = 1

      while (match = re.exec(text)) {
        html += text.slice(lastIndex, match.index)
        html += `<strong title="Pos: ${match.index}-${match.index + match[0].length}">` + 高亮捕获分组(match, i++) + '</strong>'
        lastIndex = re.lastIndex
        if (!re.global) {
          lastIndex = match.index + match[0].length
          break
        }
        if (match[0].length == 0) {
          re.lastIndex++
        }
      }

      html += text.slice(lastIndex)

      result.innerHTML = html

      substitutionResult.innerHTML = text.replace(re, replacementString.value)
    }

    function 高亮捕获分组(match, matchIdx) {
      // debugger;
      console.log(match)
      var posArray = Array(match[0].length + 1).fill('')

      var i = 1
      for (var [start, end] of match.indices.slice(1)) {
        start -= match.index
        end -= match.index
        posArray[start] += `<span data-group-index="${i}" title="Match ${matchIdx}\nGroup ${i}: ${match[i]}\nPos: ${start + match.index}-${end + match.index}">`
        i++
        posArray[end] = '</span>' + posArray[end]
      }

      var html = ''
      for (var i = 0; i < match[0].length; i++) {
        html += posArray[i] + match[0][i]
      }
      html += posArray[i]

      console.log(html)

      return html
    }

    function getFlags() {
      var result = ''
      if (flagGlobal.checked == true) {
        result += 'g'
      }
      if (flagMultiline.checked == true) {
        result += 'm'
      }
      if (flagIgnoreCase.checked == true) {
        result += 'i'
      }
      if (flagSticky.checked == true) {
        result += 'y'
      }
      if (flagUnicode.checked == true) {
        result += 'u'
      }
      if (flagSingleLine.checked == true) {
        result += 's'
      }
      if (true || flagIndices.checked == true) {
        result += 'd'
      }
      return result
    }
