//problem 1 : Find the smallest number

var number =[4,2,7,0,1,8,9];
var temp = number[0];
for(var items of number){
    if(items >= temp){
        temp = temp;
    }
    else{
        temp=items
    }
}
console.log("(1) smallest Number = ",temp)

//problem 2 : Find the largest number

var number =[4,2,7,10,0,1,8,9];
var temp = number[0];
for(var items of number){
    if(items >= temp){
        temp = items;
    }
    else{
        temp=temp;
    }
}
console.log("(2) Largest Number = ",temp)


//problem 3 {sum of all numbers of an array}

var array = [1,4,6,8,10,4]

var sum = 0;
for(var item of array){
    sum+=item;
}
console.log("(3) Sum = ", sum)

//problem 4 : create an arraywith first letter of string

var array = ["Bangladesh","India","Nepal","Bhutan"]
var newArray = [];
for(var i = 0 ; i < array.length ; i++){
    //onsole.log(array[i][0])
    newArray.push(array[i][0])
}

console.log("(4) New array = ",newArray)

//create an array of even number

var array = [1,2,3,4,5,7,8,9,6]
var newArray = [];
for(var items of array){
    if(items%2==0){
        newArray.push(items)
    }
}
console.log("(5) New Array =",newArray)

//problem 6 : Find the longest string

var array = ["Afgan","Bangladesh","India","myNameIsWhat","Nepal","Bhutan"]

var temp = array[0];

for(var items of array){
    if(temp.length >= items.length){
        temp=temp;
    }
    else{
        temp = items;
    }
}

console.log("(6)Longest String = ", temp)

//problem 7:average

var array = [1,2,4,6,7,6];
var sum = 0;
for(var items of array){
    sum+=items;
}
console.log(sum)
sum=sum / (array.length);
console.log("(7) Average = ", sum) 

//problem 8 sort alphabetically


var array = ["Afgan","Bangladesh","India","myNameIsWhat","Nepal","Bhutan"]
var temp;
var newArray = array.map(function(items){
    return  items.toLowerCase();
})
newArray = newArray.sort();
console.log("(8)Soring String = ",newArray)

//problem 9 remove duplicate

array = [1,2,3,4,2,3]
var newArray= [...new Set(array)];
console.log("(9)New Array = ",newArray)


//problem 10: find two numbers that adds up to a targeted value

var numbers = [2,7,11,4,15,5]
var length = numbers.length
var targetedNumber = 9;
for(var i = 0; i < length ; i++){
for(var j = i+1 ; j < length ; j++){
    if(numbers[i] + numbers[j] == targetedNumber){
        console.log("(10) Numbers = ",numbers[i],numbers[j])
    }
}
} 