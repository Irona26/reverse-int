let n = 514;
module.exports = function reversee (n) {
    return (
        parseFloat(
          n
            .toString()
            .split('')
            .reverse()
            .join('')
        )
      )
    }
    console.log(n);