
// To add new items to an array,  I can use the push() method:
var fruits = [];
fruits.push("apple");
fruits.push('pear');

//To removw the last item drom an array, I can uuse the pop() method:
fruits.pop();
console.log(fruits);

//  Example exercise:
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder("apple", "banana", "pear");

