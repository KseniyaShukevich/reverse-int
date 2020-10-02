module.exports = function reverse (n) {
    if (n < 0) {
        n = n.toString().split('').splice(1).join('');
    } else {
        n = n.toString()
    }

    return n.split('').reverse().join('');
}
