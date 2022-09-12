//1.1

//String the char in object and if it is present 
function isUnique(str) {
    const charList = {}
    for (let i = 0; i < str.length; i++) {
        if (charList[str[i]]) {
            return "Not Unique"
        } else {
            charList[str[i]] = true
        }
    }
    return "Unique"
}
let unique1 = 'Luv';
let unique2 = 'ABCDEDA'
console.log(unique1,isUnique(unique1))
console.log(unique2,isUnique(unique2))