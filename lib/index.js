// Source: https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
module.exports = function toType (x) {
  return Object
    .prototype
    .toString
    .call(x)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}
