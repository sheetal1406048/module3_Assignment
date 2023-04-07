//problem 12 : Find hashtag

var text = ["my Name is #Sheetal", "My #name is Wahed", "#My name is Imtiaz", "I am xyz #years  #old"];
var array=[];
var temp = '';
for(let sentence of text){
    var result = sentence.split(" ")
    //console.log(result)
    for(let word of result){
        //console.log(word)
        if(word.startsWith("#")){
        word=word.replace("#","")
        array.push(word);
        //console.log(array)    
        }    
    }
}

console.log("(12) HashTagged Word = ",array)

//13 :C TO F

const tempInC = [10,23,45,78];
console.log("(13) °C to °F : ")
for(let items of tempInC){
    let tempInF = ((9*items)/5)+32;
    console.log(items + "°C (" + tempInF + "°F)")
}


//problem 16

var array = [1,2,3,4,5,1,3,5,6,7,2,4,8,9]
var targatedValue = 10;
var arrayPairs = [];
for(var i = 0 ; i < array.length ; i++){
    for(var j = i+1 ; j < array.length ; j++){
        if(array[i] + array[j] ==targatedValue){
            arrayPairs.push([array[i],array[j]])
        }
    }
}
console.log("(16) Two Numbers that add up to a targated Number = ",arrayPairs)


//problem 14

const video = [
    {
        userId : "abc",
        title : "How to code 1",
        views : 1000,
        likes : 50,
        comments : [
            {
                userId : "abc1",
                text: "comment of abc1"
            },
            {
                userId : "abc2",
                text: "comment of abc2"    
            }
        ]
         
        
    },
    {
        userId : "def",
        title : "How to code 2",
        views : 2000,
        likes : 100,
        comments : [
            {
                userId : "def1",
                text: "comment of def1"
            },
            {
                userId : "def2",
                text: "comment of def2"    
            }
        ]
         
        
    }
]
//console.log(video[0]["userId"])

//increment view

 function incrementView(viewId){
    //console.log(viewId,video.length)
    for(var i = 0 ; i < video.length ; i++){
        if(video[i]["userId"]==viewId){
            //console.log(viewId)
            video[i]["views"] ++;
            console.log(`Total Views of ${ video[i]["userId"]} = ${ video[i]["views"]}`)
            break;
        }
    }    

}

function incrementLike(likeId){
    for(var i = 0 ; i < video.length ; i++){
        if(video[i]["userId"]==likeId){
            //console.log(viewId)
            video[i]["likes"] ++;
            console.log(`Total likes of ${ video[i]["userId"]} = ${ video[i]["likes"]}`)
            break;
        }
    }    

}

function addComment(videoId,object){
    for(var i = 0 ; i < video.length ; i++){
        if(video[i]["userId"]==videoId){
            
            //console.log(viewId)
            video[i]["comments"].push(object);
            //console.log(`Total comments of  ${ video[i]["userId"]} = ${ video[i]["comments"]}`)
            //console.log(video[i]["comments"].length)

            
                console.log("Comment of " , videoId, video[i]["comments"])
            
            
        }
        
    }    

}
incrementView("abc")

incrementLike("def")

addComment(
    "def",
    {
        userId : "abcd3",
        text : "comment of abcd3"
            }
)


//17 ingradient Inventory

var foodIngradient = [
    {food : "A1" , inventory : 10},
    {food : "A2" , inventory : 15},
    {food : "A3" , inventory : 20},
    {food : "A4" , inventory : 27},
    {food : "A5" , inventory : 32},
    {food : "A6" , inventory : 60},
    {food : "A7" , inventory : 5},
    {food : "A8" , inventory : 10},
]
//console.log(foodIngradient[2]["food"],foodIngradient.length)

function foodInventory(foodName,usedInventory){
     
    for(let i = 0 ; i < foodIngradient.length ; i++){

        
        if(foodIngradient[i]["food"] == foodName && foodIngradient[i]["inventory"] >=usedInventory ){
            
            foodIngradient[i]["inventory"] -= usedInventory;
            //console.log( foodIngradient[i]["inventory"])

        }
     }
 }

 foodInventory("A1",10)
 foodInventory("A5",12)
 foodInventory("A7",13) // WRONG iNPUT THAT'S WHY INVENTORY DOES NOT CHANGE THE VALUE

 console.log("(17) Updated Ingradient Inventory = ",foodIngradient, "updated inventory successful")


 //PROBLEM 18

 let phoneProduct = [
    {name: "phone1", price :100},
    {name: "phone2", price :200},
    {name: "phone3", price :150},
    {name: "phone4", price :400},
    {name: "phone5", price :300},
    {name: "phone6", price :100},
    {name: "phone7", price :250},
    
]

var result  = phoneProduct.sort(
    function(item1,item2){
        return item1.price - item2.price; 
    }
)

console.log("(18) Phone price from highest to lowest : ",result)


//19 age is greater than 18

var people = [
    {name: "p1", age :10},
    {name: "p2", age :20},
    {name: "p3", age :15},
    {name: "p4", age :40},
    {name: "p5", age :30},
    {name: "p6", age :10},
    {name: "p7", age :25},
    
]

var result = people.filter((num)=>num.age>=18)

console.log("(19) People( age greater than or equal 18) = ",result)


//20 money exchange rate



let phoneProductWithPrice = [
    {name: "phone1", price :100},
    {name: "phone2", price :200},
    {name: "phone3", price :150},
    {name: "phone4", price :400},
    {name: "phone5", price :300},
    {name: "phone6", price :100},
    {name: "phone7", price :250},
    
]

//console.log(phoneProductWithPrice[1]["price"]+ "2")

var exchangeRate = 99
var currencySymbol = ["৳","$"]

function convertprice(id){
    for(let i = 0 ; i < phoneProductWithPrice.length ; i++){
        if(phoneProductWithPrice[i]["name"] == id){
            let priceInTk = phoneProductWithPrice[i]["price"] * exchangeRate;
            priceInTk  = currencySymbol[0] + priceInTk
            //console.log(priceInTk)
            priceInUSD =currencySymbol[1] + phoneProductWithPrice[i]["price"]
            //console.log(priceInUSD)

            console.log("(20) your Phone Model : ", id)
            console.log("Price in USD : ", priceInUSD)
            console.log("price in TK : ", priceInTk)
        }
    }
}

convertprice("phone5")