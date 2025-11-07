//Practicing with functions

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        }else {
            console.log('----No match found at', i);
        }
    }
}

letterFinder("test","t");

//Creating arrays and objects
var clothes = [];
clothes.push("t-shirt");
clothes.push("jeans");
clothes.push("socks");
clothes.push("jacket");
clothes.push("hat");

clothes.pop();

console.log(clothes);

var favCar = {};
favCar.color = "red";
favCar.convertible = false;
 console.log(favCar);

 let arr = [1, 2];
 arr.push(3);
 console.log(arr);

// Error prevention

function addTwoNums(a,b){
    try {
        if(typeof a !== 'number'){
            throw "First argument is not a number";
        }else if (typeof b !== 'number'){
            throw "Second argument is not a number";
        }else{
            console.log(a+b);
        }
    } catch (error) {
        console.log("Error!", error);
    }
}

addTwoNums(3,"4");

//Defensive programming
function letterFinder2(word, match) {
    var conditional1 = typeof(word) == 'string' && word.length >= 2;
    var conditional2 = typeof(match) == 'string' && match.length == 1;
    if (conditional1 && conditional2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the ',match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder2([],[])
letterFinder2("cat","c");


try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
