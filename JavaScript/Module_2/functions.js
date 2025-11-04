
function hello() {
    console.log("Hello, world!");
}

//hello();

// Nombre para declaración de función
function listArrayItems(arr) {
    for (var i  = 0; i < arr.length ; i++) {
        console.log(i+1,arr[i]);
    }
}
var colors = ["Red", "Green", "Blue"];
listArrayItems(colors);

console.log("-----");
// i can even add one or more conditions, such as:
function listArrayItemsWithCondition(arr) {
    for (var i  = 0; i < arr.length ; i++) {
        if (arr[i] == 'Red') {
            console.log(i*100, "Tomato!");
        } else {
            console.log(i*100, arr[i])
        }
    }
}

listArrayItemsWithCondition(colors);