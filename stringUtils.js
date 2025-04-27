
//Make first letter capital and then returns rest
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// reverses string
function reverse(str) {
    return str.split('').reverse().join('');
}
// checks if string contrains the substring
function contains(str, substr){
    return str.includes(substr);
}


module.exports = {capitalize, reverse, contains}
