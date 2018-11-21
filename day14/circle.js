var objm = require('./main')
function getLength() {
    return Math.round(2*Math.PI*objm.r)
}
function getArea() {
    return Math.round(Math.PI*objm.r*objm.r)
}

module.exports.getLength=getLength
module.exports.getArea=getArea