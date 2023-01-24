var obj1 = {
    "name": "person 1",
    "age": 5
};
var obj2 = {
    "age": 5,
    "name": "person 1"
};
function Equal(obj1, obj2) {
 var objKey1 = Object.keys(obj1)
 var objKey2 = Object.keys(obj2)
 if (objKey1.length !== objKey2.length) {
    return false
} else {
    for (var objKey of objKey1) {
        if (obj1[objKey] !== obj2[objKey])
         return false
        }
        return true
    }
}
console.log(Equal(obj1, obj2))