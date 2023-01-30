var myFunction = [1, 2, 3];
for (var i = 0; i < myFunction.length; i++) {
    console.log(myFunction[i]);
}
function strLength(value) {
    var myString = value.length;
    return myString;
}
console.log(strLength("test 1"));
console.log("The length of the string is: " + strLength("test 1"));
function strLength_noSpaces(value) {
    return value.replace(/\s/, "").length;
}
console.log(strLength_noSpaces("test 1"));
function both_methods(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(/\s/, "").length;
    }
}
console.log(both_methods("test 1"));
