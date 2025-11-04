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

