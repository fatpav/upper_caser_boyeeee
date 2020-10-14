const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    const cased = this.words.map(word => word.toUpperCase())
    return cased;   
};


module.exports = UpperCaser;
